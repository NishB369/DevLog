import GlowingButton from "@/app/Components/GlowingButton";
import Particles from "@/app/Components/Particles";

const CTABannerSection = () => {
  return (
    <div
      id="contact"
      className="w-full flex items-center justify-center p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12 tracking-tighter bg-black"
    >
      <div className="relative w-full max-w-6xl rounded-xl py-12 sm:py-16 md:py-20 lg:py-24 overflow-hidden bg-linear-to-br from-[#4ade80] via-[#2c824c] to-[#153f25] drop-shadow-xl">
        {/* Particles background */}
        <div className="absolute inset-0 -z-10 opacity-50">
          <Particles
            particleColors={["#ffffff", "#ffffff"]}
            particleCount={500}
            particleSpread={15}
            speed={0.3}
            particleBaseSize={100}
            moveParticlesOnHover={true}
            alphaParticles={false}
            disableRotation={false}
          />
        </div>

        {/* Headline */}
        <div className="flex flex-col items-center px-4 sm:px-6 text-center mb-8">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tighter leading-tight">
            Engineer{" "}
            <span className="font-serif italic text-black">your day</span>,
            <br />
            not just your code.
          </h1>
          <h2 className="mt-2 text-white text-xs sm:text-sm italic px-2">
            If you scrolled this far, it’s time to START OFF!
          </h2>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 px-4">
          <a href="https://wa.me/" target="_blank" rel="noopener noreferrer">
            <GlowingButton>Whatsapp</GlowingButton>
          </a>
          <a href="tel:">
            <GlowingButton>Call</GlowingButton>
          </a>
          <a href="mailto:">
            <GlowingButton>Email</GlowingButton>
          </a>
        </div>
      </div>
    </div>
  );
};

export default CTABannerSection;
