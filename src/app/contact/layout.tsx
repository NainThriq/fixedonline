import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us — Get Your Free Plumber Website Quote",
  description:
    "Get in touch with Fixed Online today. Tell us about your plumbing business and we'll have your professional website live within 48 hours. Free quote, no obligation.",
  alternates: {
    canonical: "https://getfixedonline.uk/contact",
  },
  openGraph: {
    title: "Contact Fixed Online — Get Your Free Website Quote",
    description:
      "Ready to get your plumbing business online? Fill in our short form and we'll have your site live within 48 hours.",
    url: "https://getfixedonline.uk/contact",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
