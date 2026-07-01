"use client";

import { Award } from "lucide-react";
import { certificationData } from "@/lib/portfolio-data";
import { Reveal } from "./reveal";

export default function CertificationsSection() {
  return (
    <section id="certifications" className="w-full py-24 px-4 md:px-8 bg-background relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Reveal direction="up" delay={100}>
            <h2 className="text-3xl md:text-4xl font-heading font-bold tracking-tight text-foreground">
              Licenses & Certifications
            </h2>
            {/* Thin indigo underline accent */}
            <div className="h-0.5 w-12 bg-accent mx-auto rounded-full mt-3.5" />
          </Reveal>
          <Reveal direction="up" delay={200}>
            <p className="text-muted-foreground mt-4 max-w-md mx-auto text-sm md:text-base">
              My verified professional credentials and specialized skills qualifications.
            </p>
          </Reveal>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          {certificationData.map((cert, idx) => (
            <Reveal
              key={cert.id}
              direction="up"
              delay={100 + idx * 100}
              className="h-full"
            >
              <div className="group h-full flex flex-col bg-card-bg border border-card-border rounded-xl p-6 hover:border-[#6366F1] hover:shadow-[0_0_20px_rgba(99,102,241,0.15)] hover:-translate-y-1 transition-all duration-300 ease-out text-left">
                {/* Top: org logo icon in a small indigo circle */}
                <div className="mb-4">
                  <div className="w-10 h-10 rounded-full bg-[#6366F1]/10 flex items-center justify-center text-[#6366F1] group-hover:bg-[#6366F1] group-hover:text-white transition-all duration-300">
                    <Award className="w-5 h-5" />
                  </div>
                </div>

                {/* Details */}
                <h3 className="text-[16px] font-bold text-text-primary mb-1.5 leading-snug">
                  {cert.title}
                </h3>
                <p className="text-text-muted text-[13px] font-semibold mb-1">
                  {cert.issuer}
                </p>
                <span className="text-text-muted/70 text-[12px] font-medium mb-4">
                  Issued {cert.date}
                </span>

                {/* Bottom: Link Button */}
                {cert.verifyUrl && (
                  <div className="mt-auto">
                    <a
                      href={cert.verifyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-[#6366F1] hover:text-[#818CF8] text-[13px] font-semibold transition-colors duration-200"
                    >
                      View Certificate <span className="inline-block transition-transform duration-200 group-hover:translate-x-1">→</span>
                    </a>
                  </div>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

