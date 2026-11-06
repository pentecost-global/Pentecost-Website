"use client";

import * as React from "react";
import {
  ArrowUpRightIcon,
  BookOpenTextIcon,
  CheckCircleIcon,
  FlameIcon,
  HandsPrayingIcon,
  MusicNotesIcon,
  SparkleIcon,
  UsersIcon,
  UsersThreeIcon,
} from "@phosphor-icons/react";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { ButtonLink } from "@/components/ui/button";

interface ClarityPillar {
  id: "what" | "who" | "what-happens";
  question: string;
  badge: string;
  oneLiner: string;
  image: string;
  imageAlt: string;
  points: { title: string; desc: string }[];
  tag: string;
  ctaText: string;
  ctaHref: string;
}

const CLARITY_PILLARS: ClarityPillar[] = [
  {
    id: "what",
    question: "What is Pentecost?",
    badge: "01 / The Movement",
    oneLiner:
      "A non-denominational, Spirit-led Christian movement uniting believers across churches for spiritual renewal, prayer, and kingdom purpose.",
    image: "/assets/pentecost-landscape-9.jpg",
    imageAlt: "Pentecost movement community gathering together with one heart",
    points: [
      {
        title: "Not Building a Separate Church",
        desc: "We do not compete with or replace local congregations. Our mandate is to strengthen believers and connect them back into thriving local church families.",
      },
      {
        title: "Birthed in Midnight Prayer",
        desc: "Conceived during fervent midnight prayer on 20 June 2025 with a clear burden: one Spirit, one body, one generation set ablaze.",
      },
      {
        title: "Cross-Denominational Altar",
        desc: "A neutral, sacred meeting place where Baptist, Anglican, Pentecostal, Presbyterian, and independent believers kneel as one body under Christ.",
      },
    ],
    tag: "Non-Denominational · Holy Spirit Led · Cross-Church",
    ctaText: "Discover Our Mandate",
    ctaHref: "/about",
  },
  {
    id: "who",
    question: "Who is it for?",
    badge: "02 / The People",
    oneLiner:
      "Young believers, university students, campus fellowships, leaders, and any Christian hungry for God — with no age barrier.",
    image: "/assets/hero-worshippers.jpg",
    imageAlt: "Young believers and students worshipping together at Pentecost",
    points: [
      {
        title: "Students & Young Adults",
        desc: "University students, college attendees, and young professionals seeking authentic faith, discipleship, and holy purpose in a secular culture.",
      },
      {
        title: "Campus Fellowships & Youth Groups",
        desc: "Christian Unions, campus ministries, and church youth delegations coming together to encounter God beyond their individual group borders.",
      },
      {
        title: "All Ages & Backgrounds Welcome",
        desc: "While the vision specifically champions a generation of young believers, there are zero age restrictions. Anyone hungry for God is embraced.",
      },
    ],
    tag: "Students & Young Adults · Campus Fellowships · All Generations",
    ctaText: "Young Believers Forum",
    ctaHref: "/forum",
  },
  {
    id: "what-happens",
    question: "What happens here?",
    badge: "03 / The Experience",
    oneLiner:
      "Fervent corporate prayer, unhurried unified worship, sound biblical ministry of the Word, and authentic community.",
    image: "/assets/pentecost-landscape-2.jpg",
    imageAlt: "Worship, prayer, and ministry of the Word at a Pentecost gathering",
    points: [
      {
        title: "Unhurried, Unified Worship",
        desc: "Extended times of Christ-centred praise and acoustic intimacy without performance or entertainment theatrics.",
      },
      {
        title: "Fervent Corporate Intercession",
        desc: "Lifting our voices in unison for citywide spiritual renewal, the salvation of our generation, and personal consecration.",
      },
      {
        title: "Sound Ministry of the Word",
        desc: "Deep, scripture-anchored teaching and apostolic charges that align hearts with God's Word and commission believers for faithful service.",
      },
    ],
    tag: "Free Admission · 3-Hour Immersive Evenings · Year-Round Discipleship",
    ctaText: "Explore Gatherings",
    ctaHref: "/gatherings",
  },
];

