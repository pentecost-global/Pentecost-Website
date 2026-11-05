"use client";

import * as React from "react";
import { ArrowUpRightIcon } from "@phosphor-icons/react/dist/ssr";
import { ButtonLink } from "@/components/ui/button";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

const GALLERY_FRAMES = [
  {
    src: "/assets/gallery-1.jpg",
    label: "United in Worship",
    tag: "01 / WORSHIP",
  },
  {
    src: "/assets/pentecost-portrait-2.jpg",
    label: "Hearts Lifted",
    tag: "02 / ENCOUNTER",
  },
  {
    src: "/assets/pentecost-portrait-5.jpg",
    label: "Fervent Prayer",
    tag: "03 / INTERCESSION",
  },
  {
    src: "/assets/gallery-5.jpg",
    label: "Outpouring of the Spirit",
    tag: "04 / PENTECOST",
  },
  {
    src: "/assets/pentecost-landscape-9.jpg",
    label: "One Body in Christ",
    tag: "05 / FELLOWSHIP",
  },
  {
    src: "/assets/pentecost-portrait-8.jpg",
    label: "Ministry of the Word",
    tag: "06 / THE WORD",
  },
  {
    src: "/assets/gallery-6.jpg",
    label: "Generation Set Ablaze",
    tag: "07 / COMMISSIONING",
  },
] as const;

const BOTTOM_HIGHLIGHTS = [
  {
    title: "Worship & Prayer Moments",
    copy: "Across churches and ministries, believers gathering with one heart and one hunger for a fresh outpouring of the Holy Spirit.",
  },
  {
    title: "The Ministry of the Word",
    copy: "Sound biblical teaching and prayer charges that strengthen, align, and commission a generation for God's purposes.",
  },
  {
    title: "Cross-Church Fellowship",
    copy: "Walking together beyond denominational walls and connecting people to thriving local Christian communities.",
  },
] as const;

export interface CurvedGallerySectionProps {
  isHero?: boolean;
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  ctaLabel?: string;
  ctaHref?: string;
}

