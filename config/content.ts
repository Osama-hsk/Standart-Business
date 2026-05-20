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
    { label: "Request a Quote", href: "/book" }
  ],
  // Hero section copy and CTA buttons.
  // Primary top-of-page message.
  // `ctaHref` and `bookingCtaHref` can point to any internal route.
  hero: {
    title: "[Service Name] in [City / Area]",
    subtitle: "Clear, reliable service for local customers — request a quote or contact us today.",
    cta: "Call Now",
    ctaHref: "/services",
    bookingCta: "Request a Quote",
    bookingCtaHref: "/book"
  },
  // Core business positioning data to adapt the site quickly for any business type.
  // This powers trust/conversion context in hero and CTA areas.
  // Update this first when switching to a new business client.
  businessProfile: {
    industry: "[Service Name]",
    city: "[City / Area]",
    targetAudience: "Local customers who need a clear explanation of the service and an easy way to get in touch",
    uniqueValueProposition: "Practical local service with clear communication and a simple next step.",
    leadGoal: "Help visitors understand the service quickly and choose the easiest way to contact the business."
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
    title: "Why local customers choose [Business Name]",
    items: [
      "5+ Years Experience",
      "Fast Response",
      "Local Service",
      "Work Guarantee"
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
    servicesTitle: "Services in [City / Area]",
    testimonialsTitle: "Testimonials",
    faqTitle: "Frequently Asked Questions",
    contactInfoTitle: "Business Details",
    socialTitle: "Direct Links"
  },
  // About page text content.
  // Keep this concise and credible; avoid generic claims.
  about: {
    title: "Clear help for local customers",
    description: "We help local customers solve [service problem] without confusion or delays. Our process is simple: understand the job, explain the next step, and complete the work with clear communication.",
    mission: "We handle the details so you know what is happening from start to finish."
  },
  // Contact section/page content and communication details.
  // These values are shown directly to users.
  // Update this immediately for every new client project.
  // The floating WhatsApp button also uses whatsapp + buttonText when enabled in site.ts.
  contact: {
    title: "Contact [Business Name]",
    description: "Call, send a WhatsApp message, or request a quote. We make it easy for local customers to ask questions, explain the job, and get the next step clearly.",
    whatsapp: "https://wa.me/[WhatsApp Number]",
    buttonText: "WhatsApp Us",
    email: "[Email Address]",
    phone: "[Phone Number]",
    address: "[City / Area]",
    hours: "Mon - Sat: 8:00 AM - 8:00 PM"
  },
  // Social profile links.
  // Add only real, active profiles.
  social: [
    { label: "Call Now", href: "tel:[Phone Number]" },
    { label: "WhatsApp Us", href: "https://wa.me/[WhatsApp Number]" },
    { label: "Email Us", href: "mailto:[Email Address]" }
  ],
  // Footer text and legal/utility links.
  // Usually includes legal links and copyrights.
  footer: {
    copyright: "© 2026 [Business Name]. All rights reserved.",
    links: [
      { label: "Home", href: "/" },
      { label: "About", href: "/about" },
      { label: "Services", href: "/services" },
      { label: "Contact", href: "/contact" }
    ]
  },
  // Testimonials section items.
  // Keep quotes short and believable.
  testimonials: [
    { name: "Customer Name — [City / Area]", quote: "They responded quickly, explained the work clearly, and completed everything in a professional way." },
    { name: "Customer Name — [City / Area]", quote: "Easy to contact, clear about timing, and very helpful from the first message to the final visit." },
    { name: "Customer Name — [City / Area]", quote: "The process was straightforward, the communication was clear, and the service felt dependable throughout." }
  ],
  // FAQ section entries.
  // Focus on objection handling (price, time, support, guarantees).
  faq: [
    { question: "How do I request a quote?", answer: "Send your details, choose the service you need, and explain the job. The business can review the request and reply with the next step." },
    { question: "Which service areas do you cover?", answer: "Use this section to list the city and nearby areas the business serves so visitors can quickly confirm coverage." },
    { question: "Can I contact the business by phone or WhatsApp?", answer: "Yes. Visitors can call directly or send a WhatsApp message if they want a faster response." },
    { question: "What should I include in my message?", answer: "It helps to mention the service needed, the location, and any useful job details so the business can respond clearly." }
  ]
} as const;
