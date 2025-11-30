"use client";

import StartLogButton from "@/app/Components/StartLogButton";
import { motion, useInView, Variants } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { useRef } from "react";

export const CtaSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Gradient shift animation
  const textFillVariants: Variants = {
    hidden: { backgroundPosition: "0% 50%" },
    visible: {
      backgroundPosition: "100% 50%",
      transition: {
        duration: 1.4,
        ease: [0.33, 1, 0.68, 1],
      },
    },
  };

  return (
    <section
      ref={ref}
      className="relative bg-black text-white overflow-hidden py-20 sm:py-32"
    >
      <div className="absolute inset-0 bg-radial from-gray-900/50 via-black to-black"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          {/* Main headline — FILLED TEXT */}
          <motion.h1
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={textFillVariants}
            className="text-3xl sm:text-5xl md:text-6xl font-bold mb-4 pb-4"
            style={{
              background: "linear-gradient(to right, #333 50%, #4ade80 50%)",
              backgroundSize: "200% 100%",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Take the{" "}
            <motion.span
              variants={textFillVariants}
              className="font-medium font-serif"
              style={{
                background: "linear-gradient(to right, #333 50%, #fff 50%)",
                backgroundSize: "200% 100%",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              {" "}
              first step
            </motion.span>{" "}
            towards{" "}
            <div className="inline-block border-2 bg-radial to-white/25 via-white/50 from-white px-6 py-2 rounded-full group">
              <Image
                src="/Brain.png"
                alt="Brain"
                width={25}
                height={100}
                className="scale-190 group-hover:rotate-12 group-hover:scale-200 transition-all duration-500 ease-in-out"
              />
            </div>{" "}
            <br />
            <motion.span
              variants={textFillVariants}
              className="font-medium font-serif"
              style={{
                background: "linear-gradient(to right, #333 50%, #fff 50%)",
                backgroundSize: "200% 100%",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              focused coding
            </motion.span>
            , not chaotic days.
          </motion.h1>

          {/* Subhead — optional fill or just fade */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-xl sm:text-2xl text-gray-300 mb-2 max-w-3xl mx-auto"
          >
            Log your wins. Track your flow. Ship with clarity.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.8 }}
            className="mt-2 text-center text-sm text-gray-500 mb-6"
          >
            Built for builders who want to ship, not manage.
          </motion.div>

          {/* CTA */}
          <div className="flex justify-center w-full">
            <div className="bg-white text-black px-6 py-2 tracking-tighter w-fit rounded-full border-2 border-[#4ade80] cursor-pointer group flex items-center justify-center gap-1">
              Get Started
              <ArrowUpRight
                size={20}
                className="group-hover:rotate-45 duration-300 ease-in-out transition-all"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