export function CurvedGallerySection({
  isHero = false,
  eyebrow = "The Word. The witness. The moments.",
  title = "Media & Testimonies",
  subtitle = "A space for the stories, teaching and moments that point us back to Christ.",
  ctaLabel = "Explore Gatherings",
  ctaHref = "/gatherings",
}: CurvedGallerySectionProps) {
  const HeadingTag = isHero ? "h1" : "h2";
  const stageRef = React.useRef<HTMLDivElement | null>(null);
  const cardRefs = React.useRef<(HTMLDivElement | null)[]>([]);
  const [hasEntered, setHasEntered] = React.useState(false);

  // 1. Trigger staggered appear transition when stage enters viewport
  React.useEffect(() => {
    const el = stageRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasEntered(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // 2. Continuous 3D cylinder carousel that accelerates & reverses based on user page scroll velocity
  React.useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced) return;

    const N = GALLERY_FRAMES.length; // 7 cards
    let rafId = 0;
    let offset = 0;
    let scrollBoost = 0;
    let direction = 1; // 1 = left-to-right drift, -1 = right-to-left drift
    let lastScrollY = window.scrollY;
    let lastTime = performance.now();

    const handleScroll = () => {
      const currentY = window.scrollY;
      const deltaY = currentY - lastScrollY;
      lastScrollY = currentY;

      if (Math.abs(deltaY) > 0.5) {
        direction = deltaY > 0 ? 1 : -1;
        // Inject scroll impulse proportional to how fast the user scrolls
        scrollBoost = Math.max(
          -0.065,
          Math.min(0.065, scrollBoost + deltaY * 0.00055)
        );
      }
    };

    const animate = (now: number) => {
      const dt = Math.min(48, now - lastTime);
      lastTime = now;

      // Friction decay on scroll boost so it glides back to steady continuous speed
      scrollBoost *= Math.pow(0.91, dt / 16.67);

      const baseSpeed = 0.0032 * direction * (dt / 16.67);
      offset += baseSpeed + scrollBoost * (dt / 16.67);

      const width = window.innerWidth;
      const isMobile = width <= 640;

      if (isMobile) {
        cardRefs.current.forEach((card) => {
          if (card) {
            card.style.transform = "";
            card.style.height = "";
            card.style.width = "";
            card.style.marginLeft = "";
            card.style.marginTop = "";
            card.style.opacity = "1";
          }
        });
        rafId = requestAnimationFrame(animate);
        return;
      }

      const isTablet = width <= 1024;
      const stageWidth = Math.min(1680, width - 32);
      const visibleSlots = isTablet ? 5 : 6.45;
      const slotSpacing = stageWidth / visibleSlots;

      for (let i = 0; i < N; i++) {
        const card = cardRefs.current[i];
        if (!card) continue;

        // Calculate wrapped slot position u in [-3.5, +3.5]
        let u = (i - offset) % N;
        if (u < -N / 2) u += N;
        if (u > N / 2) u -= N;

        // Normalized distance from center [-1, 1] across the 3 outer slots
        const norm = u / 3;
        const absNorm = Math.abs(norm);

        // Concave 3D arc geometry matching screenshot:
        // Cards grow taller toward the outer edges, tilt inward (rotateY), and step forward in Z
        const x = u * slotSpacing;
        const rotY = -norm * 29; // +29deg on left edge, 0deg center, -29deg on right edge
        const z = (absNorm * absNorm * 40) - 14; // -14px center, +26px outer edges
        const baseH = isTablet ? 266 : 294;
        const edgeExtraH = isTablet ? 68 : 98;
        const height = baseH + Math.min(1.25, absNorm * absNorm) * edgeExtraH;

        // Smooth fade at wrap-around boundaries (|u| > 3.05) so cards wrap seamlessly
        const edgeFade =
          Math.abs(u) > 3.05
            ? Math.max(0, 1 - (Math.abs(u) - 3.05) / 0.45)
            : 1;

        const cardW = slotSpacing - 16;
        card.style.width = `${cardW}px`;
        card.style.height = `${height}px`;
        card.style.marginLeft = `${-cardW / 2}px`;
        card.style.marginTop = `${-height / 2}px`;
        card.style.opacity = `${edgeFade}`;
        card.style.zIndex = `${Math.round(50 - Math.abs(u) * 10)}`;
        card.style.transform = `translate3d(${x}px, 0px, ${z}px) rotateY(${rotY}deg)`;
      }

      rafId = requestAnimationFrame(animate);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    rafId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <section
      className={`overflow-hidden ${
        isHero
          ? "bg-[linear-gradient(180deg,var(--secondary)_0%,var(--accent)_48%,var(--background)_100%)] pt-14 pb-20 border-b border-border"
          : "section soft-section border-y border-border"
      }`}
    >
      {/* Top Centered Editorial Copy */}
      <div className="site-width text-center max-w-3xl mx-auto">
        <ScrollReveal direction="up" distance={20}>
          <p className="inline-flex items-center justify-center gap-2.5 text-[11px] font-bold uppercase tracking-[0.14em] text-primary">
            <span className="h-[1.5px] w-6 bg-primary inline-block" />
            <span>{eyebrow}</span>
            <span className="h-[1.5px] w-6 bg-primary inline-block" />
          </p>

          <HeadingTag className="mt-4 font-display text-4xl sm:text-6xl md:text-[68px] font-extrabold tracking-[-0.045em] leading-[1.02] text-foreground">
            {isHero ? (
              <>
                <span className="font-normal text-foreground/85 block text-3xl sm:text-5xl md:text-[54px] mb-1">
                  Moments of Encounter,
                </span>
                {title}
              </>
            ) : (
              <>
                <span className="font-normal text-foreground/85 block text-3xl sm:text-4xl md:text-[46px] mb-1">
                  Across Churches &amp; Cities,
                </span>
                One Shared Hunger
              </>
            )}
          </HeadingTag>

          <p className="mt-5 text-sm sm:text-[15px] leading-relaxed text-muted-foreground max-w-xl mx-auto">
            {subtitle}
          </p>

          <div className="mt-7 flex justify-center">
            <ButtonLink variant="dark" size="lg" href={ctaHref}>
              <span>{ctaLabel}</span>
              <span className="inline-flex size-5 items-center justify-center rounded-sm bg-on-dark/15">
                <ArrowUpRightIcon size={12} weight="bold" />
              </span>
            </ButtonLink>
          </div>
        </ScrollReveal>
      </div>

      {/* 3D Concave Panoramic Gallery Arc with Appear Transition + Scroll-Velocity Continuous Orbit */}
      <div ref={stageRef} className="curved-gallery-stage mt-12 sm:mt-16">
        <div className="curved-gallery-track">
          {GALLERY_FRAMES.map((frame, idx) => {
            // Staggered appear delay radiating outward from the center card (idx 3)
            const distFromCenter = Math.abs(idx - 3);
            const appearDelayMs = distFromCenter * 95;

            return (
              <div
                key={frame.tag}
                ref={(el) => {
                  cardRefs.current[idx] = el;
                }}
                className="curved-card group"
              >
                <div
                  style={{
                    opacity: hasEntered ? 1 : 0,
                    transform: hasEntered
                      ? "translate3d(0, 0, 0) scale(1)"
                      : "translate3d(0, 48px, 0) scale(0.88)",
                    transition: `opacity 750ms cubic-bezier(0.16, 1, 0.3, 1) ${appearDelayMs}ms, transform 850ms cubic-bezier(0.16, 1, 0.3, 1) ${appearDelayMs}ms`,
                  }}
                  className="curved-card-inner"
                >
                  <img
                    src={frame.src}
                    alt={frame.label}
                    loading={isHero ? "eager" : "lazy"}
                  />
                  <div className="curved-card-overlay">
                    <span className="text-[9px] font-bold tracking-[0.14em] uppercase text-ember">
                      {frame.tag}
                    </span>
                    <p className="font-display text-sm sm:text-base font-bold text-on-dark leading-tight mt-0.5">
                      {frame.label}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Bottom 3-Column Feature Row with Vertical Dividers */}
      <div className="site-width mt-14 sm:mt-16">
        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-border border-t border-border pt-10">
          {BOTTOM_HIGHLIGHTS.map((item, idx) => (
            <ScrollReveal
              key={item.title}
              direction="up"
              distance={18}
              delay={idx * 90}
              className="px-4 sm:px-8 py-4 md:py-0 text-center"
            >
              <h3 className="font-display text-lg sm:text-xl font-bold tracking-[-0.02em] text-foreground">
                {item.title}
              </h3>
              <p className="mt-2.5 text-xs sm:text-[13px] leading-relaxed text-muted-foreground max-w-xs mx-auto">
                {item.copy}
              </p>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
