"use client";

import { useEffect, useState } from "react";

export default function PageLoader() {
  const [visible, setVisible] = useState(true);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    // Start fading out after 1 second
    const fadeTimer = setTimeout(() => {
      setFading(true);
    }, 1000);

    // Completely unmount after transition completes (1.4 seconds total)
    const removeTimer = setTimeout(() => {
      setVisible(false);
    }, 1400);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-background pointer-events-none ${
        fading ? "loader-fade-out" : ""
      }`}
      aria-hidden="true"
    >
      <div className="flex flex-col items-center gap-4">
        {/* Pulsing monogram initials */}
        <div className="w-16 h-16 rounded-2xl bg-accent/10 border border-accent/30 flex items-center justify-center shadow-lg shadow-accent/5 loader-pulse-logo">
          <span className="font-heading font-extrabold text-2xl text-accent">
            PL
          </span>
        </div>
        {/* Loading text with layout */}
        <span className="text-xs font-semibold tracking-[0.2em] text-muted-foreground uppercase mt-2">
          Loading
        </span>
      </div>
    </div>
  );
}
