"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  ArrowUpRightIcon,
  CaretDownIcon,
  CaretRightIcon,
  FlameIcon,
  ListIcon,
  XIcon,
} from "@phosphor-icons/react";
import { Brand } from "@/components/brand";
import { Button, ButtonLink } from "@/components/ui/button";
import { NAV_ITEMS } from "@/lib/constants";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const [expressionsExpanded, setExpressionsExpanded] = React.useState(true);
  const [scrolled, setScrolled] = React.useState(false);
  const pathname = usePathname();
  const toggleButtonRef = React.useRef<HTMLButtonElement>(null);

  React.useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll & support Escape key when fullscreen mobile drawer is open
  React.useEffect(() => {
    if (!mobileMenuOpen) {
      document.body.style.overflow = "";
      return;
    }

    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMobileMenuOpen(false);
        toggleButtonRef.current?.focus();
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [mobileMenuOpen]);

  const serviceSubLinks = [
    { label: "Serve the Movement", href: "/get-involved" },
    { label: "Partner Churches & Ministries", href: "/partners" },
    { label: "Young Believers Forum", href: "/forum" },
  ];

  const primaryDrawerLinks = [
    { label: "Gatherings", href: "/gatherings", delayIndex: 0 },
  ];

  const bottomDrawerLinks = [
    { label: "The Mandate", href: "/about", delayIndex: 4 },
    { label: "Media & Witness", href: "/media", delayIndex: 5 },
    { label: "Contact", href: "/contact", delayIndex: 6 },
  ];

  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <header
        className={`site-header transition-colors duration-200 ${
          scrolled ? "bg-background/95 backdrop-blur-md" : "bg-background"
        }`}
      >
        <div className="site-width header-inner">
          <Link
            href="/"
            aria-label="Pentecost home"
            className="group inline-flex items-center gap-3"
          >
            <span className="inline-flex size-9 items-center justify-center rounded-sm bg-accent text-primary transition-colors duration-200 group-hover:bg-primary group-hover:text-primary-foreground">
              <FlameIcon size={20} weight="duotone" />
            </span>
            <Brand />
          </Link>

          <nav className="desktop-nav" aria-label="Main navigation">
            <div className="flex items-center gap-1 rounded-sm bg-secondary border border-border px-1.5 py-1">
              {NAV_ITEMS.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    data-status={isActive ? "active" : undefined}
                    className={`relative rounded-sm px-3.5 py-2 text-xs font-semibold tracking-[-0.01em] transition-colors duration-200 ${
                      isActive
                        ? "bg-background text-primary shadow-2xs"
                        : "text-foreground/80 hover:text-primary hover:bg-background/60"
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </div>

            <ButtonLink variant="movement" size="default" href="/get-involved">
              Get Involved <ArrowUpRightIcon size={15} weight="bold" />
            </ButtonLink>
          </nav>

          <Button
            ref={toggleButtonRef}
            variant="ghost"
            size="icon"
            className="mobile-toggle"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
          >
            <ListIcon size={22} weight="bold" />
          </Button>
        </div>
      </header>

      {/* Fullscreen Dark Mobile Drawer with Curtain Enter & Exit Transitions */}
      <div
        id="mobile-navigation"
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
        aria-hidden={!mobileMenuOpen}
        className={`fixed inset-0 z-[100] flex flex-col justify-between bg-[linear-gradient(180deg,var(--night)_0%,oklch(17%_0.015_40)_100%)] text-on-dark px-7 py-6 overflow-y-auto transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] lg:hidden ${
          mobileMenuOpen
            ? "pointer-events-auto opacity-100 [clip-path:inset(0_0_0%_0)]"
            : "pointer-events-none opacity-0 [clip-path:inset(0_0_100%_0)]"
        }`}
      >
        {/* Top Row: Brand Wordmark + Close Button */}
        <div
          style={{
            transitionDelay: mobileMenuOpen ? "80ms" : "0ms",
          }}
          className={`flex items-center justify-between transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
            mobileMenuOpen
              ? "translate-y-0 opacity-100"
              : "-translate-y-3 opacity-0"
          }`}
        >
          <Link
            href="/"
            onClick={() => setMobileMenuOpen(false)}
            className="font-display text-2xl font-extrabold tracking-[-0.04em] text-on-dark"
          >
            Pentecost<span className="text-ember">.</span>
          </Link>

          <button
            type="button"
            aria-label="Close menu"
            onClick={() => {
              setMobileMenuOpen(false);
              toggleButtonRef.current?.focus();
            }}
            className="inline-flex size-10 items-center justify-center rounded-sm text-on-dark/85 transition-all duration-200 hover:text-ember hover:rotate-90 cursor-pointer"
          >
            <XIcon size={24} weight="regular" />
          </button>
        </div>

        {/* Center Navigation List */}
        <nav className="my-auto py-10 flex flex-col gap-5">
          {/* Top-level item: Gatherings */}
          {primaryDrawerLinks.map((item) => {
            const isActive = pathname === item.href;
            return (
              <div
                key={item.href}
                style={{
                  transitionDelay: mobileMenuOpen ? "140ms" : "0ms",
                }}
                className={`transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                  mobileMenuOpen
                    ? "translate-y-0 opacity-100"
                    : "translate-y-4 opacity-0"
                }`}
              >
                <Link
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`group flex items-center justify-between py-1.5 font-sans text-[22px] font-normal tracking-[-0.02em] transition-colors ${
                    isActive
                      ? "text-ember font-semibold"
                      : "text-on-dark/80 hover:text-on-dark"
                  }`}
                >
                  <span>{item.label}</span>
                  <CaretRightIcon
                    size={18}
                    weight="regular"
                    className="text-on-dark/55 transition-transform duration-200 group-hover:translate-x-1 group-hover:text-ember"
                  />
                </Link>
              </div>
            );
          })}

          {/* Expandable Section: Expressions & Service (with sub-links & diagonal arrows) */}
          <div
            style={{
              transitionDelay: mobileMenuOpen ? "200ms" : "0ms",
            }}
            className={`transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
              mobileMenuOpen
                ? "translate-y-0 opacity-100"
                : "translate-y-4 opacity-0"
            }`}
          >
            <button
              type="button"
              onClick={() => setExpressionsExpanded((prev) => !prev)}
              aria-expanded={expressionsExpanded}
              className="flex w-full items-center justify-between py-1.5 font-sans text-[22px] font-normal tracking-[-0.02em] text-on-dark/80 hover:text-on-dark transition-colors cursor-pointer"
            >
              <span>Expressions</span>
              <CaretDownIcon
                size={18}
                weight="regular"
                className={`text-on-dark/55 transition-transform duration-300 ${
                  expressionsExpanded ? "rotate-0 text-ember" : "-rotate-90"
                }`}
              />
            </button>

            <div
              className={`grid transition-all duration-350 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                expressionsExpanded
                  ? "grid-rows-[1fr] opacity-100 mt-4 mb-2"
                  : "grid-rows-[0fr] opacity-0 mt-0 mb-0"
              }`}
            >
              <div className="overflow-hidden">
                {/* Category Heading with Dash */}
                <p className="font-display text-lg font-bold tracking-[-0.02em] text-on-dark mb-3">
                  Walk With Us -
                </p>

                {/* Divided Sub-Links with Diagonal Arrow */}
                <div className="divide-y divide-on-dark/10 border-b border-on-dark/10">
                  {serviceSubLinks.map((sub) => {
                    const isSubActive = pathname === sub.href;
                    return (
                      <Link
                        key={sub.href}
                        href={sub.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className={`group flex items-center justify-between py-3 text-sm transition-colors ${
                          isSubActive
                            ? "text-ember font-semibold"
                            : "text-on-dark/70 hover:text-on-dark"
                        }`}
                      >
                        <span>{sub.label}</span>
                        <ArrowUpRightIcon
                          size={14}
                          weight="bold"
                          className="text-on-dark/55 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-ember"
                        />
                      </Link>
                    );
                  })}
                </div>

                {/* Bold Secondary Pillars with Dash */}
                <div className="mt-6 flex flex-col gap-3">
                  <Link
                    href="/about"
                    onClick={() => setMobileMenuOpen(false)}
                    className="font-display text-lg font-bold tracking-[-0.02em] text-on-dark hover:text-ember transition-colors"
                  >
                    Spiritual Renewal -
                  </Link>
                  <Link
                    href="/partners"
                    onClick={() => setMobileMenuOpen(false)}
                    className="font-display text-lg font-bold tracking-[-0.02em] text-on-dark hover:text-ember transition-colors"
                  >
                    Church Unity -
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Remaining Primary Navigation Rows with Right Chevrons */}
          {bottomDrawerLinks.map((item, idx) => {
            const isActive = pathname === item.href;
            return (
              <div
                key={item.href}
                style={{
                  transitionDelay: mobileMenuOpen
                    ? `${260 + idx * 55}ms`
                    : "0ms",
                }}
                className={`transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                  mobileMenuOpen
                    ? "translate-y-0 opacity-100"
                    : "translate-y-4 opacity-0"
                }`}
              >
                <Link
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`group flex items-center justify-between py-1.5 font-sans text-[22px] font-normal tracking-[-0.02em] transition-colors ${
                    isActive
                      ? "text-ember font-semibold"
                      : "text-on-dark/80 hover:text-on-dark"
                  }`}
                >
                  <span>{item.label}</span>
                  <CaretRightIcon
                    size={18}
                    weight="regular"
                    className="text-on-dark/55 transition-transform duration-200 group-hover:translate-x-1 group-hover:text-ember"
                  />
                </Link>
              </div>
            );
          })}
        </nav>

        {/* Bottom Horizontal Social Links Row */}
        <div
          style={{
            transitionDelay: mobileMenuOpen ? "420ms" : "0ms",
          }}
          className={`pt-6 border-t border-on-dark/10 flex items-center justify-between text-xs font-medium text-on-dark/55 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
            mobileMenuOpen
              ? "translate-y-0 opacity-100"
              : "translate-y-3 opacity-0"
          }`}
        >
          <a
            href="https://instagram.com/pentecostymc"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-on-dark transition-colors"
          >
            Instagram
          </a>
          <a
            href="https://youtube.com/@pentecostymc"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-on-dark transition-colors"
          >
            YouTube
          </a>
          <a
            href="https://x.com/pentecostymc"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-on-dark transition-colors"
          >
            Twitter / X
          </a>
        </div>
      </div>
    </>
  );
}
