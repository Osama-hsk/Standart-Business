/*
  CONTROL ROOM
  ============
  This file is the single public config entrypoint for the template.

  Recommended client setup order:
  1. site.ts: enable pages, features, homepage sections, map, and branches
  2. content.ts: replace business copy, images, contact info, footer, FAQ, testimonials
  3. services.ts: edit service cards and service detail pages
  4. booking.ts: configure booking fields, storage provider, email, webhook, or local file
  5. theme.ts: choose colors, dark/light themes, and check contrast warnings
  6. seo.ts: set domain, metadata, Open Graph, sitemap, and page SEO
  7. locales.ts + translations.ts: control supported static languages

  Source files stay responsibility-based:
  - theme.ts: colors and contrast validation
  - booking.ts: booking form and storage behavior
  - seo.ts: metadata
  - locales.ts: supported languages
  - services.ts: service catalog
  - content.ts: marketing copy, navigation, contact, footer

  Components should import from this file unless they need a focused helper
  such as getPageSeo from config/seo.
*/

import { bookingConfig } from "./booking";
import { contentConfig } from "./content";
import { localesConfig } from "./locales";
import { seoConfig } from "./seo";
import { servicesConfig } from "./services";
import { themeConfig } from "./theme";

export const siteConfig = {
  // Public business name shown in schema and reusable brand references.
  brand: "[Business Name]",

  // Default language and supported language dropdown options.
  locale: { lang: localesConfig.active },
  locales: localesConfig,

  // Focused config modules connected into one public control room.
  seo: seoConfig,
  themeSettings: themeConfig,
  theme: themeConfig.theme,

  // Shared layout tokens used by pages/components.
  ui: {
    containerWidth: "max-w-6xl",
    radius: "rounded-xl",
    sectionSpacing: "py-14 sm:py-20",
    buttonSize: "px-6 py-3",
  },

  // Turn complete features on/off without deleting components.
  featureFlags: {
    booking: true,
    testimonials: false,
    faq: true,
    map: true,
    globalCta: false,
    trustBar: true,
    offerStrip: false,
    floatingWhatsapp: false,
  },

  // Turn whole pages on/off. Hidden pages return 404 instead of broken UI.
  pageVisibility: {
    home: true,
    about: true,
    services: true,
    contact: true,
    book: true,
  },

  // Choose which homepage sections render.
  homeSections: {
    hero: true,
    offer: false,
    trust: true,
    services: true,
    about: true,
    testimonials: false,
    faq: true,
    contact: true,
    map: true,
  },

  // Reorder homepage sections by moving these keys.
  // Keys must exist in homeSections and in app/page.tsx sectionsMap.
  homeSectionsOrder: ["hero", "trust", "services", "about", "faq", "contact", "map"],

  // Main editable systems imported from focused config files.
  booking: bookingConfig,
  content: contentConfig,
  servicesConfig,

  // Optional map block.
  // Use only iframe embed URLs. No Google Maps API key is required.
  // Set enabled to false for service-area businesses without a public address.
  map: {
    enabled: true,
    title: "Service area in [City]",
    iframeSrc: "https://www.google.com/maps?q=Main%20Street%2012%20Amsterdam&output=embed",
  },

  // Physical branch/location data used by contact, map, and LocalBusiness schema.
  // For one-location businesses, edit the main branch only.
  // For multi-location businesses, add items and set activeBranchId.
  branches: {
    activeBranchId: "main",
    locations: [
      {
        id: "main",
        name: "[Business Name] Main Service Area",
        address: "[City / Area]",
        phone: "[Phone Number]",
        hours: "Mon - Sat: 8:00 AM - 8:00 PM",
        mapEmbedUrl: "https://maps.google.com",
      },
    ],
  },
} as const;

export type SiteConfig = typeof siteConfig;
