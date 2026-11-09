"use client";

import * as React from "react";
import {
  ArrowDownIcon,
  ArrowUpRightIcon,
  CalendarCheckIcon,
  CaretDownIcon,
  CaretLeftIcon,
  CaretRightIcon,
  ClockIcon,
  CompassIcon,
  FlameIcon,
  MapPinLineIcon,
  SparkleIcon,
  UsersThreeIcon,
} from "@phosphor-icons/react";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { ButtonLink } from "@/components/ui/button";

export interface PastGathering {
  id: string;
  city: string;
  country: string;
  edition: string;
  dateBadge: string;
  theme: string;
  tagline: string;
  summary: string;
  image: string;
  highlights: string[];
  scripture: string;
  churchesRepresented: string;
  videoHref?: string;
}

export const PAST_GATHERINGS: PastGathering[] = [
  {
    id: "glasgow-2",
    city: "Glasgow",
    country: "Scotland",
    edition: "Gathering II",
    dateBadge: "Recent Gathering",
    theme: "Deeper In The River",
    tagline: "Consecration, apostolic Word & hunger for Christ",
    summary:
      "A return to Glasgow marked by deep, quiet consecration, fervent altar ministry, and cross-church alignment. Believers and student delegations gathered from across Scotland in corporate surrender.",
    image: "/assets/pentecost-glasgow-minister.jpg",
    highlights: [
      "Over 14 local churches and campus fellowships united under one roof",
      "Corporate midnight prayer watch and extended worship without hurry",
      "Powerful ministry of the Word addressing personal holiness and revival",
      "Video highlight & testimonials documented in the Pentecost media gallery",
    ],
    scripture: "Ezekiel 47:5 · Acts 2:1-4",
    churchesRepresented: "14+ Churches & Student Unions",
    videoHref: "/media#glasgow-highlight",
  },
  {
    id: "glasgow-1",
    city: "Glasgow",
    country: "Scotland",
    edition: "Gathering I",
    dateBadge: "Milestone Gathering",
    theme: "One Body, Set Ablaze",
    tagline: "Breaking denominational barriers in the West of Scotland",
    summary:
      "The historic first gathering in Glasgow that demonstrated the hunger among young Scottish believers. Denominational walls crumbled as youth and leaders lifted Jesus together.",
    image: "/assets/pentecost-glasgow-speaker-praying.jpg",
    highlights: [
      "Young believers weeping together in intercession across denominational lines",
      "Spontaneous prayer circles of campus students and university Christian unions",
      "Laying down titles to exalt only the name of Christ in Glasgow",
      "Establishing ongoing prayer chains across Scottish universities",
    ],
    scripture: "John 17:21 · Judges 15:4",
    churchesRepresented: "Cross-Denominational Fellowship",
    videoHref: "/media#glasgow-full",
  },
  {
    id: "aberdeen",
    city: "Aberdeen",
    country: "Scotland",
    edition: "Gathering",
    dateBadge: "Milestone Gathering",
    theme: "The Northern Fire",
    tagline: "Campus mobilisation and awakening in the Granite City",
    summary:
      "A catalytic gathering bringing together university students from Aberdeen and Robert Gordon University, alongside local ministries hungry for genuine Holy Spirit revival.",
    image: "/assets/gallery-5.jpg",
    highlights: [
      "High concentration of university students and international scholars",
      "Deep prayer burden birthed for university campuses and Scottish cities",
      "Equipping young leaders to maintain revival flames in their local churches",
      "Pre-gathering midnight prayer watches that knit leaders together in love",
    ],
    scripture: "Acts 4:31 · Psalm 110:3",
    churchesRepresented: "Campus CUs & Aberdeen Fellowships",
  },
  {
    id: "coventry",
    city: "Coventry",
    country: "England",
    edition: "Gathering",
    dateBadge: "Milestone Gathering",
    theme: "Igniting the Midlands",
    tagline: "Uniting campus fellowships and urban ministries",
    summary:
      "A strategic gathering in the heart of England. Believers traveled from surrounding West Midlands towns and universities, uniting in relentless prayer and worship.",
    image: "/assets/gallery-2.jpg",
    highlights: [
      "Rallying point for students across Warwick, Coventry and Birmingham regions",
      "Focus on biblical discipleship and consecration among young ministers",
      "Heartfelt repentance, deliverance from nominal religion, and joy in Christ",
      "Long-term small group discipleship clusters formed post-gathering",
    ],
    scripture: "Habakkuk 3:2 · 2 Chronicles 7:14",
    churchesRepresented: "Midlands Churches & Campus Groups",
  },
  {
    id: "plymouth",
    city: "Plymouth",
    country: "England",
    edition: "Gathering",
    dateBadge: "Milestone Gathering",
    theme: "Coastal Awakening",
    tagline: "Sounding the alarm for revival in the South West",
    summary:
      "Taking the mandate to the coastal South West of England. Believers gathered with a shared ache to see the spiritual temperature of their region radically shifted toward Jesus.",
    image: "/assets/gallery-1.jpg",
    highlights: [
      "Regional gathering connecting scattered believers and youth fellowships",
      "Powerful acoustic and vocal corporate worship that filled the atmosphere",
      "Evangelistic commissioning of young believers to win their friends",
      "Deep personal ministry and reconciliation among young Christians",
    ],
    scripture: "Isaiah 42:10 · Acts 1:8",
    churchesRepresented: "South West Ministries & Fellowships",
  },
];

