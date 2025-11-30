// app/UI/BentoGrid.tsx
"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export const BentoGrid = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {/* Block 1: Large (2x2) — Top Left */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5, delay: 0, ease: "easeOut" }}
        className="relative col-span-1 md:col-span-2 row-span-1 md:row-span-2 h-[350px] overflow-hidden rounded-2xl group"
      >
        <div className="absolute inset-0 bg-radial from-white/3 via-white/6 to-white/12 backdrop-blur-2xl" />
        <div
          className="absolute h-full w-full opacity-5"
          style={{ backgroundImage: 'url("/WhiteGridLines.png")' }}
        ></div>
        <div className="relative z-10 flex flex-col justify-end h-full">
          <div className="p-8 pb-0">
            <h3 className="text-3xl sm:text-4xl font-bold text-white leading-tighter">
              One Goal,{" "}
              <span className="font-serif italic tracking-normal">
                Zero Noise
              </span>
            </h3>
            <p className="text-gray-200 mt-1 max-w-prose w-3/4">
              Start with a single intention — no todos, no overwhelm. Small,
              consistent sessions compound into real progress!
            </p>
          </div>
          <div className="h-full w-full overflow-hidden relative">
            <Image
              src="/Focus.png"
              alt="One Goal, Zero Noise"
              width={400}
              height={100}
              priority
              className="absolute -right-10 top-6 drop-shadow-2xl drop-shadow-green-800 group-hover:top-0 duration-500 ease-in-out transition-all"
            />
          </div>
        </div>
      </motion.div>

      {/* Block 2: Tall (1x2) — Top Right */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
        className="relative col-span-1 row-span-1 md:row-span-2 h-[350px] overflow-hidden rounded-2xl group"
      >
        <div className="absolute inset-0 bg-radial from-white/3 via-white/6 to-white/12 backdrop-blur-2xl" />
        <div
          className="absolute h-full w-full opacity-5"
          style={{ backgroundImage: 'url("/WhiteGridLines.png")' }}
        ></div>
        <div className="relative z-10 flex flex-col justify-end h-full">
          <div className="h-full w-full overflow-hidden relative flex justify-center">
            <Image
              src="/Code.png"
              alt="One Goal, Zero Noise"
              height={100}
              width={250}
              priority
              className="absolute -top-24 drop-shadow-2xl drop-shadow-green-800 group-hover:-top-20 duration-500 ease-in-out transition-all"
            />
          </div>
          <div className="p-8 pt-0">
            <h3 className="text-xl sm:text-2xl font-bold text-white">
              Log Code,{" "}
              <span className="font-serif italic">Not Just Words</span>
            </h3>
            <p className="text-gray-200 text-sm mt-2">
              Paste snippets, errors, or architecture notes. Syntax-highlighted,
              always searchable.
            </p>
          </div>
        </div>
      </motion.div>

      {/* Block 3: Small (1x1) — Bottom Left */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
        className="relative col-span-1 md:col-span-1 row-span-1 h-[360px] overflow-hidden rounded-2xl group"
      >
        <div className="absolute inset-0 bg-radial from-white/3 via-white/6 to-white/12 backdrop-blur-2xl" />
        <div
          className="absolute h-full w-full opacity-5"
          style={{ backgroundImage: 'url("/WhiteGridLines.png")' }}
        ></div>
        <div className="relative z-10 flex flex-col justify-between h-full">
          <div className="p-6 pb-0">
            <h3 className="text-xl sm:text-2xl font-bold text-white">
              Reflect Without <span className="font-serif italic">Ritual</span>
            </h3>
            <p className="text-gray-200 mt-2 max-w-2xl text-sm">
              End your day in 90 seconds. What worked? What blocked you? Your
              future self reads this.
            </p>
          </div>
          <div className="h-full w-full overflow-hidden relative flex justify-center">
            <Image
              src="/Calendar.png"
              alt="One Goal, Zero Noise"
              height={100}
              width={250}
              priority
              className="absolute -bottom-16 drop-shadow-2xl drop-shadow-green-800 group-hover:-bottom-12 duration-500 ease-in-out transition-all"
            />
          </div>
        </div>
      </motion.div>

      {/* Block 4: Wide (2x1) — Bottom Right */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
        className="relative col-span-1 md:col-span-2 row-span-1 h-[360px] overflow-hidden rounded-2xl group"
      >
        <div className="absolute inset-0 bg-radial from-white/3 via-white/6 to-white/12 backdrop-blur-2xl" />
        <div
          className="absolute h-full w-full opacity-5"
          style={{ backgroundImage: 'url("/WhiteGridLines.png")' }}
        ></div>
        <div className="relative z-10 flex flex-col items-end text-right justify-center h-full">
          <div className="h-full w-full overflow-hidden relative">
            <Image
              src="/Radar.png"
              alt="Flow Radar visualization"
              width={300}
              height={100}
              priority
              className="absolute -left-6 -top-38 drop-shadow-2xl drop-shadow-green-800 group-hover:-top-36 duration-500 ease-in-out transition-all"
            />
          </div>
          <div className="p-6 pt-0 w-full flex flex-col justify-end">
            <h3 className="text-3xl sm:text-4xl font-bold text-white leading-tight">
              Flow Radar <br />
              <div className="font-serif italic font-medium -mt-1 text-2xl">
                (Not Another Dashboard)
              </div>
            </h3>
            <p className="text-gray-200 mt-1 text-sm sm:text-base sm:pl-40 leading-relaxed">
              Visualize your deep work patterns across weeks and months —
              without tracking a single metric manually.
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
