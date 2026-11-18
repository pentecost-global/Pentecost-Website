"use client";

import * as React from "react";
import {
  ArrowUpRightIcon,
  CaretDownIcon,
  CheckCircleIcon,
  FlameIcon,
  ShieldCheckIcon,
  SparkleIcon,
  UsersThreeIcon,
} from "@phosphor-icons/react";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { ButtonLink } from "@/components/ui/button";

export interface FounderProfile {
  id: string;
  names: string;
  role: string;
  motto: string;
  image: string;
  badge: string;
  bio: string;
  tags?: string[];
}

export interface DepartmentalLead {
  id: string;
  name: string;
  role: string;
  badge: string;
  responsibility: string;
  bio: string;
  image: string;
}

export const FOUNDERS: FounderProfile = {
  id: "daniel-priscilla-olanrewaju",
  names: "Daniel & Priscilla Olanrewaju",
  role: "Vision Stewards",
  motto: "One Spirit. One Body. One Generation Set Ablaze.",
  badge: "Vision Stewards",
  image: "/assets/daniel-priscilla-olanrewaju.png",
  bio: "Daniel and Priscilla Olanrewaju are the vision bearers of Pentecost, united by a God-given burden to see a generation awakened, empowered and set ablaze by the Holy Spirit. Through Pentecost, they are passionate about bringing believers together across churches and cities to encounter God, rediscover their true identity in Christ and fulfil their divine purpose.",
  tags: [],
};

export const DEPARTMENT_LEADS: DepartmentalLead[] = [
  {
    id: "rosemary-dada",
    name: "Rosemary Dada",
    role: "Pentecost Core Strategy Lead",
    badge: "Core Strategy",
    responsibility: "Planning & Coordination · One Accord Alignment · Operational Excellence",
    image: "/assets/rosemary-dada.jpeg",
    bio: "I serve as the Core Strategy Lead for Pentecost, overseeing planning and coordination so that everything runs with order and excellence. I work closely with the teams to ensure we are aligned and moving together in one accord, with a heart to see Pentecost be a true encounter where lives are transformed by the Holy Spirit.",
  },
  {
    id: "adekanmi-peter",
    name: "Adekanmi Kolawole Peter",
    role: "Pentecost Witnesses & Publicity Lead",
    badge: "Witnesses & Publicity",
    responsibility: "Publicity Coordination · Evangelism · Strategic City Outreach",
    image: "/assets/adekanmi-kolawole-peter.jpeg",
    bio: "I serve as part of the Pentecost leadership team, coordinating publicity, evangelism and strategic outreach to mobilise people for each gathering. I work closely with the Witness Team to strengthen our reach, build meaningful connections and ensure that the message of Pentecost reaches people across cities and communities. My heart is to see lives transformed through genuine encounters with the Holy Spirit.",
  },
  {
    id: "jessica-odobi",
    name: "Jessica Michael-Odobi",
    role: "Pentecost Brand & Creative Lead",
    badge: "Brand & Creative",
    responsibility: "Visual Identity · Creative Direction · Publicity Materials Design",
    image: "/assets/jessica-michael-odobi.jpeg",
    bio: "I serve as the Brand & Creative Lead for Pentecost, overseeing the visual identity, creative direction and design of our publicity materials. I work closely with the team to ensure that every creative expression communicates the vision of Pentecost with excellence, consistency and impact. My heart is to see creativity used as a powerful tool to communicate the message of the Holy Spirit and draw people into life-transforming encounters with God.",
  },
  {
    id: "michael-odobi",
    name: "Michael Odobi",
    role: "Pentecost Head of Technical",
    badge: "Head of Technical",
    responsibility: "Technical Planning · Gathering Delivery · Sound & Atmosphere",
    image: "/assets/michael-odobi.jpeg",
    bio: "I serve as the Head of Technical for Pentecost, overseeing the technical planning, coordination and delivery of our gatherings to ensure everything runs seamlessly and with excellence. I work closely with the team to create an atmosphere where technology supports the vision of Pentecost without distraction. My heart is to see every technical detail serve a greater purpose: creating an environment where people can encounter the presence and power of the Holy Spirit.",
  },
  {
    id: "grace-eloh",
    name: "Grace Eloh",
    role: "Pentecost Administrative Lead",
    badge: "Administrative Lead",
    responsibility: "Administration · Information Management · Follow-Up Stewardship",
    image: "/assets/grace-eloh.jpeg",
    bio: "I serve as the Administrative Lead for Pentecost, overseeing the administration, communication and follow-up that keep the ministry organised and moving forward. I work closely with teams to ensure information is managed effectively and responsibilities are followed through with excellence. My heart is to build strong administrative foundations that support the work of the Holy Spirit and allows the vision of Pentecost to be executed with excellence.",
  },
];

