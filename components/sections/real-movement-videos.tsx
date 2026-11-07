"use client";

import * as React from "react";
import {
  ArrowUpRightIcon,
  FilmStripIcon,
  PauseIcon,
  PlayIcon,
  SpeakerHighIcon,
  SpeakerSlashIcon,
} from "@phosphor-icons/react";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { ButtonLink } from "@/components/ui/button";

const REAL_REELS = [
  {
    id: "reel-glasgow-highlight",
    src: "/assets/pentecost_glasgow_highlight.mp4",
    poster: "/assets/pentecost-glasgow-minister.jpg",
    city: "GLASGOW",
    tag: "01 / GLASGOW HIGHLIGHTS",
    title: "Pentecost Glasgow Gathering",
    caption: "The atmosphere of corporate worship, prayer, and the Word at the Scottish gathering.",
  },
  {
    id: "reel-glasgow-testimonials",
    src: "/assets/glasgow_testimonials.mp4",
    poster: "/assets/pentecost-worship-lead.jpg",
    city: "GLASGOW",
    tag: "02 / TESTIMONIES & WITNESS",
    title: "Glasgow Encounters & Stories",
    caption: "Young believers and students sharing real testimonies of transformation and renewed hunger.",
  },
  {
    id: "reel-glasgow-full",
    src: "/assets/pentecost_glasgow.mp4",
    poster: "/assets/pentecost-glasgow-speaker-praying.jpg",
    city: "GLASGOW",
    tag: "03 / THE OUTPOURING",
    title: "One Generation Set Ablaze",
    caption: "Unhurried congregational intercession and passionate worship across church denominations.",
  },
] as const;

function MovementReelCard({ item }: { item: (typeof REAL_REELS)[number] }) {
  const videoRef = React.useRef<HTMLVideoElement | null>(null);
  const [isPlaying, setIsPlaying] = React.useState(false);
  const [isMuted, setIsMuted] = React.useState(true);

  const togglePlay = () => {
    const vid = videoRef.current;
    if (!vid) return;
    if (vid.paused) {
      vid.play();
      setIsPlaying(true);
    } else {
      vid.pause();
      setIsPlaying(false);
    }
  };

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    const vid = videoRef.current;
    if (!vid) return;
    vid.muted = !vid.muted;
    setIsMuted(vid.muted);
  };

  return (
    <article
      onClick={togglePlay}
      className="group relative overflow-hidden rounded-sm border border-border bg-night aspect-[9/15] cursor-pointer select-none transition-all duration-300 hover:border-primary/60 hover:shadow-lg"
    >
      <video
        ref={videoRef}
        src={item.src}
        poster={item.poster}
        muted={isMuted}
        loop
        playsInline
        preload="none"
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
      />

      {/* Top Bar */}
      <div className="absolute top-3.5 left-3.5 right-3.5 z-10 flex items-center justify-between">
        <span className="hero-glass-card px-2.5 py-1 text-[9px] font-bold uppercase tracking-[0.14em] text-ember">
          {item.tag}
        </span>

        <button
          type="button"
          onClick={toggleMute}
          aria-label={isMuted ? "Unmute video" : "Mute video"}
          className="hero-glass-card inline-flex size-8 items-center justify-center text-on-dark hover:text-ember transition-colors cursor-pointer"
        >
          {isMuted ? (
            <SpeakerSlashIcon size={14} weight="bold" />
          ) : (
            <SpeakerHighIcon size={14} weight="bold" />
          )}
        </button>
      </div>

      {/* Center Play Indicator */}
      <div
        className={`pointer-events-none absolute inset-0 z-10 flex items-center justify-center transition-opacity duration-300 ${
          isPlaying ? "opacity-0 group-hover:opacity-100" : "opacity-100"
        }`}
      >
        <span className="hero-glass-card inline-flex size-14 items-center justify-center rounded-sm text-on-dark transition-transform duration-300 group-hover:scale-105">
          {isPlaying ? (
            <PauseIcon size={22} weight="fill" className="text-ember" />
          ) : (
            <PlayIcon size={22} weight="fill" className="text-ember ml-0.5" />
          )}
        </span>
      </div>

      {/* Bottom Information */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 bg-[linear-gradient(180deg,transparent_0%,oklch(12%_0_0/0.92)_100%)] p-5 pt-16">
        <span className="text-[10px] font-bold uppercase tracking-widest text-ember/90">
          Gathering in {item.city}
        </span>
        <h3 className="font-display text-lg font-bold tracking-tight text-on-dark leading-snug mt-0.5">
          {item.title}
        </h3>
        <p className="mt-1 text-xs leading-relaxed text-dark-muted">
          {item.caption}
        </p>
      </div>
    </article>
  );
}

export function RealMovementVideosSection() {
  return (
    <section className="section bg-[linear-gradient(180deg,var(--background)_0%,var(--secondary)_100%)] border-b border-border/80">
      <div className="site-width">
        {/* Header */}
        <ScrollReveal direction="up" distance={20}>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-border/60">
            <div>
              <p className="eyebrow section-label">Movement in Motion</p>
              <h2 className="tracking-[-0.04em] text-3xl sm:text-4xl md:text-5xl font-extrabold text-foreground">
                Witness the Outpouring
              </h2>
            </div>
            <p className="text-sm text-muted-foreground max-w-md leading-relaxed">
              Not just words on a page. Watch real moments of worship, corporate prayer,
              and biblical ministry captured live at Pentecost gatherings.
            </p>
          </div>
        </ScrollReveal>

        {/* Video Reels Grid */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {REAL_REELS.map((item, idx) => (
            <ScrollReveal
              key={item.id}
              direction="up"
              distance={24}
              delay={idx * 100}
            >
              <MovementReelCard item={item} />
            </ScrollReveal>
          ))}
        </div>

        {/* Action Link to Full Media Archive */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-border">
          <span className="text-xs text-muted-foreground font-medium">
            Over 1,500 photos and videos captured across Scottish cities
          </span>
          <ButtonLink variant="movement" size="default" href="/media">
            Explore Full Media &amp; Audio Archive{" "}
            <ArrowUpRightIcon size={15} weight="bold" />
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
