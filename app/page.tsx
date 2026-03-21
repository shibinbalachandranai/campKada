import HeroSection from "@/components/home/HeroSection";
import FeatureHighlights from "@/components/home/FeatureHighlights";
import OfferingsOverview from "@/components/home/OfferingsOverview";
import AboutSnippet from "@/components/home/AboutSnippet";
import Testimonials from "@/components/home/Testimonials";
import CtaBanner from "@/components/home/CtaBanner";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <FeatureHighlights />
      <OfferingsOverview />
      <AboutSnippet />
      <Testimonials />
      <CtaBanner />
    </>
  );
}
