"use client";

import React, { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface RevealProps {
  children: React.ReactNode;
  direction?: "left" | "right" | "up" | "none";
  delay?: number;
  duration?: number;
  className?: string;
  triggerOnce?: boolean;
}

export function Reveal({
  children,
  direction = "up",
  delay = 0,
  duration = 700,
  className,
  triggerOnce = true,
}: RevealProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Check if browser/OS has reduced motion enabled
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduceMotion(mediaQuery.matches);

    const handleMediaChange = (e: MediaQueryListEvent) => {
      setReduceMotion(e.matches);
    };

    mediaQuery.addEventListener("change", handleMediaChange);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (triggerOnce && ref.current) {
            observer.unobserve(ref.current);
          }
        } else if (!triggerOnce) {
          setIsVisible(false);
        }
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      mediaQuery.removeEventListener("change", handleMediaChange);
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [triggerOnce]);

  // Determine starting transform based on direction
  const getDirectionClass = () => {
    // If visible or reduced motion is preferred, show immediately without translation
    if (isVisible || reduceMotion) return "opacity-100 translate-x-0 translate-y-0";

    switch (direction) {
      case "left":
        return "opacity-0 -translate-x-12";
      case "right":
        return "opacity-0 translate-x-12";
      case "up":
        return "opacity-0 translate-y-12";
      case "none":
      default:
        return "opacity-0";
    }
  };

  return (
    <div
      ref={ref}
      className={cn(
        reduceMotion ? "" : "transition-all ease-out",
        getDirectionClass(),
        className
      )}
      style={{
        transitionDuration: reduceMotion ? "0ms" : `${duration}ms`,
        transitionDelay: reduceMotion ? "0ms" : `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}
