import Link from "next/link";
import { siteConfig } from "@/config/site";

export default function OfferStrip() {
  const { offerStrip } = siteConfig.content;
  const { featureFlags } = siteConfig;
  if (!featureFlags?.offerStrip || !offerStrip?.enabled) return null;

  return (
    <section className="px-4 sm:px-6 pt-6">
      <div
        className={`${siteConfig.ui.containerWidth} mx-auto p-5 sm:p-6 ${siteConfig.ui.radius}`}
        style={{ border: "1px solid var(--color-border)", backgroundColor: "var(--color-card-background)" }}
      >
        <p className="text-xs font-semibold uppercase tracking-wide mb-2" style={{ color: "var(--color-muted)" }}>
          {offerStrip.badge}
        </p>
        <h2 className="max-w-3xl text-xl font-bold sm:text-2xl">{offerStrip.headline}</h2>
        <p className="mt-2 max-w-2xl" style={{ color: "var(--color-muted)" }}>{offerStrip.subtext}</p>
        <Link
          href={offerStrip.ctaHref}
          className={`mt-4 inline-block ${siteConfig.ui.buttonSize} rounded-xl font-medium`}
          style={{ backgroundColor: "var(--color-primary)", color: "var(--color-primary-foreground)" }}
        >
          {offerStrip.ctaLabel}
        </Link>
      </div>
    </section>
  );
}
