import { ScrollReveal } from "@/components/ui/scroll-reveal";

export interface CommunityCollageSectionProps {
  badge?: string;
  titleLine1?: string;
  titleLine2?: string;
}

export function CommunityCollageSection({
  badge = "One Body in Christ",
  titleLine1 = "United across churches and ministries",
  titleLine2 = "from local congregations to campus fellowships",
}: CommunityCollageSectionProps) {
  return (
    <section className="section bg-background overflow-hidden">
      <div className="site-width">
        {/* Desktop & Tablet 8-Column Staggered Arch Collage */}
        <div className="relative">
          <div className="hidden md:grid md:grid-cols-8 gap-3 lg:gap-4 items-start">
            {/* Col 1 (Far Left): 2 Stacked Medium Cards */}
            <ScrollReveal
              direction="up"
              distance={24}
              delay={0}
              className="flex flex-col gap-3 lg:gap-4 pt-12"
            >
              <div className="aspect-[3/4] overflow-hidden rounded-md border border-border bg-secondary">
                <img
                  src="/assets/pentecost-portrait-1.jpg"
                  alt="Believers gathered in fellowship"
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="aspect-[3/4] overflow-hidden rounded-md border border-border bg-secondary">
                <img
                  src="/assets/pentecost-portrait-3.jpg"
                  alt="Community prayer moment"
                  loading="lazy"
                  className="h-full w-full object-cover object-center transition-transform duration-500 hover:scale-105"
                />
              </div>
            </ScrollReveal>

            {/* Col 2: 3 Stacked Compact Cards */}
            <ScrollReveal
              direction="up"
              distance={24}
              delay={60}
              className="flex flex-col gap-3 lg:gap-4 pt-4"
            >
              <div className="aspect-[4/3.6] overflow-hidden rounded-md border border-border bg-secondary">
                <img
                  src="/assets/gallery-2.jpg"
                  alt="Worship across denominations"
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="aspect-[4/3.6] overflow-hidden rounded-md border border-border bg-secondary">
                <img
                  src="/assets/pentecost-landscape-7.jpg"
                  alt="Creative and technical ministry team"
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="aspect-[4/3.6] overflow-hidden rounded-md border border-border bg-secondary">
                <img
                  src="/assets/gallery-5.jpg"
                  alt="Hearts lifted in praise"
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
            </ScrollReveal>

            {/* Col 3: 1 Tall Vertical Portrait Card (Offset Down) */}
            <ScrollReveal
              direction="up"
              distance={24}
              delay={120}
              className="pt-10"
            >
              <div className="aspect-[2/3.7] overflow-hidden rounded-md border border-border bg-secondary">
                <img
                  src="/assets/pentecost-portrait-2.jpg"
                  alt="Corporate intercession"
                  loading="lazy"
                  className="h-full w-full object-cover object-center transition-transform duration-500 hover:scale-105"
                />
              </div>
            </ScrollReveal>

            {/* Col 4 (Center-Left): 1 Tall Vertical Portrait Card at Top */}
            <ScrollReveal direction="up" distance={24} delay={160}>
              <div className="aspect-[2/3.5] overflow-hidden rounded-md border border-border bg-secondary">
                <img
                  src="/assets/pentecost-portrait-5.jpg"
                  alt="Outpouring of the Holy Spirit"
                  loading="lazy"
                  className="h-full w-full object-cover object-center transition-transform duration-500 hover:scale-105"
                />
              </div>
            </ScrollReveal>

            {/* Col 5 (Center-Right): 1 Tall Vertical Portrait Card at Top */}
            <ScrollReveal direction="up" distance={24} delay={200}>
              <div className="aspect-[2/3.5] overflow-hidden rounded-md border border-border bg-secondary">
                <img
                  src="/assets/pentecost-portrait-8.jpg"
                  alt="Young believers and leaders"
                  loading="lazy"
                  className="h-full w-full object-cover object-center transition-transform duration-500 hover:scale-105"
                />
              </div>
            </ScrollReveal>

            {/* Col 6: 1 Tall Vertical Portrait Card (Offset Down) */}
            <ScrollReveal
              direction="up"
              distance={24}
              delay={240}
              className="pt-10"
            >
              <div className="aspect-[2/3.7] overflow-hidden rounded-md border border-border bg-secondary">
                <img
                  src="/assets/pentecost-portrait-7.jpg"
                  alt="Ministry of the Word"
                  loading="lazy"
                  className="h-full w-full object-cover object-center transition-transform duration-500 hover:scale-105"
                />
              </div>
            </ScrollReveal>

            {/* Col 7: 3 Stacked Compact Cards */}
            <ScrollReveal
              direction="up"
              distance={24}
              delay={300}
              className="flex flex-col gap-3 lg:gap-4 pt-4"
            >
              <div className="aspect-[4/3.6] overflow-hidden rounded-md border border-border bg-secondary">
                <img
                  src="/assets/pentecost-landscape-9.jpg"
                  alt="One body in Christ"
                  loading="lazy"
                  className="h-full w-full object-cover object-center transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="aspect-[4/3.6] overflow-hidden rounded-md border border-border bg-secondary">
                <img
                  src="/assets/gallery-6.jpg"
                  alt="Pentecost Glasgow gathering"
                  loading="lazy"
                  className="h-full w-full object-cover object-center transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="aspect-[4/3.6] overflow-hidden rounded-md border border-border bg-secondary">
                <img
                  src="/assets/pentecost-landscape-11.jpg"
                  alt="Worship ministry"
                  loading="lazy"
                  className="h-full w-full object-cover object-center transition-transform duration-500 hover:scale-105"
                />
              </div>
            </ScrollReveal>

            {/* Col 8 (Far Right): 2 Stacked Medium Cards */}
            <ScrollReveal
              direction="up"
              distance={24}
              delay={360}
              className="flex flex-col gap-3 lg:gap-4 pt-12"
            >
              <div className="aspect-[3/4] overflow-hidden rounded-md border border-border bg-secondary">
                <img
                  src="/assets/pentecost-portrait-6.jpg"
                  alt="Generation set ablaze"
                  loading="lazy"
                  className="h-full w-full object-cover object-center transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="aspect-[3/4] overflow-hidden rounded-md border border-border bg-secondary">
                <img
                  src="/assets/pentecost-portrait-4.jpg"
                  alt="Rooted in Scripture"
                  loading="lazy"
                  className="h-full w-full object-cover object-center transition-transform duration-500 hover:scale-105"
                />
              </div>
            </ScrollReveal>
          </div>

          {/* Mobile Compact Collage Fallback */}
          <div className="grid grid-cols-3 gap-2.5 md:hidden mb-8">
            <div className="aspect-[3/4] overflow-hidden rounded-sm border border-border">
              <img
                src="/assets/pentecost-portrait-2.jpg"
                alt=""
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="aspect-[3/4] -mt-3 overflow-hidden rounded-sm border border-border">
              <img
                src="/assets/pentecost-portrait-5.jpg"
                alt=""
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="aspect-[3/4] overflow-hidden rounded-sm border border-border">
              <img
                src="/assets/pentecost-portrait-8.jpg"
                alt=""
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          {/* Centered Badge & Two-Line Statement Tucked Into the Arch Pocket */}
          <div className="md:-mt-24 lg:-mt-32 relative z-10 text-center max-w-xl mx-auto px-4">
            <ScrollReveal direction="up" distance={18} delay={180}>
              <span className="inline-block rounded-sm border border-border bg-background px-4 py-1.5 text-xs font-semibold text-foreground shadow-2xs">
                {badge}
              </span>
              <h2 className="mt-4 font-display text-3xl sm:text-4xl lg:text-[42px] font-extrabold tracking-[-0.04em] leading-[1.12] text-foreground">
                {titleLine1}
                <span className="block text-muted-foreground/70 font-bold mt-0.5">
                  {titleLine2}
                </span>
              </h2>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}

