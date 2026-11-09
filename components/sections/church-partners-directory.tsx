"use client";

import * as React from "react";
import {
  ArrowUpRightIcon,
  CaretDownIcon,
  CheckCircleIcon,
  ChurchIcon,
  CompassIcon,
  EnvelopeSimpleIcon,
  EyeIcon,
  EyeSlashIcon,
  GlobeSimpleIcon,
  HandsPrayingIcon,
  LockKeyIcon,
  MapPinLineIcon,
  PhoneIcon,
  SparkleIcon,
  UsersThreeIcon,
} from "@phosphor-icons/react";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { ButtonLink } from "@/components/ui/button";

/**
 * Feature Flag:
 * When false, the section is hidden from public traffic.
 * The leadership team can toggle the preview button or pass ?preview=churches in the URL to inspect it.
 */
export const LAUNCH_CHURCH_DIRECTORY = false;

export interface PartnerChurch {
  id: string;
  name: string;
  city: string;
  region: string;
  postcode: string;
  leadPastor: string;
  tradition: string;
  partnershipRole: string;
  roleBadge: string;
  meetingTime: string;
  address: string;
  website: string;
  email: string;
  focus: string;
}

export const PLACEHOLDER_CHURCHES: PartnerChurch[] = [
  {
    id: "church-glasgow-1",
    name: "Destiny City Fellowship",
    city: "Glasgow",
    region: "Scotland",
    postcode: "G1 2DH",
    leadPastor: "Pastor David Anderson",
    tradition: "Non-Denominational / Evangelical",
    partnershipRole: "Host Church & Campus Discipleship Hub",
    roleBadge: "Host & Discipleship",
    meetingTime: "Sundays 10:30 AM · Wednesdays 7:00 PM",
    address: "Central Glasgow Outreach Centre",
    website: "https://example.com/destiny-glasgow",
    email: "partner@example.com",
    focus: "University student mentorship, post-gathering follow-up small groups, and community outreach.",
  },
  {
    id: "church-glasgow-2",
    name: "Living Waters Community Church",
    city: "Glasgow",
    region: "Scotland",
    postcode: "G12 8QQ",
    leadPastor: "Rev. Fiona Campbell",
    tradition: "Apostolic / Baptist Union Partner",
    partnershipRole: "Intercessory Shield & Young Adults Ministry",
    roleBadge: "Prayer & Youth",
    meetingTime: "Sundays 11:00 AM · Fridays 7:30 PM",
    address: "West End Community Hall",
    website: "https://example.com/livingwaters-glasgow",
    email: "office@example.com",
    focus: "Corporate midnight prayer watches, cross-church youth rallies, and young professionals discipleship.",
  },
  {
    id: "church-aberdeen-1",
    name: "Grace & Truth Christian Fellowship",
    city: "Aberdeen",
    region: "Scotland",
    postcode: "AB24 3AA",
    leadPastor: "Pastor Emmanuel Kalu",
    tradition: "Pentecostal / Inter-denominational",
    partnershipRole: "Campus Mobilisation & Student Integration Hub",
    roleBadge: "Campus Hub",
    meetingTime: "Sundays 10:00 AM & 1:00 PM",
    address: "Near University of Aberdeen Campus",
    website: "https://example.com/gracetruth-aberdeen",
    email: "hello@example.com",
    focus: "Rallying university scholars, student evangelism teams, and accommodation support for conferences.",
  },
  {
    id: "church-coventry-1",
    name: "New Life International Church",
    city: "Coventry",
    region: "Midlands, England",
    postcode: "CV1 5RN",
    leadPastor: "Senior Pastor Mark Edwards",
    tradition: "Independent Charismatic",
    partnershipRole: "Midlands Regional Host & Youth Training",
    roleBadge: "Regional Host",
    meetingTime: "Sundays 10:00 AM · Thursdays 7:00 PM",
    address: "Central Coventry City Hub",
    website: "https://example.com/newlife-coventry",
    email: "liaison@example.com",
    focus: "Discipleship small groups for newly converted students across Warwick and Coventry universities.",
  },
  {
    id: "church-plymouth-1",
    name: "Hope Coastal Chapel",
    city: "Plymouth",
    region: "South West, England",
    postcode: "PL1 2PD",
    leadPastor: "Pastor Sarah Jenkins",
    tradition: "Community Church Network",
    partnershipRole: "South West Intercessory & Follow-Up Network",
    roleBadge: "Follow-Up Network",
    meetingTime: "Sundays 10:30 AM · Tuesdays 6:30 PM",
    address: "Plymouth Waterfront Centre",
    website: "https://example.com/hope-plymouth",
    email: "connect@example.com",
    focus: "Welcoming seekers into local family, weekly discipleship triads, and regional prayer gatherings.",
  },
  {
    id: "church-blackpool-1",
    name: "Lighthouse Community Church",
    city: "Blackpool",
    region: "North West, England",
    postcode: "FY1 1AA",
    leadPastor: "Pastor Johnathan Bell",
    tradition: "Evangelical Alliance Member",
    partnershipRole: "Upcoming Gathering Host & Local Volunteer Team",
    roleBadge: "Blackpool Host",
    meetingTime: "Sundays 10:30 AM",
    address: "Blackpool Town Centre Auditorium",
    website: "https://example.com/lighthouse-blackpool",
    email: "contact@example.com",
    focus: "Ground team for Blackpool Pentecost gathering: welfare, sanctuary preparation, and attendee hospitality.",
  },
];

