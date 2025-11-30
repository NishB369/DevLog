"use client";

import { motion, easeInOut } from "framer-motion";

interface ShinyTextProps {
  heading: string;
  icon?: React.ReactNode;
  isAnimated?: boolean;
  className?: string;
}

export default function ShinyText({
  heading,
  icon,
  isAnimated = false,
  className,
}: ShinyTextProps) {
  const bounceAnimation = {
    y: [0, -8, 0],
    transition: {
      duration: 2.5,
      repeat: Infinity,
      ease: easeInOut,
    },
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`flex items-center justify-center p-4 w-fit ${className}`}
    >
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        animate={isAnimated ? bounceAnimation : {}}
        className="bg-gray-800/50 backdrop-blur-sm rounded-full px-4 py-2 flex items-center gap-2 cursor-pointer border border-gray-700 text-sm z-50"
      >
        <motion.div
          animate={{
            rotate: [0, 10, -10, 0],
            scale: [1, 1.2, 1, 1],
          }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            duration: 2,
            ease: "easeInOut",
          }}
        >
          {icon}
        </motion.div>
        <span className="text-gray-100 font-serif tracking-wide font-bold">
          {heading}
        </span>
      </motion.div>
    </motion.div>
  );
}
