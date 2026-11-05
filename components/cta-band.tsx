import {
  ArrowUpRightIcon,
  FlameIcon,
  HandshakeIcon,
} from "@phosphor-icons/react/dist/ssr";
import { ButtonLink } from "@/components/ui/button";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

export function CtaBand() {
  return (
    <section className="px-4 sm:px-6 lg:px-10 py-8">
      <div className="mx-auto max-w-[1720px]">
        <ScrollReveal direction="up" distance={28}>
          <div className="cta-band relative overflow-hidden rounded-md px-6 sm:px-12 lg:px-16 py-14 sm:py-18">
            {/* 60% / 40% Horizontal Background Split Separated by a Sweeping Arc */}
            <svg
              aria-hidden="true"
              viewBox="0 0 1000 400"
              preserveAspectRatio="none"
              className="pointer-events-none absolute inset-0 h-full w-full z-0"
            >
              <defs>
                <linearGradient
                  id="cta-arc-right-fill"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="100%"
                >
                  <stop
                    offset="0%"
                    stopColor="oklch(44% 0.155 37)"
                  />
                  <stop
                    offset="100%"
                    stopColor="oklch(34% 0.13 34)"
                  />
                </linearGradient>
              </defs>
              {/* The 40% right-hand zone bounded by a smooth concave arc from 62% top to 54% bottom */}
              <path
                d="M 630 0 Q 515 200 610 400 L 1000 400 L 1000 0 Z"
                fill="url(#cta-arc-right-fill)"
              />
              {/* Crisp subtle arc seam line */}
              <path
                d="M 630 0 Q 515 200 610 400"
                fill="none"
                stroke="oklch(98.5% 0.004 65 / 0.16)"
                strokeWidth="2"
              />
            </svg>

            <div className="relative z-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
              <div className="lg:max-w-[56%]">
                <div className="inline-flex items-center gap-2 rounded-sm bg-primary-foreground/15 px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-[0.12em] text-primary-foreground">
                  <HandshakeIcon size={14} weight="bold" />
                  <span>Stronger together</span>
                </div>
                <h2 className="mt-4 tracking-[-0.04em] text-primary-foreground">
                  A shared heart. A shared harvest.
                </h2>
                <p className="text-primary-foreground/90 text-sm sm:text-[15px] max-w-xl mt-4 leading-relaxed">
                  Churches, ministries and student communities — let&apos;s
                  stand together in prayer, service and the work of the gospel.
                </p>
              </div>

              <div className="cta-band-actions lg:pl-8">
                <ButtonLink
                  variant="paper"
                  size="lg"
                  href="/partners"
                  className="w-full sm:w-auto"
                >
                  Partner With Us <ArrowUpRightIcon size={16} weight="bold" />
                </ButtonLink>
                <ButtonLink
                  variant="heroOutline"
                  size="lg"
                  href="/get-involved"
                  className="w-full sm:w-auto"
                >
                  Get Involved <FlameIcon size={16} weight="duotone" />
                </ButtonLink>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
