import { ArrowRightIcon } from "@phosphor-icons/react/dist/ssr";
import { ButtonLink } from "@/components/ui/button";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

export interface SurroundingFrameGridProps {
  line1Prefix?: string;
  line1Accent?: string;
  line2Prefix?: string;
  line2Accent?: string;
  ctaLabel?: string;
  ctaHref?: string;
}

export function SurroundingFrameGrid({
  line1Prefix = "Our",
  line1Accent = "People",
  line2Prefix = "His",
  line2Accent = "Purposes.",
  ctaLabel = "Let's serve together",
  ctaHref = "/contact",
}: SurroundingFrameGridProps) {
  return (
    <section className="section bg-background overflow-hidden py-14 lg:py-24">
      {/* Desktop 6-Column Bleed Surrounding Picture-Frame Grid */}
      <div className="hidden md:block">
        <div className="mx-auto w-[124%] -ml-[12%] lg:w-[118%] lg:-ml-[9%] max-w-[2050px]">
          {/* Row 0: Partially visible top bleed edge */}
          <div className="grid grid-cols-6 gap-4 lg:gap-6 mb-4 lg:mb-6 -mt-20 lg:-mt-28 opacity-75">
            <div />
            <div />
            <div className="aspect-[16/10] overflow-hidden rounded-md border border-border bg-secondary">
              <img
                src="/assets/pentecost-landscape-10.jpg"
                alt=""
                loading="lazy"
                className="h-full w-full object-cover object-top"
              />
            </div>
            <div className="aspect-[16/10] overflow-hidden rounded-md border border-border bg-secondary">
              <img
                src="/assets/pentecost-landscape-11.jpg"
                alt=""
                loading="lazy"
                className="h-full w-full object-cover object-center"
              />
            </div>
            <div />
            <div />
          </div>

          {/* Main 6-Column x 4-Row Frame with Open 2x2 Center Courtyard */}
          <div className="grid grid-cols-6 gap-4 lg:gap-6 items-center">
            {/* ROW 1 */}
            {/* Col 1 (Outer Left Bleed - Empty on Row 1 for staggered step) */}
            <div className="aspect-[16/10]" />

            {/* Col 2 (Inner Left Top - Slightly offset down) */}
            <ScrollReveal
              direction="up"
              distance={20}
              delay={40}
              className="translate-y-4 lg:translate-y-6"
            >
              <div className="aspect-[16/10] overflow-hidden rounded-md border border-border bg-secondary">
                <img
                  src="/assets/gallery-1.jpg"
                  alt="Believers gathered in fellowship"
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
            </ScrollReveal>

            {/* Col 3 (Center-Left Top Frame) */}
            <ScrollReveal direction="up" distance={20} delay={80}>
              <div className="aspect-[16/10] overflow-hidden rounded-md border border-border bg-secondary">
                <img
                  src="/assets/pentecost-landscape-9.jpg"
                  alt="Pentecost community united in Christ"
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
            </ScrollReveal>

            {/* Col 4 (Center-Right Top Frame) */}
            <ScrollReveal direction="up" distance={20} delay={120}>
              <div className="aspect-[16/10] overflow-hidden rounded-md border border-border bg-secondary">
                <img
                  src="/assets/pentecost-landscape-7.jpg"
                  alt="Creative and media ministry"
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
            </ScrollReveal>

            {/* Col 5 (Inner Right Top - Slightly offset down) */}
            <ScrollReveal
              direction="up"
              distance={20}
              delay={160}
              className="translate-y-4 lg:translate-y-6"
            >
              <div className="aspect-[16/10] overflow-hidden rounded-md border border-border bg-secondary">
                <img
                  src="/assets/gallery-4.jpg"
                  alt="Community and prayer"
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
            </ScrollReveal>

            {/* Col 6 (Outer Right Bleed - Empty on Row 1 for staggered step) */}
            <div className="aspect-[16/10]" />

            {/* ROW 2 & ROW 3: Left Frame + Open 2x2 Center Window + Right Frame */}
            {/* Row 2, Col 1 (Outer Left Bleed) */}
            <div className="aspect-[16/10] -translate-y-4 overflow-hidden rounded-md border border-border bg-secondary opacity-85">
              <img
                src="/assets/gallery-6.jpg"
                alt=""
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>

            {/* Row 2, Col 2 (Inner Left Frame) */}
            <ScrollReveal
              direction="up"
              distance={20}
              delay={100}
              className="translate-y-2 lg:translate-y-3"
            >
              <div className="aspect-[16/10] overflow-hidden rounded-md border border-border bg-secondary">
                <img
                  src="/assets/gallery-2.jpg"
                  alt="United worship across churches"
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
            </ScrollReveal>

            {/* CENTER 2x2 OPEN COURTYARD (Cols 3-4, Rows 2-3) */}
            <div className="col-span-2 row-span-2 flex flex-col items-center justify-center text-center px-6 py-8">
              <ScrollReveal direction="up" distance={18} delay={140}>
                <h2 className="font-display text-4xl lg:text-5xl xl:text-[58px] font-extrabold tracking-[-0.04em] leading-[1.06] text-foreground">
                  <span className="block">
                    {line1Prefix}{" "}
                    <span className="text-primary">{line1Accent}</span>
                  </span>
                  <span className="block mt-1">
                    {line2Prefix}{" "}
                    <span className="text-primary">{line2Accent}</span>
                  </span>
                </h2>

                <div className="mt-7 flex justify-center">
                  <ButtonLink variant="outline" size="default" href={ctaHref}>
                    <span>{ctaLabel}</span>
                    <ArrowRightIcon
                      size={14}
                      weight="bold"
                      className="text-primary"
                    />
                  </ButtonLink>
                </div>
              </ScrollReveal>
            </div>

            {/* Row 2, Col 5 (Inner Right Frame) */}
            <ScrollReveal
              direction="up"
              distance={20}
              delay={180}
              className="translate-y-2 lg:translate-y-3"
            >
              <div className="aspect-[16/10] overflow-hidden rounded-md border border-border bg-secondary">
                <img
                  src="/assets/gallery-5.jpg"
                  alt="Hearts lifted in prayer"
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
            </ScrollReveal>

            {/* Row 2, Col 6 (Outer Right Bleed) */}
            <div className="aspect-[16/10] -translate-y-4 overflow-hidden rounded-md border border-border bg-secondary opacity-85">
              <img
                src="/assets/pentecost-landscape-8.jpg"
                alt=""
                loading="lazy"
                className="h-full w-full object-cover object-top"
              />
            </div>

            {/* ROW 3 (Left & Right flanking columns around the 2x2 center) */}
            {/* Row 3, Col 1 (Outer Left Bleed) */}
            <div className="aspect-[16/10] -translate-y-2 overflow-hidden rounded-md border border-border bg-secondary opacity-85">
              <img
                src="/assets/gallery-3.jpg"
                alt=""
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>

            {/* Row 3, Col 2 (Inner Left Frame) */}
            <ScrollReveal
              direction="up"
              distance={20}
              delay={160}
              className="translate-y-1"
            >
              <div className="aspect-[16/10] overflow-hidden rounded-md border border-border bg-secondary">
                <img
                  src="/assets/gallery-6.jpg"
                  alt="Pentecost Glasgow gathering"
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
            </ScrollReveal>

            {/* (Cols 3 & 4 are occupied by the row-span-2 center courtyard) */}

            {/* Row 3, Col 5 (Inner Right Frame) */}
            <ScrollReveal
              direction="up"
              distance={20}
              delay={220}
              className="translate-y-1"
            >
              <div className="aspect-[16/10] overflow-hidden rounded-md border border-border bg-secondary">
                <img
                  src="/assets/pentecost-landscape-10.jpg"
                  alt="Ministry of the Word"
                  loading="lazy"
                  className="h-full w-full object-cover object-top transition-transform duration-500 hover:scale-105"
                />
              </div>
            </ScrollReveal>

            {/* Row 3, Col 6 (Outer Right Bleed) */}
            <div className="aspect-[16/10] -translate-y-2 overflow-hidden rounded-md border border-border bg-secondary opacity-85">
              <img
                src="/assets/gallery-4.jpg"
                alt=""
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>

            {/* ROW 4 (Bottom Frame Row) */}
            {/* Row 4, Col 1 (Outer Left Bleed) */}
            <div className="aspect-[16/10] overflow-hidden rounded-md border border-border bg-secondary opacity-70">
              <img
                src="/assets/gallery-2.jpg"
                alt=""
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>

            {/* Row 4, Col 2 (Inner Left Bottom) */}
            <ScrollReveal
              direction="up"
              distance={20}
              delay={200}
              className="translate-y-3"
            >
              <div className="aspect-[16/10] overflow-hidden rounded-md border border-border bg-secondary">
                <img
                  src="/assets/pentecost-landscape-11.jpg"
                  alt="Worship ministry"
                  loading="lazy"
                  className="h-full w-full object-cover object-center transition-transform duration-500 hover:scale-105"
                />
              </div>
            </ScrollReveal>

            {/* Row 4, Col 3 (Center-Left Bottom Frame) */}
            <ScrollReveal direction="up" distance={20} delay={240}>
              <div className="aspect-[16/10] overflow-hidden rounded-md border border-border bg-secondary">
                <img
                  src="/assets/pentecost-landscape-8.jpg"
                  alt="Discipleship in the Word"
                  loading="lazy"
                  className="h-full w-full object-cover object-top transition-transform duration-500 hover:scale-105"
                />
              </div>
            </ScrollReveal>

            {/* Row 4, Col 4 (Center-Right Bottom Frame) */}
            <ScrollReveal direction="up" distance={20} delay={280}>
              <div className="aspect-[16/10] overflow-hidden rounded-md border border-border bg-secondary">
                <img
                  src="/assets/pentecost-landscape-12.jpg"
                  alt="Gathered across cities"
                  loading="lazy"
                  className="h-full w-full object-cover object-center transition-transform duration-500 hover:scale-105"
                />
              </div>
            </ScrollReveal>

            {/* Row 4, Col 5 (Inner Right Bottom) */}
            <ScrollReveal
              direction="up"
              distance={20}
              delay={320}
              className="translate-y-3"
            >
              <div className="aspect-[16/10] overflow-hidden rounded-md border border-border bg-secondary">
                <img
                  src="/assets/gallery-3.jpg"
                  alt="Serving the body of Christ"
                  loading="lazy"
                  className="h-full w-full object-cover object-center transition-transform duration-500 hover:scale-105"
                />
              </div>
            </ScrollReveal>

            {/* Row 4, Col 6 (Outer Right Bleed) */}
            <div className="aspect-[16/10] overflow-hidden rounded-md border border-border bg-secondary opacity-70">
              <img
                src="/assets/gallery-5.jpg"
                alt=""
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Compact Surrounding Frame Fallback */}
      <div className="site-width md:hidden">
        <div className="grid grid-cols-2 gap-3 mb-8">
          <div className="aspect-[16/10] overflow-hidden rounded-sm border border-border">
            <img
              src="/assets/gallery-1.jpg"
              alt="Believers gathered in fellowship"
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="aspect-[16/10] overflow-hidden rounded-sm border border-border">
            <img
              src="/assets/spirit-light.jpg"
              alt="Outpouring of the Holy Spirit"
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>
        </div>

        <div className="text-center py-6 px-4">
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold tracking-[-0.04em] leading-[1.08] text-foreground">
            <span className="block">
              {line1Prefix}{" "}
              <span className="text-primary">{line1Accent}</span>
            </span>
            <span className="block mt-1">
              {line2Prefix}{" "}
              <span className="text-primary">{line2Accent}</span>
            </span>
          </h2>

          <div className="mt-5 flex justify-center">
            <ButtonLink variant="outline" size="sm" href={ctaHref}>
              <span>{ctaLabel}</span>
              <ArrowRightIcon
                size={13}
                weight="bold"
                className="text-primary"
              />
            </ButtonLink>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3 mt-8">
          <div className="aspect-[16/10] overflow-hidden rounded-sm border border-border">
            <img
              src="/assets/gallery-4.jpg"
              alt="Community prayer"
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="aspect-[16/10] overflow-hidden rounded-sm border border-border">
            <img
              src="/assets/gallery-6.jpg"
              alt="Generation set ablaze"
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
