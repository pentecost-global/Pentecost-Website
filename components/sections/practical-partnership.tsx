"use client";

import * as React from "react";
import {
  ArrowDownIcon,
  ArrowUpRightIcon,
  CaretDownIcon,
  CheckCircleIcon,
  ChurchIcon,
  HandHeartIcon,
  HandsPrayingIcon,
  MegaphoneIcon,
  PlantIcon,
  SparkleIcon,
} from "@phosphor-icons/react";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { ButtonLink } from "@/components/ui/button";

export interface PracticalPillar {
  num: string;
  id: "pray" | "mobilise" | "serve" | "host" | "follow-up";
  title: string;
  shortLabel: string;
  tagline: string;
  description: string;
  image: string;
  icon: React.ElementType;
  concreteActions: string[];
  whoItIsFor: string;
  formValue: string;
}

export const PRACTICAL_PILLARS: PracticalPillar[] = [
  {
    num: "01",
    id: "pray",
    title: "Pray",
    shortLabel: "Intercession",
    tagline: "The Intercessory Shield",
    description:
      "Every spiritual breakthrough is won on knees first. We anchor every city gathering in united, pre-gathering intercession.",
    image: "/assets/pentecost-portrait-5.jpg",
    icon: HandsPrayingIcon,
    whoItIsFor: "Intercessors, prayer groups, watchmen & believers burdened for revival",
    formValue: "pray",
    concreteActions: [
      "Join the 24-hour pre-gathering prayer chain and midnight watches",
      "Intercede for the salvation of young people and spiritual awakening in host cities",
      "Receive focused monthly intercessory bulletins and corporate prayer points",
      "Stand in corporate prayer alongside ministers across different church denominations",
    ],
  },
  {
    num: "02",
    id: "mobilise",
    title: "Mobilise",
    shortLabel: "Outreach & Campus",
    tagline: "Rally the Generation",
    description:
      "Bring young people into the room where God is moving. Churches, Christian Unions, and student groups rallying delegations.",
    image: "/assets/gallery-1.jpg",
    icon: MegaphoneIcon,
    whoItIsFor: "Youth leaders, campus CU coordinators, student fellowships & Christian societies",
    formValue: "mobilise",
    concreteActions: [
      "Organise a delegation from your university Christian Union or church youth group",
      "Distribute physical invite cards, posters, and campus bulletins",
      "Share video testimonies and reels across your student and fellowship WhatsApp channels",
      "Coordinate shared transport for attendees travelling in from neighbouring campuses",
    ],
  },
  {
    num: "03",
    id: "serve",
    title: "Serve",
    shortLabel: "Volunteer Teams",
    tagline: "Hands & Feet on Altar",
    description:
      "Gatherings happen through the joyful, consecrated service of volunteer teams from across churches.",
    image: "/assets/pentecost-landscape-7.jpg",
    icon: HandHeartIcon,
    whoItIsFor: "Musicians, technicians, media creators, ushers, counsellors & volunteers",
    formValue: "serve",
    concreteActions: [
      "Worship & Acoustic Team: Instrumentalists, backing vocalists, worship leaders",
      "Audio & Production: Sound engineers, camera operators, live-stream switchers",
      "Hospitality & Ushering: Welcoming attendees, seating, logistics, registration",
      "Altar & Prayer Ministry: Trained counsellors ministering salvation and encouragement",
    ],
  },
  {
    num: "04",
    id: "host",
    title: "Host",
    shortLabel: "Venues & Hospitality",
    tagline: "Open Your Doors",
    description:
      "Partnering churches and facilities opening auditorium doors so a generation can gather in worship and the Word.",
    image: "/assets/pentecost-landscape-1.jpg",
    icon: ChurchIcon,
    whoItIsFor: "Local church pastors, venue trustees, university chaplaincies & hall administrators",
    formValue: "host",
    concreteActions: [
      "Provide church auditoriums or gathering spaces (250–1,500 capacity)",
      "Offer breakout halls for Young Believers Forum discipleship roundtables",
      "Sponsor or host refreshments, volunteer team meals, and equipment logistics",
      "Co-host citywide leader breakfasts and regional prayer summits",
    ],
  },
  {
    num: "05",
    id: "follow-up",
    title: "Follow Up",
    shortLabel: "Discipleship",
    tagline: "Root in Local Church",
    description:
      "Pentecost does not keep converts. We intentionally connect every newly saved or renewed believer to biblically sound local churches.",
    image: "/assets/pentecost-portrait-8.jpg",
    icon: PlantIcon,
    whoItIsFor: "Pastors, discipleship directors, mentor couples & small group leaders",
    formValue: "follow-up",
    concreteActions: [
      "Receive newly saved and rededicated believers into your church small groups",
      "Provide 1-on-1 mentorship and foundational biblical discipleship",
      "Connect young people into the ongoing year-round Young Believers Forum network",
      "Ensure no young believer walks away without a local pastor, community, and spiritual home",
    ],
  },
];

