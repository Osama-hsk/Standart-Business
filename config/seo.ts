// SEO configuration
// Contains all SEO metadata, Open Graph, and Twitter card settings

const envSiteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.trim() ||
  process.env.SITE_URL?.trim() ||
  "http://localhost:3003";

const siteUrl = envSiteUrl.replace(/\/+$/, "");

export const seoConfig = {
  siteUrl,
  siteName: "Northline Home Services",
  defaultTitle: "Northline Home Services | Complete Local Service Website",
  defaultDescription: "A complete local service website with up to five service pages, clear contact actions, service-area information, and a practical booking request flow.",
  ogImage: "/next.svg",
  twitterCard: "summary_large_image",
  pages: {
    home: { title: "Home | Northline Home Services", description: "Complete local service website with clear service pages, trust signals, and direct request actions." },
    about: { title: "About | Northline Home Services", description: "Business background and service approach." },
    services: { title: "Services | Northline Home Services", description: "Explore five structured service pages with clear explanations." },
    contact: { title: "Contact | Northline Home Services", description: "Contact details, service area, and direct communication options." },
    book: { title: "Book | Northline Home Services", description: "Send a service request through the built-in booking flow." }
  }
} as const;

export function getPageSeo(page: keyof typeof seoConfig.pages) {
  // Returns page metadata object for Next.js page-level SEO.
  // Add new keys in seo.pages before using them here.
  const meta = seoConfig.pages[page];
  return {
    title: meta.title,
    description: meta.description
  };
}
