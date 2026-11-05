import type { Metadata } from "next";
import {
  ArrowUpRightIcon,
  CameraIcon,
  FlameIcon,
  HandHeartIcon,
  MonitorIcon,
  MusicNotesIcon,
  UsersIcon,
} from "@phosphor-icons/react/dist/ssr";
import { PageHero } from "@/components/page-hero";
import { ValueCard } from "@/components/ui/value-card";
import { ButtonLink } from "@/components/ui/button";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { SurroundingFrameGrid } from "@/components/sections/surrounding-frame-grid";
import { CtaBand } from "@/components/cta-band";

export const metadata: Metadata = {
  title: "Get Involved",
  description:
    "Explore ways to serve Pentecost through prayer, worship, creative media, technical support, hospitality and campus mobilisation.",
};

export default function GetInvolvedPage() {
  const areasOfService = [
    {
      index: "01",
      Icon: FlameIcon,
      title: "Prayer & outreach",
      copy: "Stand in prayer for renewal and unity, and share in evangelism and outreach.",
    },
    {
      index: "02",
      Icon: MusicNotesIcon,
      title: "Worship",
      copy: "Serve with a heart to lead others in worship and create space for ministry.",
    },
    {
      index: "03",
      Icon: CameraIcon,
      title: "Creative & media",
      copy: "Bring gifts in social media, content, photography, video and thoughtful storytelling.",
    },
    {
      index: "04",
      Icon: MonitorIcon,
      title: "Technical",
      copy: "Support the practical sound, production and technical needs of gatherings.",
    },
    {
      index: "05",
      Icon: HandHeartIcon,
      title: "Hospitality",
      copy: "Help create a welcoming atmosphere where people can connect and find fellowship.",
    },
    {
      index: "06",
      Icon: UsersIcon,
      title: "Student & campus mobilisation",
      copy: "Connect student fellowships and university Christian unions with the shared vision.",
    },
  ];

  return (
    <>
      <PageHero
        variant="get-involved"
        eyebrow="There's a place for you"
        title="Get Involved"
      >
        Bring your gifts. Bring your willingness. Share in a movement centred on
        Christ and His purposes.
      </PageHero>

      <section className="section">
        <div className="site-width">
          <div className="editorial-grid">
            <ScrollReveal direction="up" distance={24}>
              <p className="eyebrow section-label">A heart to serve</p>
              <h2 className="tracking-[-0.04em]">
                Different gifts.
                <br />
                <em>The same Spirit.</em>
              </h2>
            </ScrollReveal>

            <ScrollReveal direction="up" distance={24} delay={120}>
              <div className="body-copy">
                <p>
                  The movement&apos;s heart is carried through prayer and
                  service. There are many ways to contribute, whether in front
                  of a gathering or quietly behind the scenes.
                </p>
                <p>
                  Volunteer applications and interest registration are not yet
                  open. Explore the areas of service below; enquiry details will
                  be shared when available.
                </p>
              </div>
            </ScrollReveal>
          </div>

          <div className="values-grid">
            {areasOfService.map(({ index, Icon, title, copy }, idx) => (
              <ScrollReveal
                key={title}
                direction="up"
                distance={24}
                delay={idx * 70}
              >
                <ValueCard
                  index={index}
                  icon={<Icon size={24} weight="duotone" />}
                  title={title}
                  copy={copy}
                />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <SurroundingFrameGrid
        line1Prefix="Our"
        line1Accent="People"
        line2Prefix="Our"
        line2Accent="Mandate."
        ctaLabel="Let's serve together"
        ctaHref="/contact"
      />

      <section className="section soft-section">
        <div className="site-width editorial-grid">
          <ScrollReveal direction="up" distance={24}>
            <p className="eyebrow section-label">Ready to take a step?</p>
            <h2 className="tracking-[-0.04em]">Serve with purpose.</h2>
          </ScrollReveal>

          <ScrollReveal direction="up" distance={24} delay={120}>
            <div className="body-copy">
              <p>
                Our enquiry service is opening soon. Visit the contact page for
                the current interest and enquiry information.
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

      <CtaBand />
    </>
  );
}
