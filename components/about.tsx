"use client";

import { Reveal } from "./reveal";

export default function AboutSection() {
  return (
    <section id="about" className="w-full py-24 px-4 md:px-8 bg-card/20 dark:bg-card/10 border-y border-border/20 relative">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-left mb-16">
          <Reveal direction="up" delay={100}>
            <h2 className="text-3xl md:text-4xl font-heading font-bold tracking-tight text-foreground">
              About Me
            </h2>
            {/* Soft accent underline */}
            <div className="h-1 w-12 bg-accent rounded-full mt-3.5" />
          </Reveal>
        </div>

        {/* Section Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Bio text (Left) */}
          <div className="space-y-6">
            <Reveal direction="left" delay={200} className="space-y-4 text-muted-foreground text-sm md:text-base leading-relaxed">
              <p>
                I'm a Computer Science student at <strong>SRM University-AP</strong> with a strong interest in <strong>Backend Engineering, DevOps, Artificial Intelligence, and Distributed Systems</strong>. I enjoy building scalable applications, designing efficient APIs, and solving complex problems through clean, maintainable code.
              </p>
              <p>
                My focus is on developing reliable software that combines performance, security, and scalability. I continuously explore cloud technologies, containerization, system design, and modern AI to build practical solutions that address real-world challenges.
              </p>
              <p>
                Outside of development, you'll find me practicing Data Structures & Algorithms, contributing to personal projects, exploring open-source technologies, and learning about cloud-native architectures and distributed systems.
              </p>
            </Reveal>

            {/* Currently learning tag */}
            <Reveal direction="left" delay={300} className="pt-2">
              <div className="flex flex-col gap-2.5">
                <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground/80">
                  Currently Focused On
                </span>
                <div className="inline-flex items-center self-start gap-2 bg-accent/10 dark:bg-accent/5 text-accent border border-accent/20 px-3.5 py-2 rounded-xl text-xs font-semibold">
                  <span className="relative flex h-2 w-2 shrink-0">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
                  </span>
                  Docker • Kubernetes • CI/CD • Azure • System Design
                </div>
              </div>
            </Reveal>
          </div>

          {/* Stats Grid (Right) */}
          <div className="grid grid-cols-2 gap-6 w-full">
            <Reveal direction="right" delay={250} className="w-full">
              <div className="bg-background/80 dark:bg-background/40 border border-border/50 rounded-2xl p-6 shadow-sm hover:shadow-md hover:shadow-accent/5 hover:border-accent/30 transition-all duration-300">
                <span className="text-4xl md:text-5xl font-heading font-extrabold text-accent block mb-1">
                  12+
                </span>
                <span className="text-[10px] uppercase font-bold tracking-widest text-muted-foreground block">
                  Projects Built
                </span>
              </div>
            </Reveal>

            <Reveal direction="right" delay={350} className="w-full">
              <div className="bg-background/80 dark:bg-background/40 border border-border/50 rounded-2xl p-6 shadow-sm hover:shadow-md hover:shadow-accent/5 hover:border-accent/30 transition-all duration-300">
                <span className="text-4xl md:text-5xl font-heading font-extrabold text-accent block mb-1">
                  3+
                </span>
                <span className="text-[10px] uppercase font-bold tracking-widest text-muted-foreground block">
                  Certifications
                </span>
              </div>
            </Reveal>

            <Reveal direction="right" delay={450} className="w-full col-span-2">
              <div className="bg-background/80 dark:bg-background/40 border border-border/50 rounded-2xl p-6 shadow-sm hover:shadow-md hover:shadow-accent/5 hover:border-accent/30 transition-all duration-300 flex items-center justify-between gap-4">
                <div>
                  <span className="text-4xl md:text-5xl font-heading font-extrabold text-accent block mb-1">
                    2+
                  </span>
                  <span className="text-[10px] uppercase font-bold tracking-widest text-muted-foreground block">
                    Years Experience
                  </span>
                </div>
                <div className="h-10 w-[1px] bg-border/80" />
                <div className="text-left">
                  <span className="text-xs font-bold text-foreground block">
                    Freelancer
                  </span>
                  <span className="text-[11px] text-muted-foreground block">
                    & Open Source Contributor
                  </span>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
