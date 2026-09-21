"use client";

import React, { useState, useMemo } from "react";
import {
  ArrowUpRight,
  ExternalLink,
  X,
  RotateCcw,
  Code2,
  Check,
  Filter
} from "lucide-react";
import {
  projectData,
  projectCategories,
  type ProjectCategory,
  type ProjectEntry
} from "@/lib/portfolio-data";
import { Reveal } from "@/components/reveal";
import { cn } from "@/lib/utils";

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

// Map category IDs to clean badge styling (clean text-only badges without icons)
const categoryConfig: Record<
  string,
  {
    badgeBg: string;
    badgeText: string;
    badgeBorder: string;
  }
> = {
  all: {
    badgeBg: "bg-accent/10",
    badgeText: "text-accent",
    badgeBorder: "border-accent/20"
  },
  "genai-rag": {
    badgeBg: "bg-violet-500/10 dark:bg-violet-500/15",
    badgeText: "text-violet-600 dark:text-violet-300",
    badgeBorder: "border-violet-500/25"
  },
  "fullstack-backend": {
    badgeBg: "bg-sky-500/10 dark:bg-sky-500/15",
    badgeText: "text-sky-600 dark:text-sky-300",
    badgeBorder: "border-sky-500/25"
  },
  "ml-analytics": {
    badgeBg: "bg-emerald-500/10 dark:bg-emerald-500/15",
    badgeText: "text-emerald-600 dark:text-emerald-300",
    badgeBorder: "border-emerald-500/25"
  }
};

