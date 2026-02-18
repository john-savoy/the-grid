"use client";

import { useTypewriter } from "@/hooks/useTypewriter";

interface CardTypingLineProps {
  text: string;
  speed?: number;
  onComplete?: () => void;
  className?: string;
}

export default function CardTypingLine({
  text,
  speed = 100,
  onComplete,
  className = "",
}: CardTypingLineProps) {
  const { displayText, isComplete } = useTypewriter({
    text,
    speed,
    delay: 0,
    onComplete,
  });

  return (
    <div className={className}>
      {displayText}
      {!isComplete && <span className="animate-pulse">_</span>}
    </div>
  );
}