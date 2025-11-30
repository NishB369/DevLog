"use client";

import { motion, Variants } from "framer-motion";
import { Check, Zap } from "lucide-react";
import { useRef, useState } from "react";

export const PricingSection = () => {
  const ref = useRef(null);
  const [isYearly, setIsYearly] = useState(true);

  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.33, 1, 0.68, 1] },
    },
  };

  const checkmarkVariants: Variants = {
    hidden: { opacity: 0, scale: 0 },
    visible: (i: number) => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay: i * 0.05,
        duration: 0.3,
        ease: [0.33, 1, 0.68, 1],
      },
    }),
  };

  return (
    <section
      ref={ref}
      className="py-20 px-4 sm:px-6 lg:px-8 bg-black text-white"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-5xl font-bold mb-4">
            Choose the{" "}
            <span className="text-[#4ade80] font-medium font-serif italic mr-1">
              Right Plan
            </span>{" "}
            for Your Team
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Expand your schema as per your requirements
          </p>
        </motion.div>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Free Plan */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="bg-gray-900/50 relative p-8 rounded-xl border border-gray-700 hover:border-green-500/30 transition-all group"
          >
            <div
              className="h-full w-full absolute opacity-10 rounded-xl"
              style={{
                backgroundImage: 'url("/WhiteGridLines.png")',
                backgroundSize: "contain",
              }}
            ></div>

            <div className="relative z-10">
              <h3 className="text-sm font-medium text-gray-400 mb-4 uppercase tracking-wider">
                Free Plan
              </h3>
              <div className="flex items-baseline gap-1 mb-4">
                <span className="text-5xl font-bold text-[#4ade80]">$0</span>
                <span className="text-gray-400">/month</span>
              </div>
              <p className="text-gray-300 mb-8">
                Perfect for individuals just starting out.
              </p>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full px-6 py-3.5 bg-black/50 border border-gray-700 text-white rounded-lg font-medium hover:bg-black/70 hover:border-gray-600 transition-all mb-4 cursor-pointer"
              >
                Get Started
              </motion.button>

              <p className="text-xs text-gray-500 text-center mb-6">
                Free forever
              </p>

              <ul className="space-y-3 text-gray-300 text-sm">
                {[
                  "Access to essential project management tools",
                  "Up to 5 active projects",
                  "Basic task tracking features",
                  "Real-time collaboration",
                  "Community support",
                ].map((feature, i) => (
                  <motion.li
                    key={i}
                    custom={i}
                    variants={checkmarkVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="flex items-start gap-3"
                  >
                    <div className="w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center mt-0.5 shrink-0">
                      <Check className="w-3 h-3 text-green-400" />
                    </div>
                    <span>{feature}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Pro Plan */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.1 }}
            className="bg-linear-to-br from-gray-900 via-gray-900 to-orange-950/20 relative p-8 rounded-xl border border-[#4ade80]/30 hover:border-[#4ade80]/50 transition-all group"
          >
            {/* Popular Badge */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#4ade80] text-black px-4 py-1 rounded-full text-xs font-medium flex items-center gap-1"
            >
              <Zap className="w-3 h-3 text-black" />
              Most Popular
            </motion.div>

            <div
              className="h-full w-full absolute opacity-10 rounded-xl"
              style={{
                backgroundImage: 'url("/WhiteGridLines.png")',
                backgroundSize: "contain",
              }}
            ></div>

            <div className="relative z-10">
              {/* Toggle: Bill yearly */}
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-sm font-medium text-gray-400 uppercase tracking-wider">
                  Pro Plan
                </h3>
                <div className="flex items-center gap-2">
                  <span className="text-xs text-gray-400">Bill yearly</span>
                  <motion.button
                    onClick={() => setIsYearly(!isYearly)}
                    className="relative inline-block w-12 h-6 bg-gray-700 rounded-full cursor-pointer"
                    whileTap={{ scale: 0.95 }}
                  >
                    <motion.div
                      className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full"
                      animate={{
                        x: isYearly ? 24 : 0,
                        backgroundColor: isYearly ? "#4ade80" : "#ffffff",
                      }}
                      transition={{
                        type: "spring",
                        stiffness: 500,
                        damping: 30,
                      }}
                    />
                  </motion.button>
                </div>
              </div>

              <div className="flex items-baseline gap-1 mb-1">
                <motion.span
                  key={isYearly ? "yearly" : "monthly"}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-5xl font-bold text-[#4ade80]"
                >
                  ${isYearly ? "10" : "12"}
                </motion.span>
                <span className="text-gray-400">/month</span>
              </div>
              {isYearly && (
                <motion.p
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  className="text-xs text-green-400 mb-4"
                >
                  Save $24/year
                </motion.p>
              )}
              <p className="text-gray-300 mb-8 mt-4">
                Perfect for individuals and small teams.
              </p>

              <motion.button
                whileTap={{ scale: 0.98 }}
                className="w-full px-6 py-3.5 bg-[#4ade80] text-black rounded-lg font-medium hover:bg-[#3cb96a] hover:text-white duration-200 ease-in-out transition-all mb-4 cursor-pointer shadow-lg shadow-[#4ade80]/20"
              >
                Get Started
              </motion.button>

              <p className="text-xs text-gray-500 text-center mb-6">
                14-day free trial
              </p>

              <ul className="space-y-3 text-gray-300 text-sm">
                {[
                  "Everything in the Free Plan, plus:",
                  "Unlimited projects and tasks",
                  "Advanced analytics and reporting",
                  "Sprint management tools",
                  "Priority customer support",
                  "Customizable workflows and templates",
                ].map((feature, i) => (
                  <motion.li
                    key={i}
                    custom={i}
                    variants={checkmarkVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="flex items-start gap-3"
                  >
                    <div className="w-5 h-5 rounded-full bg-[#4ade80]/20 flex items-center justify-center mt-0.5 shrink-0 group-hover:bg-[#4ade80]/30 transition-colors">
                      <Check className="w-3 h-3 text-orange-400" />
                    </div>
                    <span>{feature}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