export function PracticalPartnershipSection() {
  const [selectedPillar, setSelectedPillar] = React.useState<string>("all");
  const [expandedCards, setExpandedCards] = React.useState<Record<string, boolean>>({});

  const toggleCard = (id: string) => {
    setExpandedCards((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const filteredPillars =
    selectedPillar === "all"
      ? PRACTICAL_PILLARS
      : PRACTICAL_PILLARS.filter((p) => p.id === selectedPillar);

  const scrollToEnquiry = (formValue?: string) => {
    const el = document.getElementById("partner-enquiry-section");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      if (formValue) {
        const select = document.querySelector<HTMLSelectElement>('select[name="interest"]');
        if (select) {
          select.value = formValue;
        }
      }
    }
  };

  return (
    <section
      id="practical-partnership"
      className="section bg-[linear-gradient(180deg,var(--background)_0%,var(--secondary)_100%)] border-b border-border/80"
    >
      <div className="site-width">
        {/* Section Header */}
        <ScrollReveal direction="up" distance={20}>
          <div className="max-w-3xl">
            <p className="eyebrow section-label">Practical &amp; Action-Oriented</p>
            <h2 className="tracking-[-0.04em] text-3xl sm:text-4xl md:text-5xl font-extrabold text-foreground">
              Five Practical Ways to Partner
            </h2>
            <p className="mt-4 text-base text-muted-foreground leading-relaxed">
              Partnership with Pentecost is not a passive endorsement. It is an active, hands-on
              collaboration to see our generation strengthened in Christ. Choose where God has given
              you grace to stand.
            </p>
          </div>
        </ScrollReveal>

        {/* Filter Pills */}
        <div className="mt-8 flex flex-wrap gap-2 sm:gap-3">
          <button
            type="button"
            onClick={() => setSelectedPillar("all")}
            className={`px-4 py-2.5 rounded-sm text-xs font-bold uppercase tracking-wider transition-all duration-200 cursor-pointer ${
              selectedPillar === "all"
                ? "bg-primary text-primary-foreground shadow-sm"
                : "bg-background border border-border text-foreground hover:border-primary/50"
            }`}
          >
            All 5 Ways
          </button>
          {PRACTICAL_PILLARS.map((p) => {
            const isSelected = selectedPillar === p.id;
            const Icon = p.icon;
            return (
              <button
                key={p.id}
                type="button"
                onClick={() => setSelectedPillar(p.id)}
                className={`inline-flex items-center gap-2 px-3.5 sm:px-4 py-2.5 rounded-sm text-xs font-bold uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                  isSelected
                    ? "bg-primary text-primary-foreground shadow-sm"
                    : "bg-background border border-border text-foreground hover:border-primary/50"
                }`}
              >
                <Icon size={14} weight="duotone" />
                <span>
                  {p.num}. {p.title}
                </span>
              </button>
            );
          })}
        </div>

        {/* Pillars Grid */}
        <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-8">
          {filteredPillars.map((pillar) => {
            const Icon = pillar.icon;
            const isExpanded = selectedPillar === pillar.id;

            return (
              <div
                key={pillar.id}
                className={`group rounded-sm border border-border bg-background transition-all duration-300 hover:border-primary/60 hover:shadow-md flex flex-col justify-between overflow-hidden ${
                  selectedPillar === "all"
                    ? "lg:col-span-6 xl:col-span-4"
                    : "lg:col-span-12"
                }`}
              >
                {/* Visual Header with Real Image */}
                <div className="relative h-48 sm:h-56 w-full overflow-hidden bg-night">
                  <img
                    src={pillar.image}
                    alt={pillar.title}
                    loading="lazy"
                    decoding="async"
                    className="size-full object-cover transition-transform duration-500 group-hover:scale-105 opacity-85"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-night via-night/40 to-transparent" />
                  
                  {/* Floating Number & Icon Badge */}
                  <div className="absolute top-4 left-4 flex items-center gap-2">
                    <span className="size-8 rounded-sm bg-primary text-primary-foreground flex items-center justify-center font-display font-bold text-xs shadow-sm">
                      {pillar.num}
                    </span>
                    <span className="hero-glass-card px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider text-ember">
                      {pillar.tagline}
                    </span>
                  </div>

                  {/* Title overlay */}
                  <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between text-on-dark">
                    <div>
                      <span className="text-[10px] uppercase font-bold tracking-widest text-dark-muted">
                        Pillar {pillar.num}
                      </span>
                      <h3 className="font-display text-2xl font-bold tracking-tight text-on-dark leading-none mt-1">
                        {pillar.title}
                      </h3>
                    </div>
                    <div className="size-9 rounded-sm bg-primary/20 border border-primary/40 text-ember flex items-center justify-center">
                      <Icon size={20} weight="duotone" />
                    </div>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <p className="text-xs sm:text-sm text-foreground/80 leading-relaxed font-medium">
                      {pillar.description}
                    </p>

                    <div className="mt-4 pt-3 border-t border-border/80">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-primary">
                        Who Can Step In:
                      </span>
                      <p className="text-xs text-muted-foreground mt-0.5">
                        {pillar.whoItIsFor}
                      </p>
                    </div>

                    {/* Collapsible Action Checklist (Compact Default View) */}
                    <div className="mt-4 pt-3 border-t border-border/80">
                      <button
                        type="button"
                        onClick={() => toggleCard(pillar.id)}
                        className="w-full flex items-center justify-between text-[11px] font-bold uppercase tracking-wider text-primary hover:underline cursor-pointer py-1"
                        aria-expanded={selectedPillar !== "all" || !!expandedCards[pillar.id]}
                      >
                        <span>
                          {selectedPillar !== "all" || expandedCards[pillar.id]
                            ? "Hide Action Steps ↑"
                            : `View Action Steps (${pillar.concreteActions.length} items) ↓`}
                        </span>
                        <CaretDownIcon
                          size={13}
                          weight="bold"
                          className={`transition-transform duration-200 ${
                            selectedPillar !== "all" || expandedCards[pillar.id]
                              ? "rotate-180"
                              : "rotate-0"
                          }`}
                        />
                      </button>

                      <div
                        className={`grid transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                          selectedPillar !== "all" || expandedCards[pillar.id]
                            ? "grid-rows-[1fr] opacity-100 mt-2"
                            : "grid-rows-[0fr] opacity-0 mt-0"
                        }`}
                      >
                        <div className="overflow-hidden space-y-2 pt-1">
                          {pillar.concreteActions.map((action, idx) => (
                            <div key={idx} className="flex items-start gap-2.5 text-xs text-foreground/80">
                              <CheckCircleIcon
                                size={15}
                                weight="fill"
                                className="text-primary shrink-0 mt-0.5"
                              />
                              <span>{action}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Card Action */}
                  <div className="mt-6 pt-4 border-t border-border flex items-center justify-between gap-3">
                    <span className="text-[11px] text-muted-foreground font-medium">
                      Pillar {pillar.num} of 05
                    </span>
                    <button
                      type="button"
                      onClick={() => scrollToEnquiry(pillar.formValue)}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-primary hover:text-ember transition-colors cursor-pointer"
                    >
                      <span>Partner in {pillar.title}</span>
                      <ArrowDownIcon size={13} weight="bold" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

