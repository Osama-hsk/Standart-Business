"use client";

import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { useLanguage } from "@/components/LanguageProvider";
import { useThemeMode } from "@/components/ThemeModeProvider";

type ServicesProps = {
  limit?: number;
  showHeading?: boolean;
};

export default function Services({ limit, showHeading = true }: ServicesProps) {
  const { t } = useLanguage();

  const activeServices = siteConfig.servicesConfig.services.filter((item) => item.enabled);
  const servicesToRender = typeof limit === "number" ? activeServices.slice(0, limit) : activeServices;

  return (
    <section id="services" className="px-4 py-12 sm:px-6 sm:py-20">
      {showHeading ? (
      <h2 className="mb-8 text-center text-[clamp(1.6rem,4.5vw,2.25rem)] font-bold leading-tight sm:mb-10">
          {t.sections.servicesTitle}
        </h2>
      ) : null}

      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-4 sm:gap-6 md:grid-cols-2 xl:grid-cols-3">
        {servicesToRender.map((service) => (
          <ServiceCard key={service.slug} service={service} />
        ))}
      </div>
    </section>
  );
}

type ServiceItem = (typeof siteConfig.servicesConfig.services)[number];

function ServiceCard({ service }: { service: ServiceItem }) {
  const { theme } = useThemeMode();
  const { t } = useLanguage();
  const copy = service.copy.en;
  const hasServicePages = siteConfig.pageVisibility.services;

  const content = (
    <>
      <div
        className="relative mb-5 aspect-[4/3] w-full overflow-hidden rounded-[1.25rem] border sm:aspect-[16/10]"
        style={{ borderColor: theme.border, backgroundColor: theme.background }}
      >
        <div className="absolute inset-3 rounded-[1rem] border sm:inset-4" style={{ borderColor: theme.border }} />
        <Image src={service.image.src} alt={service.image.alt} fill className="object-contain p-6 sm:p-10" />
      </div>

      <h3 className="mb-2 text-[clamp(1.1rem,3.5vw,1.25rem)] font-bold leading-tight">{copy.title}</h3>
      <p style={{ color: theme.muted }} className="mb-5 text-sm leading-6 sm:min-h-12 sm:text-base">{copy.short}</p>

      <span
        className="inline-block w-full rounded-full border px-4 py-2 text-center text-sm font-medium sm:w-auto"
        style={{ borderColor: theme.border, color: theme.foreground }}
      >
        {hasServicePages ? t.serviceActions.readMore : "Included Service"}
      </span>
    </>
  );

  if (!hasServicePages) {
    return (
      <div
        className="block h-full rounded-[1.5rem] border p-5 sm:p-6"
        style={{
          borderColor: theme.border,
          backgroundColor: theme.cardBackground,
        }}
      >
        {content}
      </div>
    );
  }

  return (
    <Link
      href={`/services/${service.slug}`}
      className="block h-full rounded-[1.5rem] border p-5 transition-transform duration-200 hover:-translate-y-1 sm:p-6"
      style={{
        borderColor: theme.border,
        backgroundColor: theme.cardBackground,
      }}
    >
      {content}
    </Link>
  );
}
