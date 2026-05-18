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
    default: "Fixed Online — Look Like the Best Plumber in Town",
    template: "%s | Fixed Online",
  },
  description:
    "Fixed Online builds done-for-you websites exclusively for plumbers — SEO included, live in 48 hours. No tech knowledge, no hassle. Look professional, get trusted, get called.",
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
                "Fixed Online builds professional, mobile-ready websites for small plumbing businesses in 48 hours.",
              email: "hello@getfixedonline.uk",
              serviceType: "Web Design for Plumbers",
              priceRange: "$$",
              offers: {
                "@type": "Offer",
                description:
                  "Professional plumber website built and live in 48 hours",
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
