"use client";

import CardTypingLine from "./CardTypingLine";

interface IdentityCardProps {
  showName: boolean;
  showRole: boolean;
  showTagline: boolean;
  onNameComplete?: () => void;
  onRoleComplete?: () => void;
  onTaglineComplete?: () => void;
}

export default function IdentityCard({
  showName,
  showRole,
  showTagline,
  onNameComplete,
  onRoleComplete,
  onTaglineComplete,
}: IdentityCardProps) {
  return (
    <div className="border-2 border-cyan shadow-glow-cyan-md bg-void/40 backdrop-blur-sm p-12 min-w-[500px] min-h-[300px]">
      <div className="space-y-6 text-center">
        {/* Name */}
        {showName && (
          <CardTypingLine
            text="JOHN SAVOY"
            speed={80}
            onComplete={onNameComplete}
            className="font-display text-5xl text-cyan tracking-wider"
          />
        )}

        {/* Role */}
        {showRole && (
          <CardTypingLine
            text="FULL-STACK DEVELOPER"
            speed={80}
            onComplete={onRoleComplete}
            className="font-display text-2xl text-ice tracking-wider"
          />
        )}

        {/* Tagline */}
        {showTagline && (
          <CardTypingLine
            text="CREATIVE PROBLEM SOLVER"
            speed={80}
            onComplete={onTaglineComplete}
            className="font-display text-xl text-energy tracking-wide"
          />
        )}
      </div>
    </div>
  );
}