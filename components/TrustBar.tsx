import { siteConfig } from "@/config/site";

export default function TrustBar() {
  const { trustBar } = siteConfig.content;
  const { featureFlags } = siteConfig;
  if (!featureFlags.trustBar || !trustBar.enabled) return null;

  return (
    <section className="px-4 sm:px-6 pt-6">
      <div className={`${siteConfig.ui.containerWidth} mx-auto`}>
        <h3 className="text-lg sm:text-xl font-semibold mb-3">{trustBar.title}</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {trustBar.items.map((item) => (
            <div
              key={item}
              className={`px-4 py-4 ${siteConfig.ui.radius} text-sm font-medium`}
              style={{ border: "1px solid var(--color-border)", backgroundColor: "var(--color-card-background)" }}
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
