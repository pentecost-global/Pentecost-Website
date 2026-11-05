import * as React from "react";
import Link from "next/link";
import {
  ArrowDownIcon,
  ArrowUpRightIcon,
  BookOpenTextIcon,
  CameraIcon,
  ChurchIcon,
  CompassIcon,
  EnvelopeSimpleIcon,
  FlameIcon,
  GlobeSimpleIcon,
  HandHeartIcon,
  HandsPrayingIcon,
  MapPinLineIcon,
  MonitorIcon,
  MusicNotesIcon,
  UsersIcon,
  UsersThreeIcon,
} from "@phosphor-icons/react/dist/ssr";
import { ButtonLink } from "@/components/ui/button";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { CurvedGallerySection } from "@/components/sections/curved-gallery";
import { HERO_IMAGE } from "@/lib/constants";

export type PageHeroVariant =
  | "about"
  | "gatherings"
  | "partners"
  | "forum"
  | "media"
  | "get-involved"
  | "contact";

export interface PageHeroProps {
  variant?: PageHeroVariant;
  eyebrow: string;
  title: string;
  children: React.ReactNode;
}

export function PageHero({
  variant = "about",
  eyebrow,
  title,
  children,
}: PageHeroProps) {
  // 1. MEDIA PAGE: 3D Curved Panoramic Gallery Hero (matching uploaded screenshot)
  if (variant === "media") {
    return (
      <CurvedGallerySection
        isHero
        eyebrow={eyebrow}
        title={title}
        subtitle={
          typeof children === "string"
            ? children
            : "A space for the stories, teaching and moments that point us back to Christ."
        }
        ctaLabel="Explore Gatherings"
        ctaHref="/gatherings"
      />
    );
  }

  // 2. ABOUT PAGE ("The Mandate"): Editorial Split Magazine Hero on Warm Paper
  if (variant === "about") {
    return (
      <section className="bg-[linear-gradient(135deg,var(--secondary)_0%,var(--accent)_52%,var(--background)_100%)] border-b border-border py-14 sm:py-20">
        <div className="site-width">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            <ScrollReveal
              direction="up"
              distance={22}
              className="lg:col-span-7"
            >
              <p className="eyebrow section-label">
                <span>{eyebrow}</span>
              </p>
              <h1 className="mt-4 font-display text-5xl sm:text-7xl lg:text-[82px] font-extrabold uppercase tracking-[-0.045em] leading-[0.95] text-foreground">
                {title}
              </h1>
              <p className="mt-6 text-base sm:text-lg leading-relaxed text-muted-foreground max-w-xl">
                {children}
              </p>

              <div className="mt-8 pt-8 border-t border-border grid grid-cols-2 sm:grid-cols-3 gap-6">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-primary block">
                    Origin
                  </span>
                  <span className="font-display text-lg font-bold text-foreground mt-1 block">
                    20 June 2025
                  </span>
                  <span className="text-xs text-muted-foreground">
                    Birthed in midnight prayer
                  </span>
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-primary block">
                    Expression
                  </span>
                  <span className="font-display text-lg font-bold text-foreground mt-1 block">
                    Inter-Church
                  </span>
                  <span className="text-xs text-muted-foreground">
                    Non-denominational unity
                  </span>
                </div>
                <div className="col-span-2 sm:col-span-1">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-primary block">
                    Scriptures
                  </span>
                  <span className="font-display text-lg font-bold text-foreground mt-1 block">
                    Acts 2:1-4
                  </span>
                  <span className="text-xs text-muted-foreground">
                    &amp; Judges 15:4
                  </span>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal
              direction="up"
              distance={26}
              delay={120}
              className="lg:col-span-5"
            >
              <div className="relative">
                <div className="aspect-[4/5] overflow-hidden rounded-sm border border-border bg-night">
                  <img
                    src="/assets/pentecost-portrait-8.jpg"
                    alt="Worship and prayer gathering"
                    className="h-full w-full object-cover opacity-95"
                  />
                </div>
                <div className="mt-3 sm:mt-0 sm:absolute sm:-bottom-5 sm:-left-5 hero-glass-card text-on-dark p-5 max-w-xs">
                  <p className="text-[10px] font-bold uppercase tracking-widest text-ember">
                    Core Conviction
                  </p>
                  <p className="mt-1.5 font-display text-sm font-semibold leading-snug">
                    Not to build a single church, but to connect people to
                    Christ and local Christian communities.
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    );
  }

  // 3. GATHERINGS PAGE: Centered Atmospheric Spotlight Hero with Live Pillar Strip
  if (variant === "gatherings") {
    return (
      <section className="px-4 sm:px-6 lg:px-10 pt-4 pb-2">
        <div className="hero mx-auto max-w-[1720px] rounded-md overflow-hidden">
          <img
            className="hero-image opacity-45"
            src="/assets/gallery-5.jpg"
            alt=""
            width={1920}
            height={1088}
          />
          <div className="site-width py-20 sm:py-28 text-center">
            <ScrollReveal
              direction="up"
              distance={22}
              className="max-w-5xl mx-auto flex flex-col items-center text-center"
            >
              <p className="inline-flex items-center justify-center gap-2.5 text-[11px] font-bold uppercase tracking-[0.14em] text-ember">
                <span className="h-[1.5px] w-6 bg-ember inline-block" />
                <span>{eyebrow}</span>
                <span className="h-[1.5px] w-6 bg-ember inline-block" />
              </p>
              <h1 className="mt-4 font-display text-5xl sm:text-7xl md:text-[88px] font-extrabold uppercase tracking-[-0.045em] leading-[0.95] text-on-dark text-center mx-auto">
                {title}
              </h1>
              <p className="mt-6 text-sm sm:text-base leading-relaxed text-dark-muted max-w-xl mx-auto text-center">
                {children}
              </p>

              <div className="mt-12 w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-left max-w-5xl mx-auto">
                {[
                  {
                    Icon: MusicNotesIcon,
                    label: "Worship",
                    sub: "One heart across churches",
                  },
                  {
                    Icon: BookOpenTextIcon,
                    label: "The Word",
                    sub: "Sound biblical charges",
                  },
                  {
                    Icon: HandsPrayingIcon,
                    label: "Prayer",
                    sub: "Corporate intercession",
                  },
                  {
                    Icon: MapPinLineIcon,
                    label: "City to City",
                    sub: "As the Spirit leads",
                  },
                ].map(({ Icon, label, sub }) => (
                  <div
                    key={label}
                    className="hero-glass-card p-5 sm:px-6 sm:py-5"
                  >
                    <Icon size={20} weight="duotone" className="text-ember" />
                    <div className="mt-3 font-display text-base font-bold text-on-dark">
                      {label}
                    </div>
                    <div className="text-xs text-dark-muted mt-1 leading-relaxed">
                      {sub}
                    </div>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    );
  }

  // 4. PARTNERS PAGE: Architectural Asymmetric Grid Hero with Community Mosaic
  if (variant === "partners") {
    const communities = [
      {
        Icon: ChurchIcon,
        title: "Local Churches",
        desc: "Connecting believers into thriving congregations for lifelong discipleship.",
      },
      {
        Icon: HandsPrayingIcon,
        title: "Para-Church Ministries",
        desc: "Standing shoulder to shoulder in prayer, outreach and gospel witness.",
      },
      {
        Icon: UsersThreeIcon,
        title: "Student Fellowships",
        desc: "Mobilising campus communities with a shared hunger for revival.",
      },
      {
        Icon: CompassIcon,
        title: "Christian Unions",
        desc: "Equipping young leaders to serve Christ faithfully on university campuses.",
      },
    ];

    return (
      <section className="bg-[linear-gradient(180deg,var(--background)_0%,var(--secondary)_100%)] border-b border-border py-14 sm:py-20">
        <div className="site-width">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <ScrollReveal
              direction="up"
              distance={22}
              className="lg:col-span-6"
            >
              <p className="eyebrow section-label">
                <span>{eyebrow}</span>
              </p>
              <h1 className="mt-4 font-display text-5xl sm:text-7xl font-extrabold uppercase tracking-[-0.045em] leading-[0.95] text-foreground">
                {title}
              </h1>
              <p className="mt-6 text-base leading-relaxed text-muted-foreground max-w-lg">
                {children}
              </p>
              <div className="mt-8 flex flex-col sm:flex-row flex-wrap gap-3 w-full sm:w-auto">
                <ButtonLink
                  variant="movement"
                  size="lg"
                  href="#enquiry-status"
                  className="w-full sm:w-auto"
                >
                  Partnership Enquiries{" "}
                  <ArrowDownIcon size={16} weight="bold" />
                </ButtonLink>
                <ButtonLink
                  variant="outline"
                  size="lg"
                  href="/about"
                  className="w-full sm:w-auto"
                >
                  Read Our Mandate <ArrowUpRightIcon size={16} weight="bold" />
                </ButtonLink>
              </div>
            </ScrollReveal>

            <ScrollReveal
              direction="up"
              distance={24}
              delay={120}
              className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4"
            >
              {communities.map(({ Icon, title: cTitle, desc }) => (
                <div
                  key={cTitle}
                  className="rounded-sm border border-border bg-secondary p-6 transition-colors duration-200 hover:border-primary/50"
                >
                  <span className="inline-flex size-10 items-center justify-center rounded-sm bg-accent text-primary">
                    <Icon size={20} weight="duotone" />
                  </span>
                  <h2 className="mt-4 font-display text-xl font-bold tracking-[-0.02em] text-foreground">
                    {cTitle}
                  </h2>
                  <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">
                    {desc}
                  </p>
                </div>
              ))}
            </ScrollReveal>
          </div>
        </div>
      </section>
    );
  }

  // 5. YOUNG MINISTERS' FORUM: Dark Ministerial Roundtable Hero with Formation Ledger
  if (variant === "forum") {
    return (
      <section className="bg-[linear-gradient(135deg,var(--night)_0%,oklch(23%_0.03_40)_65%,oklch(27%_0.055_38)_100%)] text-on-dark border-b border-on-dark/15 py-16 sm:py-24">
        <div className="site-width">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <ScrollReveal
              direction="up"
              distance={22}
              className="lg:col-span-7"
            >
              <p className="eyebrow text-ember">
                <span>{eyebrow}</span>
              </p>
              <h1 className="mt-4 font-display text-5xl sm:text-7xl font-extrabold uppercase tracking-[-0.045em] leading-[0.95] text-on-dark">
                {title}
              </h1>
              <p className="mt-6 text-base leading-relaxed text-dark-muted max-w-xl">
                {children}
              </p>
              <div className="mt-8 w-full sm:w-auto">
                <ButtonLink
                  variant="hero"
                  size="lg"
                  href="/contact"
                  className="w-full sm:w-auto"
                >
                  Register Forum Interest{" "}
                  <ArrowUpRightIcon size={16} weight="bold" />
                </ButtonLink>
              </div>
            </ScrollReveal>

            <div className="lg:col-span-5 flex flex-col gap-3.5 overflow-x-clip">
              {[
                {
                  num: "01",
                  heading: "Growing in Christ",
                  text: "Anchored in personal holiness, sound doctrine and biblical discipleship.",
                  direction: "right" as const,
                  bgClass:
                    "bg-[linear-gradient(125deg,oklch(29%_0.075_38)_0%,oklch(21%_0.035_38)_100%)] border-primary/45",
                  badgeClass: "bg-primary/25 text-ember border-primary/40",
                  offsetClass: "lg:mr-5",
                },
                {
                  num: "02",
                  heading: "Walking Together",
                  text: "Genuine peer fellowship, mutual encouragement and prayer accountability.",
                  direction: "left" as const,
                  bgClass:
                    "bg-[linear-gradient(125deg,oklch(31%_0.07_55)_0%,oklch(22%_0.032_52)_100%)] border-ember/45",
                  badgeClass: "bg-ember/20 text-ember border-ember/40",
                  offsetClass: "lg:ml-5",
                },
                {
                  num: "03",
                  heading: "Serving Faithfully",
                  text: "Collaborating across churches and ministries for the work of the gospel.",
                  direction: "right" as const,
                  bgClass:
                    "bg-[linear-gradient(125deg,var(--accent)_0%,var(--secondary)_100%)] border-border text-foreground",
                  badgeClass: "bg-primary text-primary-foreground border-primary",
                  offsetClass: "lg:mr-5",
                  isLight: true,
                },
              ].map((row, idx) => (
                <ScrollReveal
                  key={row.num}
                  direction={row.direction}
                  distance={44}
                  delay={100 + idx * 130}
                  className={row.offsetClass}
                >
                  <div
                    className={`rounded-sm border p-5 sm:p-6 flex items-start gap-4 transition-transform duration-300 hover:-translate-y-0.5 ${row.bgClass}`}
                  >
                    <span
                      className={`inline-flex size-7 shrink-0 items-center justify-center rounded-sm border font-display text-[11px] font-extrabold tracking-wider ${row.badgeClass}`}
                    >
                      {row.num}
                    </span>
                    <div>
                      <h2
                        className={`font-display text-xl font-bold tracking-[-0.02em] ${
                          row.isLight ? "text-foreground" : "text-on-dark"
                        }`}
                      >
                        {row.heading}
                      </h2>
                      <p
                        className={`mt-1 text-xs leading-relaxed ${
                          row.isLight
                            ? "text-muted-foreground"
                            : "text-on-dark/80"
                        }`}
                      >
                        {row.text}
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }

  // 6. GET INVOLVED: Service Teams Interactive Matrix Hero
  if (variant === "get-involved") {
    const teams = [
      { Icon: FlameIcon, label: "Prayer & Outreach" },
      { Icon: MusicNotesIcon, label: "Worship Ministry" },
      { Icon: CameraIcon, label: "Creative & Media" },
      { Icon: MonitorIcon, label: "Technical & Sound" },
      { Icon: HandHeartIcon, label: "Hospitality & Welcome" },
      { Icon: UsersIcon, label: "Campus Mobilisation" },
    ];

    return (
      <section className="bg-[linear-gradient(135deg,var(--secondary)_0%,var(--accent)_55%,var(--background)_100%)] border-b border-border py-14 sm:py-20">
        <div className="site-width">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <ScrollReveal
              direction="up"
              distance={22}
              className="lg:col-span-6"
            >
              <p className="eyebrow section-label">
                <span>{eyebrow}</span>
              </p>
              <h1 className="mt-4 font-display text-5xl sm:text-7xl font-extrabold uppercase tracking-[-0.045em] leading-[0.95] text-foreground">
                {title}
              </h1>
              <p className="mt-6 text-base leading-relaxed text-muted-foreground max-w-lg">
                {children}
              </p>
              <div className="mt-8 flex flex-col sm:flex-row flex-wrap gap-3 w-full sm:w-auto">
                <ButtonLink
                  variant="movement"
                  size="lg"
                  href="/contact"
                  className="w-full sm:w-auto"
                >
                  Interest &amp; Enquiries{" "}
                  <ArrowUpRightIcon size={16} weight="bold" />
                </ButtonLink>
                <ButtonLink
                  variant="outline"
                  size="lg"
                  href="/partners"
                  className="w-full sm:w-auto"
                >
                  Church Partnership
                </ButtonLink>
              </div>
            </ScrollReveal>

            <ScrollReveal
              direction="up"
              distance={24}
              delay={120}
              className="lg:col-span-6"
            >
              <div className="rounded-sm border border-border bg-background p-6 sm:p-8">
                <div className="flex items-center justify-between border-b border-border pb-4 mb-5">
                  <span className="text-xs font-bold uppercase tracking-wider text-primary">
                    Areas of Service
                  </span>
                  <span className="text-xs text-muted-foreground">
                    6 Ministry Expressions
                  </span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {teams.map(({ Icon, label }) => (
                    <div
                      key={label}
                      className="flex items-center gap-3 rounded-sm border border-border bg-secondary/60 px-4 py-3.5"
                    >
                      <span className="inline-flex size-8 shrink-0 items-center justify-center rounded-sm bg-accent text-primary">
                        <Icon size={17} weight="duotone" />
                      </span>
                      <span className="font-display text-sm font-bold text-foreground">
                        {label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    );
  }

  // 7. CONTACT PAGE: Clean Architectural Ledger Header
  return (
    <section className="bg-[linear-gradient(180deg,var(--secondary)_0%,var(--background)_100%)] border-b border-border pt-14 pb-12 sm:pt-20 sm:pb-16">
      <div className="site-width">
        <ScrollReveal direction="up" distance={20}>
          <p className="eyebrow section-label">
            <span>{eyebrow}</span>
          </p>
          <div className="mt-4 flex flex-col lg:flex-row lg:items-end justify-between gap-8">
            <h1 className="font-display text-5xl sm:text-7xl lg:text-[84px] font-extrabold uppercase tracking-[-0.045em] leading-[0.95] text-foreground">
              {title}
            </h1>
            <div className="max-w-md">
              <p className="text-base leading-relaxed text-muted-foreground">
                {children}
              </p>
              <div className="mt-4 inline-flex items-center gap-4 text-xs font-semibold text-foreground border-t border-border pt-3">
                <span className="inline-flex items-center gap-1.5 text-primary">
                  <GlobeSimpleIcon size={15} weight="duotone" />
                  @pentecostymc
                </span>
                <span>·</span>
                <span className="inline-flex items-center gap-1.5 text-muted-foreground">
                  <EnvelopeSimpleIcon size={15} weight="duotone" />
                  Enquiry service opening soon
                </span>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
