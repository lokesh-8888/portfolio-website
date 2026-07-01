"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import ThemeToggle from "./theme-toggle";
import { cn } from "@/lib/utils";

interface NavLink {
  label: string;
  targetId: string;
}

const navLinks: NavLink[] = [
  { label: "About", targetId: "about" },
  { label: "Skills", targetId: "skills" },
  { label: "Projects", targetId: "work" },
  { label: "Certifications", targetId: "certifications" },
  { label: "Contact", targetId: "contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  // Handle glassmorphism on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Track active section using Intersection Observer
  useEffect(() => {
    const sectionIds = ["hero", "about", "skills", "work", "certifications", "contact"];
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    const observerOptions = {
      root: null,
      rootMargin: "-30% 0px -60% 0px", // Trigger when the section occupies the viewport center
      threshold: 0,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  const scrollToSection = (id: string) => {
    setIsOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-40 transition-all duration-300 w-full",
          isScrolled
            ? "bg-background/80 dark:bg-background/60 backdrop-blur-md border-b border-border/40 py-3 shadow-sm shadow-black/[0.02]"
            : "bg-transparent py-5"
        )}
      >
        <div className="max-w-5xl mx-auto px-4 md:px-8 flex items-center justify-between">
          {/* Logo / Monogram */}
          <button
            onClick={() => scrollToSection("hero")}
            className="font-heading font-extrabold text-lg tracking-tight text-foreground hover:text-accent transition-colors duration-300 focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 rounded-lg cursor-pointer min-h-[44px] flex items-center"
            aria-label="Back to top"
          >
            Lokesh<span className="text-accent">.</span>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.targetId}
                onClick={() => scrollToSection(link.targetId)}
                className={cn(
                  "text-xs font-semibold uppercase tracking-wider text-muted-foreground hover:text-foreground transition-all cursor-pointer relative py-2 focus-visible:ring-2 focus-visible:ring-accent rounded px-1",
                  activeSection === link.targetId &&
                  "text-foreground after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-accent after:rounded-full"
                )}
                aria-label={`Scroll to ${link.label}`}
              >
                {link.label}
              </button>
            ))}
            <div className="h-4 w-[1px] bg-border/80" />
            <ThemeToggle />
          </nav>

          {/* Mobile Hamburger & Toggle controls */}
          <div className="flex items-center gap-4 md:hidden">
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 -mr-2 text-foreground hover:text-accent transition-colors cursor-pointer rounded-lg focus-visible:ring-2 focus-visible:ring-accent min-h-[44px] min-w-[44px] flex items-center justify-center"
              aria-expanded={isOpen}
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Slide-In Full-Screen Navigation Overlay */}
      <div
        className={cn(
          "fixed inset-y-0 right-0 z-50 w-full max-w-xs bg-background/95 backdrop-blur-xl border-l border-border/50 shadow-2xl md:hidden transition-transform duration-500 ease-in-out transform flex flex-col p-6",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex items-center justify-between mb-8">
          <span className="font-heading font-extrabold text-lg text-foreground">
            Menu
          </span>
          <button
            onClick={() => setIsOpen(false)}
            className="p-2 -mr-2 text-foreground hover:text-accent transition-colors cursor-pointer rounded-lg focus-visible:ring-2 focus-visible:ring-accent min-h-[44px] min-w-[44px] flex items-center justify-center"
            aria-label="Close navigation menu"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <nav className="flex flex-col gap-6 items-stretch">
          {navLinks.map((link, idx) => (
            <button
              key={link.targetId}
              onClick={() => scrollToSection(link.targetId)}
              className={cn(
                "text-left text-sm font-semibold uppercase tracking-wider text-muted-foreground hover:text-foreground border-b border-border/40 py-3.5 transition-colors cursor-pointer focus-visible:ring-2 focus-visible:ring-accent rounded px-2 min-h-[44px]",
                activeSection === link.targetId && "text-accent border-accent/40"
              )}
              style={{
                transitionDelay: `${idx * 50}ms`,
              }}
              aria-label={`Scroll to ${link.label}`}
            >
              {link.label}
            </button>
          ))}
        </nav>
      </div>

      {/* Backdrop overlay when mobile menu is open */}
      {isOpen && (
        <div
          className="fixed inset-0 z-45 bg-black/20 dark:bg-black/40 backdrop-blur-sm md:hidden"
          onClick={() => setIsOpen(false)}
          aria-hidden="true"
        />
      )}
    </>
  );
}
