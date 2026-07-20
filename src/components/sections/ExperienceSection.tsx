"use client";

import { motion } from "framer-motion";
import { resumeData } from "@/data/resume";
import { Briefcase } from "lucide-react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, x: -30, scale: 0.95 },
  visible: { 
    opacity: 1, 
    x: 0, 
    scale: 1,
    transition: { type: "spring", stiffness: 60, damping: 15 }
  },
};

export function ExperienceSection() {
  return (
    <section id="experience" className="w-full py-24 px-4 sm:px-6 lg:px-8 bg-muted/20 border-y border-border/50">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl sm:text-5xl font-extrabold mb-6 tracking-tight">Professional Journey</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            My experience leading teams, building scalable architecture, and solving complex problems across different domains.
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="relative border-l-2 border-primary/20 pl-8 ml-4 sm:ml-0 space-y-16"
        >
          {resumeData.experience.map((exp, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="relative group"
            >
              <div className="absolute -left-[41px] top-1.5 bg-background border-2 border-primary/40 group-hover:border-primary group-hover:scale-125 transition-all duration-300 w-6 h-6 rounded-full flex items-center justify-center shadow-[0_0_10px_rgba(var(--primary),0.2)]">
                <div className="w-2 h-2 bg-primary rounded-full group-hover:animate-pulse" />
              </div>
              
              <div className="glass-card p-8 rounded-3xl hover-glow border border-border/50 bg-background/40 backdrop-blur-xl">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">{exp.role}</h3>
                    <div className="flex flex-wrap items-center gap-2 text-muted-foreground font-medium text-sm">
                      <span className="flex items-center gap-1.5 text-foreground bg-secondary/50 px-3 py-1 rounded-full border border-border/50">
                        <Briefcase className="w-4 h-4 text-primary" />
                        {exp.company}
                      </span>
                      <span className="opacity-60">•</span>
                      <span>{exp.location}</span>
                    </div>
                  </div>
                  <span className="inline-flex px-4 py-1.5 bg-primary/10 border border-primary/20 text-primary rounded-full text-sm font-semibold tracking-wide whitespace-nowrap shadow-sm">
                    {exp.date}
                  </span>
                </div>
                <ul className="space-y-3 text-muted-foreground leading-relaxed">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i} className="flex gap-3 items-start">
                      <span className="text-primary/70 mt-1.5 text-lg leading-none">•</span>
                      <span className="flex-1">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
