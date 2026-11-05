import type { Metadata } from "next";
import {
  BookBookmarkIcon,
  CompassIcon,
  FlameIcon,
  HandsPrayingIcon,
  UsersIcon,
} from "@phosphor-icons/react/dist/ssr";
import { PageHero } from "@/components/page-hero";
import { ValueCard } from "@/components/ui/value-card";
import {
  MarqueeStrip,
  ScrollReveal,
  ScrollTextReveal,
} from "@/components/ui/scroll-reveal";
import { FaqAccordion } from "@/components/sections/faq-accordion";
import { SurroundingFrameGrid } from "@/components/sections/surrounding-frame-grid";
import { CtaBand } from "@/components/cta-band";
import { VISION_STATEMENT } from "@/lib/constants";

export const metadata: Metadata = {
  title: "The Mandate",
  description:
    "Discover the vision and purpose of Pentecost: spiritual renewal, unity across ministries and a generation strengthened in Christ.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        variant="about"
        eyebrow="Our heart. His purposes."
        title="The Mandate"
      >
        A gathering of young ministers and believers. A movement across churches
        and ministries. One shared hunger for God.
      </PageHero>

      <section className="section">
        <div className="site-width editorial-grid">
          <ScrollReveal direction="up" distance={24}>
            <p className="eyebrow section-label">What is Pentecost?</p>
            <h2 className="tracking-[-0.04em]">
              Many communities.
              <br />
              <em>One body in Christ.</em>
            </h2>

            <div className="mt-8 inline-flex items-center gap-3 rounded-sm border border-border bg-secondary px-4 py-3">
              <span className="inline-flex size-10 items-center justify-center rounded-sm bg-accent text-primary">
                <HandsPrayingIcon size={20} weight="duotone" />
              </span>
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-primary">
                  20 June 2025
                </p>
                <p className="text-xs text-muted-foreground">
                  Vision birthed during midnight prayer
                </p>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="up" distance={24} delay={120}>
            <div className="body-copy">
              <p>
                Pentecost is a non-denominational gathering of young ministers
                and believers, bringing people across churches and ministries
                together in worship, prayer, and the ministry of the Word.
              </p>
              <p>
                The vision was birthed during midnight prayer on 20 June 2025.
                Its aim is spiritual renewal, unity across ministries, and a
                fresh outpouring of the Holy Spirit.
              </p>
              <p>
                Although the vision speaks to a generation of young people,
                attendance is not age-restricted. All who share a hunger for God
                are welcome.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <MarqueeStrip
        items={[
          "Spiritual Renewal",
          "Unity Across Ministries",
          "Outpouring of the Holy Spirit",
          "Birthed in Prayer",
        ]}
      />

      <section className="section soft-section">
        <div className="site-width editorial-grid">
          <ScrollReveal direction="up" distance={24}>
            <p className="eyebrow section-label">Our vision</p>
            <h2 className="tracking-[-0.04em]">
              Strengthened.
              <br />
              Aligned. Set ablaze.
            </h2>
          </ScrollReveal>

          <ScrollReveal direction="up" distance={24} delay={120}>
            <blockquote className="quote">
              <ScrollTextReveal
                text={`“${VISION_STATEMENT}”`}
                highlightWords={[
                  "worship,",
                  "prayer,",
                  "Word",
                  "strengthened,",
                  "aligned,",
                  "ablaze",
                ]}
              />
            </blockquote>
          </ScrollReveal>
        </div>
      </section>

      <section className="section">
        <div className="site-width">
          <ScrollReveal direction="up" distance={24}>
            <p className="eyebrow section-label">Our purpose</p>
            <h2 className="tracking-[-0.04em]">
              Encounter that goes beyond a moment.
            </h2>
          </ScrollReveal>

          <div className="values-grid">
            <ScrollReveal direction="up" distance={24} delay={0}>
              <ValueCard
                index="01"
                icon={<FlameIcon size={24} weight="duotone" />}
                title="Spiritual renewal"
                copy="Believers strengthened through worship, prayer and the Word, with a fresh hunger for God."
              />
            </ScrollReveal>
            <ScrollReveal direction="up" distance={24} delay={100}>
              <ValueCard
                index="02"
                icon={<UsersIcon size={24} weight="duotone" />}
                title="Unity across ministries"
                copy="Churches and ministries walking together, beyond denominational boundaries, as one body in Christ."
              />
            </ScrollReveal>
            <ScrollReveal direction="up" distance={24} delay={200}>
              <ValueCard
                index="03"
                icon={<CompassIcon size={24} weight="duotone" />}
                title="A life of purpose"
                copy="Believers aligned and set ablaze for God's purposes — connected to Christ and to local Christian communities."
              />
            </ScrollReveal>
          </div>
        </div>
      </section>

      <SurroundingFrameGrid
        line1Prefix="Our"
        line1Accent="Heart"
        line2Prefix="His"
        line2Accent="Purposes."
        ctaLabel="Stand with the movement"
        ctaHref="/get-involved"
      />

      <section className="px-4 sm:px-6 lg:px-10 py-4">
        <div className="mx-auto max-w-[1720px]">
          <div className="section dark-section rounded-md px-6 sm:px-12 lg:px-16">
            <div className="site-width editorial-grid">
              <ScrollReveal direction="up" distance={24}>
                <p className="eyebrow section-label">A Spirit-led movement</p>
                <h2 className="tracking-[-0.04em]">
                  From city to city.
                  <br />
                  As He leads.
                </h2>
              </ScrollReveal>

              <ScrollReveal direction="up" distance={24} delay={120}>
                <div className="body-copy">
                  <p>
                    Pentecost is not intended to build a single church. It seeks
                    to help people connect to Christ and become rooted in local
                    Christian communities.
                  </p>
                  <p>
                    Gathering locations and emphases vary according to prayer
                    and discernment. The shared heart remains worship, prayer,
                    fellowship, discipleship and the work of the gospel.
                  </p>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="site-width">
          <ScrollReveal direction="up" distance={24}>
            <p className="eyebrow section-label">Rooted in Scripture</p>
            <h2 className="tracking-[-0.04em]">Our anchor scriptures.</h2>
          </ScrollReveal>

          <div className="scripture-grid">
            <ScrollReveal direction="up" distance={24} delay={0} className="h-full">
              <article className="scripture-item h-full group rounded-md border border-border bg-secondary/50 p-8 transition-colors duration-200 hover:border-primary/40 hover:bg-secondary">
                <div className="inline-flex items-center gap-2 rounded-sm bg-accent px-3 py-1 text-xs font-bold text-primary mb-4">
                  <BookBookmarkIcon size={15} weight="duotone" />
                  <span>Unity &amp; Outpouring</span>
                </div>
                <h3 className="tracking-[-0.03em]">Acts 2:1-4</h3>
                <p className="body-copy">
                  The believers were together in one place when the Holy Spirit
                  came upon them. They were all filled with the Holy Spirit — an
                  anchor for our heart of unity and fresh outpouring.
                </p>
              </article>
            </ScrollReveal>

            <ScrollReveal direction="up" distance={24} delay={120} className="h-full">
              <article className="scripture-item h-full group rounded-md border border-border bg-secondary/50 p-8 transition-colors duration-200 hover:border-primary/40 hover:bg-secondary">
                <div className="inline-flex items-center gap-2 rounded-sm bg-accent px-3 py-1 text-xs font-bold text-primary mb-4">
                  <FlameIcon size={15} weight="duotone" />
                  <span>Set Ablaze</span>
                </div>
                <h3 className="tracking-[-0.03em]">Judges 15:4</h3>
                <p className="body-copy">
                  The account of Samson bringing foxes together, with a
                  firebrand between each pair, is an anchor scripture for the
                  movement&apos;s theme of being set ablaze.
                </p>
              </article>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <FaqAccordion />
      <CtaBand />
    </>
  );
}
