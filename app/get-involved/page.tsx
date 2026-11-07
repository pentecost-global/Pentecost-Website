import type { Metadata } from "next";
import {
  ArrowSquareOutIcon,
  ArrowUpRightIcon,
  WhatsappLogoIcon,
} from "@phosphor-icons/react/dist/ssr";
import { PageHero } from "@/components/page-hero";
import { ButtonLink } from "@/components/ui/button";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { SurroundingFrameGrid } from "@/components/sections/surrounding-frame-grid";
import {
  CallForVolunteersSection,
  GLOBAL_WHATSAPP_URL,
  VOLUNTEER_FORM_URL,
} from "@/components/sections/volunteer-callout";
import { CtaBand } from "@/components/cta-band";

export const metadata: Metadata = {
  title: "Get Involved & Call for Volunteers",
  description:
    "Answer the call for volunteers: Media & Tech, Worship, Welfare, Intercession, Ushering and join the Global Pentecost Workforce Candlesticks platform.",
};

export default function GetInvolvedPage() {
  return (
    <>
      <PageHero
        variant="get-involved"
        eyebrow="There's a place for you"
        title="Get Involved"
      >
        Bring your gifts. Bring your willingness. Share in a movement centred on
        Christ and His purposes — on the ground in our host cities and globally.
      </PageHero>

      {/* Official Call for Volunteers & Global Workforce */}
      <CallForVolunteersSection />

      <SurroundingFrameGrid
        line1Prefix="Our"
        line1Accent="People"
        line2Prefix="Our"
        line2Accent="Mandate."
        ctaLabel="Fill Volunteer Application"
        ctaHref={VOLUNTEER_FORM_URL}
      />

      <section className="section soft-section">
        <div className="site-width editorial-grid">
          <ScrollReveal direction="up" distance={24}>
            <p className="eyebrow section-label">Two Ways to Step In Today</p>
            <h2 className="tracking-[-0.04em]">
              Serve with Purpose.
              <br />
              <em>Join the Workforce.</em>
            </h2>
          </ScrollReveal>

          <ScrollReveal direction="up" distance={24} delay={120}>
            <div className="body-copy">
              <p>
                Whether you are joining volunteer teams for our next city gathering or
                stepping into the year-round Global Candlesticks prayer &amp; ministry platform,
                we welcome your heart and service in the gospel.
              </p>
              <div className="cta-row flex-wrap">
                <ButtonLink
                  variant="movement"
                  size="lg"
                  href={VOLUNTEER_FORM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto"
                >
                  Fill Volunteer Form <ArrowSquareOutIcon size={16} weight="bold" />
                </ButtonLink>
                <ButtonLink
                  variant="outline"
                  size="lg"
                  href={GLOBAL_WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto text-[#25D366] hover:text-[#25D366]"
                >
                  <WhatsappLogoIcon size={18} weight="fill" /> Join Global Workforce
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
