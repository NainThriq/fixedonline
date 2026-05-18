import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us — The Story Behind Fixed Online",
  description:
    "Fixed Online was founded by Hasnain Raza to help Australian plumbers compete online. We build professional websites in 48 hours so tradies can focus on the pipes, not the tech.",
  alternates: {
    canonical: "https://getfixedonline.uk/about",
  },
  openGraph: {
    title: "About Fixed Online — Websites Built for Australian Tradies",
    description:
      "Meet the team behind Fixed Online. We build fast, professional websites for plumbers across Australia — delivered in 48 hours.",
    url: "https://getfixedonline.uk/about",
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
