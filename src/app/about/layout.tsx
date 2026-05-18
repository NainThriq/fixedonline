import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us — The Story Behind Fixed Online",
  description:
    "Fixed Online was founded to help small plumbing businesses compete online. We build professional websites in 48 hours so plumbers can focus on the work, not the tech.",
  alternates: {
    canonical: "https://getfixedonline.uk/about",
  },
  openGraph: {
    title: "About Fixed Online — Websites Built for Local Plumbers",
    description:
      "Meet the team behind Fixed Online. We build fast, professional websites for small plumbing businesses — delivered in 48 hours.",
    url: "https://getfixedonline.uk/about",
  },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
