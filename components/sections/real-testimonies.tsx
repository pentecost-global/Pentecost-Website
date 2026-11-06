"use client";

import * as React from "react";
import {
  ArrowUpRightIcon,
  ChatCircleTextIcon,
  FlameIcon,
  HeartIcon,
  QuotesIcon,
  SparkleIcon,
  UsersIcon,
} from "@phosphor-icons/react";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { ButtonLink } from "@/components/ui/button";

export interface Testimony {
  id: string;
  name: string;
  title: string;
  city: string;
  category: "awakening" | "unity" | "forum" | "church";
  categoryLabel: string;
  image: string;
  highlight: string;
  story: string;
  tag: string;
}

export const REAL_TESTIMONIES: Testimony[] = [
  {
    id: "grace",
    name: "Grace O.",
    title: "University Student",
    city: "Aberdeen",
    category: "awakening",
    categoryLabel: "Spiritual Awakening",
    image: "/assets/pentecost-portrait-2.jpg",
    highlight: "“The fire of prayer hit my heart afresh. I stopped playing casual religion.”",
    story:
      "I came to the Aberdeen gathering feeling spiritually drained after exams. During the midnight corporate prayer charge, I was overcome by God's holiness. It wasn't an emotional hype; it was a deep, quiet consecration. I reconnected with my campus fellowship and haven't looked back.",
    tag: "#PersonalConsecration · StudentAwakening",
  },
  {
    id: "kelechi",
    name: "Kelechi E.",
    title: "Young Believer & Volunteer",
    city: "Glasgow",
    category: "unity",
    categoryLabel: "Christian Unity",
    image: "/assets/pentecost-portrait-5.jpg",
    highlight: "“Baptist, Pentecostal, Presbyterian kneeling together under one Lord.”",
    story:
      "Growing up, our churches always felt so divided by denomination. Walking into Pentecost Glasgow and seeing youth from 14 different church backgrounds holding hands in worship made me weep with joy. This is what Jesus prayed for in John 17.",
    tag: "#John17Unity · CrossDenominational",
  },
  {
    id: "emmanuel",
    name: "Emmanuel A.",
    title: "Campus Fellowship Leader",
    city: "Scotland",
    category: "forum",
    categoryLabel: "Young Believers Forum",
    image: "/assets/gallery-2.jpg",
    highlight: "“Ministry and Christian life was never meant to be walked alone.”",
    story:
      "Leading peers on campus can feel extremely isolating. Through the Young Believers Forum, I gained brothers who hold me accountable, study the Word with me weekly, and intercede for our campus. The discipleship is real and ongoing.",
    tag: "#YoungBelieversForum · Discipleship",
  },
  {
    id: "sharon",
    name: "Minister Sharon",
    title: "Youth & Local Church Worker",
    city: "Aberdeen & Glasgow",
    category: "church",
    categoryLabel: "Local Church Fruit",
    image: "/assets/pentecost-landscape-9.jpg",
    highlight: "“Our youth returned to their home church hungry to serve.”",
    story:
      "The best thing about Pentecost is that it sends believers back into their local churches with burning zeal. Several of our youth who were disengaged started serving in the local choir and children's church the very next Sunday.",
    tag: "#LocalChurchRooted · KingdomFruit",
  },
];

export function RealTestimoniesSection() {
  const [filter, setFilter] = React.useState<string>("all");

  const filtered =
    filter === "all"
      ? REAL_TESTIMONIES
      : REAL_TESTIMONIES.filter((t) => t.category === filter);

  return (
    <section className="section bg-[linear-gradient(180deg,var(--secondary)_0%,var(--background)_100%)] border-b border-border/80">
      <div className="site-width">
        {/* Header */}
        <ScrollReveal direction="up" distance={20}>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-border/60">
            <div>
              <p className="eyebrow section-label">Real Lives Transformed</p>
              <h2 className="tracking-[-0.04em] text-3xl sm:text-4xl md:text-5xl font-extrabold text-foreground">
                Stories From the Field
              </h2>
            </div>
            <p className="text-sm text-muted-foreground max-w-md leading-relaxed">
              Read how real students, young believers, and local church leaders have been
              strengthened, aligned, and set ablaze through the ministry of Pentecost.
            </p>
          </div>
        </ScrollReveal>

        {/* Filter Pills */}
        <div className="mt-8 flex flex-wrap gap-2 sm:gap-3">
          <button
            type="button"
            onClick={() => setFilter("all")}
            className={`px-4 py-2.5 rounded-sm text-xs font-bold uppercase tracking-wider transition-all duration-200 cursor-pointer ${
              filter === "all"
                ? "bg-primary text-primary-foreground shadow-sm"
                : "bg-background border border-border text-foreground hover:border-primary/50"
            }`}
          >
            All Stories
          </button>
          {[
            { id: "awakening", label: "Spiritual Awakening" },
            { id: "unity", label: "Christian Unity" },
            { id: "forum", label: "Young Believers Forum" },
            { id: "church", label: "Local Church Fruit" },
          ].map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setFilter(cat.id)}
              className={`px-4 py-2.5 rounded-sm text-xs font-bold uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                filter === cat.id
                  ? "bg-primary text-primary-foreground shadow-sm"
                  : "bg-background border border-border text-foreground hover:border-primary/50"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Testimonials Grid */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
          {filtered.map((item, idx) => (
            <ScrollReveal
              key={item.id}
              direction="up"
              distance={24}
              delay={idx * 80}
            >
              <article className="h-full rounded-sm border border-border bg-background p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 hover:border-primary/50 hover:shadow-sm">
                <div>
                  {/* Top Bar with Category Badge */}
                  <div className="flex items-center justify-between text-xs font-bold">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-sm bg-primary/10 text-primary">
                      <FlameIcon size={13} weight="fill" />
                      {item.categoryLabel}
                    </span>
                    <span className="text-muted-foreground">{item.city}</span>
                  </div>

                  {/* Highlight Quote */}
                  <h3 className="mt-4 font-display text-lg sm:text-xl font-bold tracking-tight text-foreground leading-snug">
                    {item.highlight}
                  </h3>

                  {/* Body Story */}
                  <p className="mt-3 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    {item.story}
                  </p>
                </div>

                {/* Author Info with Photo */}
                <div className="mt-6 pt-5 border-t border-border flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="size-11 rounded-full overflow-hidden bg-night border border-border shrink-0">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="size-full object-cover object-top"
                      />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-foreground">
                        {item.name}
                      </p>
                      <p className="text-xs text-muted-foreground font-medium">
                        {item.title} · {item.city}
                      </p>
                    </div>
                  </div>

                  <span className="text-[10px] font-bold uppercase tracking-wider text-primary hidden sm:inline-block">
                    {item.tag.split(" · ")[0]}
                  </span>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

