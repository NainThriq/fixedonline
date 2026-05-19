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
    default: "Fixed Online — Plumber Websites Built in 48 Hours",
    template: "%s | Fixed Online",
  },
  description:
    "Fixed Online builds done-for-you websites exclusively for plumbers — SEO included, live in 48 hours. Professional, mobile-ready, zero tech knowledge needed. Get found on Google and start getting more calls.",
  keywords: [
    "plumber website",
    "plumbing business website",
    "website for local plumbers",
    "small plumbing business website",
    "tradie website",
    "plumbing website design",
    "get plumbing business online",
    "affordable plumber website",
    "web design for plumbers",
    "local plumber SEO",
    "plumber website builder",
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
    locale: "en",
    url: "https://getfixedonline.uk",
    siteName: "Fixed Online",
    title: "Fixed Online — Professional Websites for Local Plumbers",
    description:
      "Get your plumbing business online in 48 hours. Professional, mobile-ready websites built specifically for small plumbers. No tech knowledge required.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Fixed Online — Websites for Local Plumbers",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Fixed Online — Websites for Local Plumbers",
    description:
      "Get your plumbing business online in 48 hours. Professional websites built for small plumbers.",
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
    <html lang="en" className={`${geistSans.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        {/* ProfessionalService + Organization schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": ["ProfessionalService", "Organization"],
              "@id": "https://getfixedonline.uk/#organization",
              name: "Get Fixed Online",
              alternateName: "Fixed Online",
              url: "https://getfixedonline.uk",
              logo: {
                "@type": "ImageObject",
                url: "https://getfixedonline.uk/logo.jpeg",
                width: 300,
                height: 300,
              },
              description:
                "Fixed Online builds professional, mobile-ready websites exclusively for plumbing businesses — SEO included, live in 48 hours. No tech knowledge required.",
              email: "hello@getfixedonline.uk",
              address: {
                "@type": "PostalAddress",
                addressCountry: "GB",
              },
              areaServed: [
                { "@type": "Country", name: "United Kingdom" },
                { "@type": "Country", name: "Australia" },
                { "@type": "Country", name: "United States" },
              ],
              serviceType: "Web Design for Plumbers",
              priceRange: "$$",
              openingHoursSpecification: {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                opens: "09:00",
                closes: "18:00",
              },
              sameAs: ["https://www.instagram.com/getfixedonline"],
              founder: {
                "@type": "Person",
                "@id": "https://getfixedonline.uk/about#founder",
                name: "Hasnain Raza",
              },
              offers: {
                "@type": "Offer",
                name: "Professional Plumber Website",
                description:
                  "Done-for-you professional website for plumbing businesses, built and live within 48 hours. Includes SEO, copywriting, hosting setup, and domain connection.",
                url: "https://getfixedonline.uk/contact",
                priceCurrency: "GBP",
                availability: "https://schema.org/InStock",
                seller: { "@id": "https://getfixedonline.uk/#organization" },
              },
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.95",
                bestRating: "5",
                worstRating: "1",
                ratingCount: "15",
                reviewCount: "15",
              },
            }),
          }}
        />
        {/* WebSite schema for sitelinks searchbox + entity disambiguation */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "@id": "https://getfixedonline.uk/#website",
              name: "Fixed Online",
              url: "https://getfixedonline.uk",
              description: "Professional websites built exclusively for plumbers — SEO included, live in 48 hours.",
              publisher: { "@id": "https://getfixedonline.uk/#organization" },
              potentialAction: {
                "@type": "SearchAction",
                target: {
                  "@type": "EntryPoint",
                  urlTemplate: "https://getfixedonline.uk/?q={search_term_string}",
                },
                "query-input": "required name=search_term_string",
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
