export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://pentecostglobal.lovable.app";

export const SITE_NAME = "PENTECOST";
export const SITE_TAGLINE = "Outpouring of the Holy Spirit";

export const VISION_STATEMENT =
  "To gather young people across churches and ministries in worship, prayer, and the ministry of the Word so they may be strengthened, aligned, and set ablaze for God's purposes in their generation.";

export const HERO_IMAGE = "/assets/hero-person.jpg";

export const NAV_ITEMS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Gatherings", href: "/gatherings" },
  { label: "Partners", href: "/partners" },
  { label: "Young Ministers' Forum", href: "/forum" },
  { label: "Media", href: "/media" },
] as const;

export const FOOTER_MOVEMENT_LINKS = [
  { label: "Our mandate", href: "/about" },
  { label: "Gatherings", href: "/gatherings" },
  { label: "Young Ministers' Forum", href: "/forum" },
  { label: "Media & testimonies", href: "/media" },
] as const;

export const FOOTER_INVOLVED_LINKS = [
  { label: "Partner with us", href: "/partners" },
  { label: "Get involved", href: "/get-involved" },
  { label: "Contact & enquiries", href: "/contact" },
] as const;

export interface GatheringItem {
  id: string;
  title: string;
  date: string;
  city: string;
  venue: string;
  details: string;
}

export interface MediaItem {
  id: string;
  title: string;
  category: string;
  embedUrl?: string;
}

export interface TestimonyItem {
  id: string;
  quote: string;
  name: string;
}

export const UPCOMING_GATHERINGS: GatheringItem[] = [];
export const MEDIA_ITEMS: MediaItem[] = [];
export const TESTIMONIES: TestimonyItem[] = [];

