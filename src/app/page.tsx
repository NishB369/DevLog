import HeroSection from "../Sections/HeroSection";
import { BentoGridSection } from "../Sections/BentoGridSection";
import { CtaSection } from "@/Sections/CtaSection";
import { WhyChooseDevLog } from "@/Sections/WhyChooseDevLog";
import { HowDevLogHelpsYou } from "@/Sections/HowDevLogHelpsYou";
import { TestimonialMarquee } from "@/Sections/TestimonialMarquee";
import { PricingSection } from "@/Sections/PricingSection";
import FAQs from "@/Sections/FAQs";
import CTABannerSection from "@/Sections/CTABannerSection";

export default function Home() {
  return (
    <div className="w-full">
      <HeroSection />
      <BentoGridSection heading="Your Day, Structured like your Code." />
      <CtaSection />
      <WhyChooseDevLog />
      <HowDevLogHelpsYou />
      <TestimonialMarquee />
      <PricingSection />
      <FAQs />
      <CTABannerSection/>
    </div>
  );
}
