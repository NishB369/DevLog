import HeroSection from "../Sections/HeroSection";
import { BentoGridSection } from "../Sections/BentoGridSection";

export default function Home() {
  return (
    <div className="w-full">
      <HeroSection />
      <BentoGridSection heading="Your Day, Structured like your Code." />
    </div>
  );
}
