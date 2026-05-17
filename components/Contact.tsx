"use client";

import Image from "next/image";
import { siteConfig } from "@/config/site";
import { useLanguage } from "@/components/LanguageProvider";
import { useThemeMode } from "@/components/ThemeModeProvider";

export default function Contact() {
  const { theme } = useThemeMode();
  const { contact, images, social } = siteConfig.content;
  const { t } = useLanguage();

  return (
    <section id="contact" className="px-4 py-12 sm:px-6 sm:py-20">
      <div className="max-w-5xl mx-auto">
        <div className="text-center">
          <div className="relative mx-auto mb-6 h-16 w-16 rounded-full border p-3 sm:h-20 sm:w-20 sm:p-4" style={{ borderColor: theme.border, backgroundColor: theme.cardBackground }}>
            <Image src={images.contact.src} alt={images.contact.alt} fill className="object-contain p-4" />
          </div>

          <h2 className="mb-4 text-[clamp(1.75rem,5vw,2.5rem)] font-bold leading-tight">
            {t.contact.title}
          </h2>

          <p className="mx-auto mb-8 max-w-2xl text-sm leading-6 sm:text-base sm:leading-7" style={{ color: theme.muted }}>
            {t.contact.description}
          </p>

          <a
            href={contact.whatsapp}
            target="_blank"
            rel="noreferrer"
            className="inline-block w-full rounded-xl px-6 py-3 font-medium transition hover:opacity-90 sm:w-auto"
            style={{ backgroundColor: theme.primary, color: theme.primaryForeground }}
          >
            {t.contact.buttonText}
          </a>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-[1.5rem] border p-6 text-left sm:p-7" style={{
            borderColor: theme.border,
            backgroundColor: theme.cardBackground,
          }}>
            <h3 className="font-bold mb-4">{t.sections.contactInfoTitle}</h3>
            <div className="space-y-3 break-words">
              <p><strong>Email:</strong> {contact.email}</p>
              <p><strong>Phone:</strong> {contact.phone}</p>
              <p><strong>Address:</strong> {contact.address}</p>
              <p><strong>Hours:</strong> {contact.hours}</p>
            </div>
          </div>

          <div className="rounded-[1.5rem] border p-6 text-left sm:p-7" style={{
            borderColor: theme.border,
            backgroundColor: theme.cardBackground,
          }}>
            <h3 className="font-bold mb-3">{t.sections.socialTitle}</h3>
            <div className="grid grid-cols-1 gap-3">
              {social.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-xl border px-4 py-3 text-center"
                  style={{
                    borderColor: theme.border,
                    color: theme.foreground,
                  }}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
