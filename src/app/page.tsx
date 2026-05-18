import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import PortfolioSection from "@/components/PortfolioSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import ReviewsCarousel from "@/components/ReviewsCarousel";
import CtaBanner from "@/components/CtaBanner";

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
