import type { Metadata } from "next";
import {
  ArrowSquareOutIcon,
  GlobeSimpleIcon,
  InstagramLogoIcon,
  TiktokLogoIcon,
  YoutubeLogoIcon,
} from "@phosphor-icons/react/dist/ssr";
import { PageHero } from "@/components/page-hero";
import { TextLink } from "@/components/ui/text-link";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { EnquiryForm } from "@/components/enquiry-form";

export const metadata: Metadata = {
  title: "Contact & Enquiries",
  description:
    "Enquiries about Pentecost, partnership, volunteering and the Young Believers Forum. Our enquiry service is opening soon.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact & Enquiries | Pentecost",
    description:
      "Enquiries about Pentecost, partnership, volunteering and the Young Believers Forum. Connect with our team.",
    url: "/contact",
    images: [
      {
        url: "/assets/about-hero-portrait.jpg",
        width: 1200,
        height: 630,
        alt: "Contact Pentecost Movement",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact & Enquiries | Pentecost",
    description:
      "Enquiries about Pentecost, partnership, volunteering and the Young Believers Forum.",
    images: ["/assets/about-hero-portrait.jpg"],
  },
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

            <div className="value-card mt-8 p-6 flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-primary">
                  <GlobeSimpleIcon size={14} weight="duotone" />
                  <span>Connect on Social</span>
                </div>
                <div className="flex items-center gap-2">
                  <a
                    href="https://tiktok.com/@pentecostglobal"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="size-8 rounded-sm bg-accent text-primary flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                    aria-label="TikTok"
                  >
                    <TiktokLogoIcon size={16} weight="bold" />
                  </a>
                  <a
                    href="https://instagram.com/pentecostymc"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="size-8 rounded-sm bg-accent text-primary flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                    aria-label="Instagram"
                  >
                    <InstagramLogoIcon size={16} weight="duotone" />
                  </a>
                  <a
                    href="https://youtube.com/@pentecostymc"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="size-8 rounded-sm bg-accent text-primary flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                    aria-label="YouTube"
                  >
                    <YoutubeLogoIcon size={16} weight="fill" />
                  </a>
                </div>
              </div>
              <div className="pt-2 border-t border-border">
                <p className="text-xs text-muted-foreground mb-3">Follow the movement live on TikTok &amp; Instagram:</p>
                <div className="flex flex-col sm:flex-row gap-2.5">
                  <a
                    href="https://tiktok.com/@pentecostglobal"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between gap-3 px-3.5 py-2.5 rounded-sm bg-night text-on-dark border border-border hover:border-[#FFE600] hover:bg-black transition-all cursor-pointer flex-1"
                    title="Opens @pentecostglobal on TikTok in a new tab"
                  >
                    <div className="flex items-center gap-2">
                      <TiktokLogoIcon size={16} weight="bold" className="text-[#00F2FE]" />
                      <span className="font-extrabold text-xs text-[#FFE600] tracking-tight">TikTok</span>
                      <span className="font-semibold text-xs text-white group-hover:underline">@pentecostglobal</span>
                    </div>
                    <ArrowSquareOutIcon size={14} weight="bold" className="text-white/40 group-hover:text-[#FFE600] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>

                  <a
                    href="https://instagram.com/pentecostymc"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between gap-3 px-3.5 py-2.5 rounded-sm bg-night text-on-dark border border-border hover:border-[#FFE600] hover:bg-black transition-all cursor-pointer flex-1"
                    title="Opens @pentecostymc on Instagram in a new tab"
                  >
                    <div className="flex items-center gap-2">
                      <InstagramLogoIcon size={16} weight="fill" className="text-[#E1306C]" />
                      <span className="font-extrabold text-xs text-[#FFE600] tracking-tight">Instagram</span>
                      <span className="font-semibold text-xs text-white group-hover:underline">@pentecostymc</span>
                    </div>
                    <ArrowSquareOutIcon size={14} weight="bold" className="text-white/40 group-hover:text-[#FFE600] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>
                </div>
              </div>
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
