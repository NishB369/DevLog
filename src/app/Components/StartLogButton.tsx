import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function StartLogButton() {
  const [isHovered, setIsHovered] = useState(false);
  const [displayText, setDisplayText] = useState("Start Your Log →");
  const targetText = 'console.log("dev")';

  useEffect(() => {
    if (!isHovered) {
      setDisplayText("Start Your Log →");
      return;
    }

    let index = 0;
    setDisplayText("");
    const interval = setInterval(() => {
      setDisplayText(targetText.slice(0, index + 1));
      index++;
      if (index >= targetText.length) clearInterval(interval);
    }, 30);

    return () => clearInterval(interval);
  }, [isHovered]);

  return (
    <motion.button
      whileTap={{ scale: 0.95 }}
      onMouseEnter={() => setIsHovered(true)}
      style={{
        background: isHovered ? "#000" : "#fff",
        color: isHovered ? "#00ffb3" : "#000",
        border: isHovered ? "2px solid #02a65c" : "2px solid transparent",
        boxShadow: isHovered ? "0 0 12px #02a65c, 0 0 24px #02a65c" : "none",
        padding: "0.75rem 2rem",
        borderRadius: "9999px",
        fontWeight: "600",
        fontSize: "1.125rem",
        cursor: "pointer",
        transition: "all 0.3s ease",
      }}
      className="mt-2"
    >
      {displayText}
    </motion.button>
  );
}
