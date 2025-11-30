"use client";

import { motion } from "framer-motion";
import { useRef } from "react";

export const WhyChooseDevLog = () => {
  const ref = useRef(null);

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: [0.33, 1, 0.68, 1] },
  };

  return (
    <section
      ref={ref}
      className="py-20 px-4 sm:px-6 lg:px-40 bg-black text-white tracking-tighter"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-5xl font-bold text-center mb-4"
        >
          Why Choose{" "}
          <span className="text-green-400 font-medium font-serif italic tracking-normal">
            DevLog{" "}
          </span>
          ?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg text-gray-300 text-center w-full sm:max-w-3xl mx-auto mb-12 sm:w-1/2 leading-tight"
        >
          An immediate contrast: what you get with a tool built for{" "}
          <span className="font-bold font-serif italic tracking-normal text-white mr-1">
            developers
          </span>{" "}
          vs. generic project managers.
        </motion.p>

        {/* Comparison Grid */}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* LogLine Column */}
          <div>
            <div className="w-full flex justify-center mb-4">
              <h1 className="text-4xl font-extrabold tracking-tight bg-linear-to-br from-green-300 via-emerald-400 to-green-700 bg-clip-text text-transparent drop-shadow-[0_4px_12px_rgba(16,185,129,0.4)]">
                DevLog
              </h1>
            </div>
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="bg-linear-to-br from-gray-900/80 to-gray-900/40 p-8 rounded-2xl border border-green-500/20 backdrop-blur-sm"
            >
              <ul className="space-y-3">
                <li className="flex items-center gap-3 border-b border-white/5 pb-2">
                  <span className="text-green-400 mt-1 text-lg">✓</span>
                  <span className="text-gray-200">Focus-first logging</span>
                </li>
                <li className="flex items-center gap-3 border-b border-white/5 pb-2">
                  <span className="text-green-400 mt-1 text-lg">✓</span>
                  <span className="text-gray-200">Code-native journaling</span>
                </li>
                <li className="flex items-center gap-3 border-b border-white/5 pb-2">
                  <span className="text-green-400 mt-1 text-lg">✓</span>
                  <span className="text-gray-200">Automatic flow tracking</span>
                </li>
                <li className="flex items-center gap-3 border-b border-white/5 pb-2">
                  <span className="text-green-400 mt-1 text-lg">✓</span>
                  <span className="text-gray-200">Zero setup required</span>
                </li>
                <li className="flex items-center gap-3 border-b border-white/5 pb-2">
                  <span className="text-green-400 mt-1 text-lg">✓</span>
                  <span className="text-gray-200">Built for developers</span>
                </li>
              </ul>
            </motion.div>
          </div>

          {/* Other Tools Column */}
          <div>
            <div className="w-full flex justify-center mb-4">
              <h1 className="text-4xl text-gray-400 font-semibold">
                Other Tools
              </h1>
            </div>
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: 0.1 }}
              className="bg-linear-to-br from-gray-900/80 to-gray-900/40 p-8 rounded-2xl border border-gray-700/30 backdrop-blur-sm"
            >
              <ul className="space-y-3">
                <li className="flex items-center gap-3 border-b border-white/5 pb-2">
                  <span className="text-red-300 mt-1 text-lg">✕</span>
                  <span className="text-gray-400">
                    Over-engineered workflows
                  </span>
                </li>
                <li className="flex items-center gap-3 border-b border-white/5 pb-2">
                  <span className="text-red-300 mt-1 text-lg">✕</span>
                  <span className="text-gray-400">No code context</span>
                </li>
                <li className="flex items-center gap-3 border-b border-white/5 pb-2">
                  <span className="text-red-300 mt-1 text-lg">✕</span>
                  <span className="text-gray-400">Manual time tracking</span>
                </li>
                <li className="flex items-center gap-3 border-b border-white/5 pb-2">
                  <span className="text-red-300 mt-1 text-lg">✕</span>
                  <span className="text-gray-400">Complex onboarding</span>
                </li>
                <li className="flex items-center gap-3 border-b border-white/5 pb-2">
                  <span className="text-red-300 mt-1 text-lg">✕</span>
                  <span className="text-gray-400">Enterprise bloat</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
