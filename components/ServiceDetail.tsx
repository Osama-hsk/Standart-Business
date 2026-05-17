"use client";

import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { useLanguage } from "@/components/LanguageProvider";
import { useThemeMode } from "@/components/ThemeModeProvider";

type ServiceDetailProps = {
  slug: string;
};

export default function ServiceDetail({ slug }: ServiceDetailProps) {
  const { theme } = useThemeMode();
  const { t } = useLanguage();
  const service = siteConfig.servicesConfig.services.find((item) => item.slug === slug && item.enabled);

  if (!service) {
    return (
      <main className="px-4 py-16 sm:px-6 sm:py-20">
        <div className="max-w-3xl mx-auto">
          <p>Service not found.</p>
          <Link href="/services" className="underline mt-4 inline-block">
            {t.serviceActions.backToServices}
          </Link>
        </div>
      </main>
    );
  }

  const copy = service.copy.en;

  return (
    <main className="px-4 py-10 sm:px-6 sm:py-16 lg:py-20">
      <article className="max-w-4xl mx-auto">
        <div
          className="relative mb-8 w-full aspect-[4/3] overflow-hidden rounded-[1.75rem] border sm:aspect-[16/8]"
          style={{ borderColor: theme.border, backgroundColor: theme.cardBackground }}
        >
          <div className="absolute inset-3 rounded-[1.25rem] border sm:inset-5 sm:rounded-[1.5rem]" style={{ borderColor: theme.border }} />
          <Image src={service.image.src} alt={service.image.alt} fill className="object-contain p-6 sm:p-12" />
        </div>

        <h1 className="mb-4 text-[clamp(1.75rem,5vw,2.5rem)] font-bold leading-tight">{copy.longTitle}</h1>
        <p className="mb-8 text-base sm:text-lg" style={{ color: theme.muted }}>{copy.short}</p>

        <div className="space-y-5">
          {copy.paragraphs.map((paragraph) => (
            <p key={paragraph} className="leading-7 sm:leading-8">
              {paragraph}
            </p>
          ))}
        </div>

        <Link
          href="/services"
          className="mt-10 inline-flex w-full justify-center rounded-lg border px-5 py-3 sm:w-auto"
          style={{ borderColor: theme.border, color: theme.foreground }}
        >
          {t.serviceActions.backToServices}
        </Link>
      </article>
    </main>
  );
}
