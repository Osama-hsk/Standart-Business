import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { siteConfig } from "@/config/site";
import { getPageSeo } from "@/config/seo";
import Hero from "@/components/Hero";
import OfferStrip from "@/components/OfferStrip";
import TrustBar from "@/components/TrustBar";
import Services from "@/components/Services";
import AboutContent from "@/components/AboutContent";
import Contact from "@/components/Contact";
import Testimonials from "@/components/Testimonials";
import Faq from "@/components/Faq";
import MapSection from "@/components/MapSection";
import GlobalCta from "@/components/GlobalCta";

export const metadata: Metadata = getPageSeo("home");

const sectionsMap = {
  hero: <Hero />,
  offer: <OfferStrip />,
  trust: <TrustBar />,
  services: <Services limit={siteConfig.servicesConfig.showOnHomeCount} />,
  about: <AboutContent />,
  testimonials: <Testimonials />,
  faq: <Faq />,
  contact: <Contact />,
  map: <MapSection />,
} as const;

export default function Home() {
  if (!siteConfig.pageVisibility.home) notFound();
  const visibleSections = siteConfig.homeSections;

  return (
    <main>
      {siteConfig.homeSectionsOrder.map((sectionKey) =>
        visibleSections[sectionKey] ? <div key={sectionKey}>{sectionsMap[sectionKey]}</div> : null
      )}
      <GlobalCta />
    </main>
  );
}
