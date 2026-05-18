import type { Metadata } from "next";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import PortfolioSection from "@/components/PortfolioSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import ReviewsCarousel from "@/components/ReviewsCarousel";
import CtaBanner from "@/components/CtaBanner";

export const metadata: Metadata = {
  title: "Fixed Online — Websites for Local Plumbers, Ready in 48 Hours",
  description:
    "Fixed Online builds professional, mobile-ready websites for small plumbing businesses. Get your plumbing business found on Google in 48 hours. No tech knowledge required.",
  alternates: {
    canonical: "https://getfixedonline.uk",
  },
};

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeaturesSection />
      <PortfolioSection />
      <HowItWorksSection />
      <ReviewsCarousel />
      <CtaBanner />
    </>
  );
}
