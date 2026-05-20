// Booking configuration
// Contains all booking-related settings, copy, and validation rules

export const bookingConfig = {
  title: "Request a Quote",
  description: "Send your name, phone number, service needed, and message. The business can review the request and follow up with the next step.",
  buttonText: "Send Request",
  successMessage: "Request sent successfully. We will review the details and follow up with the next step.",
  errorMessage: "Failed to send booking request. Please try again.",
  timezone: "Europe/Amsterdam",
  slotDurationMinutes: 30,
  maxDailyBookings: 10,
  workingDays: ["Mon", "Tue", "Wed", "Thu", "Fri"],
  availableHours: { start: "09:00", end: "18:00" },
  appointmentTypes: [
    { value: "consultation", label: "Consultation" },
    { value: "on-site-service", label: "On-Site Service" },
    { value: "follow-up-support", label: "Follow-Up Support" },
    { value: "maintenance", label: "Maintenance Support" }
  ],
  // Defines where booking submissions are stored/sent.
  // provider options:
  // - "local_file": saves to local JSON path
  // - "webhook": sends to external automation (Sheets/Zapier/Make/CRM)
  // - "email": opens mailto flow
  storage: {
    provider: "local_file" as "local_file" | "webhook" | "email", // local_file | webhook | email
    localFilePath: "data/bookings.json",
    webhookUrl: "",
    recipientEmail: "[Email Address]"
  },
  // Optional URL to your Excel/Google Sheet for manual review.
  // Displayed as a helper link under booking form.
  sheetUrl: "",
  // Booking form field labels/placeholders/required rules.
  // You can rename fields per business tone without code changes.
  fields: {
    name: { label: "Name", placeholder: "Your name", required: true },
    email: { label: "Email", placeholder: "[Email Address]", required: false },
    phone: { label: "Phone", placeholder: "[Phone Number]", required: true },
    date: { label: "Preferred date & time", required: false },
    notes: { label: "Message", placeholder: "Tell us what you need help with", required: true }
  }
} as const;
