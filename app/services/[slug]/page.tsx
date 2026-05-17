import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ServiceDetail from "@/components/ServiceDetail";
import { siteConfig } from "@/config/site";
import { seoConfig } from "@/config/seo";

type ServicePageProps = {
  params: Promise<{ slug: string }>;
};

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params;
  const exists = siteConfig.servicesConfig.services.some((item) => item.slug === slug && item.enabled);
  if (!exists) notFound();

  return <ServiceDetail slug={slug} />;
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = siteConfig.servicesConfig.services.find((item) => item.slug === slug && item.enabled);

  if (!service) {
    return {
      title: siteConfig.seo.pages.services.title,
      description: siteConfig.seo.pages.services.description,
    };
  }

  return {
    title: `${service.copy.en.title} | ${siteConfig.seo.siteName}`,
    description: service.copy.en.short,
    alternates: {
      canonical: `${seoConfig.siteUrl}/services/${service.slug}`,
    },
  };
}

export async function generateStaticParams() {
  return siteConfig.servicesConfig.services.filter((item) => item.enabled).map((item) => ({ slug: item.slug }));
}
