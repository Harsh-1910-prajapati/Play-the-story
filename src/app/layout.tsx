import type { Metadata } from "next";
import { Cormorant_Garamond, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/config/site";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FloatingWhatsApp } from "@/components/ui/FloatingWhatsApp";
import { Analytics } from "@vercel/analytics/next";
import { DEFAULT_SOCIAL_IMAGE } from "@/config/seo";

const cormorantGaramond = Cormorant_Garamond({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://playthestory.com"),
  title: {
    default: `${siteConfig.name} — ${siteConfig.tagline}`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  alternates: { canonical: "/" },
  keywords: [
    "Wedding Photography Ahmedabad",
    "Luxury Wedding Photographer Gujarat",
    "Cinematic Wedding Films India",
    "Pre-Wedding Shoot Ahmedabad",
    "Destination Wedding Photographer Rajasthan",
    "Indian Wedding Videography",
    "Candid Wedding Photography Ahmedabad",
    "Play The Story",
  ],
  authors: [{ name: "Play The Story", url: "https://playthestory.com" }],
  creator: "Play The Story",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://playthestory.com",
    siteName: siteConfig.name,
    title: `${siteConfig.name} — Luxury Wedding Photography & Cinematic Films`,
    description: siteConfig.description,
    images: [
      {
        url: DEFAULT_SOCIAL_IMAGE,
        width: 1200,
        height: 630,
        alt: "Play The Story — Luxury Wedding Photography",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} — ${siteConfig.tagline}`,
    description: siteConfig.description,
    images: [
      DEFAULT_SOCIAL_IMAGE,
    ],
  },
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
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "ProfessionalService"],
  name: siteConfig.name,
  description: siteConfig.description,
  image: DEFAULT_SOCIAL_IMAGE,
  telephone: siteConfig.contact.phoneFormatted,
  email: siteConfig.contact.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: "B-504, Sindhu Bhavan Marg, Bodakdev",
    addressLocality: "Ahmedabad",
    addressRegion: "Gujarat",
    postalCode: "380054",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 23.0338,
    longitude: 72.5076,
  },
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://playthestory.com",
  priceRange: "₹₹₹₹",
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "10:00",
      closes: "19:00",
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${cormorantGaramond.variable} ${plusJakartaSans.variable} scroll-smooth`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-[#F5F1EA] text-[#25231F] antialiased selection:bg-[#B39B7A] selection:text-[#F5F1EA]">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <FloatingWhatsApp />
        <Analytics />
      </body>
    </html>
  );
}
