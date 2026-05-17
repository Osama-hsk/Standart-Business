"use client";

import Image from "next/image";
import { siteConfig } from "@/config/site";
import { useLanguage } from "@/components/LanguageProvider";
import { useThemeMode } from "@/components/ThemeModeProvider";

export default function AboutContent() {
  const { images } = siteConfig.content;
  const { theme } = useThemeMode();
  const { t } = useLanguage();

  return (
    <section className="px-4 py-14 sm:px-6 sm:py-20">
      <div
        className="mx-auto grid max-w-5xl items-center gap-8 rounded-[2rem] border px-6 py-8 sm:px-10 sm:py-12 lg:grid-cols-[0.9fr_1.1fr]"
        style={{ borderColor: theme.border, backgroundColor: theme.cardBackground }}
      >
        <div className="relative mx-auto aspect-square w-full max-w-xs overflow-hidden rounded-[1.75rem] border" style={{ borderColor: theme.border, backgroundColor: theme.background }}>
          <div className="absolute inset-5 rounded-[1.4rem] border" style={{ borderColor: theme.border }} />
          <Image src={images.about.src} alt={images.about.alt} fill className="object-contain p-10" />
        </div>

        <div className="text-center lg:text-left">
          <h1 className="mb-6 text-4xl font-bold">{t.about.title}</h1>
          <p className="text-lg leading-8" style={{ color: theme.muted }}>{t.about.description}</p>
          <p className="mt-4 leading-8" style={{ color: theme.muted }}>{t.about.mission}</p>
        </div>
      </div>
    </section>
  );
}
