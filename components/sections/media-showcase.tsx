"use client";

import * as React from "react";
import {
  CameraIcon,
  FilmStripIcon,
  PauseIcon,
  PlayIcon,
  SpeakerHighIcon,
  SpeakerSlashIcon,
} from "@phosphor-icons/react";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

const VIDEO_MOMENTS = [
  {
    id: "video-1",
    src: "/assets/pentecost-video-1.mp4",
    poster: "/assets/pentecost-video-1-poster.jpg",
    tag: "01 / TESTIMONY & WITNESS",
    title: "Moments from the Gathering",
    caption: "Believers sharing in fellowship and expectation for the Holy Spirit.",
  },
  {
    id: "video-3",
    src: "/assets/pentecost-video-3.mp4",
    poster: "/assets/pentecost-video-3-poster.jpg",
    tag: "02 / THE MINISTRY OF THE WORD",
    title: "Preaching & Prayer Charge",
    caption: "Strengthening and aligning a generation through sound biblical ministry.",
  },
  {
    id: "video-4",
    src: "/assets/pentecost-video-4.mp4",
    poster: "/assets/pentecost-video-4-poster.jpg",
    tag: "03 / UNIFIED WORSHIP",
    title: "Hearts Lifted in Worship",
    caption: "Voices raised across churches and ministries as one body in Christ.",
  },
  {
    id: "video-2",
    src: "/assets/pentecost-video-2.mp4",
    poster: "/assets/pentecost-video-2-poster.jpg",
    tag: "04 / FELLOWSHIP & COMMUNITY",
    title: "Welcome & Hospitality",
    caption: "Creating a warm space where young ministers and believers connect.",
  },
] as const;

const PHOTO_ARCHIVE = [
  {
    src: "/assets/pentecost-landscape-9.jpg",
    title: "United Across Ministries",
    tag: "COMMUNITY",
    span: "md:col-span-2 aspect-[16/10]",
  },
  {
    src: "/assets/pentecost-portrait-5.jpg",
    title: "Fervent Intercession",
    tag: "PRAYER",
    span: "md:col-span-1 aspect-[4/5]",
  },
  {
    src: "/assets/pentecost-portrait-8.jpg",
    title: "Proclaiming the Word",
    tag: "THE WORD",
    span: "md:col-span-1 aspect-[4/5]",
  },
  {
    src: "/assets/gallery-6.jpg",
    title: "Pentecost Glasgow Gathering",
    tag: "GATHERINGS",
    span: "md:col-span-2 aspect-[16/10]",
  },
  {
    src: "/assets/pentecost-landscape-7.jpg",
    title: "Creative & Technical Production",
    tag: "SERVICE",
    span: "md:col-span-2 aspect-[16/10]",
  },
  {
    src: "/assets/pentecost-portrait-2.jpg",
    title: "Personal Consecration",
    tag: "DEVOTION",
    span: "md:col-span-1 aspect-[4/5]",
  },
] as const;

function VideoCard({
  item,
}: {
  item: (typeof VIDEO_MOMENTS)[number];
}) {
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
      className="group relative overflow-hidden rounded-md border border-border bg-night aspect-[9/15] cursor-pointer select-none"
    >
      <video
        ref={videoRef}
        src={item.src}
        poster={item.poster}
        muted={isMuted}
        loop
        playsInline
        preload="metadata"
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
      />

      {/* Top Controls Bar */}
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
            <SpeakerSlashIcon size={15} weight="bold" />
          ) : (
            <SpeakerHighIcon size={15} weight="bold" />
          )}
        </button>
      </div>

      {/* Center Play / Pause Indicator */}
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

      {/* Bottom Caption Overlay */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 bg-[linear-gradient(180deg,transparent_0%,oklch(12%_0_0/0.9)_100%)] p-5 pt-16">
        <h3 className="font-display text-lg font-bold tracking-[-0.02em] text-on-dark">
          {item.title}
        </h3>
        <p className="mt-1 text-xs leading-relaxed text-dark-muted">
          {item.caption}
        </p>
      </div>
    </article>
  );
}

export function MediaShowcaseSection() {
  return (
    <section className="section soft-section border-t border-border">
      <div className="site-width">
        {/* Video Reels Header */}
        <ScrollReveal direction="up" distance={22}>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <p className="eyebrow section-label">
                <FilmStripIcon size={15} weight="duotone" />
                <span>Live Moments &amp; Reels</span>
              </p>
              <h2 className="tracking-[-0.04em]">
                Captured in worship,
                <br />
                <em>prayer and fellowship.</em>
              </h2>
            </div>
            <p className="body-copy max-w-md">
              Glimpses from our gatherings across cities — young ministers and
              believers standing together with one hunger for God. Tap any reel
              to play with sound.
            </p>
          </div>
        </ScrollReveal>

        {/* 4 Interactive Video Reel Cards */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {VIDEO_MOMENTS.map((item, idx) => (
            <ScrollReveal
              key={item.id}
              direction="up"
              distance={26}
              delay={idx * 90}
            >
              <VideoCard item={item} />
            </ScrollReveal>
          ))}
        </div>

        {/* Photographic Archive Grid */}
        <div className="mt-24">
          <ScrollReveal direction="up" distance={22}>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
              <div>
                <p className="eyebrow section-label">
                  <CameraIcon size={15} weight="duotone" />
                  <span>Gathering Photography</span>
                </p>
                <h2 className="tracking-[-0.04em]">
                  One Spirit. One Body.
                </h2>
              </div>
              <p className="body-copy max-w-md">
                Across churches, ministries, and campus fellowships — moments of
                ministry, consecration, and community.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 items-stretch">
            {PHOTO_ARCHIVE.map((photo, idx) => (
              <ScrollReveal
                key={photo.src}
                direction="up"
                distance={24}
                delay={idx * 75}
                className={photo.span}
              >
                <figure className="group relative h-full w-full overflow-hidden rounded-md border border-border bg-night m-0">
                  <img
                    src={photo.src}
                    alt={photo.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <figcaption className="absolute inset-x-0 bottom-0 bg-[linear-gradient(180deg,transparent_0%,oklch(12%_0_0/0.86)_100%)] p-5 pt-12">
                    <span className="text-[10px] font-bold uppercase tracking-[0.14em] text-ember">
                      {photo.tag}
                    </span>
                    <div className="font-display text-lg font-bold text-on-dark mt-0.5">
                      {photo.title}
                    </div>
                  </figcaption>
                </figure>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

