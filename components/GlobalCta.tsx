"use client";

import Link from "next/link";
import { siteConfig } from "@/config/site";
import { useLanguage } from "@/components/LanguageProvider";
import { useThemeMode } from "@/components/ThemeModeProvider";

export default function GlobalCta() {
  const { theme } = useThemeMode();
  const { t } = useLanguage();
  const { businessProfile, globalCta } = siteConfig.content;
  if (!siteConfig.featureFlags.globalCta || !globalCta.enabled) return null;

  return (
    <section className="px-4 sm:px-6 pb-10">
      <div
        className={`${siteConfig.ui.containerWidth} mx-auto p-6 ${siteConfig.ui.radius} flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between`}
        style={{ border: `1px solid ${theme.border}`, backgroundColor: theme.cardBackground }}
      >
        <p className="font-semibold">{t.globalCta.text} - {businessProfile.leadGoal}</p>
        <Link
          href={globalCta.buttonHref}
          className={`${siteConfig.ui.buttonSize} rounded-lg`}
          style={{ backgroundColor: theme.primary, color: theme.primaryForeground }}
        >
          {t.globalCta.buttonLabel}
        </Link>
      </div>
    </section>
  );
}
