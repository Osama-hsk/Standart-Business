import type { Metadata } from "next";
import type { CSSProperties } from "react";
import { Geist, Geist_Mono } from "next/font/google";
import { LanguageProvider } from "@/components/LanguageProvider";
import { ThemeModeProvider } from "@/components/ThemeModeProvider";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsapp from "@/components/FloatingWhatsapp";
import { siteConfig } from "@/config/site";
import { themeContrastWarnings } from "@/config/theme";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: siteConfig.seo.defaultTitle,
  description: siteConfig.seo.defaultDescription,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  if (themeContrastWarnings.length > 0) {
    for (const warning of themeContrastWarnings) {
      console.warn(warning);
    }
  }

  const { theme } = siteConfig;
  const activeBranch =
    siteConfig.branches.locations.find((branch) => branch.id === siteConfig.branches.activeBranchId) ??
    siteConfig.branches.locations[0];
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: siteConfig.brand,
    url: siteConfig.seo.siteUrl,
    email: siteConfig.content.contact.email,
    telephone: activeBranch.phone,
    address: activeBranch.address,
    openingHours: activeBranch.hours,
  };

  return (
    <html lang={siteConfig.locale.lang}>
      <body
        className={`${geistSans.variable} ${geistMono.variable}`}
        style={{
          "--background": theme.background,
          "--foreground": theme.foreground,
          "--color-primary": theme.primary,
          "--color-primary-foreground": theme.primaryForeground,
          "--color-muted": theme.muted,
          "--color-border": theme.border,
          "--color-card-background": theme.cardBackground,
        } as CSSProperties}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <ThemeModeProvider>
          <LanguageProvider>
            <Navbar />
            {children}
            <Footer />
            <FloatingWhatsapp />
          </LanguageProvider>
        </ThemeModeProvider>
      </body>
    </html>
  );
}