export function PentecostClaritySection() {
  const [activeTab, setActiveTab] = React.useState<"what" | "who" | "what-happens">("what");
  const current = CLARITY_PILLARS.find((p) => p.id === activeTab) || CLARITY_PILLARS[0];

  return (
    <section className="section bg-[linear-gradient(180deg,var(--background)_0%,var(--secondary)_100%)] border-b border-border/70 relative">
      <div className="site-width">
        {/* Section Header */}
        <ScrollReveal direction="up" distance={20}>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-border/60">
            <div>
              <p className="eyebrow section-label">Clarity in Seconds</p>
              <h2 className="tracking-[-0.04em] text-3xl sm:text-4xl md:text-5xl font-extrabold">
                Pentecost at a Glance
              </h2>
            </div>
            <p className="text-sm text-muted-foreground max-w-md leading-relaxed">
              Three simple questions answered immediately — so you know who we are, who
              we serve, and what you will experience when you walk into the room.
            </p>
          </div>
        </ScrollReveal>

        {/* Interactive Question Selector Pills */}
        <div className="mt-8 flex flex-wrap gap-2.5 sm:gap-3">
          {CLARITY_PILLARS.map((pillar) => {
            const isActive = pillar.id === activeTab;
            return (
              <button
                key={pillar.id}
                type="button"
                onClick={() => setActiveTab(pillar.id)}
                className={`group inline-flex items-center gap-2.5 px-4 sm:px-6 py-3 rounded-sm text-xs sm:text-sm font-bold uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                  isActive
                    ? "bg-primary text-primary-foreground shadow-sm"
                    : "bg-background border border-border text-foreground hover:border-primary/50 hover:bg-accent/40"
                }`}
              >
                <span
                  className={`size-2 rounded-full ${
                    isActive ? "bg-ember" : "bg-muted-foreground/40 group-hover:bg-primary"
                  }`}
                />
                <span>{pillar.question}</span>
              </button>
            );
          })}
        </div>

        {/* Active Content Showcase: Visual + Crisp Breakdown */}
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Visual Side with Real Gathering Photography */}
          <div className="lg:col-span-5 relative rounded-sm overflow-hidden border border-border bg-night min-h-[380px] lg:min-h-full">
            <img
              src={current.image}
              alt={current.imageAlt}
              className="absolute inset-0 size-full object-cover transition-opacity duration-300"
            />
            {/* Dark gradient for text legibility */}
            <div className="absolute inset-0 bg-gradient-to-t from-night via-night/50 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-r from-night/40 via-transparent to-transparent" />

            <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8 flex flex-col justify-end text-on-dark">
              <span className="text-[11px] font-bold uppercase tracking-widest text-ember">
                {current.badge}
              </span>
              <p className="mt-2 font-display text-xl sm:text-2xl font-bold tracking-tight leading-snug">
                {current.question}
              </p>
              <div className="mt-3 pt-3 border-t border-on-dark/20 text-xs text-dark-muted font-medium">
                {current.tag}
              </div>
            </div>
          </div>

          {/* Clarity Explanations Side */}
          <div className="lg:col-span-7 flex flex-col justify-between rounded-sm border border-border bg-background p-6 sm:p-10">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-primary">
                <span className="size-2 bg-primary" />
                <span>The Answer in One Sentence</span>
              </div>
              <p className="mt-3 font-display text-xl sm:text-2xl font-bold tracking-[-0.03em] leading-snug text-foreground">
                {current.oneLiner}
              </p>

              <div className="mt-8 space-y-5">
                {current.points.map((pt, idx) => (
                  <div
                    key={pt.title}
                    className="flex items-start gap-3.5 p-4 rounded-sm bg-secondary/60 border border-border/80 transition-colors hover:border-primary/40"
                  >
                    <div className="size-6 shrink-0 rounded-full bg-primary/10 text-primary flex items-center justify-center mt-0.5 font-bold text-xs">
                      {idx + 1}
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-foreground">
                        {pt.title}
                      </h3>
                      <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                        {pt.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="text-xs text-muted-foreground font-medium text-center sm:text-left">
                Non-denominational · Christ-centred · Local church rooted
              </span>
              <ButtonLink
                variant="movement"
                size="default"
                href={current.ctaHref}
                className="w-full sm:w-auto"
              >
                {current.ctaText} <ArrowUpRightIcon size={15} weight="bold" />
              </ButtonLink>
            </div>
          </div>
        </div>

        {/* 3 Quick-Hit Visual Summary Cards on Mobile/Tablet */}
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
          {CLARITY_PILLARS.map((p) => {
            const isSelected = p.id === activeTab;
            return (
              <button
                key={`card-${p.id}`}
                type="button"
                onClick={() => setActiveTab(p.id)}
                className={`p-4 rounded-sm border text-left transition-all cursor-pointer ${
                  isSelected
                    ? "border-primary bg-primary/5 shadow-sm"
                    : "border-border bg-background hover:border-border/80"
                }`}
              >
                <div className="flex items-center justify-between text-xs font-bold text-primary">
                  <span>{p.badge}</span>
                  {isSelected && <span className="size-1.5 rounded-full bg-primary" />}
                </div>
                <h4 className="mt-1.5 font-display text-base font-bold text-foreground">
                  {p.question}
                </h4>
                <p className="mt-1 text-xs text-muted-foreground line-clamp-2">
                  {p.oneLiner}
                </p>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
