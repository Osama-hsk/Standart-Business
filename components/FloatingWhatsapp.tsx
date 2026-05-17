import { siteConfig } from "@/config/site";

export default function FloatingWhatsapp() {
  const { contact } = siteConfig.content;

  if (!siteConfig.featureFlags.floatingWhatsapp || !contact.whatsapp) {
    return null;
  }

  return (
    <a
      href={contact.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={contact.buttonText}
      className="fixed bottom-4 right-4 z-50 inline-flex h-12 w-12 items-center justify-center rounded-full text-sm font-semibold shadow-lg transition-transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-offset-2 sm:bottom-5 sm:left-5 sm:right-auto sm:h-auto sm:w-auto sm:min-h-12 sm:gap-2 sm:px-4 sm:py-3"
      style={{
        backgroundColor: "#25D366",
        color: "#08130d",
        border: "1px solid rgba(8, 19, 13, 0.18)",
      }}
    >
      <span
        aria-hidden="true"
        className="grid h-7 w-7 place-items-center rounded-full bg-white/90 text-xs font-bold"
        style={{ color: "#08130d" }}
      >
        WA
      </span>
      <span className="hidden sm:inline">{contact.buttonText}</span>
    </a>
  );
}