// Backwards-compatible export for any components relying on LEADERS list
export const LEADERS = [
  {
    id: FOUNDERS.id,
    name: FOUNDERS.names,
    role: FOUNDERS.role,
    badge: FOUNDERS.badge,
    image: FOUNDERS.image,
    responsibility: FOUNDERS.motto,
    bio: FOUNDERS.bio,
  },
  ...DEPARTMENT_LEADS,
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
              <p className="eyebrow section-label">Leadership &amp; Stewards</p>
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

        {/* 1. Featured Founders Card: Daniel & Priscilla Olanrewaju */}
        <ScrollReveal direction="up" distance={24} className="mt-8">
          <div className="overflow-hidden rounded-sm border-2 border-primary/20 bg-background shadow-sm hover:border-primary/40 transition-colors">
            <div className="grid grid-cols-1 md:grid-cols-12 items-stretch">
              {/* Portrait Photo */}
              <div className="relative md:col-span-5 min-h-[300px] md:min-h-[380px] bg-night overflow-hidden">
                <img
                  src={FOUNDERS.image}
                  alt={FOUNDERS.names}
                  loading="lazy"
                  decoding="async"
                  className="size-full object-cover object-center transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-night/80 via-night/20 to-transparent md:hidden" />
                <div className="absolute top-4 left-4">
                  <span className="hero-glass-card px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-ember">
                    {FOUNDERS.badge}
                  </span>
                </div>
              </div>

              {/* Founders Content & Mission */}
              <div className="p-6 sm:p-8 md:p-10 md:col-span-7 flex flex-col justify-center">
                <div>
                  <h3 className="font-display text-2xl sm:text-3xl md:text-4xl font-extrabold text-foreground tracking-tight">
                    {FOUNDERS.names}
                  </h3>
                  <p className="text-sm sm:text-base font-semibold text-primary mt-1">
                    {FOUNDERS.role}
                  </p>

                  {/* Motto Quote Ribbon */}
                  <div className="mt-4 rounded-sm border-l-4 border-primary bg-primary/5 p-4">
                    <p className="font-display text-base sm:text-lg font-bold text-foreground">
                      &ldquo;{FOUNDERS.motto}&rdquo;
                    </p>
                  </div>

                  {/* Bio */}
                  <p className="mt-4 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    {FOUNDERS.bio}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* 2. Departmental Leads Subheader */}
        <div className="mt-12 mb-6 flex flex-col sm:flex-row sm:items-end justify-between gap-3">
          <div>
            <span className="text-[11px] font-bold uppercase tracking-widest text-primary block">
              Execution &amp; Operations
            </span>
            <h3 className="font-display text-xl sm:text-2xl font-bold tracking-tight text-foreground">
              Departmental &amp; Strategy Leads
            </h3>
          </div>
          <p className="text-xs text-muted-foreground max-w-sm">
            Overseeing strategy, publicity, creative direction, technology, and administration.
          </p>
        </div>

        {/* 3. Five Departmental Leads Grid (items-start ensures expanding one bio does not affect others) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5 items-start">
          {DEPARTMENT_LEADS.map((lead, idx) => {
            const isExpanded = expandedLeaderId === lead.id;

            return (
              <ScrollReveal
                key={lead.id}
                direction="up"
                distance={20}
                delay={idx * 60}
              >
                <div className="group flex flex-col justify-start rounded-sm border border-border bg-background overflow-hidden transition-all duration-300 hover:border-primary/60 hover:-translate-y-1 hover:shadow-md">
                  {/* Photo with Overlay */}
                  <div className="relative aspect-[4/4.8] w-full overflow-hidden bg-night">
                    <img
                      src={lead.image}
                      alt={lead.name}
                      loading="lazy"
                      decoding="async"
                      className="size-full object-cover object-top transition-transform duration-500 group-hover:scale-105 opacity-95"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-night via-night/35 to-transparent" />

                    {/* Floating role badge */}
                    <div className="absolute top-3 left-3">
                      <span className="hero-glass-card px-2.5 py-0.5 text-[9.5px] font-bold uppercase tracking-wider text-ember">
                        {lead.badge}
                      </span>
                    </div>

                    {/* Name & Role overlay */}
                    <div className="absolute bottom-3 left-3 right-3 text-on-dark">
                      <h4 className="font-display text-base sm:text-lg font-bold leading-tight text-on-dark">
                        {lead.name}
                      </h4>
                      <p className="text-[11px] font-semibold text-ember mt-0.5 leading-snug">
                        {lead.role}
                      </p>
                    </div>
                  </div>

                  {/* Details Card (Compact with Consistent Baseline) */}
                  <div className="p-4 flex flex-col justify-start">
                    <div>
                      <span className="text-[9.5px] font-bold uppercase tracking-wider text-primary">
                        Areas of Responsibility
                      </span>
                      <p className="text-[11.5px] font-medium text-foreground/85 mt-1 pb-3 border-b border-border/80 min-h-[46px] leading-relaxed">
                        {lead.responsibility}
                      </p>

                      {/* Collapsible Bio Drawer (Expands ONLY this card downward) */}
                      <div className="mt-2.5">
                        <button
                          type="button"
                          onClick={() => toggleLeaderBio(lead.id)}
                          className="w-full flex items-center justify-between text-[10.5px] font-bold uppercase tracking-wider text-primary hover:underline cursor-pointer py-1"
                          aria-expanded={isExpanded}
                        >
                          <span>{isExpanded ? "Hide Bio" : "Read Full Bio"}</span>
                          <CaretDownIcon
                            size={13}
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
                              {lead.bio}
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

        {/* 4. Ministerial Accountability & Covering Callout */}
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
