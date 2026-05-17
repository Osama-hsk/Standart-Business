// Content configuration
// Contains all marketing and UI content that can be customized per client

export const contentConfig = {
  // Centralized image assets and alt text.
  // Recommended: place real assets in /public/site and reference them here.
  // Example src: "/site/hero-dental.jpg"
  images: {
    logo: { src: "/next.svg", alt: "Business logo" },
    hero: { src: "/globe.svg", alt: "Hero visual" },
    about: { src: "/file.svg", alt: "About visual" },
    contact: { src: "/window.svg", alt: "Contact visual" }
  },
  // Navbar links and destinations.
  // Add/remove links here. Keep href routes valid.
  // For section anchors, use "/#section-id" format.
  nav: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Contact", href: "/contact" },
    { label: "Book", href: "/book" }
  ],
  // Hero section copy and CTA buttons.
  // Primary top-of-page message.
  // `ctaHref` and `bookingCtaHref` can point to any internal route.
  hero: {
    title: "A clear service website built to generate requests",
    subtitle: "Give customers one clear place to understand your services, trust your business, and contact you easily.",
    cta: "View Services",
    ctaHref: "/services",
    bookingCta: "Request Booking",
    bookingCtaHref: "/book"
  },
  // Core business positioning data to adapt the site quickly for any business type.
  // This powers trust/conversion context in hero and CTA areas.
  // Update this first when switching to a new business client.
  businessProfile: {
    industry: "Home Service Company",
    city: "Service Area",
    targetAudience: "Local customers who need to understand the service quickly and contact the business with confidence",
    uniqueValueProposition: "Turn interest into calls, messages, or bookings.",
    leadGoal: "This website is built for one purpose: helping customers understand the business and take action."
  },
  // High-conversion offer strip content shown near the top of the homepage.
  // Best practice:
  // - Keep headline specific and time-bound.
  // - Use one clear CTA destination.
  offerStrip: {
    enabled: false,
    badge: "Complete",
    headline: "Clear services, simple request flow, and mobile-friendly structure.",
    subtext: "This section is disabled in the complete package.",
    ctaLabel: "Start Your Request",
    ctaHref: "/book"
  },
  // Trust signals to reduce hesitation and increase lead conversion.
  // Add objective proof points only (ratings, response time, number of clients, certifications).
  trustBar: {
    enabled: true,
    title: "Customers should not have to guess what you offer",
    items: [
      "A clear service page built to make action easy",
      "Show your services, explain what you do, build trust, and guide customers toward calling, messaging, or booking.",
      "Make customers feel confident before they contact you",
      "Clear information, professional presentation, and an easy contact flow can make your business feel more trustworthy."
    ]
  },
  // Optional global CTA block shown across key pages.
  // Use this as your persistent conversion driver.
  // Keep button action aligned with leadGoal (book / call / contact).
  globalCta: {
    enabled: false,
    text: "Need a complete local service website with a practical request flow?",
    buttonLabel: "Book a Request",
    buttonHref: "/book"
  },
  // Shared heading labels for reusable sections.
  // Global labels used in multiple components.
  sections: {
    servicesTitle: "Core Services",
    testimonialsTitle: "Testimonials",
    faqTitle: "Frequently Asked Questions",
    contactInfoTitle: "Business Details",
    socialTitle: "Direct Links"
  },
  // About page text content.
  // Keep this concise and credible; avoid generic claims.
  about: {
    title: "Customers should not have to guess what you offer",
    description: "If people cannot quickly understand your services, service area, and next step, they may leave and contact someone else.",
    mission: "This website is built for one purpose: helping customers understand the business and take action."
  },
  // Contact section/page content and communication details.
  // These values are shown directly to users.
  // Update this immediately for every new client project.
  // The floating WhatsApp button also uses whatsapp + buttonText when enabled in site.ts.
  contact: {
    title: "Get in Touch",
    description: "Call directly, message on WhatsApp, or send a service request through the booking form. This complete version keeps the path from service discovery to contact clear and practical.",
    whatsapp: "https://wa.me/32400000000",
    buttonText: "Contact on WhatsApp",
    email: "Business contact details",
    phone: "Business contact details",
    address: "Service area",
    hours: "Availability shared after request"
  },
  // Social profile links.
  // Add only real, active profiles.
  social: [
    { label: "Call", href: "tel:+32400000000" },
    { label: "WhatsApp", href: "https://wa.me/32400000000" },
    { label: "Email", href: "mailto:hello@northline-demo.com" }
  ],
  // Footer text and legal/utility links.
  // Usually includes legal links and copyrights.
  footer: {
    copyright: "© 2026 osamahussein. All rights reserved.",
    links: [
      { label: "About", href: "/about" },
      { label: "Services", href: "/services" },
      { label: "Contact", href: "/contact" }
    ]
  },
  // Testimonials section items.
  // Keep quotes short and believable.
  testimonials: [
    { name: "A. Johnson", quote: "Great experience and real business results." },
    { name: "L. Smith", quote: "Fast delivery and very professional communication." }
  ],
  // FAQ section entries.
  // Focus on objection handling (price, time, support, guarantees).
  faq: [
    { question: "What happens after I send a request?", answer: "The team reviews the request, confirms the right next step, and follows up with availability or service details." },
    { question: "Do you cover different service areas?", answer: "Yes. This complete version includes a clear service-area section for local coverage." },
    { question: "Can I request a specific date or time?", answer: "Yes. The request form supports a preferred date and time so the business can review availability and reply directly." },
    { question: "Does this package include separate service pages?", answer: "Yes. This version supports up to five service pages so the client can understand the offer more clearly before making contact." }
  ]
} as const;
