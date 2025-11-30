// app/UI/TestimonialMarquee.tsx
"use client";

import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

export const TestimonialMarquee = () => {
  const controls1 = useAnimation(); // Column 1: UP
  const controls2 = useAnimation(); // Column 2: DOWN
  const controls3 = useAnimation(); // Column 3: UP

  useEffect(() => {
    const animateColumns = async () => {
      // Column 1: Scroll UP
      controls1.start({
        y: ["0%", "-50%"],
        transition: {
          duration: 20,
          ease: "linear",
          repeat: Infinity,
          repeatType: "loop",
        },
      });

      // Column 2: Scroll DOWN
      controls2.start({
        y: ["-50%", "0%"],
        transition: {
          duration: 20,
          ease: "linear",
          repeat: Infinity,
          repeatType: "loop",
        },
      });

      // Column 3: Scroll UP
      controls3.start({
        y: ["0%", "-50%"],
        transition: {
          duration: 20,
          ease: "linear",
          repeat: Infinity,
          repeatType: "loop",
        },
      });
    };

    animateColumns();
  }, [controls1, controls2, controls3]);

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-40 bg-black text-white tracking-tighter">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <h2 className="text-3xl sm:text-5xl font-bold text-center mb-8">
          People Can't Stop{" "}
          <span className="font-medium font-serif italic tracking-normal mr-1 text-green-400">
            Talking
          </span>{" "}
          About Us
        </h2>

        {/* 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-[400px]">
          {/* Column 1: UP */}
          <div className="relative overflow-hidden">
            <motion.div
              className="flex flex-col gap-6"
              animate={controls1}
              style={{ y: "0%" }}
            >
              {[...Array(2)].map((_, i) => (
                <div key={`col1-${i}`} className="flex flex-col gap-6">
                  {/* Card 1 */}
                  <div className="bg-gray-900/50 p-6 rounded-xl border border-gray-700 hover:border-green-500/30 transition-colors">
                    <p className="text-gray-300 mb-4">
                      Aligno has simplified project management for us—everything
                      we need in one place!
                    </p>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-gray-700 overflow-hidden">
                        <div className="w-full h-full bg-linear-to-br from-blue-500 to-purple-500"></div>
                      </div>
                      <div>
                        <h4 className="font-bold font-serif tracking-normal italic">Jonathan Reed</h4>
                        <p className="text-sm text-gray-500">TechWorks</p>
                      </div>
                    </div>
                  </div>

                  {/* Card 2 */}
                  <div className="bg-gray-900/50 p-6 rounded-xl border border-gray-700 hover:border-green-500/30 transition-colors">
                    <p className="text-gray-300 mb-4">
                      We love how easy it is to customize Aligno for our
                      specific needs.
                    </p>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-gray-700 overflow-hidden">
                        <div className="w-full h-full bg-linear-to-br from-green-500 to-teal-500"></div>
                      </div>
                      <div>
                        <h4 className="font-bold font-serif tracking-normal italic">Isabella White</h4>
                        <p className="text-sm text-gray-500">StartUpWorks</p>
                      </div>
                    </div>
                  </div>

                  {/* Card 3 */}
                  <div className="bg-gray-900/50 p-6 rounded-xl border border-gray-700 hover:border-green-500/30 transition-colors">
                    <p className="text-gray-300 mb-4">
                      The real-time collaboration feature has transformed the
                      way we work globally.
                    </p>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-gray-700 overflow-hidden">
                        <div className="w-full h-full bg-linear-to-br from-red-500 to-orange-500"></div>
                      </div>
                      <div>
                        <h4 className="font-bold font-serif tracking-normal italic">Liam Cooper</h4>
                        <p className="text-sm text-gray-500">InnovateX</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Column 2: DOWN */}
          <div className="relative overflow-hidden">
            <motion.div
              className="flex flex-col gap-6"
              animate={controls2} // ✅ Now animated
              style={{ y: "-50%" }} // Start scrolled down
            >
              {[...Array(2)].map((_, i) => (
                <div key={`col2-${i}`} className="flex flex-col gap-6">
                  {/* Card 4 */}
                  <div className="bg-gray-900/50 p-6 rounded-xl border border-gray-700 hover:border-green-500/30 transition-colors">
                    <p className="text-gray-300 mb-4">
                      Aligno's customizable features made it the perfect fit for
                      our growing business.
                    </p>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-gray-700 overflow-hidden">
                        <div className="w-full h-full bg-linear-to-br from-yellow-500 to-pink-500"></div>
                      </div>
                      <div>
                        <h4 className="font-bold font-serif tracking-normal italic">Samantha Lee</h4>
                        <p className="text-sm text-gray-500">
                          BrightStart Studios
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Card 5 */}
                  <div className="bg-gray-900/50 p-6 rounded-xl border border-gray-700 hover:border-green-500/30 transition-colors">
                    <p className="text-gray-300 mb-4">
                      Our team productivity has skyrocketed since switching to
                      Aligno!
                    </p>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-gray-700 overflow-hidden">
                        <div className="w-full h-full bg-linear-to-br from-cyan-500 to-blue-500"></div>
                      </div>
                      <div>
                        <h4 className="font-bold font-serif tracking-normal italic">Rachel Kim</h4>
                        <p className="text-sm text-gray-500">DevSync</p>
                      </div>
                    </div>
                  </div>

                  {/* Card 6 */}
                  <div className="bg-gray-900/50 p-6 rounded-xl border border-gray-700 hover:border-green-500/30 transition-colors">
                    <p className="text-gray-300 mb-4">
                      The advanced analytics have given us better insight into
                      project performance than ever.
                    </p>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-gray-700 overflow-hidden">
                        <div className="w-full h-full bg-linear-to-br from-indigo-500 to-purple-500"></div>
                      </div>
                      <div>
                        <h4 className="font-bold font-serif tracking-normal italic">Michael Davis</h4>
                        <p className="text-sm text-gray-500">CreativeCrew</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Column 3: UP */}
          <div className="relative overflow-hidden">
            <motion.div
              className="flex flex-col gap-6"
              animate={controls3} // ✅ Now animated
              style={{ y: "0%" }} // Start at top
            >
              {[...Array(2)].map((_, i) => (
                <div key={`col3-${i}`} className="flex flex-col gap-6">
                  {/* Card 7 */}
                  <div className="bg-gray-900/50 p-6 rounded-xl border border-gray-700 hover:border-green-500/30 transition-colors">
                    <p className="text-gray-300 mb-4">
                      Aligno's sprint management tools made tracking our
                      progress effortless!
                    </p>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-gray-700 overflow-hidden">
                        <div className="w-full h-full bg-linear-to-br from-red-600 to-pink-600"></div>
                      </div>
                      <div>
                        <h4 className="font-bold font-serif tracking-normal italic">Emma James</h4>
                        <p className="text-sm text-gray-500">DigitalEdge</p>
                      </div>
                    </div>
                  </div>

                  {/* Card 8 */}
                  <div className="bg-gray-900/50 p-6 rounded-xl border border-gray-700 hover:border-green-500/30 transition-colors">
                    <p className="text-gray-300 mb-4">
                      Aligno's user-friendly interface helped our team get
                      started quickly, no learning curve!
                    </p>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-gray-700 overflow-hidden">
                        <div className="w-full h-full bg-linear-to-br from-green-600 to-teal-600"></div>
                      </div>
                      <div>
                        <h4 className="font-bold font-serif tracking-normal italic">Rachel Kim</h4>
                        <p className="text-sm text-gray-500">DevSync</p>
                      </div>
                    </div>
                  </div>

                  {/* Card 9 */}
                  <div className="bg-gray-900/50 p-6 rounded-xl border border-gray-700 hover:border-green-500/30 transition-colors">
                    <p className="text-gray-300 mb-4">
                      Everything we need in one place. No more switching tabs or
                      apps.
                    </p>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-gray-700 overflow-hidden">
                        <div className="w-full h-full bg-linear-to-br from-orange-500 to-yellow-500"></div>
                      </div>
                      <div>
                        <h4 className="font-bold font-serif tracking-normal italic">Alex Rivera</h4>
                        <p className="text-sm text-gray-500">CodeFlow</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
