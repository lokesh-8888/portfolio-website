"use client";

import { Calendar, Briefcase, GraduationCap, Beaker } from "lucide-react";
import { timelineData, TimelineEntry } from "@/lib/portfolio-data";
import { Reveal } from "./reveal";
import { cn } from "@/lib/utils";

export default function ExperienceTimeline() {
  return (
    <section id="experience" className="w-full py-20 px-4 md:px-8 bg-background">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4 tracking-tight text-foreground">
            Experience & Education
          </h2>
          <div className="h-1 w-20 bg-accent mx-auto rounded-full" />
          <p className="text-muted-foreground mt-4 max-w-md mx-auto text-sm">
            My professional journey and academic background in software development.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative pl-8 md:pl-0 border-l border-border/80 md:border-l-0 md:before:absolute md:before:left-1/2 md:before:top-0 md:before:bottom-0 md:before:w-[1px] md:before:-translate-x-1/2 md:before:bg-border/80">
          {timelineData.map((entry, idx) => {
            const isEven = idx % 2 === 0;
            const Icon = entry.type === "work" ? Briefcase : entry.type === "research" ? Beaker : GraduationCap;

            return (
              <div
                key={entry.id}
                className={cn(
                  "relative flex flex-col md:flex-row items-start md:items-center w-full mb-12 last:mb-0",
                  isEven ? "md:flex-row" : "md:flex-row-reverse"
                )}
              >
                {/* Timeline Dot (Middle/Left Indicator) */}
                <div
                  className={cn(
                    "absolute flex items-center justify-center z-15",
                    "left-[-2.55rem] md:left-1/2 md:-translate-x-1/2",
                    "w-6 h-6 rounded-full bg-background border border-border"
                  )}
                >
                  <div className="absolute w-4 h-4 rounded-full bg-accent/10 animate-ping" />
                  <div className="w-2.5 h-2.5 rounded-full bg-accent" />
                </div>

                {/* Card Container */}
                <div className="w-full md:w-[calc(50%-2rem)]">
                  <Reveal
                    direction={isEven ? "left" : "right"}
                    delay={idx * 100}
                    className="w-full"
                  >
                    <div className="group relative bg-card/40 dark:bg-card/20 backdrop-blur-sm border border-border/50 rounded-xl p-5 md:p-6 shadow-sm hover:shadow-md hover:shadow-accent/5 hover:border-accent/30 transition-all duration-300">
                      {/* Top Meta info */}
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                        <div className="flex items-center gap-2">
                          <Icon className={cn(
                            "w-4 h-4",
                            entry.type === "research" ? "text-purple-600 dark:text-purple-400" : "text-accent"
                          )} />
                          <span className={cn(
                            "text-[11px] font-semibold tracking-wider uppercase px-2 py-0.5 rounded-md",
                            entry.type === "research"
                              ? "text-purple-600 dark:text-purple-400 bg-purple-600/10 dark:bg-purple-400/10"
                              : "text-accent bg-accent/10"
                          )}>
                            {entry.type}
                          </span>
                        </div>
                        <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                          <Calendar className="w-3.5 h-3.5" />
                          <span>{entry.dateRange}</span>
                        </div>
                      </div>

                      {/* Header */}
                      <h3 className="text-lg font-bold text-foreground group-hover:text-accent transition-colors duration-300">
                        {entry.title}
                      </h3>
                      <h4 className="text-sm font-medium text-muted-foreground mb-3">
                        {entry.organization}
                      </h4>

                      {/* Details (Bullets) */}
                      {entry.bullets && entry.bullets.length > 0 && (
                        <ul className="space-y-2 mt-4">
                          {entry.bullets.map((bullet, bIdx) => (
                            <li
                              key={bIdx}
                              className="text-sm text-muted-foreground flex items-start gap-2 leading-relaxed"
                            >
                              <span className="text-accent mt-1.5 shrink-0 block w-1 h-1 rounded-full bg-accent" />
                              <span>{bullet}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </Reveal>
                </div>

                {/* Spacer for desktop layout */}
                <div className="hidden md:block w-[calc(50%-2rem)]" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
