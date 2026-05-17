// Theme configuration
// Contains all theme presets, active theme settings, and theme utilities

const themes = {
  slate: {
    background: "#000000",
    foreground: "#d4af37",
    primary: "#000000",
    primaryForeground: "#d4af37",
    muted: "#c9a227",
    border: "#5c4a12",
    cardBackground: "#111111"
  },
  emerald: {
    background: "#f8fffb",
    foreground: "#052e2b",
    primary: "#047857",
    primaryForeground: "#ffffff",
    muted: "#3f5f5b",
    border: "#cce9df",
    cardBackground: "#ecfdf5"
  },
  sunset: {
    background: "#fffaf5",
    foreground: "#3a1f1a",
    primary: "#c2410c",
    primaryForeground: "#ffffff",
    muted: "#7c5a4d",
    border: "#f2dfd2",
    cardBackground: "#fff1e8"
  }
} as const;

export const activeTheme = "slate" as const;
export const lightModeTheme = "emerald" as const;

export const themeConfig = {
  activeTheme,
  lightModeTheme,
  themes,
  // Resolved active theme object consumed by components/layout.
  theme: themes[activeTheme],
} as const;

// Utility functions for theme validation
function hexToRgb(hex: string) {
  const value = hex.replace("#", "").trim();
  const normalized = value.length === 3
    ? value.split("").map((ch) => ch + ch).join("")
    : value;
  if (!/^[0-9a-fA-F]{6}$/.test(normalized)) return null;
  const int = Number.parseInt(normalized, 16);
  return {
    r: (int >> 16) & 255,
    g: (int >> 8) & 255,
    b: int & 255,
  };
}

function relativeLuminance(hex: string) {
  const rgb = hexToRgb(hex);
  if (!rgb) return null;
  const toLinear = (channel: number) => {
    const s = channel / 255;
    return s <= 0.03928 ? s / 12.92 : ((s + 0.055) / 1.055) ** 2.4;
  };
  const r = toLinear(rgb.r);
  const g = toLinear(rgb.g);
  const b = toLinear(rgb.b);
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}

function contrastRatio(a: string, b: string) {
  const la = relativeLuminance(a);
  const lb = relativeLuminance(b);
  if (la === null || lb === null) return null;
  const lighter = Math.max(la, lb);
  const darker = Math.min(la, lb);
  return (lighter + 0.05) / (darker + 0.05);
}

function validateThemeContrast(themeName: string, theme: {
  background: string;
  foreground: string;
  primary: string;
  primaryForeground: string;
  muted: string;
  border: string;
  cardBackground: string;
}) {
  const checks = [
    { label: "foreground on background", fg: theme.foreground, bg: theme.background, min: 4.5 },
    { label: "primaryForeground on primary", fg: theme.primaryForeground, bg: theme.primary, min: 4.5 },
    { label: "muted on background", fg: theme.muted, bg: theme.background, min: 3.0 },
    { label: "foreground on cardBackground", fg: theme.foreground, bg: theme.cardBackground, min: 4.5 },
  ];

  const warnings: string[] = [];
  for (const check of checks) {
    const ratio = contrastRatio(check.fg, check.bg);
    if (ratio === null) {
      warnings.push(`[Contrast Guard] Theme "${themeName}" has invalid color format in ${check.label}.`);
      continue;
    }
    if (ratio < check.min) {
      warnings.push(
        `[Contrast Guard] Theme "${themeName}" low contrast for ${check.label}: ${ratio.toFixed(2)} (min ${check.min}).`
      );
    }
  }
  return warnings;
}

// Contrast Guard: Collects readability warnings for all themes
export const themeContrastWarnings = Object.entries(themes).flatMap(([name, theme]) =>
  validateThemeContrast(name, theme)
);