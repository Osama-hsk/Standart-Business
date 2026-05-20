"use client";

import { siteConfig } from "@/config/site";
import { useLanguage } from "@/components/LanguageProvider";
import { useThemeMode } from "@/components/ThemeModeProvider";

export default function Testimonials() {
  const { theme } = useThemeMode();
  const { t } = useLanguage();
  return (
    <section className={`${siteConfig.ui.sectionSpacing} px-4 sm:px-6`}>
      <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8">{t.sections.testimonialsTitle}</h2>
      <div className={`${siteConfig.ui.containerWidth} mx-auto grid grid-cols-1 md:grid-cols-3 gap-4`}>
        {t.testimonials.map((item) => (
          <article
            key={item.name}
            className={`p-5 ${siteConfig.ui.radius}`}
            style={{ border: `1px solid ${theme.border}`, backgroundColor: theme.cardBackground }}
          >
            <p className="mb-3 text-sm font-semibold" style={{ color: theme.primary }}>5 stars</p>
            <p style={{ color: theme.muted }}>{item.quote}</p>
            <p className="mt-3 font-semibold">{item.name}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
