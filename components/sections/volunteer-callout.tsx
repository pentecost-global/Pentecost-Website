"use client";

import * as React from "react";
import {
  ArrowSquareOutIcon,
  ArrowUpRightIcon,
  BroadcastIcon,
  CaretDownIcon,
  CaretLeftIcon,
  CaretRightIcon,
  ChatCircleDotsIcon,
  CheckCircleIcon,
  ChurchIcon,
  FilmStripIcon,
  FlameIcon,
  HandHeartIcon,
  HandsPrayingIcon,
  MegaphoneIcon,
  MusicNotesIcon,
  ShieldCheckIcon,
  SparkleIcon,
  UsersThreeIcon,
  WhatsappLogoIcon,
} from "@phosphor-icons/react";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { ButtonLink } from "@/components/ui/button";

export const VOLUNTEER_FORM_URL = "https://forms.gle/bvyPwzPUauvNn4Nd9";
export const GLOBAL_WHATSAPP_URL =
  "https://chat.whatsapp.com/IqSsdt874Lb0bSFbSvppFg?s=cl&p=a&mlu=4&ilr=4";

export const VOLUNTEER_TEAMS = [
  {
    name: "Media & Technical Team",
    desc: "Sound engineering, multi-camera operations, live switching, lighting, and visual projection.",
    icon: FilmStripIcon,
    badge: "Production",
  },
  {
    name: "Contents & Social Media",
    desc: "Documenting testimonies, capturing reels for TikTok & Instagram, creative captions, and digital witness.",
    icon: BroadcastIcon,
    badge: "Creative",
  },
  {
    name: "Worship & Instrumentalists",
    desc: "Keys, guitars, bass, drums, brass, and anointed backing vocalists lifting unhurried praise.",
    icon: MusicNotesIcon,
    badge: "Music",
  },
  {
    name: "Welfare & Hospitality",
    desc: "Hosting visiting ministers, preparing volunteer meals, attendee care, and warmth.",
    icon: HandHeartIcon,
    badge: "Care",
  },
  {
    name: "Children Department",
    desc: "Loving, safe, and engaging ministry for families and young children during city gatherings.",
    icon: UsersThreeIcon,
    badge: "Family",
  },
  {
    name: "Publicity & Outreach",
    desc: "Distributing invite cards, campus flyers, banner setups, and street evangelism.",
    icon: MegaphoneIcon,
    badge: "Evangelism",
  },
  {
    name: "Prayers & Intercession",
    desc: "Midnight prayer watches, pre-gathering intercession, and altar counselling.",
    icon: HandsPrayingIcon,
    badge: "Intercession",
  },
  {
    name: "Ushering / Protocol",
    desc: "Seating coordination, entrance greeting, crowd management, and orderly movement.",
    icon: ShieldCheckIcon,
    badge: "Protocol",
  },
  {
    name: "Logistic & Planning",
    desc: "Hall setup, transit, equipment transport, venue liaison, and stage mechanics.",
    icon: ChurchIcon,
    badge: "Logistics",
  },
  {
    name: "Sanctuary Keepers",
    desc: "Ensuring the auditorium, altars, and prayer spaces are pristine, honoured, and prepared.",
    icon: SparkleIcon,
    badge: "Sanctuary",
  },
] as const;

export const MOVEMENT_SLIDES = [
  {
    title: "Why Pentecost?",
    subtitle: "In Pursuit of God's Presence",
    copy: "Pentecost is a non-denominational gathering of young believers across churches and ministries in pursuit of God’s presence.",
    image: "/assets/movement-info-why.jpg",
  },
  {
    title: "Our Vision",
    subtitle: "Strengthened. Aligned. Set Ablaze.",
    copy: "Our mandate is to see a generation strengthened, aligned, and set ablaze for the purposes of God in their time, carrying revival into their churches, communities, and regions.",
    image: "/assets/movement-info-vision.jpg",
  },
  {
    title: "Our Foundation",
    subtitle: "Judges 15:4 · Acts 2:1-4",
    copy: "“When believers are united and ignited by God, the fire of revival spreads across regions and nations.” Samson’s torches and the Day of Pentecost.",
    image: "/assets/movement-info-foundation.jpg",
  },
  {
    title: "Join the Movement",
    subtitle: "A City-to-City River",
    copy: "Pentecost is not structured as a fixed annual conference held in one location. Rather, it is a Spirit-led, city-to-city gathering moving according to the leading of the Holy Spirit. So, when this river comes to your city, don't forget to join the flow!",
    image: "/assets/movement-info-join.jpg",
  },
] as const;

