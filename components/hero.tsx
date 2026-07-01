"use client";

import { useEffect, useState } from "react";
import { ArrowDown, Mail } from "lucide-react";
import { contactDetails } from "@/lib/portfolio-data";
import { Reveal } from "./reveal";

const GithubIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const LinkedinIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const TwitterIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
  </svg>
);

export default function HeroSection() {
  const roles = ["Software Engineer", "Full Stack Developer", "Backend Engineer", "AI/ML Engineer"];
  const [roleIndex, setRoleIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);

  // Typing animation loop
  useEffect(() => {
    let timer: NodeJS.Timeout;
    const activeRole = roles[roleIndex];

    const handleTyping = () => {
      if (!isDeleting) {
        // Typing text
        setCurrentText(activeRole.substring(0, currentText.length + 1));
        if (currentText.length === activeRole.length) {
          // Pause at complete word
          setTypingSpeed(2200);
          setIsDeleting(true);
        } else {
          setTypingSpeed(90 + Math.random() * 40);
        }
      } else {
        // Deleting text
        setCurrentText(activeRole.substring(0, currentText.length - 1));
        if (currentText.length === 0) {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
          setTypingSpeed(400); // short pause before typing next role
        } else {
          setTypingSpeed(45);
        }
      }
    };

    timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, roleIndex, typingSpeed]);

  const scrollToWork = () => {
    const el = document.getElementById("work");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-between px-4 py-16 overflow-hidden bg-background">
      {/* Drifting blurred gradient background blobs */}
      <div className="absolute top-1/4 left-1/4 w-[280px] sm:w-[450px] h-[280px] sm:h-[450px] rounded-full bg-accent/5 dark:bg-accent/10 blur-[80px] sm:blur-[130px] pointer-events-none animate-blob" />
      <div
        className="absolute bottom-1/4 right-1/4 w-[250px] sm:w-[380px] h-[250px] sm:h-[380px] rounded-full bg-indigo-500/5 dark:bg-indigo-500/8 blur-[80px] sm:blur-[130px] pointer-events-none animate-blob"
        style={{ animationDelay: "-8s" }}
      />

      {/* Top spacer to align center content */}
      <div className="h-4" />

      {/* Center content container */}
      <div className="max-w-3xl text-center z-10 flex flex-col items-center gap-7 my-auto">
        {/* Status Badge with pulsing green dot */}
        <Reveal direction="up" delay={100}>
          <div className="inline-flex items-center gap-2.5 bg-emerald-500/10 dark:bg-emerald-500/5 text-emerald-700 dark:text-emerald-400 border border-emerald-500/20 px-3.5 py-1.5 rounded-full text-xs font-semibold">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            Open to opportunities
          </div>
        </Reveal>

        {/* Large Syne Name */}
        <Reveal direction="up" delay={250}>
          <h1 className="text-5xl md:text-7xl font-heading font-extrabold tracking-tight text-foreground leading-[1.05]">
            Pinapaka Lokesh
          </h1>
        </Reveal>

        {/* Typing Role */}
        <Reveal direction="up" delay={400} className="min-h-[38px] flex items-center justify-center">
          <h2 className="text-xl md:text-2xl font-bold font-sans text-accent tracking-wide uppercase">
            I'm a {currentText}
            <span className="inline-block w-[3px] h-5 bg-accent ml-1.5 animate-pulse shrink-0" />
          </h2>
        </Reveal>

        {/* Muted gray Tagline */}
        <Reveal direction="up" delay={550}>
          <p className="text-base md:text-lg text-muted-foreground max-w-lg leading-relaxed font-sans">
            Self-taught Software Engineer passionate about building modern web applications, solving complex problems, and exploring AI, Cloud, and DevOps technologies
          </p>
        </Reveal>

        {/* CTAs */}
        <Reveal direction="up" delay={700} className="flex flex-col sm:flex-row items-center gap-4 mt-2 w-full sm:w-auto">
          <button
            onClick={scrollToWork}
            className="w-full sm:w-auto bg-accent hover:bg-accent-hover text-accent-foreground font-semibold px-7 py-3 rounded-lg text-sm transition-all duration-300 shadow-md hover:shadow-accent/15 cursor-pointer active:scale-95 flex items-center justify-center gap-1.5"
            aria-label="View my featured projects"
          >
            View My Work
            <ArrowDown className="w-4 h-4" />
          </button>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto text-center border border-border bg-card/40 hover:bg-accent/5 hover:border-accent/30 hover:text-accent text-foreground font-semibold px-7 py-3 rounded-lg text-sm transition-all duration-300 cursor-pointer active:scale-95 flex items-center justify-center"
            aria-label="Download my resume as a PDF file"
          >
            Download Resume
          </a>
        </Reveal>
      </div>

      {/* Social links row at the bottom */}
      <Reveal direction="up" delay={850} className="z-10 w-full">
        <div className="flex items-center justify-center gap-6 border-t border-border/20 pt-8 max-w-sm mx-auto">
          <a
            href={contactDetails.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-lg border border-border/40 bg-card/20 text-muted-foreground hover:text-accent hover:border-accent/40 hover:bg-accent/5 transition-all min-h-[44px] min-w-[44px] flex items-center justify-center"
            aria-label="GitHub Profile"
          >
            <GithubIcon className="w-4 h-4" />
          </a>
          <a
            href={contactDetails.linkedIn}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-lg border border-border/40 bg-card/20 text-muted-foreground hover:text-accent hover:border-accent/40 hover:bg-accent/5 transition-all min-h-[44px] min-w-[44px] flex items-center justify-center"
            aria-label="LinkedIn Profile"
          >
            <LinkedinIcon className="w-4 h-4" />
          </a>
          {contactDetails.twitter && (
            <a
              href={contactDetails.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-lg border border-border/40 bg-card/20 text-muted-foreground hover:text-accent hover:border-accent/40 hover:bg-accent/5 transition-all min-h-[44px] min-w-[44px] flex items-center justify-center"
              aria-label="Twitter Profile"
            >
              <TwitterIcon className="w-4 h-4" />
            </a>
          )}
          <a
            href={`mailto:${contactDetails.email}`}
            className="p-2.5 rounded-lg border border-border/40 bg-card/20 text-muted-foreground hover:text-accent hover:border-accent/40 hover:bg-accent/5 transition-all min-h-[44px] min-w-[44px] flex items-center justify-center"
            aria-label="Send direct email"
          >
            <Mail className="w-4 h-4" />
          </a>
        </div>
      </Reveal>
    </section>
  );
}
