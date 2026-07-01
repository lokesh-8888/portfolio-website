"use client";

import { skillCategories } from "@/lib/portfolio-data";
import { Reveal } from "./reveal";

const skillIcons: Record<string, { type: "devicon" | "symbol" | "dot"; value: string }> = {
  // Programming Languages
  "Python": { type: "devicon", value: "python/python-original.svg" },
  "JavaScript": { type: "devicon", value: "javascript/javascript-original.svg" },
  "C++": { type: "devicon", value: "cplusplus/cplusplus-original.svg" },
  "Java": { type: "devicon", value: "java/java-original.svg" },
  "SQL": { type: "devicon", value: "mysql/mysql-original.svg" },

  // Backend
  "Node.js": { type: "devicon", value: "nodejs/nodejs-original.svg" },
  "Express.js": { type: "devicon", value: "express/express-original.svg" },
  "FastAPI": { type: "devicon", value: "fastapi/fastapi-original.svg" },

  // Databases
  "MongoDB": { type: "devicon", value: "mongodb/mongodb-original.svg" },
  "MySQL": { type: "devicon", value: "mysql/mysql-original.svg" },
  "Redis": { type: "devicon", value: "redis/redis-original.svg" },

  // AI & Agentic
  "TensorFlow": { type: "devicon", value: "tensorflow/tensorflow-original.svg" },
  "Keras": { type: "devicon", value: "keras/keras-original.svg" },

  // Frontend
  "React.js": { type: "devicon", value: "react/react-original.svg" },
  "HTML": { type: "devicon", value: "html5/html5-original.svg" },
  "CSS": { type: "devicon", value: "css3/css3-original.svg" },
  "Tailwind CSS": { type: "devicon", value: "tailwindcss/tailwindcss-original.svg" },

  // Cloud & DevOps
  "Docker": { type: "devicon", value: "docker/docker-original.svg" },
  "Git": { type: "devicon", value: "git/git-original.svg" },
  "GitHub": { type: "devicon", value: "github/github-original.svg" },
  "Azure": { type: "devicon", value: "azure/azure-original.svg" },
  "Render": { type: "dot", value: "#00C7B7" },

  // Tools & Libraries
  "NumPy": { type: "devicon", value: "numpy/numpy-original.svg" },
  "Pandas": { type: "devicon", value: "pandas/pandas-original.svg" },

  // Dev Tools & IDEs
  "Postman": { type: "devicon", value: "postman/postman-original.svg" },
  "VS Code": { type: "devicon", value: "vscode/vscode-original.svg" },
  "PyCharm": { type: "devicon", value: "pycharm/pycharm-original.svg" },
  "Jupyter Notebook": { type: "devicon", value: "jupyter/jupyter-original.svg" },
  "Figma": { type: "devicon", value: "figma/figma-original.svg" },
  "Vercel": { type: "symbol", value: "▲" }
};

export default function SkillsSection() {
  return (
    <section id="skills" className="w-full py-24 px-4 md:px-8 bg-white dark:bg-[#0F0F0F] relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Reveal direction="up" delay={100}>
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4 tracking-tight text-text-primary">
              Technical Skills
            </h2>
            {/* Indigo underline accent */}
            <div className="h-0.5 w-12 bg-accent mx-auto rounded-full mt-3.5" />
          </Reveal>
          <Reveal direction="up" delay={200}>
            <p className="text-muted-foreground mt-4 max-w-xl mx-auto text-sm md:text-base">
              A detailed breakdown of languages, frameworks, libraries, and tools I use to build intelligent systems.
            </p>
          </Reveal>
        </div>

        {/* Categories Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {skillCategories.map((category, categoryIdx) => (
            <Reveal
              key={category.title}
              direction="up"
              delay={100 + categoryIdx * 100}
              className="h-full"
            >
              <div className="bg-card-bg border border-card-border rounded-[12px] p-6 hover:shadow-[0_0_20px_rgba(99,102,241,0.05)] transition-all duration-300 h-full flex flex-col justify-between text-left">
                <div>
                  {/* Category Subheading */}
                  <h3 className="text-xs font-bold tracking-widest uppercase text-text-muted border-b border-card-border pb-3 mb-6">
                    {category.title}
                  </h3>

                  {/* Skills Badge Container (flex wrap) */}
                  <div className="flex flex-wrap gap-2.5">
                    {category.skills.map((skill) => {
                      const iconInfo = skillIcons[skill.name];

                      return (
                        <div
                          key={skill.name}
                          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-card-border bg-pill-bg text-text-secondary text-[13px] hover:border-[#6366F1] hover:text-text-primary transition-all duration-300 cursor-default select-none"
                        >
                          {/* Icon rendering */}
                          {iconInfo?.type === "devicon" && (
                            <img
                              src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${iconInfo.value}`}
                              alt=""
                              className="w-3.5 h-3.5 shrink-0 object-contain"
                              onError={(e) => {
                                // Fallback if image fails to load
                                e.currentTarget.style.display = "none";
                              }}
                            />
                          )}
                          {iconInfo?.type === "symbol" && (
                            <span className="text-[10px] leading-none shrink-0 font-bold text-text-primary">
                              {iconInfo.value}
                            </span>
                          )}
                          {iconInfo?.type === "dot" && (
                            <span
                              className="w-1.5 h-1.5 rounded-full shrink-0"
                              style={{ backgroundColor: iconInfo.value }}
                            />
                          )}
                          {!iconInfo && (
                            // Default fallback dot
                            <span className="w-1.5 h-1.5 rounded-full shrink-0 bg-[#6366F1]" />
                          )}
                          <span>{skill.name}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
