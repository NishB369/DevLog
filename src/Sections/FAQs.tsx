"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, Plus } from "lucide-react";
import { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question:
      "What is DevLog, and why would I use it over a text file or notes app?",
    answer:
      "DevLog is a daily journal built specifically for developers who want to track progress, reflect on blockers, and maintain focus—without noise. Unlike generic notes apps, DevLog structures your day around one goal, supports code snippets with syntax highlighting, and surfaces patterns in your workflow over time. It’s designed to replace the mental overhead of ‘What did I do yesterday?’ with a single source of truth.",
  },
  {
    question: "Can I include code snippets and terminal output in my log?",
    answer:
      "Yes. DevLog treats code as first-class content. Paste errors, API responses, architecture notes, or command-line output directly into your daily entry—fully syntax-highlighted and searchable. No more digging through Slack or local files to find that one debug snippet from Tuesday.",
  },
  {
    question: "How does DevLog help me stay focused?",
    answer:
      "DevLog anchors your day to one intention—not a to-do list. By logging wins, distractions, and lessons each evening, you build awareness of what actually moves the needle. Over time, DevLog’s Flow Radar shows you patterns: which days you were in deep work, what broke your focus, and how your energy aligns with your output.",
  },
  {
    question: "Is my data private and exportable?",
    answer:
      "Absolutely. All logs are end-to-end encrypted in Pro, and even on Free, you can export your entire journal as clean Markdown or JSON at any time. DevLog is your second brain—not a data silo.",
  },
];

export default function FAQs() {
  const [openIndex, setOpenIndex] = useState<number>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="min-h-screen bg-black text-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            How <span className="font-medium text-[#4ade80] mr-1 italic font-serif">DevLog</span>{" "}
            helps you?
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Aligno offers ready-made solutions to get you going fast. Easily
            customize as your team's needs expand.
          </p>
        </motion.div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-linear-to-br from-[#4ade80]/10 via-white/10 to-green-950/20 rounded-2xl border border-gray-800 hover:border-green-500/30 overflow-hidden backdrop-blur-sm transition-all duration-300 cursor-pointer"
            >
              {/* Question Button */}
              <motion.button
                onClick={() => toggleAccordion(index)}
                className="w-full px-6 sm:px-8 py-6 flex items-center justify-between text-left hover:bg-gray-800/30 transition-colors group cursor-pointer"
                whileHover={{ backgroundColor: "rgba(31, 41, 55, 0.3)" }}
              >
                <span className="text-base sm:text-lg font-medium pr-8">
                  {item.question}
                </span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 45 : 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="shrink-0"
                >
                  {openIndex === index ? (
                    <X className="w-6 h-6 text-gray-400 group-hover:text-white transition-colors" />
                  ) : (
                    <Plus className="w-6 h-6 text-gray-400 group-hover:text-white transition-colors" />
                  )}
                </motion.div>
              </motion.button>

              {/* Answer */}
              <AnimatePresence initial={false}>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{
                      height: "auto",
                      opacity: 1,
                      transition: {
                        height: {
                          duration: 0.4,
                          ease: [0.33, 1, 0.68, 1],
                        },
                        opacity: {
                          duration: 0.3,
                          delay: 0.1,
                        },
                      },
                    }}
                    exit={{
                      height: 0,
                      opacity: 0,
                      transition: {
                        height: {
                          duration: 0.3,
                          ease: [0.33, 1, 0.68, 1],
                        },
                        opacity: {
                          duration: 0.2,
                        },
                      },
                    }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 sm:px-8 pb-6 text-gray-400 leading-relaxed">
                      {item.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
