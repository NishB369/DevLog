"use client";

import LetterGlitch from "../app/Components/LetterGlitch";
import MarqueeLogos from "../app/Components/MarqueeLogos";
import ShinyText from "../app/Components/ShinyText";
import StartLogButton from "../app/Components/StartLogButton";
import { motion, useScroll, useTransform } from "framer-motion";
import { ChartBar, Code, LayoutDashboard, Target } from "lucide-react";
import Image from "next/image";
import { useRef } from "react";

export default function HeroSection() {
  const imgRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: imgRef,
    offset: ["start end", "end start"],
  });

  const rotateX = useTransform(scrollYProgress, [0, 1], [-60, 45]);

  return (
    <section className="w-screen h-screen sm:h-auto relative flex flex-col items-center justify-center">
      <div style={{ width: "100%", height: "100%", position: "absolute" }}>
        <LetterGlitch
          glitchSpeed={50}
          centerVignette={true}
          outerVignette={false}
          smooth={true}
        />
      </div>

      <div className="container py-6 sm:py-20 mx-auto px-6 z-10 h-full w-full flex flex-col items-center justify-center bg-linear-to-b form-white/1 via-black/5 to-black/50 backdrop-blur-[6px]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-white text-center flex flex-col items-center justify-center gap-6 tracking-tighter"
        >
          <ShinyText
            heading="Introducing DevLog"
            icon={<Code className="text-yellow-400 w-4 h-4" />}
          />
          <p className="text-3xl md:text-7xl font-semibold max-w-4xl mx-auto">
            Your code{" "}
            <span className="font-serif italic font-medium">ships</span>. <br />
            Your day shouldn’t{" "}
            <span className="font-serif font-medium italic line-through">
              vanish
            </span>
            .
          </p>

          <p className="text-md md:text-lg max-w-2xl mx-auto text-gray-400 leading-6">
            DevLog helps you capture what matters before it’s lost in Slack,
            email, or memory fog. One focused entry per day.{" "}
            <span className="text-white">Built for developers who ship.</span>
          </p>

          <StartLogButton />

          <motion.div
            ref={imgRef}
            style={{
              rotateX,
              transformStyle: "preserve-3d",
              perspective: "1000px",
            }}
            className="rounded-2xl w-full -mt-16 -z-10"
          >
            <ShinyText
              heading="No Noise Focus"
              icon={<Target className="text-yellow-400 w-4 h-4" />}
              className="absolute top-12 -left-20 hidden sm:block"
              isAnimated={true}
            />
            <ShinyText
              heading="Effortless Analytics"
              icon={<ChartBar className="text-yellow-400 w-4 h-4" />}
              className="absolute top-72 left-40 hidden sm:block"
              isAnimated={true}
            />
            <ShinyText
              heading="Not Another Dashboard"
              icon={<LayoutDashboard className="text-yellow-400 w-4 h-4" />}
              className="absolute top-20 -right-20 hidden sm:block"
              isAnimated={true}
            />
            <Image
              src="/Dashboard.png"
              alt="Dashboard"
              width={1000}
              height={100}
              className="rounded-3xl border-12 border-white/10 hidden sm:block"
            />
          </motion.div>

          <MarqueeLogos heading="Trusted by Industry Leaders" />
        </motion.div>
      </div>
    </section>
  );
}
