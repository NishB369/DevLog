// app/UI/TestimonialMarquee.tsx
"use client";

import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

// Define testimonial data once
const testimonials = [
  {
    id: 1,
    text: "DevLog has simplified project management for us—everything we need in one place!",
    name: "Jonathan Reed",
    company: "TechWorks",
    color: "from-blue-500 to-purple-500",
  },
  {
    id: 2,
    text: "We love how easy it is to customize DevLog for our specific needs.",
    name: "Isabella White",
    company: "StartUpWorks",
    color: "from-green-500 to-teal-500",
  },
  {
    id: 3,
    text: "The real-time collaboration feature has transformed the way we work globally.",
    name: "Liam Cooper",
    company: "InnovateX",
    color: "from-red-500 to-orange-500",
  },
  {
    id: 4,
    text: "DevLog's customizable features made it the perfect fit for our growing business.",
    name: "Samantha Lee",
    company: "BrightStart Studios",
    color: "from-yellow-500 to-pink-500",
  },
  {
    id: 5,
    text: "Our team productivity has skyrocketed since switching to DevLog!",
    name: "Rachel Kim",
    company: "DevSync",
    color: "from-cyan-500 to-blue-500",
  },
  {
    id: 6,
    text: "The advanced analytics have given us better insight into project performance than ever.",
    name: "Michael Davis",
    company: "CreativeCrew",
    color: "from-indigo-500 to-purple-500",
  },
  {
    id: 7,
    text: "DevLog's sprint management tools made tracking our progress effortless!",
    name: "Emma James",
    company: "DigitalEdge",
    color: "from-red-600 to-pink-600",
  },
  {
    id: 8,
    text: "DevLog's user-friendly interface helped our team get started quickly, no learning curve!",
    name: "Alex Rivera",
    company: "CodeFlow",
    color: "from-green-600 to-teal-600",
  },
];

const TestimonialCard = ({
  testimonial,
}: {
  testimonial: (typeof testimonials)[0];
}) => (
  <div className="bg-gray-900/50 p-6 rounded-xl border border-gray-700 hover:border-green-500/30 transition-colors min-w-[280px] sm:min-w-[320px]">
    <p className="text-gray-300 mb-4">"{testimonial.text}"</p>
    <div className="flex items-center gap-3">
      <div className="w-10 h-10 rounded-full bg-gray-700 overflow-hidden">
        <div
          className={`w-full h-full bg-linear-to-br ${testimonial.color}`}
        ></div>
      </div>
      <div>
        <h4 className="font-bold font-serif italic tracking-normal">
          {testimonial.name}
        </h4>
        <p className="text-sm text-gray-500">{testimonial.company}</p>
      </div>
    </div>
  </div>
);

export const TestimonialMarquee = () => {
  const controls1 = useAnimation(); // Column 1: UP
  const controls2 = useAnimation(); // Column 2: DOWN
  const controls3 = useAnimation(); // Column 3: UP

  useEffect(() => {
    const animateColumns = () => {
      controls1.start({
        y: ["0%", "-50%"],
        transition: { duration: 20, ease: "linear", repeat: Infinity },
      });
      controls2.start({
        y: ["-50%", "0%"],
        transition: { duration: 20, ease: "linear", repeat: Infinity },
      });
      controls3.start({
        y: ["0%", "-50%"],
        transition: { duration: 20, ease: "linear", repeat: Infinity },
      });
    };

    animateColumns();
  }, [controls1, controls2, controls3]);

  // Split for desktop
  const col1 = [testimonials[0], testimonials[1], testimonials[2]];
  const col2 = [testimonials[3], testimonials[4], testimonials[5]];
  const col3 = [testimonials[6], testimonials[7], testimonials[0]]; // intentional reuse

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-40 bg-black text-white tracking-tighter">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-5xl font-bold text-center mb-8">
          People Can't Stop{" "}
          <span className="font-medium font-serif italic tracking-normal text-green-400">
            Talking
          </span>{" "}
          About Us
        </h2>

        {/* Mobile: 2 horizontal rows */}
        <div className="md:hidden space-y-6">
          {/* Row 1 */}
          <div className="relative overflow-hidden">
            <motion.div
              className="flex gap-6 pr-6"
              animate={{ x: ["0%", "-50%"] }}
              transition={{ duration: 15, ease: "linear", repeat: Infinity }}
            >
              {[...testimonials.slice(0, 4), ...testimonials.slice(0, 4)].map(
                (t, i) => (
                  <TestimonialCard key={`mobile-row1-${i}`} testimonial={t} />
                )
              )}
            </motion.div>
          </div>

          {/* Row 2 */}
          <div className="relative overflow-hidden">
            <motion.div
              className="flex gap-6 pr-6"
              animate={{ x: ["-50%", "0%"] }}
              transition={{ duration: 15, ease: "linear", repeat: Infinity }}
            >
              {[...testimonials.slice(4, 8), ...testimonials.slice(4, 8)].map(
                (t, i) => (
                  <TestimonialCard key={`mobile-row2-${i}`} testimonial={t} />
                )
              )}
            </motion.div>
          </div>
        </div>

        {/* Desktop: 3 vertical columns */}
        <div className="hidden md:grid md:grid-cols-3 gap-6 h-[400px]">
          {/* Column 1: UP */}
          <div className="relative overflow-hidden">
            <motion.div className="flex flex-col gap-6" animate={controls1}>
              {[...col1, ...col1].map((t, i) => (
                <TestimonialCard key={`col1-${i}`} testimonial={t} />
              ))}
            </motion.div>
          </div>

          {/* Column 2: DOWN */}
          <div className="relative overflow-hidden">
            <motion.div
              className="flex flex-col gap-6"
              animate={controls2}
              style={{ y: "-50%" }}
            >
              {[...col2, ...col2].map((t, i) => (
                <TestimonialCard key={`col2-${i}`} testimonial={t} />
              ))}
            </motion.div>
          </div>

          {/* Column 3: UP */}
          <div className="relative overflow-hidden">
            <motion.div className="flex flex-col gap-6" animate={controls3}>
              {[...col3, ...col3].map((t, i) => (
                <TestimonialCard key={`col3-${i}`} testimonial={t} />
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialMarquee;
