import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://getfixedonline.uk"),
  title: {
    default: "Fixed Online — Professional Websites for Australian Plumbers",
    template: "%s | Fixed Online",
  },
  description:
    "Fixed Online builds professional, mobile-ready websites for Australian plumbing businesses. Get online in 48 hours. Serving Sydney, Melbourne, Brisbane, Perth & beyond. No tech knowledge required.",
  keywords: [
    "plumber website Australia",
    "plumbing business website",
    "website for plumbers Sydney",
    "website for plumbers Melbourne",
    "website for plumbers Brisbane",
    "website for plumbers Perth",
    "website for plumbers Adelaide",
    "tradie website Australia",
    "plumbing website design Australia",
    "get plumbing business online",
    "affordable plumber website",
    "web design for tradies",
    "plumber SEO Australia",
  ],
  authors: [{ name: "Fixed Online", url: "https://getfixedonline.uk" }],
  creator: "Fixed Online",
  publisher: "Fixed Online",
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
  openGraph: {
    type: "website",
    locale: "en_AU",
    url: "https://getfixedonline.uk",
    siteName: "Fixed Online",
    title: "Fixed Online — Professional Websites for Australian Plumbers",
    description:
      "Get your plumbing business online in 48 hours. Professional, mobile-ready websites built specifically for Australian plumbers. No tech knowledge required.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Fixed Online — Websites for Australian Plumbers",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Fixed Online — Websites for Australian Plumbers",
    description:
      "Get your plumbing business online in 48 hours. Professional websites built for Australian tradies.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "https://getfixedonline.uk",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-AU" className={`${geistSans.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        {/* JSON-LD structured data — Local Business */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              name: "Fixed Online",
              url: "https://getfixedonline.uk",
              logo: "https://getfixedonline.uk/logo.jpeg",
              description:
                "Fixed Online builds professional, mobile-ready websites for Australian plumbing businesses in 48 hours.",
              email: "hello@getfixedonline.uk",
              areaServed: [
                "Sydney", "Melbourne", "Brisbane", "Perth",
                "Adelaide", "Gold Coast", "Canberra", "Newcastle", "Australia"
              ],
              serviceType: "Web Design for Plumbers",
              priceRange: "$$",
              sameAs: ["https://github.com/NainThriq/fixedonline"],
              offers: {
                "@type": "Offer",
                description: "Professional plumber website built and live in 48 hours",
                areaServed: "Australia",
              },
            }),
          }}
        />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
