"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useSyncExternalStore } from "react";
import { themeConfig } from "@/config/theme";

type Mode = "dark" | "light";

type ThemeModeContextType = {
  mode: Mode;
  toggleMode: () => void;
  theme: (typeof themeConfig.themes)[keyof typeof themeConfig.themes]; // Current theme object (union of all themes)
};

const ThemeModeContext = createContext<ThemeModeContextType | null>(null);
const defaultMode: Mode = "dark";
const storageKey = "site-theme-mode";
const modeChangeEvent = "site-theme-mode-change";

function readStoredMode(): Mode {
  if (typeof window === "undefined") return defaultMode;
  return window.localStorage.getItem(storageKey) === "light" ? "light" : defaultMode;
}

function subscribeToModeChanges(onStoreChange: () => void) {
  if (typeof window === "undefined") return () => {};

  window.addEventListener("storage", onStoreChange);
  window.addEventListener(modeChangeEvent, onStoreChange);

  return () => {
    window.removeEventListener("storage", onStoreChange);
    window.removeEventListener(modeChangeEvent, onStoreChange);
  };
}

export function ThemeModeProvider({ children }: { children: React.ReactNode }) {
  const mode = useSyncExternalStore(subscribeToModeChanges, readStoredMode, () => defaultMode);

  const currentTheme = useMemo(() => {
    const darkTheme = themeConfig.themes[themeConfig.activeTheme];
    const lightTheme = themeConfig.themes[themeConfig.lightModeTheme];
    return mode === "light" ? lightTheme : darkTheme;
  }, [mode]);

  useEffect(() => {
    // Set CSS custom properties for theming
    document.body.style.setProperty("--background", currentTheme.background);
    document.body.style.setProperty("--foreground", currentTheme.foreground);
    document.body.style.setProperty("--color-primary", currentTheme.primary);
    document.body.style.setProperty("--color-primary-foreground", currentTheme.primaryForeground);
    document.body.style.setProperty("--color-muted", currentTheme.muted);
    document.body.style.setProperty("--color-border", currentTheme.border);
    document.body.style.setProperty("--color-card-background", currentTheme.cardBackground);

  }, [currentTheme]);

  const toggleMode = useCallback(() => {
    const nextMode = readStoredMode() === "dark" ? "light" : "dark";
    window.localStorage.setItem(storageKey, nextMode);
    window.dispatchEvent(new Event(modeChangeEvent));
  }, []);

  const value = useMemo(
    () => ({
      mode,
      toggleMode,
      theme: currentTheme,
    }),
    [mode, toggleMode, currentTheme]
  );

  return <ThemeModeContext.Provider value={value}>{children}</ThemeModeContext.Provider>;
}

export function useThemeMode() {
  const context = useContext(ThemeModeContext);
  if (!context) throw new Error("useThemeMode must be used inside ThemeModeProvider");
  return context;
}
