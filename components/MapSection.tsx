"use client";

import { useState } from "react";
import { siteConfig } from "@/config/site";

export default function MapSection() {
  const [isMapLoaded, setIsMapLoaded] = useState(false);

  if (!siteConfig.featureFlags.map || !siteConfig.map.enabled || !siteConfig.map.iframeSrc) return null;

  const branch =
    siteConfig.branches.locations.find((item) => item.id === siteConfig.branches.activeBranchId) ??
    siteConfig.branches.locations[0];

  return (
    <section className={`${siteConfig.ui.sectionSpacing} px-4 sm:px-6`}>
      <div className={`${siteConfig.ui.containerWidth} mx-auto`}>
        <h2 className="text-2xl sm:text-3xl font-bold mb-4">{siteConfig.map.title}</h2>
        <p style={{ color: "var(--color-muted)" }}>{branch.address}</p>
        <p className="mt-2 max-w-2xl text-sm leading-6 sm:text-base sm:leading-7" style={{ color: "var(--color-muted)" }}>
          We provide [Service Name] across [City], including nearby areas such as [Area 1], [Area 2], and [Area 3]. Use this section to show local coverage clearly so visitors know when to contact the business.
        </p>
        <div
          className={`mt-4 overflow-hidden ${siteConfig.ui.radius}`}
          style={{ border: "1px solid var(--color-border)", backgroundColor: "var(--color-card-background)" }}
        >
          {isMapLoaded ? (
            <iframe
              src={siteConfig.map.iframeSrc}
              title={`${branch.name} map`}
              className="h-80 w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          ) : (
            <button
              type="button"
              className="flex h-80 w-full flex-col items-center justify-center gap-3 px-6 text-center"
              style={{ backgroundColor: "transparent", color: "var(--foreground)" }}
              onClick={() => setIsMapLoaded(true)}
            >
              <span
                className="inline-flex rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em]"
                style={{ borderColor: "var(--color-border)", color: "var(--color-muted)" }}
              >
                Interactive Map
              </span>
              <span className="text-2xl font-bold sm:text-3xl">{branch.name}</span>
              <span style={{ color: "var(--color-muted)" }}>
                Click to load the map for {branch.address}
              </span>
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
