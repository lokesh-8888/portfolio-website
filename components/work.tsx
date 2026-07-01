"use client";

import { ExternalLink } from "lucide-react";
import { projectData } from "@/lib/portfolio-data";
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

export default function WorkSection() {
  return (
    <section id="work" className="w-full py-24 px-4 md:px-8 bg-background relative">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Reveal direction="up" delay={100}>
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4 tracking-tight text-foreground">
              Featured Projects
            </h2>
          </Reveal>
          <Reveal direction="up" delay={150}>
            <div className="h-1 w-20 bg-accent mx-auto rounded-full" />
          </Reveal>
          <Reveal direction="up" delay={200}>
            <p className="text-muted-foreground mt-4 max-w-md mx-auto text-sm">
              A selection of digital products and applications I've built from concept to deployment.
            </p>
          </Reveal>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projectData.map((project, idx) => (
            <Reveal
              key={project.id}
              direction="up"
              delay={150 + idx * 100}
              className="h-full"
            >
              <div className="group h-full bg-card/40 dark:bg-card/20 backdrop-blur-sm border border-border/50 rounded-2xl p-5 shadow-sm hover:shadow-md hover:shadow-accent/5 hover:border-accent/30 transition-all duration-300 flex flex-col justify-between">
                <div>
                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] font-semibold text-accent/80 uppercase bg-accent/5 px-2 py-0.5 rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-foreground group-hover:text-accent transition-colors duration-300 mb-2">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs md:text-sm text-muted-foreground leading-relaxed mb-6">
                    {project.description}
                  </p>
                </div>

                {/* Footer Controls */}
                <div className="flex items-center justify-between border-t border-border/30 pt-4 mt-auto">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-xs font-semibold text-muted-foreground hover:text-foreground transition-colors min-h-[44px] px-2 focus-visible:ring-2 focus-visible:ring-accent rounded-lg"
                    aria-label={`View code for ${project.title} on GitHub`}
                  >
                    <GithubIcon className="w-4 h-4" />
                    Source
                  </a>

                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-xs font-semibold text-accent hover:text-accent-hover transition-colors min-h-[44px] px-2 focus-visible:ring-2 focus-visible:ring-accent rounded-lg"
                      aria-label={`Visit live demo for ${project.title}`}
                    >
                      Demo
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
