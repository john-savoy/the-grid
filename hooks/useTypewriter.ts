import { useState, useEffect } from "react";

interface UseTypewriterProps {
  text: string;
  speed?: number; // milliseconds per character
  delay?: number; // delay before starting
  onComplete?: () => void; // callback when typing finishes
}

export function useTypewriter({
  text,
  speed = 50,
  delay = 0,
  onComplete,
}: UseTypewriterProps) {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    // Wait for initial delay
    if (delay > 0) {
      const delayTimer = setTimeout(() => {
        setCurrentIndex(0);
      }, delay);
      return () => clearTimeout(delayTimer);
    }
  }, [delay]);

  useEffect(() => {
    // If we've typed all characters, we're done
    if (currentIndex >= text.length) {
      if (!isComplete) {
        setIsComplete(true);
        onComplete?.();
      }
      return;
    }

    // Type the next character
    const timer = setTimeout(() => {
      setDisplayText(text.slice(0, currentIndex + 1));
      setCurrentIndex(currentIndex + 1);
    }, speed);

    return () => clearTimeout(timer);
  }, [currentIndex, text, speed, isComplete, onComplete]);

  return {
    displayText,
    isComplete,
  };
}