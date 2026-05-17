import type { Metadata } from "next";
import { notFound } from "next/navigation";
import AboutContent from "@/components/AboutContent";
import { siteConfig } from "@/config/site";
import { getPageSeo } from "@/config/seo";

export const metadata: Metadata = getPageSeo("about");

export default function AboutPage() {
  if (!siteConfig.pageVisibility.about) notFound();
  return <AboutContent />;
}

