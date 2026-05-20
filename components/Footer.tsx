"use client";

import Link from "next/link";
import { siteConfig } from "@/config/site";
import { useThemeMode } from "@/components/ThemeModeProvider";

export default function Footer() {
  const { theme } = useThemeMode();
  const { contact, footer } = siteConfig.content;
  const footerLinks = siteConfig.content.footer.links.filter((item) =>
    ["/", "/about", "/services", "/contact", "/book"].includes(item.href)
  );
  const phoneHref = `tel:${contact.phone.replace(/\s+/g, "")}`;
  const emailHref = `mailto:${contact.email}`;

  return (
    <footer className="border-t px-4 py-8 sm:px-6" style={{ borderColor: theme.border }}>
      <div className={`${siteConfig.ui.containerWidth} mx-auto flex flex-col gap-6 text-center sm:text-left`}>
        <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
          <div className="min-w-0">
            <p className="font-semibold">{siteConfig.brand}</p>
            <p className="mt-2 text-sm leading-6" style={{ color: theme.muted }}>Mon - Sat: 8:00 AM - 8:00 PM</p>
            <p className="text-sm leading-6" style={{ color: theme.muted }}>{contact.address}</p>
            <p className="text-sm leading-6">
              <span className="font-medium">Phone:</span>{" "}
              <a href={phoneHref} className="underline" style={{ color: theme.foreground }}>{contact.phone}</a>
            </p>
            <p className="text-sm leading-6">
              <span className="font-medium">WhatsApp:</span>{" "}
              <a href={contact.whatsapp} className="underline" style={{ color: theme.foreground }} target="_blank" rel="noreferrer">
                {contact.whatsapp}
              </a>
            </p>
            <p className="text-sm leading-6">
              <span className="font-medium">Email:</span>{" "}
              <a href={emailHref} className="underline" style={{ color: theme.foreground }}>{contact.email}</a>
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 sm:justify-end">
            {footerLinks.map((item) => (
              <Link key={item.href} href={item.href} className="underline" style={{ color: theme.foreground }}>
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <p className="text-sm leading-6" style={{ color: theme.muted }}>{footer.copyright}</p>
      </div>
    </footer>
  );
}
