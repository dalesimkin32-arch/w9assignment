"use client";
// /src/components/SignSpinner.jsx
import { motion } from "motion/react";

export default function SignSpinner({ children }) {
  return (
    <motion.div
      animate={{ rotate: [0, -45, 45, 360], y: [0, 0, 0, 0, -300, 0] }}
      transition={{
        repeat: Infinity,
        repeatDelay: 3,
        ease: "linear",
        duration: 3,
        delay: 1,
      }}
    >
      {children}
    </motion.div>
  );
}
