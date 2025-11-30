import GlowingButton from "@/app/Components/GlowingButton";
import Particles from "@/app/Components/Particles";

const CTABannerSection = () => {
  return (
    <div
      id="contact"
      className="w-full flex items-center justify-center p-4 sm:p-8 lg:p-12 xl:p-10 tracking-tighter bg-black"
    >
      <div className="bg-linear-to-br from-[#4ade80] via-[#2c824c] to-[#153f25] flex flex-col gap-4 sm:gap-6 items-center w-full h-full rounded-xl py-16 sm:py-24 drop-shadow-xl relative overflow-hidden">
        <div className="h-full w-full absolute top-0 left-0 -z-10 opacity-50">
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
        <div className="flex flex-col gap-1 sm:gap-2 w-full items-center px-4 sm:px-8 scale-125 mb-6">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-5xl w-full sm:w-5/6 md:w-4/5 lg:w-3/4 xl:w-1/2 text-center text-white tracking-tighter font-bold leading-12">
            Engineer <span className="font-medium font-serif italic mr-1 text-black">your day</span>,<br />not just your code.
          </h1>
          <h2 className=" text-white text-sm text-center px-2 tracking-tight leading-tight">
            <span className="italic">If you scrolled this far,</span> It&lsquo;s
            time to START OFF!
          </h2>
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 lg:gap-6 mt-2 sm:mt-4 w-full px-4 ">
          <a target="_blank" rel="noopener noreferrer">
            <GlowingButton>Whatsapp</GlowingButton>
          </a>

          <a href="">
            <GlowingButton>Call</GlowingButton>
          </a>

          <a href="">
            <GlowingButton>Email</GlowingButton>
          </a>
        </div>
      </div>
    </div>
  );
};

export default CTABannerSection;
