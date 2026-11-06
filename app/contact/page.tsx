import type { Metadata } from "next";
import {
  GlobeSimpleIcon,
  InstagramLogoIcon,
} from "@phosphor-icons/react/dist/ssr";
import { PageHero } from "@/components/page-hero";
import { TextLink } from "@/components/ui/text-link";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { EnquiryForm } from "@/components/enquiry-form";

export const metadata: Metadata = {
  title: "Contact & Enquiries",
  description:
    "Enquiries about Pentecost, partnership, volunteering and the Young Believers Forum. Our enquiry service is opening soon.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        variant="contact"
        eyebrow="Let's connect"
        title="Contact & Enquiries"
      >
        A shared heart for Christ is where the conversation begins.
      </PageHero>

      <section className="section">
        <div className="site-width editorial-grid">
          <ScrollReveal direction="up" distance={24}>
            <p className="eyebrow section-label">We&apos;d love to connect</p>
            <h2 className="tracking-[-0.04em]">
              A conversation.
              <br />
              <em>A connection.</em>
            </h2>
            <p className="body-copy mt-6">
              For churches, ministries, young believers, leaders and anyone seeking to be
              part of the movement, enquiry information will be available here
              soon.
            </p>

            <div className="value-card mt-8 flex items-start justify-between gap-4">
              <div>
                <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-primary mb-2">
                  <GlobeSimpleIcon size={14} weight="duotone" />
                  <span>Social Community</span>
                </div>
                <h3>Find the movement</h3>
                <p>Public social handle</p>
                <p className="text-primary mt-2 font-semibold">@pentecostymc</p>
              </div>
              <span className="inline-flex size-11 items-center justify-center rounded-sm bg-accent text-primary">
                <InstagramLogoIcon size={22} weight="duotone" />
              </span>
            </div>

            <TextLink href="/partners">
              Explore church &amp; ministry partnership
            </TextLink>

            <p className="form-footnote mt-8">
              Privacy and legal information will be added when approved, before
              enquiry submission is enabled.
            </p>
          </ScrollReveal>

          <ScrollReveal direction="up" distance={24} delay={120}>
            <EnquiryForm />
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
