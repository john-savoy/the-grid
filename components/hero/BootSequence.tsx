"use client";

import { useState, useEffect } from "react";
import TerminalText from "./TerminalText";
import IdentityCard from "./IdentityCard";
import SkipButton from "./SkipButton";

type BootState =
  | "initializing"
  | "grid-online"
  | "loading-protocol"
  | "scanning"
  | "identity-found"
  | "typing-name"
  | "typing-role"
  | "typing-tagline"
  | "status-operational"
  | "mission-statement"
  | "ready-message"
  | "ready";

export default function BootSequence() {
  const [bootState, setBootState] = useState<BootState>("initializing");
  const [showSkip, setShowSkip] = useState(false);
  
  // Track which terminal lines should be visible
  const [visibleLines, setVisibleLines] = useState<string[]>([]);
  const [completedCardLines, setCompletedCardLines] = useState<string[]>([]);

  // Show skip button after 2 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSkip(true);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  //DEBUG: Log bootState changes
  useEffect(() => {
    console.log("bootState changed to:", bootState);
  }, [bootState]);

  // Handle skip
  const handleSkip = () => {
    setBootState("ready");
    setShowSkip(false);
  };

  // Add a line to visible list
  const showLine = (lineId: string) => {
    if (!visibleLines.includes(lineId)) {
      setVisibleLines(prev => [...prev, lineId]);
    }
  };

  // Helper to check if we're at or past a stage (for card only)
  const isStageOrLater = (stage: BootState) => {
    const stages: BootState[] = [
      "initializing",
      "grid-online",
      "loading-protocol",
      "scanning",
      "identity-found",
      "typing-name",
      "typing-role",
      "typing-tagline",
      "status-operational",
      "mission-statement",
      "ready-message",
      "ready",
    ];
    const currentIndex = stages.indexOf(bootState);
    const targetIndex = stages.indexOf(stage);
    return currentIndex >= targetIndex;
  };

  return (
    <div className="min-h-screen flex items-center justify-center relative">
      <SkipButton show={showSkip && bootState !== "ready"} onSkip={handleSkip} />

      <div className="text-center space-y-8">
        {/* Identity Card - Always visible */}
        <div>
          <IdentityCard
            showName={bootState === "typing-name" || completedCardLines.includes("name")}
            showRole={bootState === "typing-role" || completedCardLines.includes("role")}
            showTagline={bootState === "typing-tagline" || completedCardLines.includes("tagline")}
            onNameComplete={() => {
              setCompletedCardLines(prev => [...prev, "name"]);
              setTimeout(() => setBootState("typing-role"), 500);
            }}
            onRoleComplete={() => {
              setCompletedCardLines(prev => [...prev, "role"]);
              setTimeout(() => setBootState("typing-tagline"), 500);
            }}
            onTaglineComplete={() => {
              setCompletedCardLines(prev => [...prev, "tagline"]);
              setTimeout(() => setBootState("status-operational"), 500);
            }}
          />
        </div>

        {/* Terminal Messages - Show based on visibleLines */}
        <div className="space-y-1 min-h-[200px]">
          {/* Line 1: Initializing */}
          {(bootState === "initializing" || visibleLines.includes("line1")) && (
            <TerminalText
              text="INITIALIZING GRID..."
              speed={50}
              delay={500}
              showCursor={bootState === "initializing"}
              onComplete={() => {
                showLine("line1");
                setTimeout(() => setBootState("grid-online"), 500);
              }}
            />
          )}

          {/* Line 2: Grid Online */}
          {(bootState === "grid-online" || visibleLines.includes("line2")) && (
            <TerminalText
              text="GRID: ONLINE"
              speed={50}
              showCursor={bootState === "grid-online"}
              onComplete={() => {
                showLine("line2");
                setTimeout(() => setBootState("loading-protocol"), 500);
              }}
            />
          )}

          {/* Line 3: Loading Protocol */}
          {(bootState === "loading-protocol" || visibleLines.includes("line3")) && (
            <TerminalText
              text="LOADING IDENTITY PROTOCOL..."
              speed={50}
              showCursor={bootState === "loading-protocol"}
              onComplete={() => {
                showLine("line3");
                setTimeout(() => setBootState("scanning"), 500);
              }}
            />
          )}

          {/* Line 4: Scanning */}
          {(bootState === "scanning" || visibleLines.includes("line4")) && (
            <TerminalText
              text="SCANNING..."
              speed={50}
              showCursor={bootState === "scanning"}
              onComplete={() => {
                showLine("line4");
                setTimeout(() => setBootState("identity-found"), 500);
              }}
            />
          )}

          {/* Line 5: Identity Found - TRIGGERS CARD TYPING */}
          {(bootState === "identity-found" || visibleLines.includes("line5")) && (
            <TerminalText
              text="IDENTITY FOUND"
              speed={50}
              showCursor={bootState === "identity-found"}
              onComplete={() => {
                showLine("line5");
                setTimeout(() => setBootState("typing-name"), 500);
              }}
            />
          )}

          {/* Line 6: Status Operational */}
          {(bootState === "status-operational" || visibleLines.includes("line6")) && (
            <TerminalText
              text="STATUS: OPERATIONAL"
              speed={50}
              showCursor={bootState === "status-operational"}
              onComplete={() => {
                showLine("line6");
                setTimeout(() => setBootState("mission-statement"), 500);
              }}
            />
          )}

          {/* Line 7: Mission Statement */}
          {(bootState === "mission-statement" || visibleLines.includes("line7")) && (
            <TerminalText
              text='"Finding solutions where others see roadblocks. Building from every angle."'
              speed={40}
              showCursor={bootState === "mission-statement"}
              onComplete={() => {
                showLine("line7");
                setTimeout(() => setBootState("ready-message"), 300);
              }}
            />
          )}

            {/* Line 8 & 9: Ready Messages */}
            {bootState === "ready-message" && (
                <div className="space-y-1 pt-4">
                    <TerminalText
                        text="READY"
                        speed={50}
                        showCursor={false}
                        onComplete={() => {
                        showLine("line8");
                        }}
                    />
                </div>
            )}

            {visibleLines.includes("line8") && (
                <div className="pt-1">
                    <TerminalText
                        text="AWAITING INPUT"
                        speed={50}
                        showCursor={false}
                        onComplete={() => {
                        setTimeout(() => setBootState("ready"), 500);
                        }}
                    />
                </div>
            )}
        </div>

        {/* Scroll Indicator */}
        {bootState === "ready" && (
          <div className="flex flex-col items-center gap-2 mt-8 animate-pulse">
            <span className="text-cyan text-2xl">◆</span>
            <span className="font-display text-cyan text-xs tracking-widest">ENTER</span>
            <span className="text-cyan text-xl">▼</span>
          </div>
        )}
      </div>
    </div>
  );
}