export function PastGatheringsSection({
  isCompact = false,
}: {
  isCompact?: boolean;
}) {
  const [activeCityId, setActiveCityId] = React.useState<string>(
    PAST_GATHERINGS[0].id
  );
  const [expandedId, setExpandedId] = React.useState<string | null>(null);
  const [isPaused, setIsPaused] = React.useState<boolean>(false);
  const touchStartX = React.useRef<number | null>(null);

  const activeGathering =
    PAST_GATHERINGS.find((g) => g.id === activeCityId) || PAST_GATHERINGS[0];
  const currentIndex = PAST_GATHERINGS.findIndex((g) => g.id === activeCityId);

  const goToNext = () => {
    const nextIdx = (currentIndex + 1) % PAST_GATHERINGS.length;
    setActiveCityId(PAST_GATHERINGS[nextIdx].id);
    setExpandedId(null);
  };

  const goToPrev = () => {
    const prevIdx =
      (currentIndex - 1 + PAST_GATHERINGS.length) % PAST_GATHERINGS.length;
    setActiveCityId(PAST_GATHERINGS[prevIdx].id);
    setExpandedId(null);
  };

  // Auto-cycle through past gatherings every 6.5s (paused on hover or touch)
  React.useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setActiveCityId((prevId) => {
        const idx = PAST_GATHERINGS.findIndex((g) => g.id === prevId);
        const nextIdx = (idx + 1) % PAST_GATHERINGS.length;
        return PAST_GATHERINGS[nextIdx].id;
      });
    }, 6500);
    return () => clearInterval(timer);
  }, [isPaused]);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const deltaX = e.changedTouches[0].clientX - touchStartX.current;
    touchStartX.current = null;
    if (deltaX > 45) {
      goToPrev();
    } else if (deltaX < -45) {
      goToNext();
    }
  };

  const toggleExpand = (id: string) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  return (
    <section
      id="past-gatherings"
      className="section bg-[linear-gradient(180deg,var(--secondary)_0%,var(--background)_100%)] border-b border-border/80"
    >
      <div className="site-width">
        {/* Section Header */}
        <ScrollReveal direction="up" distance={20}>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-border/60">
            <div>
              <p className="eyebrow section-label">The Movement in Motion</p>
              <h2 className="tracking-[-0.04em] text-3xl sm:text-4xl md:text-5xl font-extrabold text-foreground">
                Past Pentecost Gatherings
              </h2>
            </div>
            <p className="text-sm text-muted-foreground max-w-md leading-relaxed">
              Pentecost is not a fixed one-city annual event. It is a Spirit-led, city-to-city river. Explore where the outpouring has touched lives across the United Kingdom.
            </p>
          </div>
        </ScrollReveal>

        {/* City Filter Strip: Fast Navigation & Selection with Prev/Next Controls */}
        <div className="mt-8 flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-2">
          <div className="flex flex-wrap items-center gap-2">
            {PAST_GATHERINGS.map((g) => {
              const isSelected = g.id === activeCityId;
              return (
                <button
                  key={g.id}
                  type="button"
                  onClick={() => {
                    setActiveCityId(g.id);
                    setExpandedId(null);
                  }}
                  className={`inline-flex items-center gap-2 rounded-sm px-4 py-2 text-xs font-bold uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                    isSelected
                      ? "bg-primary text-primary-foreground shadow-sm scale-102"
                      : "bg-background border border-border text-foreground hover:border-primary/50 hover:bg-secondary"
                  }`}
                >
                  <MapPinLineIcon
                    size={14}
                    weight={isSelected ? "fill" : "regular"}
                    className={isSelected ? "text-primary-foreground" : "text-primary"}
                  />
                  <span>
                    {g.city} {g.edition !== "Gathering" ? `(${g.edition})` : ""}
                  </span>
                  <span className="text-[10px] opacity-75 hidden sm:inline">
                    · {g.country}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Prev / Next Carousel Arrows */}
          <div className="flex items-center gap-2 shrink-0">
            <span className="text-[11px] text-muted-foreground font-medium mr-1 hidden sm:inline">
              Swipe or use arrows:
            </span>
            <button
              type="button"
              onClick={goToPrev}
              aria-label="Previous past city"
              className="inline-flex size-8 items-center justify-center rounded-sm border border-border bg-background text-foreground hover:bg-secondary hover:border-primary/50 transition-colors cursor-pointer"
            >
              <CaretLeftIcon size={16} weight="bold" />
            </button>
            <button
              type="button"
              onClick={goToNext}
              aria-label="Next past city"
              className="inline-flex size-8 items-center justify-center rounded-sm border border-border bg-background text-foreground hover:bg-secondary hover:border-primary/50 transition-colors cursor-pointer"
            >
              <CaretRightIcon size={16} weight="bold" />
            </button>
          </div>
        </div>

        {/* Active Gathering Showcase Card (with Swipe & Auto-Swipe) */}
        <div
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          className="mt-6 rounded-md border border-border bg-background overflow-hidden shadow-sm touch-pan-y"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
            {/* Visual Column */}
            <div className="lg:col-span-5 relative min-h-[300px] lg:min-h-[440px] bg-night overflow-hidden">
              <img
                src={activeGathering.image}
                alt={`${activeGathering.city} Pentecost Gathering`}
                loading="lazy"
                decoding="async"
                className="absolute inset-0 size-full object-cover object-center transition-all duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-night/95 via-night/40 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-r from-night/60 via-transparent to-transparent hidden lg:block" />

              {/* Floating City & Country Badge */}
              <div className="absolute top-4 left-4 z-10 flex items-center gap-2">
                <span className="hero-glass-card px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-ember">
                  {activeGathering.city} · {activeGathering.edition}
                </span>
                <span className="rounded-sm bg-black/60 backdrop-blur-sm border border-white/15 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-on-dark">
                  {activeGathering.dateBadge}
                </span>
              </div>

              {/* Bottom Quote & Scripture on Image */}
              <div className="absolute bottom-4 inset-x-4 z-10 text-on-dark">
                <span className="text-[10px] font-bold uppercase tracking-widest text-ember block">
                  Anchor Word
                </span>
                <p className="font-display text-sm font-semibold mt-0.5 text-on-dark/95">
                  &ldquo;{activeGathering.scripture}&rdquo;
                </p>
                <p className="text-[11px] text-dark-muted mt-1">
                  {activeGathering.churchesRepresented}
                </p>
              </div>
            </div>

            {/* Content Column */}
            <div className="lg:col-span-7 p-6 sm:p-8 lg:p-10 flex flex-col justify-between">
              <div>
                <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border/70 pb-4">
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-widest text-primary block">
                      Theme
                    </span>
                    <h3 className="font-display text-2xl sm:text-3xl font-extrabold uppercase tracking-tight text-foreground mt-0.5">
                      {activeGathering.theme}
                    </h3>
                  </div>
                  <span className="inline-flex items-center gap-1.5 rounded-sm bg-accent px-3 py-1 text-xs font-bold text-primary">
                    <FlameIcon size={14} weight="fill" />
                    City Outpouring
                  </span>
                </div>

                <p className="font-sans text-sm sm:text-base font-semibold text-foreground/90 mt-4">
                  {activeGathering.tagline}
                </p>

                <p className="text-sm leading-relaxed text-muted-foreground mt-3">
                  {activeGathering.summary}
                </p>

                {/* Collapsible Key Highlights Drawer (Satisfying Compact Layout) */}
                <div className="mt-6 border border-border/70 rounded-sm bg-secondary/50 overflow-hidden">
                  <button
                    type="button"
                    onClick={() => toggleExpand(activeGathering.id)}
                    className="w-full px-4 py-3 flex items-center justify-between text-xs font-bold uppercase tracking-wider text-foreground hover:bg-secondary transition-colors cursor-pointer"
                    aria-expanded={expandedId === activeGathering.id}
                  >
                    <span className="flex items-center gap-2">
                      <SparkleIcon size={15} weight="duotone" className="text-primary" />
                      Gathering Highlights &amp; Spiritual Impact
                    </span>
                    <CaretDownIcon
                      size={16}
                      weight="bold"
                      className={`text-primary transition-transform duration-300 ${
                        expandedId === activeGathering.id ? "rotate-180" : "rotate-0"
                      }`}
                    />
                  </button>

                  <div
                    className={`grid transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                      expandedId === activeGathering.id
                        ? "grid-rows-[1fr] opacity-100 p-4 pt-1 border-t border-border/70"
                        : "grid-rows-[0fr] opacity-0 p-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <ul className="space-y-2 mt-2">
                        {activeGathering.highlights.map((h, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-2.5 text-xs text-muted-foreground leading-relaxed"
                          >
                            <span className="size-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                            <span>{h}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Actions */}
              <div className="mt-8 pt-6 border-t border-border/70 flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-2 text-xs font-medium text-muted-foreground">
                  <MapPinLineIcon size={16} className="text-primary shrink-0" />
                  <span>
                    Past host city: <strong>{activeGathering.city}, {activeGathering.country}</strong>
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  {activeGathering.videoHref && (
                    <ButtonLink
                      variant="movement"
                      size="sm"
                      href={activeGathering.videoHref}
                    >
                      Watch Glasgow Highlights <ArrowUpRightIcon size={14} weight="bold" />
                    </ButtonLink>
                  )}
                  <ButtonLink
                    variant="outline"
                    size="sm"
                    href="/get-involved"
                  >
                    Join the Workforce
                  </ButtonLink>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Compact History Horizon Strip */}
        <div className="mt-10 rounded-sm border border-border bg-secondary/60 p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3.5">
            <span className="inline-flex size-10 items-center justify-center rounded-sm bg-primary/10 text-primary shrink-0">
              <CompassIcon size={22} weight="duotone" />
            </span>
            <div>
              <p className="font-display text-sm font-bold text-foreground">
                Upcoming Horizon: Blackpool Gathering
              </p>
              <p className="text-xs text-muted-foreground">
                We are currently praying and mobilising volunteer teams for Blackpool.
              </p>
            </div>
          </div>

          <ButtonLink
            variant="movement"
            size="sm"
            href="/get-involved"
            className="shrink-0"
          >
            Volunteer for Blackpool <ArrowUpRightIcon size={14} weight="bold" />
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
