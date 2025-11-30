"use client";

import { motion, Variants } from "framer-motion";
import { Brain, ChartBar, Code, Lightbulb } from "lucide-react";
import { useRef } from "react";

export const HowDevLogHelpsYou = () => {
  const ref = useRef(null);

  // Fade-in + slide-up animation
  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.33, 1, 0.68, 1],
      },
    },
  };

  return (
    <section
      ref={ref}
      className="py-20 px-4 sm:px-6 lg:px-40 bg-black text-white"
    >
      {/* Header */}
      <div className="max-w-6xl mx-auto mb-12">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-5xl font-bold text-center mb-4"
        >
          How{" "}
          <span className="text-green-400 font-medium font-serif italic mr-1">
            DevLog
          </span>{" "}
          Helps You
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg text-gray-300 text-center max-w-3xl mx-auto"
        >
          DevLog doesn’t manage tasks. It helps you reclaim focus, one day at a
          time.
        </motion.p>
      </div>

      {/* Grid of 4 Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
        {/* Card 1: One Entry, Zero Overhead */}
        <motion.div
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="bg-linear-to-br from-gray-900 to-black relative rounded-xl border border-green-500/10 hover:border-green-500/30 transition-colors group"
        >
          <div
            className="h-full w-full absolute opacity-15"
            style={{
              backgroundImage: 'url("/WhiteGridLines.png")',
              backgroundSize: "contain",
            }}
          ></div>
          <div className="flex flex-col items-center gap-4 py-8 px-10 text-center">
            <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center text-green-400 text-xl group-hover:bg-green-500/30 transition-colors">
              <Brain className="text-white" />
            </div>
            <div className="flex flex-col items-center">
              <h3 className="text-xl sm:text-2xl font-bold mb-2">
                <span className="font-medium font-serif italic mr-1">
                  One Entry
                </span>
                , Zero Overhead
              </h3>
              <p className="text-gray-300 text-sm ">
                Capture your goal, wins, blockers, and code snippets in 90
                seconds. No forms. No rituals. Just your truth, logged.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Card 2: Code-First Reflection */}
        <motion.div
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          transition={{ delay: 0.1 }}
          className="bg-linear-to-br from-gray-900 to-black relative rounded-xl border border-green-500/10 hover:border-green-500/30 transition-colors group"
        >
          <div
            className="h-full w-full absolute opacity-15"
            style={{
              backgroundImage: 'url("/WhiteGridLines.png")',
              backgroundSize: "contain",
            }}
          ></div>
          <div className="flex flex-col items-center gap-4 py-8 px-10 text-center">
            <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center text-green-400 text-xl group-hover:bg-green-500/30 transition-colors">
              <Code className="text-white" />
            </div>
            <div className="flex flex-col items-center">
              <h3 className="text-xl sm:text-2xl font-bold mb-2">
                <span className="font-medium font-serif italic mr-1">
                  Code-First
                </span>{" "}
                Reflection
              </h3>
              <p className="text-gray-300 text-sm ">
                Paste errors, architecture notes, or API responses directly into
                your entry. Syntax-highlighted. Always searchable. Your future
                self will thank you.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Card 3: Flow Radar */}
        <motion.div
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          transition={{ delay: 0.2 }}
          className="bg-linear-to-br from-gray-900 to-black relative rounded-xl border border-green-500/10 hover:border-green-500/30 transition-colors group"
        >
          <div
            className="h-full w-full absolute opacity-15"
            style={{
              backgroundImage: 'url("/WhiteGridLines.png")',
              backgroundSize: "contain",
            }}
          ></div>
          <div className="flex flex-col items-center gap-4 py-8 px-10 text-center">
            <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center text-green-400 text-xl group-hover:bg-green-500/30 transition-colors">
              <ChartBar className="text-white" />
            </div>
            <div className="flex flex-col items-center">
              <h3 className="text-xl sm:text-2xl font-bold mb-2">
                Flow Radar{" "}
                <span className="font-medium font-serif italic mr-1">
                  (No Manual Tracking)
                </span>
              </h3>
              <p className="text-gray-300 text-sm ">
                See your deep work patterns: Which days were you in flow? What
                killed your focus? DevLog surfaces insights — automatically.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Card 4: Reflect Without Ritual */}
        <motion.div
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          transition={{ delay: 0.3 }}
          className="bg-linear-to-br from-gray-900 to-black rounded-xl border border-green-500/10 hover:border-green-500/30 transition-colors group relative"
        >
          <div
            className="h-full w-full absolute opacity-15"
            style={{
              backgroundImage: 'url("/WhiteGridLines.png")',
              backgroundSize: "contain",
            }}
          ></div>
          <div className="flex flex-col items-center gap-4 py-8 px-10 text-center">
            <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center text-green-400 text-xl group-hover:bg-green-500/30 transition-colors">
              <Lightbulb className="text-white" />
            </div>
            <div className="flex flex-col items-center">
              <h3 className="text-xl sm:text-2xl font-bold mb-2">
                <span className="font-medium font-serif italic mr-1">
                  Reflect
                </span>{" "}
                Without Ritual
              </h3>
              <p className="text-gray-300 text-sm ">
                End your day with clarity, not guilt. What worked? What blocked
                you? Write it down. Your next-day self reads this.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
