import type { Metadata } from "next";
import { Suspense } from "react";
import { Plus_Jakarta_Sans, Bricolage_Grotesque } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { SITE_NAME, SITE_TAGLINE, SITE_URL } from "@/lib/constants";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta-sans",
  display: "swap",
});

const bricolageGrotesque = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-bricolage-grotesque",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `One Spirit. One Body. One Generation Set Ablaze. | ${SITE_NAME} — ${SITE_TAGLINE}`,
    template: `%s | ${SITE_NAME} — ${SITE_TAGLINE}`,
  },
  description:
    "A non-denominational Christian movement gathering young believers across churches and ministries in worship, prayer and the ministry of the Word.",
  keywords: [
    "Pentecost",
    "Holy Spirit",
    "Christian youth movement",
    "revival",
    "prayer watches",
    "cross-denominational fellowship",
    "young believers forum",
    "worship gathering UK",
    "church unity",
  ],
  authors: [{ name: "Pentecost Leadership" }],
  creator: "Pentecost",
  publisher: "Pentecost",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    siteName: SITE_NAME,
    title: `One Spirit. One Body. One Generation Set Ablaze. | ${SITE_NAME} — ${SITE_TAGLINE}`,
    description:
      "A non-denominational Christian movement gathering people across churches and ministries in worship, prayer and the ministry of the Word.",
    type: "website",
    url: "/",
    locale: "en_GB",
    images: [
      {
        url: "/assets/hero-person.jpg",
        width: 1200,
        height: 630,
        alt: "Pentecost: Outpouring of the Holy Spirit",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `One Spirit. One Body. One Generation Set Ablaze. | ${SITE_NAME}`,
    description:
      "A non-denominational Christian movement gathering people across churches and ministries in worship, prayer and the ministry of the Word.",
    images: ["/assets/hero-person.jpg"],
  },
  icons: {
    icon: "/favicon.svg",
    apple: "/favicon.svg",
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ReligiousOrganization",
      "@id": `${SITE_URL}/#organization`,
      name: SITE_NAME,
      alternateName: ["Pentecost Movement", "Pentecost Global", "Young Believers Forum"],
      url: SITE_URL,
      logo: `${SITE_URL}/favicon.svg`,
      image: `${SITE_URL}/assets/hero-person.jpg`,
      description:
        "A non-denominational Christian movement gathering young believers across churches and ministries in worship, prayer, and the ministry of the Word.",
      foundingDate: "2025-06-20",
      sameAs: [
        "https://instagram.com/pentecostymc",
        "https://tiktok.com/@pentecostymc",
        "https://youtube.com/@pentecostymc",
      ],
      founder: {
        "@type": "Person",
        name: "Daniel & Priscilla Olanrewaju",
        jobTitle: "Vision Stewards",
      },
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: SITE_NAME,
      description: "Outpouring of the Holy Spirit — Across churches and cities.",
      publisher: {
        "@id": `${SITE_URL}/#organization`,
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${plusJakartaSans.variable} ${bricolageGrotesque.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <Suspense fallback={null}>
          <Header />
        </Suspense>
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
