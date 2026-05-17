import type { MetadataRoute } from "next";
import { seoConfig } from "@/config/seo";
import { servicesConfig } from "@/config/services";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseRoutes = ["", "/about", "/services", "/contact", "/book"];
  const serviceRoutes = servicesConfig.services
    .filter((service) => service.enabled)
    .map((service) => `/services/${service.slug}`);

  return [...baseRoutes, ...serviceRoutes].map((route) => ({
    url: `${seoConfig.siteUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route.startsWith("/services/") ? "monthly" : "weekly",
    priority: route === "" ? 1 : 0.7,
  }));
}
