import type { Metadata } from "next";
import {
  BookOpenIcon,
  HandHeartIcon,
  MusicNotesIcon,
} from "@phosphor-icons/react/dist/ssr";
import { PageHero } from "@/components/page-hero";
import { GatheringsList } from "@/components/gatherings-list";
import { ValueCard } from "@/components/ui/value-card";
import { TextLink } from "@/components/ui/text-link";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { CtaBand } from "@/components/cta-band";

export const metadata: Metadata = {
  title: "Gatherings",
  description:
    "Spirit-led city-to-city gatherings in worship, the Word and prayer. Upcoming Pentecost gatherings will be announced here.",
};

export default function GatheringsPage() {
  return (
    <>
      <PageHero
        variant="gatherings"
        eyebrow="In His presence. Together."
        title="Gatherings"
      >
        We gather with expectation — for spiritual renewal, fellowship and a
        fresh outpouring of the Holy Spirit.
      </PageHero>

      <section className="section">
        <div className="site-width">
          <ScrollReveal direction="up" distance={24}>
            <p className="eyebrow section-label">What&apos;s ahead</p>
            <h2 className="tracking-[-0.04em]">
              Upcoming gatherings
              <br />
              will be announced here.
            </h2>
            <p className="body-copy mt-5 mb-10 max-w-2xl">
              Locations and emphases follow prayer and discernment. Confirmed
              gathering details will be shared here when available.
            </p>
          </ScrollReveal>

          <ScrollReveal direction="up" distance={24} delay={120}>
            <GatheringsList />
          </ScrollReveal>
        </div>
      </section>

      <section className="section soft-section">
        <div className="site-width">
          <ScrollReveal direction="up" distance={24}>
            <p className="eyebrow section-label">The heart of our gatherings</p>
            <h2 className="tracking-[-0.04em]">Worship. The Word. Prayer.</h2>
            <p className="body-copy mt-5 max-w-2xl">
              Each programme may differ as the Spirit leads. A gathering might
              include:
            </p>
          </ScrollReveal>

          <div className="values-grid">
            <ScrollReveal direction="up" distance={24} delay={0}>
              <ValueCard
                index="01"
                icon={<MusicNotesIcon size={24} weight="duotone" />}
                title="Worship"
                copy="Coming together across churches and ministries to worship God with one heart."
              />
            </ScrollReveal>
            <ScrollReveal direction="up" distance={24} delay={100}>
              <ValueCard
                index="02"
                icon={<BookOpenIcon size={24} weight="duotone" />}
                title="The Word & prayer"
                copy="Word and prayer charges, corporate prayer and ministry, with a hunger to be strengthened in Christ."
              />
            </ScrollReveal>
            <ScrollReveal direction="up" distance={24} delay={200}>
              <ValueCard
                index="03"
                icon={<HandHeartIcon size={24} weight="duotone" />}
                title="Fellowship"
                copy="Building cross-church relationships and encouraging one another in faith."
              />
            </ScrollReveal>
          </div>

          <ScrollReveal direction="up" distance={20} delay={250}>
            <TextLink href="/get-involved">
              Find your place in the movement
            </TextLink>
          </ScrollReveal>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
