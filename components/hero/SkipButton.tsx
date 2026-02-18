"use client";

import { motion } from "framer-motion";

interface SkipButtonProps {
  onSkip: () => void;
  show: boolean;
}

export default function SkipButton({ onSkip, show }: SkipButtonProps) {
  if (!show) return null;

  return (
    <motion.button
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      onClick={onSkip}
      className="fixed top-24 right-6 z-50 px-4 py-2 border border-cyan/50 bg-void/80 backdrop-blur-sm font-display text-cyan text-xs tracking-wider hover:border-cyan hover:shadow-glow-cyan-sm transition-all duration-300"
    >
      SKIP INTRO ▸
    </motion.button>
  );
}