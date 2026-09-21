"use client";

import { skillCategories } from "@/lib/portfolio-data";
import { Reveal } from "./reveal";

const skillIcons: Record<string, { type: "devicon" | "symbol" | "dot"; value: string }> = {
  // Programming Languages
  "Python": { type: "devicon", value: "python/python-original.svg" },
  "TypeScript": { type: "devicon", value: "typescript/typescript-original.svg" },
  "JavaScript": { type: "devicon", value: "javascript/javascript-original.svg" },
  "C++": { type: "devicon", value: "cplusplus/cplusplus-original.svg" },
  "Java": { type: "devicon", value: "java/java-original.svg" },
  "SQL": { type: "devicon", value: "mysql/mysql-original.svg" },

  // Backend
  "Node.js": { type: "devicon", value: "nodejs/nodejs-original.svg" },
  "Express.js": { type: "devicon", value: "express/express-original.svg" },
  "FastAPI": { type: "devicon", value: "fastapi/fastapi-original.svg" },
  "Spring Boot": { type: "devicon", value: "spring/spring-original.svg" },
  "JWT Auth": { type: "dot", value: "#D63AFF" },
  "MERN Stack": { type: "dot", value: "#61DAFB" },

  // Databases & Warehousing
  "Snowflake": { type: "dot", value: "#29B5E8" },
  "MongoDB": { type: "devicon", value: "mongodb/mongodb-original.svg" },
  "MySQL": { type: "devicon", value: "mysql/mysql-original.svg" },
  "Redis": { type: "devicon", value: "redis/redis-original.svg" },
  "Neo4j": { type: "devicon", value: "neo4j/neo4j-original.svg" },
  "Pinecone (Vector DB)": { type: "dot", value: "#10B981" },

  // AI & Agentic
  "Deep Learning": { type: "dot", value: "#6366F1" },
  "Machine Learning": { type: "dot", value: "#8B5CF6" },
  "Text-to-SQL": { type: "dot", value: "#8B5CF6" },
  "Computer Vision": { type: "dot", value: "#06B6D4" },
  "Large Language Models": { type: "dot", value: "#10B981" },
  "RAG Architecture": { type: "dot", value: "#F59E0B" },
  "Prompt Engineering": { type: "dot", value: "#EC4899" },
  "TensorFlow": { type: "devicon", value: "tensorflow/tensorflow-original.svg" },
  "Keras": { type: "devicon", value: "keras/keras-original.svg" },
  "HuggingFace": { type: "dot", value: "#FFD21E" },
  "SpaCy (NLP)": { type: "dot", value: "#09A3D5" },

  // Frontend
  "React.js": { type: "devicon", value: "react/react-original.svg" },
  "Next.js": { type: "devicon", value: "nextjs/nextjs-original.svg" },
  "HTML": { type: "devicon", value: "html5/html5-original.svg" },
  "CSS": { type: "devicon", value: "css3/css3-original.svg" },
  "Tailwind CSS": { type: "devicon", value: "tailwindcss/tailwindcss-original.svg" },

  // Cloud & DevOps
  "Apache Airflow": { type: "devicon", value: "apacheairflow/apacheairflow-original.svg" },
  "Docker": { type: "devicon", value: "docker/docker-original.svg" },
  "Git": { type: "devicon", value: "git/git-original.svg" },
  "GitHub": { type: "devicon", value: "github/github-original.svg" },
  "Azure": { type: "devicon", value: "azure/azure-original.svg" },
  "Render": { type: "dot", value: "#00C7B7" },

  // Tools & Libraries
  "dbt": { type: "dot", value: "#FF694B" },
  "Streamlit": { type: "dot", value: "#FF4B4B" },
  "Scikit-learn": { type: "dot", value: "#F7931E" },
  "NumPy": { type: "devicon", value: "numpy/numpy-original.svg" },
  "Pandas": { type: "devicon", value: "pandas/pandas-original.svg" },
  "Matplotlib": { type: "dot", value: "#11557C" },
  "ETL Pipelines": { type: "dot", value: "#3B82F6" },

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
