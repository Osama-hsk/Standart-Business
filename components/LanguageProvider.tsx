"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useSyncExternalStore } from "react";
import { siteConfig } from "@/config/site";
import { translations, type LocaleKey, type TranslationBundle } from "@/config/translations";

type LanguageContextType = {
  locale: LocaleKey;
  setLocale: (locale: LocaleKey) => void;
  t: TranslationBundle;
};

const LanguageContext = createContext<LanguageContextType | null>(null);
const defaultLocale = siteConfig.locales.active as LocaleKey;
const localeStorageKey = "site-locale";
const localeChangeEvent = "site-locale-change";

function isLocaleKey(value: string | null): value is LocaleKey {
  return Boolean(value && value in translations);
}

function readStoredLocale(): LocaleKey {
  if (typeof window === "undefined") return defaultLocale;

  const stored = window.localStorage.getItem(localeStorageKey);
  return isLocaleKey(stored) ? stored : defaultLocale;
}

function subscribeToLocaleChanges(onStoreChange: () => void) {
  if (typeof window === "undefined") return () => {};

  window.addEventListener("storage", onStoreChange);
  window.addEventListener(localeChangeEvent, onStoreChange);

  return () => {
    window.removeEventListener("storage", onStoreChange);
    window.removeEventListener(localeChangeEvent, onStoreChange);
  };
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const locale = useSyncExternalStore(subscribeToLocaleChanges, readStoredLocale, () => defaultLocale);

  const activeTranslations = useMemo(() => translations[locale] || translations.en, [locale]);

  useEffect(() => {
    document.documentElement.lang = locale;
    document.documentElement.dir = locale === "ar" ? "rtl" : "ltr";
  }, [locale]);

  const handleSetLocale = useCallback((nextLocale: LocaleKey) => {
    window.localStorage.setItem(localeStorageKey, nextLocale);
    window.dispatchEvent(new Event(localeChangeEvent));
  }, []);

  const value = useMemo(
    () => ({ locale, setLocale: handleSetLocale, t: activeTranslations }),
    [locale, handleSetLocale, activeTranslations]
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be used inside LanguageProvider");
  return context;
}
