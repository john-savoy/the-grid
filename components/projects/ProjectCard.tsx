"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type ProjectView = "user" | "tech" | "challenge";

interface ProjectCardProps {
  title: string;
  tagline: string;
  image: string;
  userContent: string[];
  techContent: string[];
  challengeContent: string[];
}

export default function ProjectCard({
  title,
  tagline,
  image,
  userContent,
  techContent,
  challengeContent,
}: ProjectCardProps) {
  const [currentView, setCurrentView] = useState<ProjectView>("user");
  const [nextView, setNextView] = useState<ProjectView | null>(null);
  const [isScanning, setIsScanning] = useState(false);

  const handleViewChange = (view: ProjectView) => {
    if (view === currentView || isScanning) return;
    
    console.log("📡 Starting scanline to:", view);
    setNextView(view);
    setIsScanning(true);
    
    // Switch view RIGHT when scan completes (not after)
    setTimeout(() => {
      console.log("✅ Switching view");
      setCurrentView(view);
    }, 1700); // Exactly when animation finishes
    
    // Clear animation state slightly after
    setTimeout(() => {
      console.log("🧹 Cleaning up");
      setIsScanning(false);
      setNextView(null);
    }, 1750); // 50ms after view switches
  };

  // Get current content based on view
  const getCurrentContent = () => {
    switch (currentView) {
      case "user":
        return userContent;
      case "tech":
        return techContent;
      case "challenge":
        return challengeContent;
    }
  };

  // Get color classes based on view
  const getColorClasses = (view: ProjectView) => {
    switch (view) {
      case "user":
        return {
          border: "border-cyan",
          shadow: "shadow-glow-cyan-md",
          text: "text-cyan",
          scanlineColor: "#00d9ff",
        };
      case "tech":
        return {
          border: "border-energy",
          shadow: "shadow-glow-orange-md",
          text: "text-energy",
          scanlineColor: "#ff6b00",
        };
      case "challenge":
        return {
          border: "border-ice",
          shadow: "shadow-[0_0_20px_rgba(224,247,255,0.6),0_0_30px_rgba(224,247,255,0.3)]",
          text: "text-ice",
          scanlineColor: "#e0f7ff",
        };
    }
  };

  const currentColors = getColorClasses(currentView);
  const nextColors = nextView ? getColorClasses(nextView) : currentColors;

  return (
    <div className="relative overflow-hidden">
      {/* Main Card */}
      <div className="relative">
        {/* Old content - gets hidden as scanline passes */}
        <motion.div
          className={`
            border-2 bg-void/40 backdrop-blur-sm p-6
            ${currentColors.border} ${currentColors.shadow}
          `}
          animate={
            isScanning
              ? { clipPath: "inset(100% 0 0 0)", opacity: 0 }
              : { clipPath: "inset(0 0 0 0)", opacity: 1 }
          }
          transition={{
            clipPath: {
              delay: isScanning ? 0.5 : 0,
              duration: isScanning ? 1.2 : 0,
              ease: "linear",
            },
            opacity: {
              delay: isScanning ? 0.5 : 0,
              duration: isScanning ? 1.2 : 0,
              ease: "linear",
            }
          }}
        >   
          {/* Project Image */}
          <div className="relative h-48 bg-void/60 mb-4 flex items-center justify-center border border-cyan/30">
            <span className="font-code text-ice-dark text-sm">[Screenshot Placeholder]</span>
          </div>

          {/* Title */}
          <div className="mb-4">
            <h3 className={`font-display text-2xl tracking-wider mb-2 ${currentColors.text}`}>
              ▸ {title}
            </h3>
            <div className={`h-[2px] w-full mb-3 ${currentColors.border}`} />
            <p className="font-body text-ice-light text-sm">{tagline}</p>
          </div>

          {/* View Tabs */}
          <div className="flex gap-4 mb-6">
            <button
              onClick={() => handleViewChange("user")}
              disabled={isScanning}
              className={`
                font-display text-xs tracking-wider px-4 py-2
                transition-all duration-300 disabled:opacity-50
                ${(isScanning ? nextView === "user" : currentView === "user")
                  ? "text-cyan border-b-2 border-cyan"
                  : "text-ice-dark hover:text-ice"
                }
              `}
            >
              USER VIEW
            </button>
            <button
              onClick={() => handleViewChange("tech")}
              disabled={isScanning}
              className={`
                font-display text-xs tracking-wider px-4 py-2
                transition-all duration-300 disabled:opacity-50
                ${(isScanning ? nextView === "tech" : currentView === "tech")
                  ? "text-energy border-b-2 border-energy"
                  : "text-ice-dark hover:text-ice"
                }
              `}
            >
              TECH VIEW
            </button>
            <button
              onClick={() => handleViewChange("challenge")}
              disabled={isScanning}
              className={`
                font-display text-xs tracking-wider px-4 py-2
                transition-all duration-300 disabled:opacity-50
                ${(isScanning ? nextView === "challenge" : currentView === "challenge")
                  ? "text-ice border-b-2 border-ice"
                  : "text-ice-dark hover:text-ice"
                }
              `}
            >
              CHALLENGE
            </button>
          </div>

          {/* Content Area */}
          <div className="min-h-[200px] space-y-3">
            {getCurrentContent().map((item, index) => (
              <div key={index} className="flex items-start gap-2">
                <span className={`font-code text-xs mt-1 ${currentColors.text}`}>▸</span>
                <p className="font-body text-ice-light text-sm leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Scanline Overlay with Progressive Reveal */}
      <AnimatePresence>
        {isScanning && nextView && (
          <div className="absolute inset-0 pointer-events-none overflow-hidden z-50">
            {/* New content - revealed progressively as scanline passes */}
            <motion.div
              className="absolute inset-0"
              initial={{ clipPath: "inset(0 0 100% 0)" }}
              animate={{ clipPath: "inset(0 0 0% 0)" }}
              transition={{
                delay: 0.5,
                duration: 1.2,
                ease: "linear",
              }}
            >
              {/* New Card Content */}
              <div
                className={`
                  border-2 bg-void/40 backdrop-blur-sm p-6 h-full
                  ${nextColors.border} ${nextColors.shadow}
                `}
              >
                {/* Project Image */}
                <div className="relative h-48 bg-void/60 mb-4 flex items-center justify-center border border-cyan/30">
                  <span className="font-code text-ice-dark text-sm">[Screenshot Placeholder]</span>
                </div>

                {/* Title */}
                <div className="mb-4">
                  <h3 className={`font-display text-2xl tracking-wider mb-2 ${nextColors.text}`}>
                    ▸ {title}
                  </h3>
                  <div className={`h-[2px] w-full mb-3 ${nextColors.border}`} />
                  <p className="font-body text-ice-light text-sm">{tagline}</p>
                </div>

                {/* View Tabs */}
                <div className="flex gap-4 mb-6">
                  <button
                    className={`
                      font-display text-xs tracking-wider px-4 py-2
                      ${nextView === "user"
                        ? "text-cyan border-b-2 border-cyan"
                        : "text-ice-dark"
                      }
                    `}
                  >
                    USER VIEW
                  </button>
                  <button
                    className={`
                      font-display text-xs tracking-wider px-4 py-2
                      ${nextView === "tech"
                        ? "text-energy border-b-2 border-energy"
                        : "text-ice-dark"
                      }
                    `}
                  >
                    TECH VIEW
                  </button>
                  <button
                    className={`
                      font-display text-xs tracking-wider px-4 py-2
                      ${nextView === "challenge"
                        ? "text-ice border-b-2 border-ice"
                        : "text-ice-dark"
                      }
                    `}
                  >
                    CHALLENGE
                  </button>
                </div>

                {/* New Content */}
                <div className="min-h-[200px] space-y-3">
                  {(nextView === "user" ? userContent : 
                    nextView === "tech" ? techContent : 
                    challengeContent).map((item, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <span className={`font-code text-xs mt-1 ${nextColors.text}`}>▸</span>
                      <p className="font-body text-ice-light text-sm leading-relaxed">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* The scanning line */}
            <motion.div
              className="absolute left-0 right-0"
              initial={{ top: "0%" }}
              animate={{ top: "100%" }}
              transition={{
                delay: 0.5,
                duration: 1.2,
                ease: "linear",
              }}
              style={{
                height: "8px",
                backgroundColor: nextColors.scanlineColor,
                boxShadow: `
                  0 0 10px ${nextColors.scanlineColor}, 
                  0 0 20px ${nextColors.scanlineColor},
                  0 0 30px ${nextColors.scanlineColor}
                `,
              }}
            />
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}