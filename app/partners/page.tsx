import type { Metadata } from "next";
import {
  ChurchIcon,
  HandHeartIcon,
  HandshakeIcon,
  MegaphoneIcon,
  PlantIcon,
  UsersIcon,
} from "@phosphor-icons/react/dist/ssr";
import { PageHero } from "@/components/page-hero";
import { ValueCard } from "@/components/ui/value-card";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { CommunityCollageSection } from "@/components/sections/community-collage";
import { EnquiryForm } from "@/components/enquiry-form";

export const metadata: Metadata = {
  title: "Partner With Us",
  description:
    "Churches, ministries, student fellowships and Christian unions: partner in prayer, worship, outreach, discipleship and local church connection.",
};

export default function PartnersPage() {
  const waysToWalk = [
    {
      index: "01",
      Icon: HandHeartIcon,
      title: "Volunteer together",
      copy: "Serve through Prayer, Worship, Technical, Social Media & Content, and Evangelism & Outreach.",
    },
    {
      index: "02",
      Icon: MegaphoneIcon,
      title: "Publicity & mobilisation",
      copy: "Share the vision with your community and help connect churches, ministries and students.",
    },
    {
      index: "03",
      Icon: PlantIcon,
      title: "New-believer follow-up",
      copy: "Help new believers connect to local churches and take their next steps in biblical discipleship.",
    },
    {
      index: "04",
      Icon: UsersIcon,
      title: "Leadership development",
      copy: "Encourage young ministers to grow through discipleship, prayer and shared learning.",
    },
    {
      index: "05",
      Icon: HandshakeIcon,
      title: "Cross-church relationships",
      copy: "Build genuine fellowship and collaboration across churches and ministries.",
    },
    {
      index: "06",
      Icon: ChurchIcon,
      title: "Local community",
      copy: "Strengthen connection to local Christian communities and their ongoing life of faith.",
    },
  ];

  return (
    <>
      <PageHero
        variant="partners"
        eyebrow="One body. A shared purpose."
        title="Partner With Us"
      >
        Across churches, ministries and student communities, we can serve a
        generation together — without denominational boundaries.
      </PageHero>

      <section className="section">
        <div className="site-width editorial-grid">
          <ScrollReveal direction="up" distance={24}>
            <p className="eyebrow section-label">Together in the gospel</p>
            <h2 className="tracking-[-0.04em]">
              Different communities.
              <br />
              <em>A shared calling.</em>
            </h2>
          </ScrollReveal>

          <ScrollReveal direction="up" distance={24} delay={120}>
            <div className="body-copy">
              <p>
                We invite churches, para-church ministries, student fellowships
                and university Christian unions to share in Pentecost&apos;s
                vision.
              </p>
              <p>
                Partnership is rooted in prayer, evangelism, worship, fellowship
                and discipleship. It is about strengthening the body of Christ,
                not building a single church.
              </p>
              <p>
                Your local church community matters. Together, we seek to
                connect new believers to local churches where they can belong,
                grow and be discipled.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <CommunityCollageSection
        badge="Partner Communities"
        titleLine1="Standing together with churches and leaders"
        titleLine2="across ministries, campuses and Christian unions"
      />

      <section className="section soft-section">
        <div className="site-width">
          <ScrollReveal direction="up" distance={24}>
            <p className="eyebrow section-label">Ways to walk together</p>
            <h2 className="tracking-[-0.04em]">Partnership with purpose.</h2>
          </ScrollReveal>

          <div className="values-grid">
            {waysToWalk.map(({ index, Icon, title, copy }, idx) => (
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

      <section className="section">
        <div className="site-width editorial-grid">
          <ScrollReveal direction="up" distance={24}>
            <p className="eyebrow section-label">Start a conversation</p>
            <h2 className="tracking-[-0.04em]">
              A place for
              <br />
              your community.
            </h2>
            <p className="body-copy mt-6">
              Partnership enquiries will open here soon. We look forward to
              conversations rooted in a shared heart for Christ and His Church.
            </p>
          </ScrollReveal>

          <ScrollReveal direction="up" distance={24} delay={120}>
            <EnquiryForm partnership />
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
