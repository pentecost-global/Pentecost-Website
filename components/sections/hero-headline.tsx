"use client";

import * as React from "react";

const WORDS = [
  { text: "SPIRIT.", color: "var(--swap-spirit)" },
  { text: "BODY.", color: "var(--swap-body)" },
  { text: "GENERATION.", color: "var(--swap-generation)" },
] as const;

// Add first item at end for seamless continuous upward loop
const LOOP_WORDS = [...WORDS, WORDS[0]] as const;

export function HeroHeadline() {
  const [index, setIndex] = React.useState(0);
  const [animate, setAnimate] = React.useState(true);

  React.useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced) return;

    const interval = window.setInterval(() => {
      setAnimate(true);
      setIndex((prev) => prev + 1);
    }, 2400);

    return () => window.clearInterval(interval);
  }, []);

  // When we reach the cloned last slide, snap back to 0 seamlessly after transition ends
  React.useEffect(() => {
    if (index === LOOP_WORDS.length - 1) {
      const timeout = window.setTimeout(() => {
        setAnimate(false);
        setIndex(0);
      }, 650);
      return () => window.clearTimeout(timeout);
    }
  }, [index]);

  return (
    <h1 className="tracking-[-0.045em]">
      <span className="sr-only">
        ONE SPIRIT. ONE BODY. ONE GENERATION. SET ABLAZE.
      </span>

      {/* Line 1: "ONE " + Continuous Vertical Drum Ticker */}
      <span
        aria-hidden="true"
        className="flex flex-wrap items-baseline gap-x-[0.26em]"
      >
        <span className="text-on-dark">ONE</span>
        <span className="hero-ticker-window">
          <span
            className="hero-ticker-track"
            style={{
              transform: `translate3d(0, -${index * 1.05}em, 0)`,
              transition: animate
                ? "transform 650ms cubic-bezier(0.22, 1, 0.36, 1)"
                : "none",
            }}
          >
            {LOOP_WORDS.map((item, idx) => {
              const isCurrent = idx === index;
              return (
                <span
                  key={`${item.text}-${idx}`}
                  style={{
                    color: item.color,
                    opacity: isCurrent ? 1 : 0.35,
                  }}
                  className="hero-ticker-item"
                >
                  {item.text}
                </span>
              );
            })}
          </span>
        </span>
      </span>

      {/* Line 2: SET ABLAZE. */}
      <span aria-hidden="true" className="block ignite mt-1">
        SET ABLAZE.
      </span>
    </h1>
  );
}
