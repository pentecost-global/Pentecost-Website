import type { Metadata } from "next";
import {
  ArrowUpRightIcon,
  BookOpenIcon,
  HandHeartIcon,
  UsersIcon,
} from "@phosphor-icons/react/dist/ssr";
import { PageHero } from "@/components/page-hero";
import { ButtonLink } from "@/components/ui/button";
import { ValueCard } from "@/components/ui/value-card";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { CtaBand } from "@/components/cta-band";

export const metadata: Metadata = {
  title: "Young Ministers' Forum",
  description:
    "An emerging year-round network for young ministers, centred on biblical discipleship, prayer, community, accountability and collaboration.",
};

export default function ForumPage() {
  return (
    <>
      <PageHero
        variant="forum"
        eyebrow="Beyond the gathering"
        title="Young Ministers' Forum"
      >
        Growing in Christ. Walking together. Serving faithfully. Ministry is not
        a journey to walk alone.
      </PageHero>

      <section className="section">
        <div className="site-width editorial-grid">
          <ScrollReveal direction="up" distance={24}>
            <p className="eyebrow section-label">An emerging community</p>
            <h2 className="tracking-[-0.04em]">
              Rooted in the Word.
              <br />
              <em>Connected in purpose.</em>
            </h2>
          </ScrollReveal>

          <ScrollReveal direction="up" distance={24} delay={120}>
            <div className="body-copy">
              <p>
                The Young Ministers&apos; Forum is an emerging year-round
                ministerial network, creating space for community, biblical
                discipleship, prayer, accountability and collaboration.
              </p>
              <p>
                Its heart is to encourage young ministers in their walk with
                Christ and in faithful service, while strengthening
                relationships across churches and ministries.
              </p>
              <p>
                The Forum is developing. Interest enquiries will be available
                when the enquiry service opens.
              </p>
              <div className="cta-row">
                <ButtonLink variant="movement" size="lg" href="/contact">
                  Interest &amp; Enquiries{" "}
                  <ArrowUpRightIcon size={16} weight="bold" />
                </ButtonLink>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="section soft-section">
        <div className="site-width">
          <ScrollReveal direction="up" distance={24}>
            <p className="eyebrow section-label">Life together</p>
            <h2 className="tracking-[-0.04em]">
              Faithful formation. Genuine fellowship.
            </h2>
          </ScrollReveal>

          <div className="values-grid">
            <ScrollReveal direction="up" distance={24} delay={0}>
              <ValueCard
                index="01"
                icon={<UsersIcon size={24} weight="duotone" />}
                title="Community"
                copy="Relationships that encourage fellowship, accountability and collaboration beyond individual gatherings."
              />
            </ScrollReveal>
            <ScrollReveal direction="up" distance={24} delay={100}>
              <ValueCard
                index="02"
                icon={<BookOpenIcon size={24} weight="duotone" />}
                title="Biblical discipleship"
                copy="A shared commitment to growing in Christ and being formed through the ministry of the Word."
              />
            </ScrollReveal>
            <ScrollReveal direction="up" distance={24} delay={200}>
              <ValueCard
                index="03"
                icon={<HandHeartIcon size={24} weight="duotone" />}
                title="Prayer"
                copy="Seeking God together, strengthening one another and carrying a shared heart for His purposes."
              />
            </ScrollReveal>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
