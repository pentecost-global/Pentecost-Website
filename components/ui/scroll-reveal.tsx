"use client";

import * as React from "react";

export interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  distance?: number;
  duration?: number;
  scale?: number;
  once?: boolean;
  as?: React.ElementType;
}

export function ScrollReveal({
  children,
  className = "",
  delay = 0,
  direction = "up",
  distance = 28,
  duration = 800,
  scale = 1,
  once = true,
  as: Component = "div",
}: ScrollRevealProps) {
  const ref = React.useRef<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = React.useState(false);

  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once) observer.unobserve(el);
        } else if (!once) {
          setIsVisible(false);
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [once]);

  const getInitialTransform = () => {
    const scalePart = scale !== 1 ? ` scale(${scale})` : "";
    switch (direction) {
      case "up":
        return `translate3d(0, ${distance}px, 0)${scalePart}`;
      case "down":
        return `translate3d(0, -${distance}px, 0)${scalePart}`;
      case "left":
        return `translate3d(${distance}px, 0, 0)${scalePart}`;
      case "right":
        return `translate3d(-${distance}px, 0, 0)${scalePart}`;
      case "none":
        return `translate3d(0, 0, 0)${scalePart}`;
    }
  };

  const style: React.CSSProperties = {
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? "translate3d(0, 0, 0) scale(1)" : getInitialTransform(),
    transitionProperty: "opacity, transform, filter",
    transitionDuration: `${duration}ms`,
    transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
    transitionDelay: `${delay}ms`,
    willChange: isVisible ? "auto" : "opacity, transform",
  };

  return (
    <Component ref={ref} className={className} style={style}>
      {children}
    </Component>
  );
}

export interface ScrollTextRevealProps {
  text: string;
  highlightWords?: string[];
  className?: string;
}

/**
 * Zoe Household-inspired scroll-scrubbed word/character illumination.
 * Words transition smoothly from low opacity to full opacity as the user scrolls.
 */
export function ScrollTextReveal({
  text,
  highlightWords = [],
  className = "",
}: ScrollTextRevealProps) {
  const containerRef = React.useRef<HTMLParagraphElement | null>(null);
  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced) {
      setProgress(1);
      return;
    }

    let rafId = 0;
    const updateProgress = () => {
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const start = windowHeight * 0.88;
      const end = windowHeight * 0.28;
      const raw = (start - rect.top) / (start - end);
      const clamped = Math.max(0, Math.min(1, raw));
      setProgress(clamped);
    };

    const onScroll = () => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(updateProgress);
    };

    updateProgress();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  const words = React.useMemo(() => text.split(" "), [text]);

  return (
    <p ref={containerRef} className={className}>
      {words.map((word, idx) => {
        const wordStart = idx / words.length;
        const wordEnd = (idx + 1) / words.length;
        const localProgress = Math.max(
          0,
          Math.min(1, (progress - wordStart * 0.85) / (wordEnd - wordStart + 0.15))
        );
        const opacity = 0.16 + localProgress * 0.84;
        const cleanWord = word.replace(/[.,—;:"“”]/g, "").toLowerCase();
        const isHighlighted = highlightWords.some(
          (hw) => hw.replace(/[.,—;:"“”]/g, "").toLowerCase() === cleanWord
        );
        const isActivated = localProgress > 0.52;

        if (!isHighlighted) {
          return (
            <span
              key={`${word}-${idx}`}
              style={{
                opacity,
                transition: "opacity 120ms linear",
              }}
              className="inline-block mr-[0.28em]"
            >
              {word}
            </span>
          );
        }

        // Highlighted keyword (e.g., "Word", "ablaze", "worship,", "prayer,")
        const isAblazeOrWord = cleanWord === "word" || cleanWord === "ablaze";

        return (
          <span
            key={`${word}-${idx}`}
            style={{
              opacity,
              transform: isActivated
                ? "translate3d(0, 0, 0) scale(1)"
                : "translate3d(0, 0.22em, 0) scale(0.92)",
              transition:
                "opacity 150ms linear, transform 480ms cubic-bezier(0.16, 1, 0.3, 1), color 350ms ease",
            }}
            className={`relative inline-block mr-[0.28em] font-extrabold ${
              isAblazeOrWord
                ? "px-2 py-0.5 mx-0.5 rounded-xs"
                : "text-primary"
            }`}
          >
            {/* Animated background highlight sweep for WORD and ABLAZE */}
            {isAblazeOrWord && (
              <span
                aria-hidden="true"
                style={{
                  transform: isActivated ? "scaleX(1)" : "scaleX(0)",
                  transformOrigin: "left center",
                  transition: "transform 520ms cubic-bezier(0.16, 1, 0.3, 1)",
                }}
                className={`pointer-events-none absolute inset-0 z-0 rounded-xs border ${
                  cleanWord === "ablaze"
                    ? "bg-[linear-gradient(120deg,var(--primary)_0%,var(--ember)_100%)] border-primary"
                    : "bg-[linear-gradient(120deg,var(--accent)_0%,var(--secondary)_100%)] border-primary/35"
                }`}
              />
            )}

            {/* Animated underline sweep for secondary highlighted words */}
            {!isAblazeOrWord && (
              <span
                aria-hidden="true"
                style={{
                  transform: isActivated ? "scaleX(1)" : "scaleX(0)",
                  transformOrigin: "left center",
                  transition: "transform 450ms cubic-bezier(0.16, 1, 0.3, 1)",
                }}
                className="pointer-events-none absolute left-0 right-0 bottom-0.5 z-0 h-[2.5px] bg-primary/45"
              />
            )}

            <span
              className={`relative z-10 ${
                isAblazeOrWord
                  ? cleanWord === "ablaze"
                    ? isActivated
                      ? "text-primary-foreground transition-colors duration-300"
                      : "text-primary"
                    : "text-primary"
                  : ""
              }`}
            >
              {word}
            </span>
          </span>
        );
      })}
    </p>
  );
}

export interface MarqueeStripProps {
  items: string[];
  dark?: boolean;
}

export function MarqueeStrip({ items, dark = false }: MarqueeStripProps) {
  const repeated = [...items, ...items, ...items];

  return (
    <div
      className={`marquee-strip overflow-hidden select-none border-y ${
        dark
          ? "bg-night text-on-dark border-on-dark/10"
          : "bg-secondary text-foreground border-border"
      }`}
      aria-hidden="true"
    >
      <div className="marquee-track flex items-center gap-10 py-5 whitespace-nowrap">
        {repeated.map((item, idx) => (
          <span
            key={`${item}-${idx}`}
            className="inline-flex items-center gap-10 font-display text-xl md:text-2xl font-bold uppercase tracking-[-0.03em]"
          >
            <span>{item}</span>
            <span className="size-2 rounded-none bg-ember inline-block shrink-0" />
          </span>
        ))}
      </div>
    </div>
  );
}

