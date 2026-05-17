import type { Metadata } from "next";
import { notFound } from "next/navigation";
import BookingForm from "@/components/BookingForm";
import { siteConfig } from "@/config/site";
import { getPageSeo } from "@/config/seo";

export const metadata: Metadata = getPageSeo("book");

export default function BookPage() {
  if (!siteConfig.pageVisibility.book || !siteConfig.featureFlags.booking) notFound();
  return <BookingForm />;
}
