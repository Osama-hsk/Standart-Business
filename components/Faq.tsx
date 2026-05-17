"use client";

import { siteConfig } from "@/config/site";
import { useLanguage } from "@/components/LanguageProvider";
import { useThemeMode } from "@/components/ThemeModeProvider";

export default function Faq() {
  const { theme } = useThemeMode();
  const { t } = useLanguage();
  return (
    <section className={`${siteConfig.ui.sectionSpacing} px-4 sm:px-6`}>
      <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8">{t.sections.faqTitle}</h2>
      <div className={`${siteConfig.ui.containerWidth} mx-auto space-y-3`}>
        {t.faq.map((item) => (
          <details
            key={item.question}
            className={`p-4 ${siteConfig.ui.radius}`}
            style={{ border: `1px solid ${theme.border}`, backgroundColor: theme.cardBackground }}
          >
            <summary className="cursor-pointer font-semibold">{item.question}</summary>
            <p className="mt-2" style={{ color: theme.muted }}>{item.answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