export function Work() {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>("all");
  const [selectedTechs, setSelectedTechs] = useState<string[]>([]);
  const [matchMode, setMatchMode] = useState<"any" | "all">("any");

  // Compute list of popular technologies for quick filter chips
  const popularTechs = useMemo(() => {
    const techCounts: Record<string, number> = {};
    projectData.forEach((project) => {
      project.tags.forEach((tag) => {
        techCounts[tag] = (techCounts[tag] || 0) + 1;
      });
    });
    // Pick the most recurring technologies, sorted descending by occurrence
    return Object.entries(techCounts)
      .sort((a, b) => b[1] - a[1])
      .map(([tag]) => tag)
      .slice(0, 14);
  }, []);

  // Filter projects by both category and multiselected technologies
  const filteredProjects = useMemo(() => {
    return projectData.filter((project) => {
      const matchesCategory =
        activeCategory === "all" || project.category === activeCategory;

      if (selectedTechs.length === 0) {
        return matchesCategory;
      }

      const projectTagsLower = project.tags.map((t) => t.toLowerCase());

      const matchesTech =
        matchMode === "all"
          ? selectedTechs.every((tech) =>
              projectTagsLower.includes(tech.toLowerCase())
            )
          : selectedTechs.some((tech) =>
              projectTagsLower.includes(tech.toLowerCase())
            );

      return matchesCategory && matchesTech;
    });
  }, [activeCategory, selectedTechs, matchMode]);

  // Count items per category
  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = {
      all: projectData.length,
      "genai-rag": 0,
      "fullstack-backend": 0,
      "ml-analytics": 0
    };
    projectData.forEach((p) => {
      if (counts[p.category] !== undefined) {
        counts[p.category] += 1;
      }
    });
    return counts;
  }, []);

  // Toggle technology in/out of selectedTechs array (Multi-select)
  const handleTechToggle = (tech: string) => {
    setSelectedTechs((prev) => {
      const exists = prev.some((t) => t.toLowerCase() === tech.toLowerCase());
      if (exists) {
        return prev.filter((t) => t.toLowerCase() !== tech.toLowerCase());
      } else {
        return [...prev, tech];
      }
    });
  };

  const handleRemoveTech = (tech: string) => {
    setSelectedTechs((prev) =>
      prev.filter((t) => t.toLowerCase() !== tech.toLowerCase())
    );
  };

  const handleClearAllTechs = () => {
    setSelectedTechs([]);
  };

  const handleResetFilters = () => {
    setActiveCategory("all");
    setSelectedTechs([]);
    setMatchMode("any");
  };

  return (
    <section
      id="work"
      className="w-full py-24 px-4 md:px-8 bg-white dark:bg-[#0F0F0F] relative selection:bg-accent selection:text-white"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <Reveal direction="up" delay={50}>
            <p className="font-mono text-xs md:text-sm uppercase tracking-widest text-accent font-semibold mb-2">
              Portfolio &amp; Repositories
            </p>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-text-primary tracking-tight">
              Featured Projects
            </h2>
            <div className="h-0.5 w-12 bg-accent mx-auto rounded-full mt-3.5 mb-4" />
            <p className="max-w-2xl mx-auto text-sm md:text-base text-text-muted leading-relaxed">
              Explore systems engineered across Generative AI &amp; RAG pipelines, distributed backends, and machine learning intelligence.
            </p>
          </Reveal>
        </div>

        {/* Clean Category Filter Tabs (No Symbols/Icons) */}
        <Reveal direction="up" delay={100}>
          <div className="flex flex-wrap items-center justify-center gap-2 md:gap-3 mb-8">
            {projectCategories.map((cat) => {
              const isActive = activeCategory === cat.id;
              const count = categoryCounts[cat.id] || 0;

              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id as ProjectCategory)}
                  className={cn(
                    "flex items-center gap-2 px-4 py-2 rounded-full text-xs md:text-sm font-medium transition-all duration-200 cursor-pointer border",
                    isActive
                      ? "bg-accent text-white border-accent shadow-md shadow-accent/20 scale-[1.02]"
                      : "bg-muted/60 hover:bg-muted text-text-secondary border-border hover:border-accent/40"
                  )}
                  aria-pressed={isActive}
                >
                  <span>{cat.label}</span>
                  <span
                    className={cn(
                      "px-1.5 py-0.5 rounded-full text-[10px] font-mono",
                      isActive
                        ? "bg-white/20 text-white"
                        : "bg-black/5 dark:bg-white/10 text-text-muted"
                    )}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </Reveal>

        {/* Tech Specifics Multi-Select Filter Bar */}
        <Reveal direction="up" delay={150}>
          <div className="mb-10 p-4 md:p-5 rounded-2xl bg-card border border-border/80 shadow-xs">
            {/* Header row with Title and Controls */}
            <div className="flex flex-wrap items-center justify-between gap-3 mb-3.5">
              <div className="flex items-center gap-2 text-xs font-semibold text-text-secondary uppercase tracking-wider">
                <Code2 className="w-3.5 h-3.5 text-accent" />
                <span>Filter by Tech Specifics (Multi-Select):</span>
              </div>

              {selectedTechs.length > 0 && (
                <div className="flex items-center gap-2 text-xs">
                  {/* Match Mode Selector (Any vs All) */}
                  <div className="inline-flex items-center rounded-lg border border-border bg-muted/40 p-0.5">
                    <button
                      type="button"
                      onClick={() => setMatchMode("any")}
                      className={cn(
                        "px-2 py-0.5 rounded-md font-mono text-[11px] transition-colors cursor-pointer",
                        matchMode === "any"
                          ? "bg-accent text-white shadow-xs"
                          : "text-text-muted hover:text-text-primary"
                      )}
                      title="Show projects matching ANY of the selected technologies"
                    >
                      Match Any
                    </button>
                    <button
                      type="button"
                      onClick={() => setMatchMode("all")}
                      className={cn(
                        "px-2 py-0.5 rounded-md font-mono text-[11px] transition-colors cursor-pointer",
                        matchMode === "all"
                          ? "bg-accent text-white shadow-xs"
                          : "text-text-muted hover:text-text-primary"
                      )}
                      title="Show projects matching ALL selected technologies"
                    >
                      Match All
                    </button>
                  </div>

                  {/* Clear All Selected Techs */}
                  <button
                    onClick={handleClearAllTechs}
                    className="flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-medium text-text-muted hover:text-accent hover:bg-accent/10 transition-colors cursor-pointer"
                  >
                    <RotateCcw className="w-3 h-3" />
                    <span>Clear Techs</span>
                  </button>
                </div>
              )}
            </div>

            {/* Active Selected Tech Pills (if any selected) */}
            {selectedTechs.length > 0 && (
              <div className="flex flex-wrap items-center gap-1.5 mb-3.5 pb-3 border-b border-border/50">
                <span className="text-[11px] text-text-muted font-mono mr-1">
                  Active ({selectedTechs.length}):
                </span>
                {selectedTechs.map((tech) => (
                  <span
                    key={tech}
                    className="inline-flex items-center gap-1.5 pl-2.5 pr-1.5 py-0.5 rounded-full text-xs font-mono font-medium bg-accent/15 text-accent border border-accent/30"
                  >
                    <span>{tech}</span>
                    <button
                      type="button"
                      onClick={() => handleRemoveTech(tech)}
                      className="p-0.5 rounded-full hover:bg-accent hover:text-white transition-colors cursor-pointer"
                      title={`Remove ${tech} filter`}
                    >
                      <X className="w-3 h-3" />
                    </button>
                  </span>
                ))}
              </div>
            )}

            {/* Popular Tech Chips (Click to Toggle On/Off) */}
            <div className="flex flex-wrap gap-1.5 md:gap-2">
              <button
                onClick={handleClearAllTechs}
                className={cn(
                  "px-3 py-1 rounded-lg text-xs font-mono transition-all cursor-pointer border",
                  selectedTechs.length === 0
                    ? "bg-text-primary text-background border-text-primary shadow-xs font-semibold"
                    : "bg-muted/50 text-text-muted border-border hover:border-accent/40 hover:text-text-primary"
                )}
              >
                All Tech
              </button>
              {popularTechs.map((tech) => {
                const isSelected = selectedTechs.some(
                  (t) => t.toLowerCase() === tech.toLowerCase()
                );
                return (
                  <button
                    key={tech}
                    onClick={() => handleTechToggle(tech)}
                    className={cn(
                      "inline-flex items-center gap-1 px-3 py-1 rounded-lg text-xs font-mono transition-all cursor-pointer border",
                      isSelected
                        ? "bg-accent text-white border-accent shadow-xs font-medium"
                        : "bg-muted/50 text-text-muted border-border hover:border-accent/40 hover:text-text-primary"
                    )}
                  >
                    {isSelected && <Check className="w-3 h-3 stroke-[2.5]" />}
                    <span>{tech}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </Reveal>

        {/* Active Filter Indicator / Results Count */}
        <div className="flex items-center justify-between text-xs text-text-muted px-1 mb-6">
          <span>
            Showing <strong>{filteredProjects.length}</strong> project{filteredProjects.length !== 1 ? "s" : ""}
            {activeCategory !== "all" && (
              <> in <em>{projectCategories.find((c) => c.id === activeCategory)?.label}</em></>
            )}
            {selectedTechs.length > 0 && (
              <>
                {" "}with {matchMode === "all" ? "all" : "any"} of [
                <em>{selectedTechs.join(", ")}</em>]
              </>
            )}
          </span>

          {(activeCategory !== "all" || selectedTechs.length > 0) && (
            <button
              onClick={handleResetFilters}
              className="flex items-center gap-1 hover:text-accent font-medium cursor-pointer transition-colors"
            >
              <RotateCcw className="w-3 h-3" />
              <span>Reset all</span>
            </button>
          )}
        </div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-16 px-4 rounded-2xl border border-dashed border-border bg-muted/20">
            <Filter className="w-10 h-10 text-text-muted mx-auto mb-3 opacity-60" />
            <h3 className="text-lg font-semibold text-text-primary mb-1">
              No matching projects found
            </h3>
            <p className="text-sm text-text-muted max-w-md mx-auto mb-5">
              No projects matched the combination of category &quot;{projectCategories.find((c) => c.id === activeCategory)?.label}&quot; and selected tech filters ({selectedTechs.join(", ")}).
            </p>
            <button
              onClick={handleResetFilters}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-accent text-white text-xs font-medium hover:bg-accent-hover transition-colors cursor-pointer shadow-sm"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reset Filters</span>
            </button>
          </div>
        )}

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredProjects.map((project: ProjectEntry, idx: number) => {
            const config = categoryConfig[project.category] || categoryConfig.all;

            return (
              <Reveal key={project.id} delay={(idx % 4) * 50}>
                <div className="group relative flex flex-col justify-between h-full bg-card rounded-2xl border border-border p-6 md:p-7 shadow-xs hover:shadow-lg hover:border-accent/50 transition-all duration-300">
                  {/* Card Header: Category Badge (Clean text only, no icons) + Year */}
                  <div>
                    <div className="flex items-center justify-between gap-3 mb-4">
                      <span
                        className={cn(
                          "inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium border",
                          config.badgeBg,
                          config.badgeText,
                          config.badgeBorder
                        )}
                      >
                        {project.categoryLabel}
                      </span>

                      {project.year && (
                        <span className="font-mono text-xs text-text-muted">
                          {project.year}
                        </span>
                      )}
                    </div>

                    {/* Title */}
                    <h3 className="font-heading text-xl font-bold text-text-primary group-hover:text-accent transition-colors mb-2.5">
                      {project.title}
                    </h3>

                    {/* Description */}
                    <p className="text-sm leading-relaxed text-text-muted mb-6 line-clamp-4">
                      {project.description}
                    </p>
                  </div>

                  {/* Card Bottom: Clickable Multi-Select Tags & Links */}
                  <div>
                    {/* Tech Stack Pills (Clickable to Toggle in Multi-Select!) */}
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {project.tags.map((tag) => {
                        const isSelected = selectedTechs.some(
                          (t) => t.toLowerCase() === tag.toLowerCase()
                        );
                        return (
                          <button
                            key={tag}
                            type="button"
                            onClick={() => handleTechToggle(tag)}
                            title={isSelected ? `Remove ${tag} from filter` : `Add ${tag} to filter`}
                            className={cn(
                              "inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-[11px] font-mono transition-all cursor-pointer border",
                              isSelected
                                ? "bg-accent text-white border-accent shadow-xs font-medium"
                                : "bg-muted/70 hover:bg-muted text-text-secondary border-border/80 hover:border-accent/40"
                            )}
                          >
                            {isSelected && <Check className="w-2.5 h-2.5 stroke-[2.5]" />}
                            <span>{tag}</span>
                          </button>
                        );
                      })}
                    </div>

                    {/* Action Links */}
                    <div className="pt-4 border-t border-border/60 flex items-center justify-between gap-3">
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-xs font-medium text-text-secondary hover:text-accent transition-colors"
                      >
                        <GithubIcon className="w-4 h-4" />
                        <span>Source Code</span>
                        <ArrowUpRight className="w-3.5 h-3.5 opacity-70 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      </a>

                      {project.demoUrl && (
                        <a
                          href={project.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-xs font-medium px-2.5 py-1 rounded-lg bg-accent/10 hover:bg-accent/20 text-accent transition-colors border border-accent/20"
                        >
                          <ExternalLink className="w-3.5 h-3.5" />
                          <span>Live Demo</span>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Work;
