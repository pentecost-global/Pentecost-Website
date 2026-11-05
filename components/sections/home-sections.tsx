import {
  ArrowDownIcon,
  ArrowUpRightIcon,
  BookOpenTextIcon,
  ChurchIcon,
  CompassIcon,
  FlameIcon,
  HandHeartIcon,
  HandsPrayingIcon,
  MusicNotesIcon,
  UsersIcon,
  UsersThreeIcon,
} from "@phosphor-icons/react/dist/ssr";
import { ButtonLink } from "@/components/ui/button";
import { TextLink } from "@/components/ui/text-link";
import { ValueCard } from "@/components/ui/value-card";
import {
  MarqueeStrip,
  ScrollReveal,
  ScrollTextReveal,
} from "@/components/ui/scroll-reveal";
import { GatheringsList } from "@/components/gatherings-list";
import { HeroHeadline } from "@/components/sections/hero-headline";
import { InteractivePillars } from "@/components/sections/interactive-pillars";
import { HERO_IMAGE, VISION_STATEMENT } from "@/lib/constants";

export function HomeHeroSection() {
  return (
    <section className="px-4 sm:px-6 lg:px-10 pt-4 pb-2">
      <div className="hero home-hero mx-auto max-w-[1720px] rounded-md overflow-hidden">
        <img
          className="hero-image"
          src={HERO_IMAGE}
          alt=""
          width={1920}
          height={1088}
          fetchPriority="high"
        />

        <div className="site-width hero-inner">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
            <div className="lg:col-span-8 reveal">
              <p className="eyebrow">
                <span>Outpouring of the Holy Spirit</span>
              </p>

              <HeroHeadline />

              <p className="hero-summary">
                Across churches and ministries, we gather in worship, prayer and
                the Word — for a fresh outpouring of the Holy Spirit.
              </p>

              <div className="cta-row">
                <ButtonLink
                  variant="hero"
                  size="lg"
                  href="/gatherings"
                  className="w-full sm:w-auto"
                >
                  Explore Gatherings <ArrowUpRightIcon size={16} weight="bold" />
                </ButtonLink>
                <ButtonLink
                  variant="heroOutline"
                  size="lg"
                  href="/partners"
                  className="w-full sm:w-auto"
                >
                  Partner With Us <ArrowUpRightIcon size={16} weight="bold" />
                </ButtonLink>
              </div>
            </div>

            {/* Anchor Scripture & Mandate Card */}
            <div className="lg:col-span-4 hidden lg:block">
              <div className="hero-glass-card p-6 text-on-dark">
                <div className="flex items-center justify-between text-[11px] font-bold uppercase tracking-widest text-ember">
                  <span>Anchor Scripture</span>
                  <span>Acts 2:1-4 · Judges 15:4</span>
                </div>
                <p className="mt-3 font-display text-lg font-semibold leading-snug tracking-[-0.02em] text-on-dark">
                  &ldquo;And they were all filled with the Holy Ghost…&rdquo;
                </p>
                <p className="mt-2 text-xs leading-relaxed text-dark-muted">
                  Birthed in midnight prayer on 20 June 2025 — gathering
                  believers beyond denominational walls.
                </p>
                <div className="mt-4 pt-4 hero-glass-divider flex items-center justify-between text-xs">
                  <span className="text-dark-muted">All ages welcome</span>
                  <a
                    href="#vision"
                    className="group inline-flex items-center gap-1.5 font-semibold text-ember hover:underline"
                  >
                    <span>Read the mandate</span>
                    <ArrowDownIcon
                      size={12}
                      weight="bold"
                      className="transition-transform duration-200 group-hover:translate-y-0.5"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="hero-bottom">
            <span>
              <span className="size-2 bg-ember" />
              A non-denominational, Spirit-led movement
            </span>
            <a
              href="#vision"
              className="group inline-flex items-center gap-2 text-on-dark/90 hover:text-ember transition-colors"
            >
              <span>Discover the mandate</span>
              <span className="inline-flex size-6 items-center justify-center rounded-sm border border-on-dark/25 transition-all duration-200 group-hover:translate-y-0.5 group-hover:border-ember group-hover:bg-ember group-hover:text-night">
                <ArrowDownIcon size={12} weight="bold" />
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export function ScriptureStripSection() {
  return (
    <>
      <div className="scripture-strip">
        <div className="site-width">
          <FlameIcon
            size={20}
            weight="duotone"
            className="text-primary hidden sm:block"
          />
          <p className="font-medium">
            “And they were all filled with the Holy Ghost…”
          </p>
          <span>ACTS 2:4 · KJV</span>
        </div>
      </div>

      {/* Scroll & Kinetic Typography Marquee */}
      <MarqueeStrip
        items={[
          "One Spirit",
          "One Body",
          "One Generation Set Ablaze",
          "Worship · Prayer · The Word",
          "Across Churches & Ministries",
        ]}
      />
    </>
  );
}

export function ScrollMandateSection() {
  return (
    <section className="section bg-[linear-gradient(180deg,var(--background)_0%,var(--secondary)_100%)] border-b border-border/60">
      <div className="site-width">
        <ScrollReveal direction="up" distance={20}>
          <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
            <p className="eyebrow section-label">Our Mandate in Focus</p>
            <span className="inline-flex items-center gap-2 rounded-sm bg-secondary border border-border px-3.5 py-1.5 text-xs font-semibold text-muted-foreground">
              <HandsPrayingIcon
                size={15}
                weight="duotone"
                className="text-primary"
              />
              Birthed 20 June 2025 · Non-Denominational
            </span>
          </div>

          <ScrollTextReveal
            text={VISION_STATEMENT}
            highlightWords={[
              "worship,",
              "prayer,",
              "Word",
              "strengthened,",
              "aligned,",
              "ablaze",
            ]}
            className="font-display text-3xl sm:text-4xl md:text-[46px] font-bold tracking-[-0.04em] leading-[1.15] text-foreground max-w-5xl"
          />
        </ScrollReveal>
      </div>
    </section>
  );
}

export function VisionMandateSection() {
  return (
    <section className="section" id="vision">
      <div className="site-width">
        <div className="editorial-grid">
          <ScrollReveal direction="up" distance={24}>
            <p className="eyebrow section-label">The heart of Pentecost</p>
            <h2 className="tracking-[-0.04em]">
              Not Just a Gathering.
              <br />
              <em>A Movement.</em>
            </h2>
          </ScrollReveal>

          <ScrollReveal direction="up" distance={24} delay={120}>
            <div className="vision-copy body-copy">
              <p>{VISION_STATEMENT}</p>
              <p>
                Not to build one church, but to connect people to Christ and to
                local Christian communities. A shared hunger. A united body. A
                generation living for His purposes.
              </p>
              <TextLink href="/about">Discover our mandate</TextLink>
            </div>
          </ScrollReveal>
        </div>

        <ScrollReveal direction="up" distance={30} delay={150}>
          <InteractivePillars />
        </ScrollReveal>
      </div>
    </section>
  );
}

export function CityToCitySection() {
  const expressions = [
    {
      Icon: MusicNotesIcon,
      title: "Unified Worship",
      desc: "Voices across denominations lifted as one to exalt Jesus.",
    },
    {
      Icon: HandsPrayingIcon,
      title: "Fervent Prayer",
      desc: "Corporate intercession for spiritual renewal and revival.",
    },
    {
      Icon: BookOpenTextIcon,
      title: "Ministry of the Word",
      desc: "Sound biblical teaching that aligns hearts to God's purposes.",
    },
    {
      Icon: ChurchIcon,
      title: "Local Church Rooted",
      desc: "Connecting believers back into thriving local congregations.",
    },
  ];

  return (
    <section className="section soft-section">
      <div className="site-width">
        <div className="editorial-grid">
          <ScrollReveal direction="up" distance={24}>
            <p className="eyebrow section-label">Led by the Spirit</p>
            <h2 className="tracking-[-0.04em]">
              One movement.
              <br />
              From city to city.
            </h2>
          </ScrollReveal>

          <ScrollReveal direction="up" distance={24} delay={120}>
            <div className="body-copy">
              <p>
                Pentecost goes where prayer and discernment lead. Each gathering
                carries a shared heart for renewal, while its location and
                emphasis respond to the leading of the Holy Spirit.
              </p>
              <p className="city-note">
                We gather beyond denominational boundaries — in worship, in
                fellowship and in the work of the gospel.
              </p>
              <TextLink href="/about">
                The vision that brings us together
              </TextLink>
            </div>
          </ScrollReveal>
        </div>

        {/* Complementing Rhythm Strip */}
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {expressions.map(({ Icon, title, desc }, idx) => (
            <ScrollReveal
              key={title}
              direction="up"
              distance={20}
              delay={idx * 80}
            >
              <div className="group h-full rounded-sm border border-border bg-background p-6 transition-all duration-200 hover:border-primary/50 hover:-translate-y-1">
                <div className="inline-flex size-10 items-center justify-center rounded-sm bg-accent text-primary transition-colors duration-200 group-hover:bg-primary group-hover:text-primary-foreground">
                  <Icon size={20} weight="duotone" />
                </div>
                <h3 className="mt-4 font-display text-xl font-bold tracking-[-0.02em] text-foreground">
                  {title}
                </h3>
                <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">
                  {desc}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function GatherWithUsSection() {
  return (
    <section className="section">
      <div className="site-width">
        <ScrollReveal direction="up" distance={24}>
          <div className="section-top">
            <div>
              <p className="eyebrow section-label">Gather with us</p>
              <h2 className="tracking-[-0.04em]">Room for an encounter.</h2>
            </div>
            <p className="body-copy">
              Come with expectation. There is no age restriction.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal direction="up" distance={24} delay={100}>
          <GatheringsList />
        </ScrollReveal>
      </div>
    </section>
  );
}

export function GetInvolvedPreviewSection() {
  return (
    <section className="section soft-section">
      <div className="site-width">
        <ScrollReveal direction="up" distance={24}>
          <p className="eyebrow section-label">There’s a place for you</p>
          <h2 className="tracking-[-0.04em]">
            Bring your heart.
            <br />
            Play your part.
          </h2>
        </ScrollReveal>

        <div className="values-grid">
          <ScrollReveal direction="up" distance={24} delay={0}>
            <ValueCard
              index="01"
              icon={<HandHeartIcon size={24} weight="duotone" />}
              title="Serve the movement"
              copy="Bring your gifts to prayer, worship, hospitality, technical and creative teams."
              href="/get-involved"
              linkLabel="Explore ways to serve"
            />
          </ScrollReveal>

          <ScrollReveal direction="up" distance={24} delay={100}>
            <ValueCard
              index="02"
              icon={<UsersIcon size={24} weight="duotone" />}
              title="Stand together"
              copy="Connect your church, ministry or student community to a shared vision."
              href="/partners"
              linkLabel="Explore partnership"
            />
          </ScrollReveal>

          <ScrollReveal direction="up" distance={24} delay={200}>
            <ValueCard
              index="03"
              icon={<FlameIcon size={24} weight="duotone" />}
              title="Carry the fire"
              copy="Join in prayer for spiritual renewal, unity and lives strengthened in Christ."
              href="/get-involved"
              linkLabel="Be part of the movement"
            />
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

export function YoungMinistersForumSection() {
  const forumPillars = [
    { label: "Biblical Discipleship", Icon: BookOpenTextIcon },
    { label: "Genuine Community", Icon: UsersThreeIcon },
    { label: "Accountability & Prayer", Icon: CompassIcon },
  ];

  return (
    <section className="px-4 sm:px-6 lg:px-10 py-6">
      <div className="mx-auto max-w-[1720px]">
        <div className="section dark-section rounded-md px-6 sm:px-12 lg:px-16 relative overflow-hidden">
          <div className="site-width editorial-grid relative z-10">
            <ScrollReveal direction="up" distance={24}>
              <p className="eyebrow section-label">Beyond the gathering</p>
              <h2 className="tracking-[-0.04em]">
                Young Ministers’
                <br />
                Forum.
              </h2>

              <div className="mt-8 flex flex-col sm:flex-row flex-wrap gap-2.5 w-full">
                {forumPillars.map(({ label, Icon }) => (
                  <span
                    key={label}
                    className="hero-glass-card inline-flex w-full sm:w-auto items-center gap-2.5 px-3.5 py-2 text-xs font-medium text-on-dark/90"
                  >
                    <Icon size={15} weight="duotone" className="text-ember shrink-0" />
                    {label}
                  </span>
                ))}
              </div>
            </ScrollReveal>

            <ScrollReveal direction="up" distance={24} delay={120}>
              <div className="body-copy">
                <p>
                  Ministry is not a journey to walk alone. An emerging
                  year-round network for community, biblical discipleship,
                  prayer, accountability and collaboration.
                </p>
                <p className="text-on-dark font-semibold">
                  Growing in Christ. Walking together. Serving faithfully.
                </p>
                <div className="cta-row">
                  <ButtonLink
                    variant="heroOutline"
                    size="lg"
                    href="/forum"
                    className="w-full sm:w-auto"
                  >
                    Discover the Forum{" "}
                    <ArrowUpRightIcon size={16} weight="bold" />
                  </ButtonLink>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
