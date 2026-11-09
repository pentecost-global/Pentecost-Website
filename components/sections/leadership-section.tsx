"use client";

import * as React from "react";
import {
  ArrowUpRightIcon,
  CaretDownIcon,
  CheckCircleIcon,
  EnvelopeSimpleIcon,
  HandHeartIcon,
  HandsPrayingIcon,
  ShieldCheckIcon,
  SparkleIcon,
  UserIcon,
  UsersThreeIcon,
} from "@phosphor-icons/react";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { ButtonLink } from "@/components/ui/button";

export interface LeaderProfile {
  id: string;
  name: string;
  role: string;
  responsibility: string;
  bio: string;
  image: string;
  badge: string;
}

export const LEADERS: LeaderProfile[] = [
  {
    id: "lead-convener",
    name: "Movement Convener",
    role: "Vision & Apostolic Lead",
    badge: "Vision Stewardship",
    image: "/assets/pentecost-glasgow-minister.jpg",
    responsibility: "Vision Stewardship · Ministry of the Word · Cross-Church Alignment",
    bio: "Carries the foundational apostolic burden birthed during midnight prayer on 20 June 2025. Committed to seeing young believers consecrated, delivered from superficial religion, aligned with biblical truth, and commissioned to serve Christ in their local churches and cities.",
  },
  {
    id: "lead-prayer",
    name: "Gatherings & Prayer Steward",
    role: "Corporate Intercession & Coordination",
    badge: "Intercession & Ministry",
    image: "/assets/pentecost-worship-lead.jpg",
    responsibility: "Pre-Gathering Midnight Watches · Corporate Intercession · Student Pastoral Care",
    bio: "Stewards corporate prayer chains, pre-gathering intercessory shields, and gathering flow. Devoted to preparing holy ground where attendees encounter the life-transforming presence and holiness of the Holy Spirit.",
  },
  {
    id: "lead-media",
    name: "Creative & Media Steward",
    role: "Creative Direction & Media Witness",
    badge: "Creative & Media",
    image: "/assets/pentecost-landscape-7.jpg",
    responsibility: "Media Witness · Visual Identity · Testimonies Documentation",
    bio: "Guides creative direction, digital communications, and testimony recording. Dedicated to stewarding the movement's message with reverence, artistic excellence, and clarity for a digital generation.",
  },
  {
    id: "lead-operations",
    name: "Operations & Church Liaison",
    role: "Church Relations & Logistics",
    badge: "Operations & Liaison",
    image: "/assets/pentecost-glasgow-speaker-praying.jpg",
    responsibility: "Church Partnership Liaison · Host City Logistics · Team Deployment",
    bio: "Coordinates operations, auditorium logistics, and relation-building with host pastors and Christian Unions. Ensures that every city gathering operates safely, in full biblical order and honor of host churches.",
  },
];

