import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Services from "@/components/Services";
import { siteConfig } from "@/config/site";
import { getPageSeo } from "@/config/seo";

export const metadata: Metadata = getPageSeo("services");

export default function ServicesPage() {
  if (!siteConfig.pageVisibility.services) notFound();

  return (
    <main>
      <Services showHeading limit={siteConfig.servicesConfig.showOnHomeCount} />
    </main>
  );
}

