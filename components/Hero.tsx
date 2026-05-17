"use client";

import Link from "next/link";
import { siteConfig } from "@/config/site";
import { useLanguage } from "@/components/LanguageProvider";
import { useThemeMode } from "@/components/ThemeModeProvider";

export default function Hero() {
  const { theme } = useThemeMode();
  const { businessProfile, hero, contact } = siteConfig.content;
  const { t } = useLanguage();
  const phoneHref = `tel:${contact.phone.replace(/\s+/g, "")}`;

  return (
    <section className="overflow-x-clip px-4 pb-8 pt-6 sm:px-6 sm:pb-14 sm:pt-8 lg:pb-16 lg:pt-10">
      <div className="mx-auto max-w-6xl px-0 py-0 sm:px-4 sm:py-2">
        <div className="grid items-start gap-6 lg:grid-cols-[1.15fr_0.85fr] lg:gap-10">
        <div className="min-w-0 w-full max-w-full text-center lg:pt-2 lg:text-left">
          <p
            className="inline-flex rounded-full px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.16em] sm:px-4 sm:py-2 sm:text-xs sm:tracking-[0.24em]"
            style={{ backgroundColor: theme.cardBackground, color: theme.muted }}
          >
            {businessProfile.industry} • {businessProfile.city}
          </p>

          <h1 className="mt-4 w-full max-w-full whitespace-normal break-words text-3xl font-bold leading-tight tracking-tight sm:max-w-4xl sm:text-4xl md:text-5xl lg:text-6xl">
            {t.hero.title}
          </h1>

          <p className="mt-3 w-full max-w-2xl text-base leading-6 sm:mt-4 sm:text-lg sm:leading-8" style={{ color: theme.muted }}>
            {t.hero.subtitle}
          </p>

          <p className="mt-3 max-w-2xl text-sm leading-6 sm:mt-4 sm:text-base sm:leading-7" style={{ color: theme.muted }}>
            {businessProfile.uniqueValueProposition}
          </p>

          <div className="mt-5 flex flex-col gap-3 sm:mt-6 sm:flex-row sm:flex-wrap sm:justify-center lg:justify-start">
            <Link
              href={hero.bookingCtaHref ?? "/book"}
              className="inline-flex items-center justify-center rounded-xl px-4 py-3 text-sm font-medium sm:px-6 sm:text-base"
              style={{ backgroundColor: theme.primary, color: theme.primaryForeground }}
            >
              {t.hero.bookingCta}
            </Link>
            <Link
              href={hero.ctaHref ?? "/contact"}
              className="inline-flex items-center justify-center rounded-xl border px-4 py-3 text-sm font-medium sm:px-6 sm:text-base"
              style={{ borderColor: theme.border, color: theme.foreground, backgroundColor: theme.cardBackground }}
            >
              {t.hero.cta}
            </Link>
          </div>
        </div>

        <div
          className="w-full rounded-[1.75rem] border p-5 sm:p-7 lg:mt-6"
          style={{ borderColor: theme.border, backgroundColor: theme.cardBackground, boxShadow: "0 24px 60px rgba(15, 23, 42, 0.08)" }}
        >
          <p className="text-xs font-semibold uppercase tracking-[0.22em]" style={{ color: theme.primary }}>
            Quick actions
          </p>
          <h2 className="mt-4 text-2xl font-bold sm:text-3xl">Choose the fastest next step</h2>
          <p className="mt-3 text-sm leading-6 sm:text-base sm:leading-7" style={{ color: theme.muted }}>
            Book an appointment online or call directly if you want a faster response from the team.
          </p>

          <div className="mt-6 flex flex-col gap-3">
            <Link
              href={hero.bookingCtaHref ?? "/book"}
              className="inline-flex w-full items-center justify-center rounded-xl px-4 py-3 text-sm font-medium sm:w-auto sm:px-6 sm:text-base"
              style={{ backgroundColor: theme.primary, color: theme.primaryForeground }}
            >
              {t.hero.bookingCta}
            </Link>
            <a
              href={phoneHref}
              className="inline-flex w-full items-center justify-center rounded-xl border px-4 py-3 text-sm font-medium sm:w-auto sm:px-6 sm:text-base"
              style={{ borderColor: theme.border, color: theme.foreground }}
            >
              Call Directly
            </a>
            <Link
              href={hero.ctaHref ?? "/contact"}
              className="inline-flex w-full items-center justify-center rounded-xl px-4 py-3 text-sm font-medium sm:w-auto sm:px-6 sm:text-base"
              style={{ backgroundColor: theme.background, color: theme.foreground }}
            >
              {t.hero.cta}
            </Link>
          </div>
        </div>
      </div>

        <div className="mt-5 grid gap-3 sm:mt-6 sm:grid-cols-2 lg:mt-4 lg:max-w-[46%] lg:ml-auto">
          <div className="rounded-2xl border px-4 py-4" style={{ borderColor: theme.border, backgroundColor: theme.cardBackground }}>
            <p className="text-xs font-semibold uppercase tracking-[0.16em]" style={{ color: theme.muted }}>
              Lead goal
            </p>
            <p className="mt-2 font-medium">{businessProfile.leadGoal}</p>
          </div>
          <div className="rounded-2xl border px-4 py-4" style={{ borderColor: theme.border, backgroundColor: theme.cardBackground }}>
            <p className="text-xs font-semibold uppercase tracking-[0.16em]" style={{ color: theme.muted }}>
              Service area
            </p>
            <p className="mt-2 font-medium">{contact.address}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