export function LeadershipSection({
  showCta = true,
  isHomeTeaser = false,
}: {
  showCta?: boolean;
  isHomeTeaser?: boolean;
}) {
  const [expandedLeaderId, setExpandedLeaderId] = React.useState<string | null>(null);

  const toggleLeaderBio = (id: string) => {
    setExpandedLeaderId((prev) => (prev === id ? null : id));
  };

  return (
    <section className="section bg-[linear-gradient(180deg,var(--background)_0%,var(--secondary)_100%)] border-b border-border/70 relative">
      <div className="site-width">
        {/* Section Header */}
        <ScrollReveal direction="up" distance={20}>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-border/60">
            <div>
              <p className="eyebrow section-label">Credibility &amp; Stewards</p>
              <h2 className="tracking-[-0.04em] text-3xl sm:text-4xl md:text-5xl font-extrabold text-foreground">
                Meet the Leadership Team
              </h2>
            </div>
            <p className="text-sm text-muted-foreground max-w-md leading-relaxed">
              We believe in open faces, faithful stewardship, and ministerial credibility.
              Meet the servants guiding the vision under biblical accountability and pastoral covering.
            </p>
          </div>
        </ScrollReveal>

        {/* Temporary Notice: Profiles being updated for launch */}
        <div className="mt-6 rounded-sm border border-primary/25 bg-accent/40 p-4 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="inline-flex size-7 items-center justify-center rounded-sm bg-primary/10 text-primary shrink-0">
              <SparkleIcon size={15} weight="duotone" />
            </span>
            <p className="text-xs text-foreground/90">
              <strong>Leadership Profiles Staged:</strong> Full steward names, biographies, and confirmed portraits are currently being updated in alignment with our ministerial covering before our official launch.
            </p>
          </div>
        </div>

        {/* Leaders Grid (items-start prevents other cards from stretching when one bio expands) */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-start">
          {LEADERS.map((leader, idx) => {
            const isExpanded = expandedLeaderId === leader.id;

            return (
              <ScrollReveal
                key={leader.id}
                direction="up"
                distance={24}
                delay={idx * 80}
              >
                <div className="group flex flex-col justify-start rounded-sm border border-border bg-background overflow-hidden transition-all duration-300 hover:border-primary/60 hover:-translate-y-1 hover:shadow-md">
                  {/* Photo with Overlay */}
                  <div className="relative aspect-[4/4.5] w-full overflow-hidden bg-night">
                    <img
                      src={leader.image}
                      alt={leader.name}
                      loading="lazy"
                      decoding="async"
                      className="size-full object-cover object-top transition-transform duration-500 group-hover:scale-105 opacity-90"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-night via-night/35 to-transparent" />

                    {/* Floating role badge */}
                    <div className="absolute top-3 left-3">
                      <span className="hero-glass-card px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-ember">
                        {leader.badge}
                      </span>
                    </div>

                    {/* Name & Role overlay */}
                    <div className="absolute bottom-3 left-3 right-3 text-on-dark">
                      <h3 className="font-display text-lg sm:text-xl font-bold leading-tight text-on-dark">
                        {leader.name}
                      </h3>
                      <p className="text-xs font-semibold text-ember mt-0.5">
                        {leader.role}
                      </p>
                    </div>
                  </div>

                  {/* Details Card (Compact with Consistent Baseline) */}
                  <div className="p-5 flex flex-col justify-start">
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-primary">
                        Areas of Responsibility
                      </span>
                      <p className="text-xs font-medium text-foreground/80 mt-1 pb-3 border-b border-border/80 min-h-[42px] leading-relaxed">
                        {leader.responsibility}
                      </p>

                      {/* Collapsible Bio Drawer (Expands ONLY this card downward) */}
                      <div className="mt-3">
                        <button
                          type="button"
                          onClick={() => toggleLeaderBio(leader.id)}
                          className="w-full flex items-center justify-between text-[11px] font-bold uppercase tracking-wider text-primary hover:underline cursor-pointer py-1"
                          aria-expanded={isExpanded}
                        >
                          <span>{isExpanded ? "Hide Bio" : "Read Full Bio"}</span>
                          <CaretDownIcon
                            size={14}
                            weight="bold"
                            className={`transition-transform duration-200 ${
                              isExpanded ? "rotate-180" : "rotate-0"
                            }`}
                          />
                        </button>

                        <div
                          className={`grid transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                            isExpanded
                              ? "grid-rows-[1fr] opacity-100 mt-2"
                              : "grid-rows-[0fr] opacity-0 mt-0"
                          }`}
                        >
                          <div className="overflow-hidden">
                            <p className="text-xs leading-relaxed text-muted-foreground pt-1 pb-1">
                              {leader.bio}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        {/* Ministerial Accountability & Covering Callout */}
        <div className="mt-12 rounded-sm border border-border bg-background p-6 sm:p-10 relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-primary mb-3">
                <ShieldCheckIcon size={18} weight="duotone" />
                <span>Biblical Order &amp; Pastoral Accountability</span>
              </div>
              <h3 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
                Submitted to Pastoral Covering &amp; Established Authority
              </h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                Pentecost does not operate in isolation or as a rogue ministry. We exist in deep
                reverence for the local church and submit to the spiritual counsel, prayer covering,
                and ministerial oversight of seasoned church pastors and fathers in the faith across our host cities.
              </p>

              <div className="mt-6 flex flex-wrap gap-4 sm:gap-6 text-xs font-semibold text-foreground">
                <span className="inline-flex items-center gap-2">
                  <CheckCircleIcon size={16} weight="fill" className="text-primary" />
                  Local Church Rooted
                </span>
                <span className="inline-flex items-center gap-2">
                  <CheckCircleIcon size={16} weight="fill" className="text-primary" />
                  Doctrinal &amp; Financial Integrity
                </span>
                <span className="inline-flex items-center gap-2">
                  <CheckCircleIcon size={16} weight="fill" className="text-primary" />
                  Cross-Denominational Advisory
                </span>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-center">
              <ButtonLink
                variant="movement"
                size="lg"
                href="/partners"
                className="w-full justify-center"
              >
                Church Partnership <ArrowUpRightIcon size={16} weight="bold" />
              </ButtonLink>
              <ButtonLink
                variant="outline"
                size="lg"
                href="/contact"
                className="w-full justify-center"
              >
                Connect With Leadership
              </ButtonLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
