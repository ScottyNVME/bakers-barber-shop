import type { Metadata } from "next";
import { Inter, Oswald, Playfair_Display } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { BUSINESS } from "@/lib/constants";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import StickyBookCTA from "@/components/layout/StickyBookCTA";
import SkipLink from "@/components/ui/SkipLink";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const oswald = Oswald({
  subsets: ["latin"],
  variable: "--font-oswald",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://www.bakersbarbershopnj.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${BUSINESS.name} | Premium Barbershop in Monmouth County NJ`,
    template: `%s | ${BUSINESS.name} - Monmouth County NJ`,
  },
  description: `${BUSINESS.name} — ${BUSINESS.tagline}. Expert haircuts, fades, beard trims, and hot towel shaves by ${BUSINESS.owner}. Serving Freehold, Middletown, Holmdel, and all of Monmouth County, NJ. Book your appointment today.`,
  keywords: [
    "barber shop Monmouth County NJ",
    "haircut Freehold NJ",
    "fade barber Monmouth County",
    "beard trim NJ",
    "hot towel shave Monmouth County",
    "solo barber Monmouth County",
    "men's haircut Middletown NJ",
    "Jared Baker barber",
    "Baker's Barber Shop",
    "best barber Monmouth County",
    "kids haircut Monmouth County NJ",
  ],
  openGraph: {
    title: `${BUSINESS.name} | Premium Barbershop in Monmouth County NJ`,
    description: `Expert haircuts, fades, beard trims, and hot towel shaves by ${BUSINESS.owner}. Serving Monmouth County, NJ.`,
    url: siteUrl,
    siteName: BUSINESS.name,
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: `${BUSINESS.name} — ${BUSINESS.tagline}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${BUSINESS.name} | Monmouth County NJ`,
    description: `Premium barbershop serving Monmouth County, NJ. Book with ${BUSINESS.owner} today.`,
  },
  alternates: {
    canonical: siteUrl,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${oswald.variable} ${playfair.variable}`}
    >
      <body>
        <SkipLink />
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
        <StickyBookCTA />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
