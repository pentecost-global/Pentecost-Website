"use client";

import * as React from "react";
import {
  ArrowUpRightIcon,
  CheckCircleIcon,
  EnvelopeSimpleIcon,
  HandHeartIcon,
  HandsPrayingIcon,
  ShieldCheckIcon,
  UsersThreeIcon,
} from "@phosphor-icons/react";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { ButtonLink } from "@/components/ui/button";

export interface LeaderProfile {
  name: string;
  role: string;
  responsibility: string;
  bio: string;
  image: string;
  badge: string;
}

export const LEADERS: LeaderProfile[] = [
  {
    name: "Daniel Friday Olanrewaju",
    role: "Convener & Movement Lead",
    badge: "Vision & Apostolic Lead",
    image: "/assets/pentecost-landscape-10.jpg",
    responsibility: "Vision Stewardship · Ministry of the Word · Cross-Church Alignment",
    bio: "Daniel birthed Pentecost during midnight prayer on 20 June 2025. He carries a burning apostolic burden to see young believers consecrated, delivered from surface religion, aligned with biblical truth, and commissioned to serve Christ in their local churches and cities.",
  },
  {
    name: "Priscilla Otuagoma",
    role: "Prayer & Gathering Coordination",
    badge: "Intercession & Ministry",
    image: "/assets/pentecost-portrait-7.jpg",
    responsibility: "Corporate Intercession · Gatherings Protocol · Student Pastoral Care",
    bio: "Priscilla stewards corporate intercession, pre-gathering midnight prayer watches, and attendee pastoral ministry. She is committed to preparing holy ground where young believers encounter the life-changing presence of the Holy Spirit.",
  },
  {
    name: "Jessica Michael-Odobi",
    role: "Creative Direction & Media Lead",
    badge: "Creative & Brand",
    image: "/assets/pentecost-portrait-4.jpg",
    responsibility: "Media Witness · Visual Storytelling · Digital Outreach",
    bio: "Jessica leads Pentecost's creative direction, visual identity, and media documentation. She ensures that real testimonies and the message of revival are stewarded with reverence, artistic excellence, and clarity for a digital generation.",
  },
  {
    name: "Oluwatomi Jimoh",
    role: "Operations & Church Relations",
    badge: "Operations & Liaison",
    image: "/assets/pentecost-portrait-3.jpg",
    responsibility: "Church Partnership Liaison · Venue Logistics · Team Deployment",
    bio: "Oluwatomi coordinates operations, venue arrangements, and ongoing relations with host church pastors and campus Christian Unions. He ensures that every city gathering operates smoothly, safely, and in full honour of local venues.",
  },
];

export function LeadershipSection({
  showCta = true,
  isHomeTeaser = false,
}: {
  showCta?: boolean;
  isHomeTeaser?: boolean;
}) {
  return (
    <section className="section bg-[linear-gradient(180deg,var(--background)_0%,var(--secondary)_100%)] border-b border-border/70 relative">
      <div className="site-width">
        {/* Section Header */}
        <ScrollReveal direction="up" distance={20}>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-border/60">
            <div>
              <p className="eyebrow section-label">Credibility &amp; Stewards</p>
              <h2 className="tracking-[-0.04em] text-3xl sm:text-4xl md:text-5xl font-extrabold text-foreground">
                Who Is Behind Pentecost
              </h2>
            </div>
            <p className="text-sm text-muted-foreground max-w-md leading-relaxed">
              We believe in open faces, faithful stewardship, and ministerial credibility.
              Meet the servants guiding the vision under biblical accountability.
            </p>
          </div>
        </ScrollReveal>

        {/* Leaders Grid */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {LEADERS.map((leader, idx) => (
            <ScrollReveal
              key={leader.name}
              direction="up"
              distance={24}
              delay={idx * 80}
            >
              <div className="group h-full flex flex-col justify-between rounded-sm border border-border bg-background overflow-hidden transition-all duration-300 hover:border-primary/60 hover:-translate-y-1 hover:shadow-md">
                {/* Photo */}
                <div className="relative aspect-[4/4.5] w-full overflow-hidden bg-night">
                  <img
                    src={leader.image}
                    alt={leader.name}
                    className="size-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-night via-night/30 to-transparent" />
                  
                  {/* Floating role badge */}
                  <div className="absolute top-3 left-3">
                    <span className="hero-glass-card px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-ember">
                      {leader.badge}
                    </span>
                  </div>

                  {/* Name overlay */}
                  <div className="absolute bottom-3 left-3 right-3 text-on-dark">
                    <h3 className="font-display text-lg sm:text-xl font-bold leading-tight text-on-dark">
                      {leader.name}
                    </h3>
                    <p className="text-xs font-semibold text-ember mt-0.5">
                      {leader.role}
                    </p>
                  </div>
                </div>

                {/* Details */}
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-primary">
                      Responsibilities
                    </span>
                    <p className="text-xs font-medium text-foreground/80 mt-1 pb-3 border-b border-border/80">
                      {leader.responsibility}
                    </p>
                    <p className="mt-3 text-xs leading-relaxed text-muted-foreground">
                      {leader.bio}
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
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
                href="/contact"
                className="w-full text-center"
              >
                Connect With Leadership <ArrowUpRightIcon size={16} weight="bold" />
              </ButtonLink>
              <ButtonLink
                variant="secondary"
                size="lg"
                href="/partners"
                className="w-full text-center"
              >
                Pastoral Partnership <ArrowUpRightIcon size={16} weight="bold" />
              </ButtonLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

