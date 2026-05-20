"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/config/site";
import { useThemeMode } from "@/components/ThemeModeProvider";

export default function Navbar() {
  const { mode, theme, toggleMode } = useThemeMode();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const navRef = useRef<HTMLElement | null>(null);
  const brandLabel = siteConfig.brand.split(" ")[0] ?? siteConfig.brand;
  const brandInitials = brandLabel.slice(0, 2).toUpperCase();

  const pageVisibilityByHref: Record<string, boolean> = {
    "/": siteConfig.pageVisibility.home,
    "/about": siteConfig.pageVisibility.about,
    "/services": siteConfig.pageVisibility.services,
    "/contact": siteConfig.pageVisibility.contact,
    "/book": siteConfig.pageVisibility.book && siteConfig.featureFlags.booking,
  };

  const navItems = siteConfig.content.nav.filter((item) => pageVisibilityByHref[item.href] ?? true);
  const serviceItems = siteConfig.servicesConfig.services.filter((item) => item.enabled);
  const showServicesOverviewLink = pathname !== "/services";
  const hiddenPrimaryHrefs = new Set<string>(["/", "/about", "/services"]);
  const visiblePrimaryItems = navItems.filter((item) => !hiddenPrimaryHrefs.has(item.href));
  const closeMenu = () => {
    setOpen(false);
    setServicesOpen(false);
  };

  useEffect(() => {
    if (!open) return;

    const handlePointerDown = (event: PointerEvent) => {
      if (!navRef.current?.contains(event.target as Node)) {
        setOpen(false);
        setServicesOpen(false);
      }
    };

    document.addEventListener("pointerdown", handlePointerDown);
    return () => document.removeEventListener("pointerdown", handlePointerDown);
  }, [open]);

  return (
    <nav
      ref={navRef}
      className="sticky top-0 z-50 border-b backdrop-blur"
      style={{ borderColor: theme.border, backgroundColor: `${theme.background}F2` }}
    >
      <div className="relative mx-auto max-w-6xl px-4 py-3 sm:px-6 sm:py-4">
        <div className="flex items-center justify-between gap-3 sm:gap-4">
          <Link href="/" className="flex min-w-0 items-center gap-3 text-base font-bold sm:text-xl">
            <span
              className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border text-xs font-semibold uppercase tracking-[0.12em] sm:h-10 sm:w-10"
              style={{ borderColor: theme.border, backgroundColor: theme.cardBackground }}
            >
              {brandInitials}
            </span>
            <span className="hidden truncate text-sm sm:block sm:text-xl">{brandLabel}</span>
          </Link>

          <div className="flex shrink-0 items-center gap-2">
            <button
              type="button"
              className="inline-flex rounded-full border px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.16em] shadow-sm transition-transform hover:-translate-y-0.5"
              style={{ borderColor: theme.border, backgroundColor: theme.cardBackground, color: theme.foreground }}
              aria-label={mode === "dark" ? "Switch to light mode" : "Switch to dark mode"}
              title={mode === "dark" ? "Light mode" : "Dark mode"}
              onClick={toggleMode}
            >
              <span aria-hidden="true">Mode</span>
            </button>

            <button
              type="button"
              className="shrink-0 rounded-xl border px-3 py-2.5 text-sm font-medium sm:px-4 sm:py-3"
              style={{ borderColor: theme.border, backgroundColor: theme.cardBackground, color: theme.foreground }}
              aria-expanded={open}
              aria-label="Toggle navigation"
              aria-controls="site-menu-panel"
              onClick={() => {
                if (open) {
                  closeMenu();
                  return;
                }
                setOpen(true);
              }}
            >
              Menu
            </button>
          </div>
        </div>
      </div>

      {open ? (
        <div
          id="site-menu-panel"
          className="fixed inset-x-0 top-[72px] z-[9999] border-t shadow-lg"
          style={{ borderColor: theme.border, backgroundColor: theme.cardBackground }}
        >
          <div
            className="mx-auto max-h-[calc(100svh-72px)] w-full max-w-6xl overflow-x-hidden overflow-y-auto px-4 py-3 sm:px-6 sm:py-4"
          >
            <div className="space-y-2">
              <button
                type="button"
                className="block w-full rounded-xl px-4 py-3 text-left"
                style={{
                  color: theme.foreground,
                  backgroundColor: pathname.startsWith("/services") ? theme.background : "transparent",
                  boxShadow: pathname.startsWith("/services") ? `inset 0 0 0 1px ${theme.border}` : `inset 0 0 0 1px transparent`,
                }}
                onClick={() => setServicesOpen((prev) => !prev)}
              >
                <span className="flex items-center justify-between gap-3">
                  <span>Services</span>
                  <span className="text-xs" aria-hidden="true">
                    {servicesOpen ? "−" : "+"}
                  </span>
                </span>
              </button>

              {servicesOpen ? (
                <div
                  className="space-y-2 rounded-2xl border p-2"
                  style={{ borderColor: theme.border, backgroundColor: theme.background }}
                >
                  {showServicesOverviewLink ? (
                    <Link
                      href="/services"
                      className="block rounded-xl px-4 py-3 text-left text-sm"
                      style={{
                        color: theme.foreground,
                        backgroundColor: "transparent",
                        boxShadow: `inset 0 0 0 1px ${theme.border}`,
                      }}
                      onClick={closeMenu}
                    >
                      All Services
                    </Link>
                  ) : null}

                  {serviceItems
                    .filter((service) => pathname !== `/services/${service.slug}`)
                    .map((service) => (
                      <Link
                        key={service.slug}
                        href={`/services/${service.slug}`}
                        className="block rounded-xl px-4 py-3 text-left text-sm"
                        style={{
                          color: theme.foreground,
                          backgroundColor: "transparent",
                          boxShadow: `inset 0 0 0 1px ${theme.border}`,
                        }}
                        onClick={closeMenu}
                      >
                        {service.copy.en.title}
                      </Link>
                    ))}
                </div>
              ) : null}

              {visiblePrimaryItems.map((item) => {
                const isActive = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="block rounded-xl px-4 py-3 text-left"
                    style={{
                      color: theme.foreground,
                      backgroundColor: isActive ? theme.background : "transparent",
                      boxShadow: isActive ? `inset 0 0 0 1px ${theme.border}` : `inset 0 0 0 1px transparent`,
                    }}
                    onClick={closeMenu}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      ) : null}
    </nav>
  );
}
