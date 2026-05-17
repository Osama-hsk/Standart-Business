import { ar } from "@/translations/ar";
import { en } from "@/translations/en";
import { nl } from "@/translations/nl";

export const translations = {
  en,
  nl,
  ar,
} as const;

export type LocaleKey = keyof typeof translations;
export type TranslationBundle = (typeof translations)[LocaleKey];
