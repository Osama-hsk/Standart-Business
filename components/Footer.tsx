"use client";

import Link from "next/link";
import { siteConfig } from "@/config/site";
import { useThemeMode } from "@/components/ThemeModeProvider";

export default function Footer() {
  const { theme } = useThemeMode();
  const footerLinks = siteConfig.content.footer.links.filter((item) =>
    ["/", "/about", "/services", "/contact", "/book"].includes(item.href)
  );

  return (
    <footer className="border-t px-4 py-8 sm:px-6" style={{ borderColor: theme.border }}>
      <div className={`${siteConfig.ui.containerWidth} mx-auto flex flex-col gap-4 text-center sm:flex-row sm:items-center sm:justify-between sm:text-left`}>
        <div className="min-w-0">
          <p className="font-semibold">{siteConfig.brand}</p>
          <p className="text-sm leading-6" style={{ color: theme.muted }}>{siteConfig.content.footer.copyright}</p>
        </div>
        <div className="flex flex-wrap justify-center gap-4 sm:justify-end">
          {footerLinks.map((item) => (
            <Link key={item.href} href={item.href} className="underline" style={{ color: theme.foreground }}>
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
