export const en = {
  dir: "ltr",
  nav: { home: "Home", about: "About", services: "Services", contact: "Contact", book: "Book" },
  common: { menu: "Menu", language: "Language" },
  serviceActions: { readMore: "Read More", backToServices: "Back to Services" },
  hero: {
    title: "A clear service website built to generate requests",
    subtitle: "Give customers one clear place to understand your services, trust your business, and contact you easily.",
    cta: "Request a Quote",
    bookingCta: "Book a Service",
  },
  sections: {
    servicesTitle: "Your services, explained simply",
    testimonialsTitle: "Turn interest into calls, messages, or bookings.",
    faqTitle: "Help visitors understand what you do in seconds.",
    contactInfoTitle: "Business Details",
    socialTitle: "Follow Us",
  },
  about: {
    title: "Customers should not have to guess what you offer",
    description: "If people cannot quickly understand your services, service area, and next step, they may leave and contact someone else.",
    mission: "This website is built for one purpose: helping customers understand the business and take action.",
  },
  contact: {
    title: "Make the next step obvious",
    description: "Whether customers want to call, message, or request an appointment, the path should be simple and visible.",
    buttonText: "Book a Service",
  },
  globalCta: {
    text: "This website is built for one purpose: helping customers understand the business and take action.",
    buttonLabel: "Request a Quote",
  },
  booking: {
    title: "Book a Service",
    description: "Whether customers want to call, message, or request an appointment, the path should be simple and visible.",
    buttonText: "Book a Service",
    successMessage: "Request sent successfully.",
    errorMessage: "Failed to send booking request. Please try again.",
    appointmentType: "Service request type",
    openSheet: "Open bookings sheet",
    fields: {
      name: { label: "Full name", placeholder: "Full name" },
      email: { label: "Email", placeholder: "Email" },
      phone: { label: "Phone", placeholder: "Phone" },
      date: { label: "Preferred date & time" },
      notes: { label: "Notes", placeholder: "Notes" },
      honeypot: { label: "Website", placeholder: "Leave this empty" },
    },
  },
  services: [
    { title: "Web Design", desc: "Modern responsive websites" },
    { title: "SEO", desc: "Rank higher on Google" },
    { title: "Performance", desc: "Fast loading optimized sites" },
  ],
  testimonials: [
    { name: "Demo", quote: "Clear services. Easy contact. More confident customers." },
    { name: "Demo", quote: "Built for local businesses that need customers to take action." },
  ],
  faq: [
    { question: "Clear services. Easy contact. More confident customers.", answer: "Help visitors understand what you do in seconds." },
    { question: "Turn interest into calls, messages, or bookings.", answer: "Built for local businesses that need customers to take action." },
    { question: "No confusion. Just clear information and a simple next step.", answer: "This website is built for one purpose: helping customers understand the business and take action." },
  ],
} as const;
