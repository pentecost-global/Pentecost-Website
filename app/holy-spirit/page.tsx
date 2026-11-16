import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowDownIcon,
  ArrowUpRightIcon,
  BookOpenTextIcon,
  CompassIcon,
  FlameIcon,
  HandsPrayingIcon,
  SparkleIcon,
} from "@phosphor-icons/react/dist/ssr";
import { ButtonLink } from "@/components/ui/button";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { CtaBand } from "@/components/cta-band";

export const metadata: Metadata = {
  title: "Our Host: The Holy Spirit",
  description:
    "Before the first song is sung, there is One whose presence matters above all else. The Spirit of the Living God. The Fire of Pentecost.",
};

export default function HolySpiritPage() {
  return (
    <>
      {/* 1. Reverent Hero Section */}
      <section className="relative overflow-hidden bg-[linear-gradient(135deg,oklch(15%_0.03_28)_0%,oklch(18%_0.045_35)_60%,oklch(22%_0.055_38)_100%)] text-on-dark border-b border-on-dark/15 py-18 sm:py-28">
        {/* Atmospheric Flame / Spirit Light Backdrop */}
        <div className="absolute inset-0 pointer-events-none select-none overflow-hidden" aria-hidden="true">
          <img
            src="/assets/spirit-light.jpg"
            alt=""
            loading="eager"
            decoding="async"
            fetchPriority="high"
            className="absolute inset-0 size-full object-cover object-center opacity-25 mix-blend-screen filter contrast-125"
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_0%,oklch(15%_0.03_28_/_0.85)_70%,oklch(15%_0.03_28)_100%)]" />
          <div className="absolute -top-24 right-1/4 size-96 rounded-full bg-primary/25 blur-3xl" />
        </div>

        <div className="site-width relative z-10">
          <ScrollReveal direction="up" distance={22} className="max-w-4xl mx-auto text-center">
            <h1 className="font-display text-4xl sm:text-6xl lg:text-[76px] font-extrabold uppercase tracking-[-0.045em] leading-[0.95] text-on-dark">
              OUR HOST: <br />
              <span className="text-ember">THE HOLY SPIRIT</span>
            </h1>

            <p className="mt-5 font-serif italic text-lg sm:text-2xl text-ember/90 font-medium">
              The Spirit of the Living God. The Fire of Pentecost.
            </p>

            <p className="mt-6 text-base sm:text-lg leading-relaxed text-dark-muted max-w-2xl mx-auto">
              Before the first song is sung, before the first prayer is lifted,
              before any minister takes the stage, there is One whose presence
              matters above all else.
            </p>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
              <ButtonLink variant="hero" size="lg" href="#declaration">
                Read the Declaration <ArrowDownIcon size={16} weight="bold" />
              </ButtonLink>
              <ButtonLink variant="heroOutline" size="lg" href="/gatherings">
                Experience His Presence <ArrowUpRightIcon size={16} weight="bold" />
              </ButtonLink>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 2. Core Proclamation & Sacred Statement */}
      <section id="declaration" className="section bg-[linear-gradient(180deg,var(--background)_0%,var(--secondary)_100%)] border-b border-border">
        <div className="site-width max-w-4xl">
          {/* Document Header Indicator */}
          <div className="flex items-center justify-between border-b border-border/80 pb-4 mb-10 text-xs font-bold uppercase tracking-widest text-muted-foreground">
            <span className="flex items-center gap-2 text-primary">
              <SparkleIcon size={16} weight="duotone" />
              Pentecost Foundation
            </span>
            <span>Acts 2:1–4 · John 16:13–14</span>
          </div>

          <article className="space-y-10 sm:space-y-12">
            {/* Opening Charge */}
            <ScrollReveal direction="up" distance={20}>
              <div className="rounded-sm border border-border/70 bg-background p-6 sm:p-10 shadow-xs">
                <p className="font-serif text-lg sm:text-xl leading-relaxed text-foreground/90 font-medium">
                  Before the first song is sung, before the first prayer is lifted,
                  before any minister takes the stage, there is One whose presence
                  matters above all else:
                </p>

                <div className="mt-6 pt-6 border-t border-border flex items-center justify-between">
                  <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-primary">
                    THE HOLY SPIRIT.
                  </h2>
                  <span className="inline-flex size-10 items-center justify-center rounded-sm bg-accent text-primary">
                    <FlameIcon size={22} weight="fill" />
                  </span>
                </div>
              </div>
            </ScrollReveal>

            {/* Who He Is */}
            <ScrollReveal direction="up" distance={20} delay={80}>
              <div className="prose-section space-y-5">
                <div className="rounded-sm border-l-4 border-primary bg-secondary/60 p-6 sm:p-8">
                  <p className="text-base sm:text-lg font-bold text-foreground leading-relaxed">
                    He is not an emotion. He is not an atmosphere we manufacture.
                  </p>
                  <p className="mt-2 text-xl sm:text-2xl font-display font-extrabold text-primary uppercase tracking-tight">
                    He is God, the Spirit of the Living God!
                  </p>
                </div>

                <p className="text-base sm:text-lg leading-relaxed text-muted-foreground">
                  The same Spirit who moved upon the surface of the deep at creation,
                  descended upon believers at Pentecost, and raised Jesus Christ from the dead
                  is alive and actively at work today!
                </p>
              </div>
            </ScrollReveal>

            {/* The Fire Has Not Gone Out */}
            <ScrollReveal direction="up" distance={20} delay={100}>
              <div className="rounded-sm border border-border/80 bg-background p-6 sm:p-10 shadow-xs">
                <span className="text-[11px] font-bold uppercase tracking-widest text-primary block mb-2">
                  Divine Conviction
                </span>
                <h3 className="font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold uppercase tracking-tight text-foreground">
                  THE FIRE OF PENTECOST HAS NOT GONE OUT!
                </h3>
                <p className="mt-4 text-base sm:text-lg leading-relaxed text-muted-foreground">
                  He still transforms lives, reveals Jesus, empowers believers, and sets
                  hearts ablaze for the purposes of God in this generation.
                </p>
              </div>
            </ScrollReveal>

            {/* We Gather For Him */}
            <ScrollReveal direction="up" distance={20} delay={120}>
              <div className="space-y-4">
                <p className="text-base sm:text-lg leading-relaxed text-foreground font-medium">
                  We do not gather to celebrate personalities, programmes, or performances.
                </p>
                <div className="p-6 sm:p-8 rounded-sm bg-primary/10 border border-primary/25">
                  <h3 className="font-display text-3xl sm:text-4xl font-black uppercase tracking-tight text-primary">
                    WE GATHER FOR HIM!
                  </h3>
                  <p className="mt-3 text-base sm:text-lg leading-relaxed text-foreground/90">
                    For His presence. For His power. For a generation to encounter Jesus,
                    rediscover its identity in Christ, and rise into the fullness of its divine calling.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            {/* Highlight Callout Box (Exact Quote from Image) */}
            <ScrollReveal direction="up" distance={24} delay={140}>
              <div className="relative rounded-sm border-l-6 border-primary bg-[linear-gradient(135deg,oklch(96%_0.025_55)_0%,oklch(93%_0.035_50)_100%)] p-7 sm:p-10 shadow-md">
                <p className="font-serif text-xl sm:text-2xl lg:text-3xl leading-snug text-foreground font-semibold">
                  &ldquo;Without Him, we can organise a gathering.{" "}
                  <strong className="text-primary font-bold">
                    But only He can transform a life.
                  </strong>&rdquo;
                </p>
              </div>
            </ScrollReveal>

            {/* The Unified Cry / Three Declarations */}
            <ScrollReveal direction="up" distance={24} delay={160}>
              <div className="rounded-sm border border-border bg-background p-6 sm:p-10">
                <p className="text-sm font-bold uppercase tracking-wider text-muted-foreground">
                  Across churches, cultures and cities, our cry remains the same:
                </p>

                <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="rounded-sm border border-primary/30 bg-primary/5 p-5 text-center">
                    <span className="text-xs font-bold uppercase tracking-wider text-primary block">
                      01 · Revelation
                    </span>
                    <h4 className="mt-2 font-display text-xl sm:text-2xl font-black uppercase tracking-tight text-foreground">
                      LET JESUS BE REVEALED!
                    </h4>
                  </div>
                  <div className="rounded-sm border border-primary/30 bg-primary/5 p-5 text-center">
                    <span className="text-xs font-bold uppercase tracking-wider text-primary block">
                      02 · Consecration
                    </span>
                    <h4 className="mt-2 font-display text-xl sm:text-2xl font-black uppercase tracking-tight text-foreground">
                      LET HEARTS BURN AGAIN!
                    </h4>
                  </div>
                  <div className="rounded-sm border border-primary/30 bg-primary/5 p-5 text-center">
                    <span className="text-xs font-bold uppercase tracking-wider text-primary block">
                      03 · Awakening
                    </span>
                    <h4 className="mt-2 font-display text-xl sm:text-2xl font-black uppercase tracking-tight text-foreground">
                      LET A GENERATION BE SET ABLAZE!
                    </h4>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Final Heavy Banner Ribbon (Matching User's Image Footer) */}
            <ScrollReveal direction="up" distance={24} delay={180}>
              <div className="rounded-sm bg-[linear-gradient(135deg,oklch(20%_0.05_28)_0%,oklch(26%_0.08_30)_100%)] p-7 sm:p-10 text-center text-on-dark shadow-xl border border-ember/25">
                <p className="font-display text-lg sm:text-2xl lg:text-3xl font-extrabold uppercase tracking-tight text-ember">
                  HE IS OUR HOST. HIS PRESENCE IS OUR PRIORITY. HIS GLORY IS OUR PURSUIT.
                </p>
              </div>
            </ScrollReveal>
          </article>
        </div>
      </section>

      {/* 3. Scripture Anchor Foundations */}
      <section className="section soft-section border-b border-border">
        <div className="site-width">
          <ScrollReveal direction="up" distance={20}>
            <div className="max-w-2xl">
              <p className="eyebrow section-label">Biblical Anchor</p>
              <h2 className="tracking-[-0.04em] text-3xl sm:text-4xl font-extrabold text-foreground">
                Witness of the Scriptures
              </h2>
              <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
                The Pentecost movement is anchored in the timeless witness of the Word of God concerning the Holy Spirit.
              </p>
            </div>
          </ScrollReveal>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            <ScrollReveal direction="up" distance={22} delay={0}>
              <div className="h-full rounded-sm border border-border bg-background p-6 flex flex-col justify-between">
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-primary">
                    Acts 2:1–4 · The Outpouring
                  </span>
                  <p className="mt-3 text-sm italic text-foreground/90 leading-relaxed font-serif">
                    &ldquo;And when the day of Pentecost was fully come, they were all with one accord in one place... and they were all filled with the Holy Ghost.&rdquo;
                  </p>
                </div>
                <p className="mt-4 pt-3 border-t border-border/80 text-xs text-muted-foreground">
                  One Spirit unifying one body in corporate prayer.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="up" distance={22} delay={80}>
              <div className="h-full rounded-sm border border-border bg-background p-6 flex flex-col justify-between">
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-primary">
                    John 16:14 · Exalting Jesus
                  </span>
                  <p className="mt-3 text-sm italic text-foreground/90 leading-relaxed font-serif">
                    &ldquo;He shall glorify me: for he shall receive of mine, and shall shew it unto you.&rdquo;
                  </p>
                </div>
                <p className="mt-4 pt-3 border-t border-border/80 text-xs text-muted-foreground">
                  The mark of the genuine Spirit is always the exaltation of Christ.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="up" distance={22} delay={160}>
              <div className="h-full rounded-sm border border-border bg-background p-6 flex flex-col justify-between">
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-primary">
                    Romans 8:11 · Life-Giving Power
                  </span>
                  <p className="mt-3 text-sm italic text-foreground/90 leading-relaxed font-serif">
                    &ldquo;He that raised up Christ from the dead shall also quicken your mortal bodies by his Spirit that dwelleth in you.&rdquo;
                  </p>
                </div>
                <p className="mt-4 pt-3 border-t border-border/80 text-xs text-muted-foreground">
                  The resurrecting power that transforms dead religion into living fire.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* 4. Action Banner */}
      <CtaBand />
    </>
  );
}

