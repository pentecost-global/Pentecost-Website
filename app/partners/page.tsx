import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { CommunityCollageSection } from "@/components/sections/community-collage";
import { PracticalPartnershipSection } from "@/components/sections/practical-partnership";
import { EnquiryForm } from "@/components/enquiry-form";
import { CtaBand } from "@/components/cta-band";

export const metadata: Metadata = {
  title: "Partner With Us",
  description:
    "Churches, ministries, student fellowships and Christian unions: practical partnership through Pray, Mobilise, Serve, Host, and Follow Up.",
};

export default function PartnersPage() {
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

      {/* Practical Partnership 5 Pillars: Pray, Mobilise, Serve, Host, Follow Up */}
      <PracticalPartnershipSection />

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
                grow and be discipled through the Young Believers Forum and local church small groups.
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

      {/* Direct Partnership Enquiry Form */}
      <section className="section" id="partner-enquiry-section">
        <div className="site-width editorial-grid">
          <ScrollReveal direction="up" distance={24}>
            <p className="eyebrow section-label">Start a conversation</p>
            <h2 className="tracking-[-0.04em]">
              A place for
              <br />
              your community.
            </h2>
            <p className="body-copy mt-6">
              Select one or more avenues where God has called your church,
              campus fellowship or ministry to stand: Pray, Mobilise, Serve, Host,
              or Follow Up.
            </p>
          </ScrollReveal>

          <ScrollReveal direction="up" distance={24} delay={120}>
            <EnquiryForm partnership />
          </ScrollReveal>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
