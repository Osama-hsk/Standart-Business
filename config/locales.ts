// Locale configuration
// Contains static language settings only.
// Add/remove supported languages here after adding a matching file in /translations.

export const activeLocale = "en" as const;
export const activeBranchId = "main" as const;

export const localesConfig = {
  active: activeLocale,
  supported: ["en", "nl", "ar"],
  labels: {
    en: "English",
    nl: "Nederlands",
    ar: "العربية"
  }
} as const;
