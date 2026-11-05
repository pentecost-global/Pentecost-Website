"use client";

import * as React from "react";
import {
  ArrowUpRightIcon,
  CompassIcon,
  FlameIcon,
  UsersThreeIcon,
} from "@phosphor-icons/react";
import Link from "next/link";
import { HERO_IMAGE } from "@/lib/constants";

const PILLARS = [
  {
    number: "01",
    tag: "THE HEARTBEAT",
    title: "Encounter",
    copy: "A fresh outpouring. A deeper hunger. Hearts renewed in His presence.",
    detail:
      "We gather with expectation in worship, prayer and the ministry of the Word — making room for the Holy Spirit to renew, restore and awaken a generation.",
    scripture: "Acts 2:1-4",
    href: "/gatherings",
    cta: "Explore Gatherings",
    image: "/assets/gallery-5.jpg",
    objectPosition: "center center",
    Icon: FlameIcon,
  },
  {
    number: "02",
    tag: "THE HEARTBEAT",
    title: "Unity",
    copy: "Many churches and ministries. One body, united in Christ.",
    detail:
      "Not to build one church, but to walk together across churches, para-church ministries, and campus fellowships as one body in Christ.",
    scripture: "One Body in Christ",
    href: "/partners",
    cta: "Partner With Us",
    image: "/assets/pentecost-landscape-9.jpg",
    objectPosition: "center center",
    Icon: UsersThreeIcon,
  },
  {
    number: "03",
    tag: "THE HEARTBEAT",
    title: "Commissioning",
    copy: "Strengthened by the Word. Set ablaze to serve our generation.",
    detail:
      "Connected to local Christian communities, discipled in the Word, and aligned to live out God's purposes in every sphere.",
    scripture: "Judges 15:4",
    href: "/get-involved",
    cta: "Get Involved",
    image: "/assets/pentecost-landscape-8.jpg",
    objectPosition: "center top",
    Icon: CompassIcon,
  },
] as const;

export function InteractivePillars() {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [isPaused, setIsPaused] = React.useState(false);

  React.useEffect(() => {
    if (isPaused) return;
    const timer = window.setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % PILLARS.length);
    }, 5500);
    return () => window.clearInterval(timer);
  }, [isPaused]);

  return (
    <div
      className="mt-14"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Interactive Tab Selector with Progress Bar */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-6">
        {PILLARS.map((pillar, idx) => {
          const isActive = idx === activeIndex;
          const Icon = pillar.Icon;
          return (
            <button
              key={pillar.title}
              type="button"
              onClick={() => setActiveIndex(idx)}
              className={`group relative overflow-hidden rounded-sm border p-5 text-left transition-colors duration-200 cursor-pointer ${
                isActive
                  ? "border-primary bg-secondary"
                  : "border-border bg-background hover:border-primary/40 hover:bg-secondary/50"
              }`}
            >
              <div className="flex items-center justify-between gap-3">
                <span className="font-display text-xs font-bold tracking-widest text-primary">
                  {pillar.number} / {pillar.tag}
                </span>
                <span
                  className={`inline-flex size-8 items-center justify-center rounded-sm transition-colors duration-200 ${
                    isActive
                      ? "bg-primary text-primary-foreground"
                      : "bg-accent text-primary group-hover:bg-primary group-hover:text-primary-foreground"
                  }`}
                >
                  <Icon size={17} weight="duotone" />
                </span>
              </div>
              <div className="mt-2 font-display text-2xl font-bold tracking-[-0.03em] text-foreground">
                {pillar.title}
              </div>
              <p className="mt-1 text-xs text-muted-foreground line-clamp-1">
                {pillar.copy}
              </p>

              {/* Bottom Timer Progress Line */}
              <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-border/60">
                <div
                  className={`h-full bg-primary transition-all ${
                    isActive
                      ? "w-full duration-[5500ms] ease-linear"
                      : "w-0 duration-200"
                  }`}
                />
              </div>
            </button>
          );
        })}
      </div>

      {/* Three Pillar Cards Grid */}
      <div className="pillar-grid">
        {PILLARS.map((pillar, idx) => {
          const isActive = idx === activeIndex;
          const Icon = pillar.Icon;
          return (
            <article
              key={pillar.title}
              onClick={() => setActiveIndex(idx)}
              className={`pillar group cursor-pointer transition-all duration-300 ${
                isActive
                  ? "ring-2 ring-ember -translate-y-1"
                  : "opacity-95 hover:opacity-100 hover:-translate-y-1"
              }`}
            >
              <img
                src={pillar.image}
                alt=""
                width={1920}
                height={1088}
                loading="lazy"
                style={{ objectPosition: pillar.objectPosition }}
                className="transition-transform duration-700 ease-out group-hover:scale-105"
              />

              <div className="pillar-top flex items-center justify-between w-full">
                <span className="pillar-number">
                  {pillar.number} / {pillar.tag}
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-sm bg-night/80 border border-on-dark/20 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-ember">
                  <Icon size={12} weight="fill" />
                  {pillar.scripture}
                </span>
              </div>

              <div className="relative z-10 mt-auto pt-20">
                <h3 className="tracking-[-0.03em] transition-colors group-hover:text-ember">
                  {pillar.title}
                </h3>
                <p>{pillar.copy}</p>
                <p className="mt-2.5 text-xs leading-relaxed text-on-dark/80 border-t border-on-dark/15 pt-2.5">
                  {pillar.detail}
                </p>

                <Link
                  href={pillar.href}
                  className="mt-4 inline-flex items-center gap-2 text-xs font-bold text-ember transition-all duration-200 group-hover:gap-3"
                >
                  <span>{pillar.cta}</span>
                  <ArrowUpRightIcon
                    size={14}
                    weight="bold"
                    className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </Link>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
}
