// Booking configuration
// Contains all booking-related settings, copy, and validation rules

export const bookingConfig = {
  title: "Request a Service or Book a Time",
  description: "Send your request and the business can follow up to confirm the next step or the right appointment slot.",
  buttonText: "Send Booking Request",
  successMessage: "Service request sent successfully. We will review the details and follow up with the next step.",
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
    recipientEmail: "bookings@mybusiness.com"
  },
  // Optional URL to your Excel/Google Sheet for manual review.
  // Displayed as a helper link under booking form.
  sheetUrl: "",
  // Booking form field labels/placeholders/required rules.
  // You can rename fields per business tone without code changes.
  fields: {
    name: { label: "Full name", placeholder: "Full name", required: true },
    email: { label: "Email", placeholder: "Email", required: true },
    phone: { label: "Phone", placeholder: "Phone", required: true },
    date: { label: "Preferred date & time", required: true },
    notes: { label: "Service details", placeholder: "Briefly describe the work or preferred timing", required: false }
  }
} as const;
