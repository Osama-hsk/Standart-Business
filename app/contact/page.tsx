import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Contact from "@/components/Contact";
import { siteConfig } from "@/config/site";
import { getPageSeo } from "@/config/seo";

export const metadata: Metadata = getPageSeo("contact");

export default function ContactPage() {
  if (!siteConfig.pageVisibility.contact) notFound();
  return <Contact />;
}
