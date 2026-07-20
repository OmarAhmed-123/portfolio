"use client";

import { motion } from "framer-motion";
import { resumeData } from "@/data/resume";

const skillCategories = [
  { key: "frontend", label: "Frontend Development" },
  { key: "backend", label: "Backend Architecture" },
  { key: "mobile", label: "Mobile Engineering" },
  { key: "databases", label: "Databases & Storage" },
  { key: "devops", label: "DevOps & Cloud" },
  { key: "security", label: "Cybersecurity" },
];

export function SkillsSection() {
  return (
    <section id="skills" className="w-full py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Technical Proficiency</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A comprehensive overview of my technical stack and engineering capabilities.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => {
            const skills = resumeData.skills[category.key as keyof typeof resumeData.skills];
            return (
              <motion.div
                key={category.key}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card p-8 rounded-2xl hover-glow flex flex-col"
              >
                <h3 className="text-xl font-bold mb-6 text-foreground border-b border-border pb-4">
                  {category.label}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {skills.map((skill: string, i: number) => (
                    <span
                      key={i}
                      className="px-3 py-1.5 rounded-lg bg-background border border-border text-sm font-medium hover:border-primary hover:text-primary transition-colors cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
