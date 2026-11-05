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
    "A non-denominational Christian movement gathering people across churches and ministries in worship, prayer and the ministry of the Word.",
  openGraph: {
    siteName: SITE_NAME,
    title: `One Spirit. One Body. One Generation Set Ablaze. | ${SITE_NAME} — ${SITE_TAGLINE}`,
    description:
      "A non-denominational Christian movement gathering people across churches and ministries in worship, prayer and the ministry of the Word.",
    type: "website",
    url: "/",
  },
  twitter: {
    card: "summary_large_image",
  },
  icons: {
    icon: "/favicon.svg",
  },
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