export function ChurchPartnersDirectory({
  forceVisible = false,
}: {
  forceVisible?: boolean;
}) {
  const [selectedCity, setSelectedCity] = React.useState<string>("All");
  const [previewUnlocked, setPreviewUnlocked] = React.useState<boolean>(false);
  const [expandedChurchId, setExpandedChurchId] = React.useState<string | null>(null);

  // Check URL query on client mount for preview override (?preview=churches)
  React.useEffect(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      if (params.get("preview") === "churches" || params.get("dev") === "true") {
        setPreviewUnlocked(true);
      }
    }
  }, []);

  const isVisible = LAUNCH_CHURCH_DIRECTORY || forceVisible || previewUnlocked;

  const cities = ["All", "Glasgow", "Aberdeen", "Coventry", "Plymouth", "Blackpool"];

  const filteredChurches =
    selectedCity === "All"
      ? PLACEHOLDER_CHURCHES
      : PLACEHOLDER_CHURCHES.filter((c) => c.city === selectedCity);

  // If not visible, render discreet preview control so the leadership team can easily test it
  if (!isVisible) {
    return (
      <section className="border-b border-dashed border-border/80 bg-secondary/40 py-6">
        <div className="site-width flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="inline-flex size-8 items-center justify-center rounded-sm bg-primary/10 text-primary shrink-0">
              <LockKeyIcon size={16} weight="duotone" />
            </span>
            <div>
              <p className="font-display text-xs font-bold uppercase tracking-wider text-foreground">
                Partner Churches Section (Staged for Launch)
              </p>
              <p className="text-[11px] text-muted-foreground">
                Hidden from public visitors. Leadership review mode available.
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={() => setPreviewUnlocked(true)}
            className="inline-flex items-center gap-2 rounded-sm border border-primary/50 bg-background px-4 py-2 text-xs font-bold text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-200 cursor-pointer shadow-xs"
          >
            <EyeIcon size={15} weight="bold" />
            <span>Preview Partner Churches Directory</span>
          </button>
        </div>
      </section>
    );
  }

  return (
    <section
      id="partner-churches"
      className="section bg-[linear-gradient(180deg,var(--background)_0%,var(--secondary)_100%)] border-b border-border/80 relative"
    >
      <div className="site-width">
        {/* Section Header with Launch Indicator */}
        <ScrollReveal direction="up" distance={20}>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-border/60">
            <div>
              <div className="flex items-center gap-2.5">
                <p className="eyebrow section-label">Local Discipleship Families</p>
                {!LAUNCH_CHURCH_DIRECTORY && (
                  <span className="inline-flex items-center gap-1 rounded-sm bg-primary/15 border border-primary/30 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-primary">
                    <EyeSlashIcon size={12} weight="bold" />
                    Preview Mode (Staged)
                  </span>
                )}
              </div>
              <h2 className="tracking-[-0.04em] text-3xl sm:text-4xl md:text-5xl font-extrabold text-foreground mt-2">
                Partner Churches Directory
              </h2>
            </div>
            <p className="text-sm text-muted-foreground max-w-md leading-relaxed">
              Pentecost is not a local church. We are committed to connecting every saved believer and revived student into thriving, Christ-exalting local church communities.
            </p>
          </div>
        </ScrollReveal>

        {/* City Filter Pills */}
        <div className="mt-8 flex flex-wrap items-center gap-2 pb-2">
          {cities.map((city) => {
            const isSelected = selectedCity === city;
            return (
              <button
                key={city}
                type="button"
                onClick={() => setSelectedCity(city)}
                className={`inline-flex items-center gap-1.5 rounded-sm px-4 py-2 text-xs font-bold uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                  isSelected
                    ? "bg-primary text-primary-foreground shadow-sm"
                    : "bg-background border border-border text-foreground hover:border-primary/50 hover:bg-secondary"
                }`}
              >
                <ChurchIcon size={14} weight={isSelected ? "fill" : "duotone"} />
                <span>{city}</span>
              </button>
            );
          })}
        </div>

        {/* Churches Cards Grid (Compact & Expandable) */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredChurches.map((church) => {
            const isExpanded = expandedChurchId === church.id;

            return (
              <div
                key={church.id}
                className="group flex flex-col justify-between rounded-sm border border-border bg-background p-6 transition-all duration-300 hover:border-primary/60 hover:shadow-md"
              >
                <div>
                  {/* Top Role Badge & Location */}
                  <div className="flex items-center justify-between gap-2 border-b border-border/60 pb-3">
                    <span className="inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider text-primary bg-accent px-2 py-0.5 rounded-sm">
                      <SparkleIcon size={12} weight="fill" />
                      {church.roleBadge}
                    </span>
                    <span className="inline-flex items-center gap-1 text-xs text-muted-foreground font-medium">
                      <MapPinLineIcon size={13} className="text-primary" />
                      {church.city}, {church.region}
                    </span>
                  </div>

                  {/* Church Name & Pastor */}
                  <h3 className="font-display text-xl font-bold tracking-tight text-foreground mt-4 leading-snug">
                    {church.name}
                  </h3>
                  <p className="text-xs font-semibold text-primary mt-1">
                    {church.leadPastor}
                  </p>
                  <p className="text-[11px] text-muted-foreground mt-0.5">
                    {church.tradition}
                  </p>

                  <p className="text-xs leading-relaxed text-muted-foreground mt-3">
                    {church.focus}
                  </p>

                  {/* Collapsible Details Drawer */}
                  <div className="mt-4 pt-3 border-t border-border/60">
                    <button
                      type="button"
                      onClick={() =>
                        setExpandedChurchId((prev) =>
                          prev === church.id ? null : church.id
                        )
                      }
                      className="w-full flex items-center justify-between text-[11px] font-bold uppercase tracking-wider text-foreground hover:text-primary transition-colors cursor-pointer py-1"
                      aria-expanded={isExpanded}
                    >
                      <span>Meeting Times &amp; Location</span>
                      <CaretDownIcon
                        size={14}
                        weight="bold"
                        className={`transition-transform duration-200 ${
                          isExpanded ? "rotate-180 text-primary" : "rotate-0"
                        }`}
                      />
                    </button>

                    <div
                      className={`grid transition-all duration-200 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                        isExpanded
                          ? "grid-rows-[1fr] opacity-100 mt-2"
                          : "grid-rows-[0fr] opacity-0 mt-0"
                      }`}
                    >
                      <div className="overflow-hidden space-y-1.5 text-xs text-muted-foreground">
                        <div className="flex items-center gap-2">
                          <CompassIcon size={14} className="text-primary shrink-0" />
                          <span>{church.meetingTime}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPinLineIcon size={14} className="text-primary shrink-0" />
                          <span>{church.address} ({church.postcode})</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <EnvelopeSimpleIcon size={14} className="text-primary shrink-0" />
                          <span>{church.email}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card Action */}
                <div className="mt-6 pt-4 border-t border-border/60 flex items-center justify-between">
                  <span className="text-[11px] font-medium text-muted-foreground">
                    Local Discipleship Partner
                  </span>
                  <a
                    href={church.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-bold text-primary hover:underline"
                  >
                    <span>Visit Church</span>
                    <ArrowUpRightIcon size={13} weight="bold" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Church Partnership Invitation Banner */}
        <div className="mt-12 rounded-sm border border-border bg-secondary/60 p-6 sm:p-8 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="max-w-2xl">
            <span className="text-[11px] font-bold uppercase tracking-widest text-primary block">
              Open Pulpit · Shared Purpose
            </span>
            <h3 className="font-display text-xl sm:text-2xl font-bold text-foreground mt-1">
              Would your church like to be listed as a city discipleship partner?
            </h3>
            <p className="text-xs sm:text-sm text-muted-foreground mt-2 leading-relaxed">
              We welcome churches of all evangelical and biblical traditions to partner through prayer, venue hosting, volunteer mobilisation, and welcoming newly saved believers into small groups.
            </p>
          </div>

          <ButtonLink
            variant="movement"
            size="lg"
            href="#partner-enquiry-section"
            className="shrink-0"
          >
            Enquire for Your Church <ArrowUpRightIcon size={16} weight="bold" />
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}

