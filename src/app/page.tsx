import type { Metadata } from "next";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import StatsSection from "@/components/StatsSection";
import PortfolioSection from "@/components/PortfolioSection";
import GlobeSection from "@/components/GlobeSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import ReviewsCarousel from "@/components/ReviewsCarousel";
import CtaBanner from "@/components/CtaBanner";

export const metadata: Metadata = {
  title: "Fixed Online — Look Like the Best Plumber in Town",
  description:
    "Fixed Online builds done-for-you, SEO-ready websites exclusively for plumbers. Go from invisible to trusted online in 48 hours. No tech knowledge, no hassle.",
  alternates: {
    canonical: "https://getfixedonline.uk",
  },
};

export default function Home() {
  return (
    <>
      <HeroSection />
      <HowItWorksSection />
      <FeaturesSection />
      <PortfolioSection />
      <GlobeSection />
      <StatsSection />
      <ReviewsCarousel />
      <CtaBanner />
    </>
  );
}
