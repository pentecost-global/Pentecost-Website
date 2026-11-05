import type { Metadata } from "next";
import {
  BookOpenIcon,
  ChatCircleIcon,
  FilmStripIcon,
} from "@phosphor-icons/react/dist/ssr";
import { PageHero } from "@/components/page-hero";
import { TextLink } from "@/components/ui/text-link";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { MediaShowcaseSection } from "@/components/sections/media-showcase";
import { CtaBand } from "@/components/cta-band";
import { MEDIA_ITEMS, TESTIMONIES } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Media & Testimonies",
  description:
    "Approved Pentecost gathering highlights, teaching and testimonies will be shared here when available.",
};

export default function MediaPage() {
  const placeholderCards = [
    {
      Icon: FilmStripIcon,
      title: "Gathering highlights",
      copy: "Approved gathering films and moments to follow.",
    },
    {
      Icon: BookOpenIcon,
      title: "Teaching & the Word",
      copy: "Messages and teaching will be shared when available.",
    },
    {
      Icon: ChatCircleIcon,
      title: "Testimonies",
      copy: "Genuine stories, shared with permission.",
    },
  ];

  return (
    <>
      <PageHero
        variant="media"
        eyebrow="The Word. The witness. The moments."
        title="Media & Testimonies"
      >
        A space for the stories, teaching and moments that point us back to
        Christ.
      </PageHero>

      <MediaShowcaseSection />

      <section className="section">
        <div className="site-width">
          <ScrollReveal direction="up" distance={24}>
            <p className="eyebrow section-label">From the movement</p>
            <h2 className="tracking-[-0.04em]">
              Highlights and testimonies
              <br />
              <em>coming soon.</em>
            </h2>
            <p className="body-copy mt-6 max-w-2xl">
              Approved videos, teaching and gathering media will be shared here.
              Until then, there are no event highlights or testimonies to
              display.
            </p>
          </ScrollReveal>

          <div className="media-grid">
            {MEDIA_ITEMS.length === 0
              ? placeholderCards.map(({ Icon, title, copy }, idx) => (
                  <ScrollReveal
                    key={title}
                    direction="up"
                    distance={24}
                    delay={idx * 100}
                  >
                    <article className="media-card h-full flex flex-col justify-between group rounded-md border border-border bg-secondary/40 p-6 transition-all duration-200 hover:border-primary/40 hover:-translate-y-1">
                      <div className="media-cover rounded-sm transition-colors duration-200 group-hover:bg-accent/70">
                        <Icon
                          size={38}
                          weight="duotone"
                          className="transition-transform duration-200 group-hover:scale-110"
                        />
                      </div>
                      <h3 className="tracking-[-0.03em]">{title}</h3>
                      <p>{copy}</p>
                      <span className="mt-4 inline-flex items-center gap-1.5 rounded-sm bg-accent px-2.5 py-1 text-[11px] font-bold text-primary">
                        <span className="size-1.5 bg-primary" />
                        Coming soon
                      </span>
                    </article>
                  </ScrollReveal>
                ))
              : MEDIA_ITEMS.map((item) => (
                  <article key={item.id} className="media-card">
                    {item.embedUrl && (
                      <iframe
                        className="w-full aspect-video border-0"
                        src={item.embedUrl}
                        title={item.title}
                        loading="lazy"
                        allowFullScreen
                      />
                    )}
                    <h3>{item.title}</h3>
                    <p>{item.category}</p>
                  </article>
                ))}
          </div>

          {TESTIMONIES.map((testimony) => (
            <blockquote key={testimony.id} className="quote mt-10">
              {testimony.quote}
              <cite className="block text-sm mt-4">{testimony.name}</cite>
            </blockquote>
          ))}

          <ScrollReveal direction="up" distance={20} delay={250}>
            <TextLink href="/gatherings">Explore the gatherings</TextLink>
          </ScrollReveal>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
