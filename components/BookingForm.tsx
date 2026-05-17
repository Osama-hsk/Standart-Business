"use client";

import { FormEvent, useState } from "react";
import { siteConfig } from "@/config/site";
import { useLanguage } from "@/components/LanguageProvider";
import { useThemeMode } from "@/components/ThemeModeProvider";

type FormState = {
  name: string;
  email: string;
  phone: string;
  date: string;
  appointmentType: string;
  notes: string;
  website: string;
};

const initialState: FormState = {
  name: "",
  email: "",
  phone: "",
  date: "",
  appointmentType: siteConfig.booking.appointmentTypes[0]?.value ?? "",
  notes: "",
  website: "",
};

export default function BookingForm() {
  const { booking } = siteConfig;
  const { theme } = useThemeMode();
  const { t } = useLanguage();
  const [form, setForm] = useState<FormState>(initialState);
  const [status, setStatus] = useState("");

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("");
    const response = await fetch("/api/bookings", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    const result = (await response.json()) as {
      ok: boolean;
      mode?: "local_file" | "webhook" | "email";
      savedTo?: string;
      mailtoUrl?: string;
      message?: string;
    };

    if (!response.ok || !result.ok) {
      setStatus(result.message ?? t.booking.errorMessage);
      return;
    }

    if (result.mode === "email" && result.mailtoUrl) {
      window.location.href = result.mailtoUrl;
      return;
    }

    setForm(initialState);
    if (result.mode === "local_file" && result.savedTo) {
      setStatus(`${booking.successMessage} Saved to: ${result.savedTo}`);
      return;
    }
    setStatus(t.booking.successMessage);
  };

  return (
    <section className="px-4 py-10 sm:px-6 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-3xl">
        <h1 className="mb-4 text-[clamp(1.75rem,5vw,2.5rem)] font-bold leading-tight">{t.booking.title}</h1>
        <p className="mb-8" style={{ color: theme.muted }}>
          {t.booking.description}
        </p>

        <form
          onSubmit={onSubmit}
          className="space-y-4 rounded-[1.75rem] border p-5 sm:p-7"
          style={{ borderColor: theme.border, backgroundColor: theme.cardBackground }}
        >
          <div className="hidden" aria-hidden="true">
            <label>{t.booking.fields.honeypot.label}</label>
            <input
              tabIndex={-1}
              autoComplete="off"
              placeholder={t.booking.fields.honeypot.placeholder}
              value={form.website}
              onChange={(e) => setForm((prev) => ({ ...prev, website: e.target.value }))}
            />
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <label className="mb-1 block text-sm">{t.booking.fields.name.label}</label>
              <input
                className="w-full rounded-xl border px-4 py-3"
                style={{ borderColor: theme.border, backgroundColor: theme.background, color: theme.foreground }}
                placeholder={t.booking.fields.name.placeholder}
                value={form.name}
                onChange={(e) => setForm((prev) => ({ ...prev, name: e.target.value }))}
                required={booking.fields.name.required}
              />
            </div>

            <div>
              <label className="mb-1 block text-sm">{t.booking.fields.email.label}</label>
              <input
                type="email"
                className="w-full rounded-xl border px-4 py-3"
                style={{ borderColor: theme.border, backgroundColor: theme.background, color: theme.foreground }}
                placeholder={t.booking.fields.email.placeholder}
                value={form.email}
                onChange={(e) => setForm((prev) => ({ ...prev, email: e.target.value }))}
                required={booking.fields.email.required}
              />
            </div>

            <div>
              <label className="mb-1 block text-sm">{t.booking.fields.phone.label}</label>
              <input
                className="w-full rounded-xl border px-4 py-3"
                style={{ borderColor: theme.border, backgroundColor: theme.background, color: theme.foreground }}
                placeholder={t.booking.fields.phone.placeholder}
                value={form.phone}
                onChange={(e) => setForm((prev) => ({ ...prev, phone: e.target.value }))}
                required={booking.fields.phone.required}
              />
            </div>

            <div>
              <label className="mb-1 block text-sm">{t.booking.fields.date.label}</label>
              <input
                type="datetime-local"
                className="w-full rounded-xl border px-4 py-3"
                style={{ borderColor: theme.border, backgroundColor: theme.background, color: theme.foreground }}
                value={form.date}
                onChange={(e) => setForm((prev) => ({ ...prev, date: e.target.value }))}
                required={booking.fields.date.required}
              />
            </div>
          </div>

          <div>
            <label className="mb-1 block text-sm">{t.booking.appointmentType}</label>
            <select
              className="w-full rounded-xl border px-4 py-3"
              style={{ borderColor: theme.border, backgroundColor: theme.background, color: theme.foreground }}
              value={form.appointmentType}
              onChange={(e) => setForm((prev) => ({ ...prev, appointmentType: e.target.value }))}
              required
            >
              {booking.appointmentTypes.map((item) => (
                <option key={item.value} value={item.value}>
                  {item.label}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="mb-1 block text-sm">{t.booking.fields.notes.label}</label>
            <textarea
              className="min-h-28 w-full rounded-xl border px-4 py-3"
              style={{ borderColor: theme.border, backgroundColor: theme.background, color: theme.foreground }}
              placeholder={t.booking.fields.notes.placeholder}
              value={form.notes}
              onChange={(e) => setForm((prev) => ({ ...prev, notes: e.target.value }))}
              required={booking.fields.notes.required}
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-xl px-4 py-3 text-sm font-medium sm:w-auto sm:px-6 sm:text-base"
            style={{ backgroundColor: theme.primary, color: theme.primaryForeground }}
          >
            {t.booking.buttonText}
          </button>
        </form>

        {status ? <p className="mt-4 text-sm leading-6">{status}</p> : null}
        <p className="mt-2 text-sm leading-6" style={{ color: theme.muted }}>
          Timezone: {booking.timezone} | Slot: {booking.slotDurationMinutes} mins | Max/day: {booking.maxDailyBookings}
        </p>

        {booking.sheetUrl ? (
          <a
            href={booking.sheetUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-block mt-6 underline"
            style={{ color: theme.foreground }}
          >
            {t.booking.openSheet}
          </a>
        ) : null}
      </div>
    </section>
  );
}
