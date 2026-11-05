import Link from "next/link";
import {
  ArrowUpRightIcon,
  EnvelopeSimpleIcon,
  FlameIcon,
  InstagramLogoIcon,
  UsersThreeIcon,
  XLogoIcon,
  YoutubeLogoIcon,
} from "@phosphor-icons/react/dist/ssr";
import {
  FOOTER_INVOLVED_LINKS,
  FOOTER_MOVEMENT_LINKS,
} from "@/lib/constants";

export function Footer() {
  return (
    <footer className="bg-background pt-6 pb-8 px-4 sm:px-6 lg:px-10">
      <div className="mx-auto max-w-[1720px]">
        {/* Main Editorial Card Container */}
        <div className="relative overflow-hidden rounded-xl bg-[linear-gradient(180deg,var(--secondary)_0%,var(--accent)_100%)] border border-border pt-12 sm:pt-16 md:pt-20 px-6 sm:px-12 lg:px-16">
          {/* Top 4-Column Editorial Grid */}
          <div className="relative z-10 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-12 lg:gap-8">
            {/* Col 1: Human Editorial Statement */}
            <div className="lg:col-span-4">
              <Link
                href="/"
                aria-label="Pentecost home"
                className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.14em] text-primary mb-4"
              >
                <span className="size-2 rounded-none bg-primary" />
                Outpouring of the Holy Spirit
              </Link>
              <p className="font-display text-2xl sm:text-[27px] font-semibold tracking-[-0.035em] leading-[1.2] text-foreground max-w-[360px]">
                Across churches. Across cities. One Spirit.
              </p>
              <p className="mt-3.5 text-[13px] leading-[1.8] text-muted-foreground max-w-[330px]">
                Gathering a generation in worship, prayer and the ministry of
                the Word.
              </p>
            </div>

            {/* Col 2: Explore / The Movement */}
            <div className="lg:col-span-2">
              <h2 className="text-[13px] font-semibold tracking-[-0.01em] text-foreground mb-4">
                The movement
              </h2>
              <ul className="space-y-2.5 text-[13px] text-muted-foreground">
                {FOOTER_MOVEMENT_LINKS.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="inline-flex items-center gap-1.5 transition-all duration-200 hover:text-primary hover:translate-x-1"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
                {FOOTER_INVOLVED_LINKS.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="inline-flex items-center gap-1.5 transition-all duration-200 hover:text-primary hover:translate-x-1"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Col 3: Follow & Connect Badges */}
            <div className="lg:col-span-3">
              <h2 className="text-[13px] font-semibold tracking-[-0.01em] text-foreground mb-4">
                Follow the movement
              </h2>
              <div className="flex flex-wrap gap-2">
                <a
                  href="https://instagram.com/pentecostymc"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-badge group"
                >
                  <InstagramLogoIcon
                    size={15}
                    weight="fill"
                    className="text-[#E1306C] transition-transform duration-200 group-hover:scale-110"
                  />
                  <span>@pentecostymc</span>
                </a>

                <a
                  href="https://x.com/pentecostymc"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-badge group"
                >
                  <XLogoIcon
                    size={14}
                    weight="bold"
                    className="text-night transition-transform duration-200 group-hover:scale-110"
                  />
                  <span>@pentecostymc</span>
                </a>

                <a
                  href="https://youtube.com/@pentecostymc"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-badge group"
                >
                  <YoutubeLogoIcon
                    size={15}
                    weight="fill"
                    className="text-[#FF0000] transition-transform duration-200 group-hover:scale-110"
                  />
                  <span>@pentecostymc</span>
                </a>

                <Link href="/contact" className="social-badge group">
                  <EnvelopeSimpleIcon
                    size={15}
                    weight="duotone"
                    className="text-primary transition-transform duration-200 group-hover:scale-110"
                  />
                  <span>Enquiries</span>
                </Link>

                <Link href="/forum" className="social-badge group">
                  <UsersThreeIcon
                    size={15}
                    weight="duotone"
                    className="text-primary transition-transform duration-200 group-hover:scale-110"
                  />
                  <span>Ministers&apos; Forum</span>
                </Link>
              </div>
            </div>

            {/* Col 4: Prominent Action Callouts */}
            <div className="lg:col-span-3 flex flex-col justify-start">
              <Link
                href="/partners"
                className="group block pb-5 border-b border-border"
              >
                <div className="flex items-center justify-between gap-3">
                  <span className="font-display text-2xl font-bold tracking-[-0.03em] text-primary transition-colors duration-200 group-hover:text-night">
                    Partner With Us
                  </span>
                  <span className="inline-flex size-7 shrink-0 items-center justify-center rounded-sm bg-primary text-primary-foreground transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:bg-night">
                    <ArrowUpRightIcon
                      size={15}
                      weight="bold"
                      className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                  </span>
                </div>
                <p className="mt-1 text-xs text-muted-foreground">
                  Let&apos;s stand together across churches
                </p>
              </Link>

              <Link href="/get-involved" className="group block pt-5">
                <div className="flex items-center justify-between gap-3">
                  <span className="font-display text-2xl font-bold tracking-[-0.03em] text-foreground transition-colors duration-200 group-hover:text-primary">
                    Get Involved
                  </span>
                  <span className="inline-flex size-7 shrink-0 items-center justify-center rounded-sm bg-night text-on-dark transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:bg-primary group-hover:text-primary-foreground">
                    <ArrowUpRightIcon
                      size={15}
                      weight="bold"
                      className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                  </span>
                </div>
                <p className="mt-1 text-xs text-muted-foreground">
                  Bring your gifts &amp; serve the movement
                </p>
              </Link>
            </div>
          </div>

          {/* Giant Cropped Display Wordmark at Bottom of Card */}
          <div
            aria-hidden="true"
            className="mt-12 sm:mt-16 md:mt-20 -mx-6 sm:-mx-12 lg:-mx-16 select-none pointer-events-none overflow-hidden flex justify-center"
          >
            <span className="font-display font-extrabold lowercase tracking-[-0.065em] text-night leading-[0.76] text-[19.5vw] max-w-full whitespace-nowrap translate-y-[12%]">
              pentecost
            </span>
          </div>
        </div>

        {/* Bottom Metadata Row Outside Card */}
        <div className="mt-5 px-2 sm:px-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] font-medium text-muted-foreground">
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
            <span>Pentecost © 2026</span>
            <span aria-hidden="true">·</span>
            <Link
              href="/about"
              className="hover:text-primary transition-colors"
            >
              The Mandate
            </Link>
            <span aria-hidden="true">·</span>
            <Link
              href="/contact"
              className="hover:text-primary transition-colors"
            >
              Contact &amp; Enquiries
            </Link>
          </div>

          <div className="flex items-center gap-3">
            <span>Acts 2:4</span>
            <span aria-hidden="true">·</span>
            <span className="uppercase tracking-wider text-[10px] font-semibold text-foreground">
              One Spirit. One Body. One Generation Set Ablaze.
            </span>
            <FlameIcon
              size={15}
              weight="duotone"
              className="text-primary shrink-0"
            />
          </div>
        </div>
      </div>
    </footer>
  );
}
