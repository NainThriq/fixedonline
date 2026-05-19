import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us — Free Plumber Website Quote",
  description:
    "Contact Get Fixed Online today. Tell us about your plumbing business and we'll have your professional website live within 48 hours. Free quote, no obligation, no tech knowledge needed.",
  alternates: {
    canonical: "https://getfixedonline.uk/contact",
  },
  openGraph: {
    title: "Contact Get Fixed Online — Free Website Quote for Plumbers",
    description:
      "Ready to get your plumbing business online? Fill in our short form and we'll have your site live within 48 hours.",
    url: "https://getfixedonline.uk/contact",
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://getfixedonline.uk" },
              { "@type": "ListItem", position: 2, name: "Contact", item: "https://getfixedonline.uk/contact" },
            ],
          }),
        }}
      />
      {children}
    </>
  );
}
