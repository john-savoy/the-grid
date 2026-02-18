"use client";

import { useTypewriter } from "@/hooks/useTypewriter";

interface TerminalTextProps {
  text: string;
  speed?: number;
  delay?: number;
  onComplete?: () => void;
  showCursor?: boolean;
}

export default function TerminalText({
  text,
  speed = 30,
  delay = 0,
  onComplete,
  showCursor = true,
}: TerminalTextProps) {
  const { displayText, isComplete } = useTypewriter({
    text,
    speed,
    delay,
    onComplete,
  });

    return (
        <div className="font-code text-cyan text-sm max-w-lg mx-auto">
            <span className="inline">&gt; </span>
            <span className="inline break-words">{displayText}</span>
            {!isComplete && showCursor && (
                <span className="animate-pulse ml-1">_</span>
            )}
        </div>
    );
}