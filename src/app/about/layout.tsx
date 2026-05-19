import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Get Fixed Online — Plumber Website Agency",
  description:
    "Get Fixed Online was founded to help small plumbing businesses compete online. We build professional plumber websites in 48 hours — SEO included, done for you, no tech knowledge needed.",
  alternates: {
    canonical: "https://getfixedonline.uk/about",
  },
  openGraph: {
    title: "About Get Fixed Online — Plumber Website Agency",
    description:
      "Meet the team behind Get Fixed Online. We build fast, professional websites for small plumbing businesses — delivered in 48 hours across the UK, US and Australia.",
    url: "https://getfixedonline.uk/about",
  },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              itemListElement: [
                { "@type": "ListItem", position: 1, name: "Home", item: "https://getfixedonline.uk" },
                { "@type": "ListItem", position: 2, name: "About", item: "https://getfixedonline.uk/about" },
              ],
            },
            {
              "@context": "https://schema.org",
              "@type": "Person",
              "@id": "https://getfixedonline.uk/about#founder",
              name: "Hasnain Raza",
              jobTitle: "Founder",
              worksFor: { "@id": "https://getfixedonline.uk/#organization" },
              url: "https://getfixedonline.uk/about",
              image: "https://getfixedonline.uk/about-photo.jpeg",
              description:
                "Founder of Get Fixed Online, a web design agency built exclusively for small plumbing businesses. Specialises in fast-delivery, SEO-ready websites for tradespeople.",
              sameAs: ["https://www.instagram.com/getfixedonline"],
            },
          ]),
        }}
      />
      {children}
    </>
  );
}