export function CallForVolunteersSection({
  showFlyers = true,
}: {
  showFlyers?: boolean;
}) {
  const [activeSlide, setActiveSlide] = React.useState(0);
  const [showAllTeams, setShowAllTeams] = React.useState(false);
  const [isSlidePaused, setIsSlidePaused] = React.useState(false);
  const touchStartX = React.useRef<number | null>(null);

  // Auto-swipe every 5.5 seconds, paused on hover or touch
  React.useEffect(() => {
    if (isSlidePaused) return;
    const timer = setInterval(() => {
      setActiveSlide((prev) =>
        prev === MOVEMENT_SLIDES.length - 1 ? 0 : prev + 1
      );
    }, 5500);
    return () => clearInterval(timer);
  }, [isSlidePaused]);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const deltaX = e.changedTouches[0].clientX - touchStartX.current;
    touchStartX.current = null;
    if (deltaX > 45) {
      setActiveSlide((prev) =>
        prev === 0 ? MOVEMENT_SLIDES.length - 1 : prev - 1
      );
    } else if (deltaX < -45) {
      setActiveSlide((prev) =>
        prev === MOVEMENT_SLIDES.length - 1 ? 0 : prev + 1
      );
    }
  };

  return (
    <section
      id="call-for-volunteers"
      className="section bg-[linear-gradient(180deg,var(--background)_0%,var(--secondary)_100%)] border-b border-border/80 relative"
    >
      <div className="site-width">
        {/* Section Header */}
        <ScrollReveal direction="up" distance={20}>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-border/60">
            <div>
              <p className="eyebrow section-label">Step onto the Altar</p>
              <h2 className="tracking-[-0.04em] text-3xl sm:text-4xl md:text-5xl font-extrabold text-foreground">
                Call for Volunteers
              </h2>
            </div>
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <ButtonLink
                variant="movement"
                size="default"
                href={VOLUNTEER_FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto"
              >
                Fill Volunteer Form <ArrowSquareOutIcon size={16} weight="bold" />
              </ButtonLink>
              <ButtonLink
                variant="outline"
                size="default"
                href={GLOBAL_WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto text-[#25D366] hover:text-[#25D366]"
              >
                <WhatsappLogoIcon size={18} weight="fill" />
                Join Global Workforce
              </ButtonLink>
            </div>
          </div>
        </ScrollReveal>

        {/* 2 Flagship Opportunity Banners: Blackpool / City Volunteers + Global Candlesticks Platform */}
        <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Card 1: Official Call for Volunteers (10 Teams) */}
          <div className="lg:col-span-7 rounded-sm border border-border bg-background p-6 sm:p-8 flex flex-col justify-between shadow-sm">
            <div>
              <div className="flex items-center justify-between text-xs font-bold">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-sm bg-primary/10 text-primary uppercase tracking-wider">
                  <FlameIcon size={14} weight="fill" />
                  City Gatherings Workforce
                </span>
                <span className="text-muted-foreground font-semibold">10 Teams Open</span>
              </div>

              <h3 className="mt-4 font-display text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
                Serve on the Ground at Our Next City Gathering
              </h3>

              <p className="mt-2 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                Every gathering is powered by consecrated young believers offering their time,
                talents, and passion. Choose one of the 10 teams below and submit your application.
              </p>

              {/* 10 Teams Grid (Compact Layout with Smooth Expand/Collapse) */}
              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
                {(showAllTeams ? VOLUNTEER_TEAMS : VOLUNTEER_TEAMS.slice(0, 4)).map((team) => {
                  const Icon = team.icon;
                  return (
                    <div
                      key={team.name}
                      className="group p-3 rounded-sm border border-border bg-secondary/40 hover:border-primary/50 hover:bg-background transition-all"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-primary">
                          {team.badge}
                        </span>
                        <Icon size={16} weight="duotone" className="text-primary group-hover:scale-110 transition-transform" />
                      </div>
                      <h4 className="font-display text-sm font-bold text-foreground mt-1">
                        {team.name}
                      </h4>
                      <p className="text-[11px] text-muted-foreground mt-0.5 leading-tight line-clamp-2">
                        {team.desc}
                      </p>
                    </div>
                  );
                })}
              </div>

              {/* Expand / Collapse Button */}
              <div className="mt-3.5">
                <button
                  type="button"
                  onClick={() => setShowAllTeams((prev) => !prev)}
                  className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-primary hover:underline cursor-pointer"
                  aria-expanded={showAllTeams}
                >
                  <span>
                    {showAllTeams
                      ? "Show Fewer Teams ↑"
                      : `View All 10 Ministry Teams (${VOLUNTEER_TEAMS.length - 4} More) ↓`}
                  </span>
                  <CaretDownIcon
                    size={13}
                    weight="bold"
                    className={`transition-transform duration-200 ${
                      showAllTeams ? "rotate-180" : "rotate-0"
                    }`}
                  />
                </button>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="text-xs text-muted-foreground font-medium">
                Official Google Form: <code className="text-primary font-mono text-[11px]">forms.gle/bvyPwzPUauvNn4Nd9</code>
              </span>
              <ButtonLink
                variant="movement"
                size="default"
                href={VOLUNTEER_FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto"
              >
                Apply as Volunteer <ArrowSquareOutIcon size={15} weight="bold" />
              </ButtonLink>
            </div>
          </div>

          {/* Card 2: The Global Pentecost Workforce (Candlesticks Platform) */}
          <div className="lg:col-span-5 rounded-sm border border-border bg-[linear-gradient(135deg,var(--night)_0%,oklch(22%_0.03_40)_60%,oklch(26%_0.05_38)_100%)] text-on-dark p-6 sm:p-8 flex flex-col justify-between shadow-sm relative overflow-hidden">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-ember">
                <span className="size-2 bg-ember rounded-full animate-pulse" />
                <span>Global Workforce</span>
              </div>

              <h3 className="mt-3 font-display text-2xl sm:text-3xl font-extrabold uppercase tracking-tight text-on-dark leading-tight">
                The Global Pentecost Workforce
              </h3>

              <p className="mt-3 text-sm text-dark-muted leading-relaxed">
                You are warmly invited to join the <strong>Global Pentecost Candlesticks platform</strong> on WhatsApp.
                Connect with believers worldwide, participate in 24-hour prayer networks, content creation,
                and regional coordination.
              </p>

              {/* Flyer Preview Box */}
              <div className="mt-6 rounded-sm border border-on-dark/20 bg-black/40 p-4 flex items-center gap-4">
                <div className="size-16 rounded-sm overflow-hidden border border-on-dark/20 shrink-0 bg-night">
                  <img
                    src="/assets/global-workforce-flyer.jpg"
                    alt="Global Pentecost Workforce Flyer"
                    loading="lazy"
                    decoding="async"
                    className="size-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-on-dark uppercase tracking-wide">
                    Candlesticks Platform
                  </h4>
                  <p className="text-[11px] text-dark-muted mt-0.5">
                    Year-round digital intercession, mobilisation, and ministry collaboration.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-on-dark/15 flex flex-col gap-3">
              <ButtonLink
                variant="hero"
                size="lg"
                href={GLOBAL_WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full text-center"
              >
                <WhatsappLogoIcon size={18} weight="fill" />
                Join WhatsApp Candlesticks Platform
                <ArrowSquareOutIcon size={15} weight="bold" />
              </ButtonLink>
              <p className="text-center text-[11px] text-dark-muted">
                Direct WhatsApp Community link: <code>chat.whatsapp.com/IqSsdt874Lb0...</code>
              </p>
            </div>
          </div>
        </div>

        {/* Foundation & Vision Slides (Compact Interactive Carousel / Slide Switcher) */}
        {showFlyers && (
          <div className="mt-14 pt-10 border-t border-border">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
              <div>
                <p className="eyebrow section-label">Movement Core</p>
                <h3 className="font-display text-2xl font-bold tracking-tight text-foreground">
                  Our Heart, Foundation &amp; River
                </h3>
              </div>

              {/* Carousel Navigation Buttons & Indicator */}
              <div className="flex items-center gap-3">
                <span className="text-xs text-muted-foreground font-medium">
                  Slide {activeSlide + 1} of {MOVEMENT_SLIDES.length}
                </span>
                <div className="flex items-center gap-1.5">
                  <button
                    type="button"
                    onClick={() =>
                      setActiveSlide((prev) =>
                        prev === 0 ? MOVEMENT_SLIDES.length - 1 : prev - 1
                      )
                    }
                    aria-label="Previous slide"
                    className="inline-flex size-8 items-center justify-center rounded-sm border border-border bg-background text-foreground hover:bg-secondary hover:border-primary/50 transition-colors cursor-pointer"
                  >
                    <CaretLeftIcon size={16} weight="bold" />
                  </button>
                  <button
                    type="button"
                    onClick={() =>
                      setActiveSlide((prev) =>
                        prev === MOVEMENT_SLIDES.length - 1 ? 0 : prev + 1
                      )
                    }
                    aria-label="Next slide"
                    className="inline-flex size-8 items-center justify-center rounded-sm border border-border bg-background text-foreground hover:bg-secondary hover:border-primary/50 transition-colors cursor-pointer"
                  >
                    <CaretRightIcon size={16} weight="bold" />
                  </button>
                </div>
              </div>
            </div>

            {/* Quick Slide Selector Tabs */}
            <div className="flex flex-wrap items-center gap-2 mb-6">
              {MOVEMENT_SLIDES.map((slide, idx) => {
                const isActive = idx === activeSlide;
                return (
                  <button
                    key={slide.title}
                    type="button"
                    onClick={() => setActiveSlide(idx)}
                    className={`px-3 py-1.5 rounded-sm text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                      isActive
                        ? "bg-primary text-primary-foreground shadow-xs"
                        : "bg-secondary text-muted-foreground hover:text-foreground hover:bg-secondary/80 border border-border"
                    }`}
                  >
                    {slide.title}
                  </button>
                );
              })}
            </div>

            {/* Featured Active Slide Card (Compact Showcase with Touch Swipe & Auto-Swipe) */}
            <div
              onMouseEnter={() => setIsSlidePaused(true)}
              onMouseLeave={() => setIsSlidePaused(false)}
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
              className="rounded-md border border-border bg-background overflow-hidden shadow-xs select-none touch-pan-y"
            >
              <div className="grid grid-cols-1 md:grid-cols-12 items-stretch">
                <div className="md:col-span-5 relative min-h-[260px] md:min-h-[320px] bg-night overflow-hidden">
                  <img
                    src={MOVEMENT_SLIDES[activeSlide].image}
                    alt={MOVEMENT_SLIDES[activeSlide].title}
                    loading="lazy"
                    decoding="async"
                    className="size-full object-cover transition-all duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-night/85 via-transparent to-transparent" />
                  <div className="absolute top-3 left-3">
                    <span className="hero-glass-card px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-ember">
                      {MOVEMENT_SLIDES[activeSlide].subtitle}
                    </span>
                  </div>
                </div>

                <div className="md:col-span-7 p-6 sm:p-8 flex flex-col justify-between">
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-widest text-primary block">
                      {MOVEMENT_SLIDES[activeSlide].subtitle}
                    </span>
                    <h4 className="font-display text-2xl sm:text-3xl font-bold text-foreground mt-1">
                      {MOVEMENT_SLIDES[activeSlide].title}
                    </h4>
                    <p className="text-sm text-muted-foreground mt-4 leading-relaxed max-w-xl">
                      {MOVEMENT_SLIDES[activeSlide].copy}
                    </p>
                  </div>

                  <div className="mt-8 pt-4 border-t border-border flex items-center justify-between">
                    <span className="text-xs text-muted-foreground">
                      Official Pentecost Vision Deck
                    </span>
                    <ButtonLink
                      variant="outline"
                      size="sm"
                      href="/about"
                    >
                      Read Full Mandate <ArrowUpRightIcon size={14} weight="bold" />
                    </ButtonLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

