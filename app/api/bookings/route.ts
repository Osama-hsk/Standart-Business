import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { NextResponse } from "next/server";
import { z } from "zod";
import { siteConfig } from "@/config/site";

// Zod schema for booking validation
const bookingSchema = z.object({
  name: z.string().min(1, "Name is required").max(100, "Name too long"),
  email: z.string().email("Invalid email").max(254, "Email too long"),
  phone: z.string().min(1, "Phone is required").max(20, "Phone too long"),
  date: z.string().min(1, "Date is required"),
  appointmentType: z.string().min(1, "Appointment type is required"),
  notes: z.string().max(1000, "Notes too long").optional().default(""),
  website: z.string().max(0).optional().default(""),
});

// Rate limiting store (in-memory for simplicity, use Redis in production)
const rateLimitStore = new Map<string, { count: number; resetTime: number }>();

function getClientIP(request: Request): string {
  // Get IP from headers (in production, use a proper IP extraction library)
  const forwarded = request.headers.get("x-forwarded-for");
  const realIP = request.headers.get("x-real-ip");
  const clientIP = request.headers.get("x-client-ip");

  return forwarded?.split(",")[0]?.trim() ||
         realIP ||
         clientIP ||
         "unknown";
}

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const windowMs = 15 * 60 * 1000; // 15 minutes
  const maxRequests = 5; // Max 5 booking requests per 15 minutes

  const record = rateLimitStore.get(ip);
  if (!record || now > record.resetTime) {
    rateLimitStore.set(ip, { count: 1, resetTime: now + windowMs });
    return true;
  }

  if (record.count >= maxRequests) {
    return false;
  }

  record.count++;
  return true;
}

export async function POST(request: Request) {
  try {
    // Rate limiting
    const clientIP = getClientIP(request);
    if (!checkRateLimit(clientIP)) {
      return NextResponse.json(
        { ok: false, message: "Too many requests. Please try again later." },
        { status: 429 }
      );
    }

    // Request size limit (1MB)
    const contentLength = request.headers.get("content-length");
    if (contentLength && parseInt(contentLength) > 1024 * 1024) {
      return NextResponse.json(
        { ok: false, message: "Request too large." },
        { status: 413 }
      );
    }

    // Parse and validate payload
    const payload = await request.json();
    const validationResult = bookingSchema.safeParse(payload);

    if (!validationResult.success) {
      return NextResponse.json(
        { ok: false, message: "Invalid booking data.", errors: validationResult.error.issues.map(err => ({ field: err.path.join('.'), message: err.message })) },
        { status: 400 }
      );
    }

    const bookingData = validationResult.data;
    if (bookingData.website) {
      return NextResponse.json({ ok: false, message: "Invalid booking data." }, { status: 400 });
    }

    const { storage } = siteConfig.booking;
    const cleanBookingData = {
      name: bookingData.name,
      email: bookingData.email,
      phone: bookingData.phone,
      date: bookingData.date,
      appointmentType: bookingData.appointmentType,
      notes: bookingData.notes,
    };

    if (storage.provider === "webhook") {
      if (!storage.webhookUrl) {
        return NextResponse.json({ ok: false, message: "Webhook URL is missing in config." }, { status: 400 });
      }

      const upstream = await fetch(storage.webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(cleanBookingData),
      });

      if (!upstream.ok) {
        return NextResponse.json({ ok: false, message: "Webhook rejected the booking." }, { status: 502 });
      }

      return NextResponse.json({ ok: true, mode: "webhook" });
    }

    if (storage.provider === "email") {
      const subject = encodeURIComponent(`Booking request from ${cleanBookingData.name}`);
      const body = encodeURIComponent(
        `Name: ${cleanBookingData.name}\nEmail: ${cleanBookingData.email}\nPhone: ${cleanBookingData.phone}\nPreferred date: ${cleanBookingData.date}\nNotes: ${cleanBookingData.notes}`
      );
      return NextResponse.json({
        ok: true,
        mode: "email",
        mailtoUrl: `mailto:${storage.recipientEmail}?subject=${subject}&body=${body}`,
      });
    }

    const bookingsFileName = path.basename(storage.localFilePath || "bookings.json");
    const targetDir = path.join(process.cwd(), "data");
    const targetPath = path.join(targetDir, bookingsFileName);
    await mkdir(targetDir, { recursive: true });

    let current: Array<typeof cleanBookingData & { createdAt: string }> = [];
    try {
      const raw = await readFile(targetPath, "utf8");
      current = JSON.parse(raw) as Array<typeof cleanBookingData & { createdAt: string }>;
      if (!Array.isArray(current)) current = [];
    } catch {
      current = [];
    }

    const today = new Date().toISOString().slice(0, 10);
    const todayCount = current.filter((item) => item.createdAt.slice(0, 10) === today).length;
    if (todayCount >= siteConfig.booking.maxDailyBookings) {
      return NextResponse.json({ ok: false, message: "Daily booking limit reached." }, { status: 429 });
    }

    current.push({ ...cleanBookingData, createdAt: new Date().toISOString() });
    await writeFile(targetPath, JSON.stringify(current, null, 2), "utf8");

    return NextResponse.json({
      ok: true,
      mode: "local_file",
      savedTo: `data/${bookingsFileName}`,
    });
  } catch {
    return NextResponse.json({ ok: false, message: "Failed to save booking." }, { status: 500 });
  }
}
