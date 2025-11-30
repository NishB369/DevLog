// app/UI/BentoGridSection.tsx
"use client";

import { BentoGrid } from "../app/Components/BentoGrid";
import { motion } from "framer-motion";

interface BentoGridSectionProps {
  heading: string;
}

export const BentoGridSection = ({ heading }: BentoGridSectionProps) => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-40 bg-black text-white">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-5xl font-bold text-center mb-4"
        >
          {heading}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg text-gray-300 text-center max-w-2xl mx-auto mb-12"
        >
          <span className="font-serif font-bold bg-linear-to-br from-[#4ade80] via-[#2c824c] to-[#153f25] text-white p-1">
            Elevate your productivity.
          </span>{" "}
          Manage tasks effortlessly by organizing and visualizing everything in
          one central hub.
        </motion.p>

        <BentoGrid />
      </div>
    </section>
  );
};
