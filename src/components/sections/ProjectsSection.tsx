"use client";

import { motion } from "framer-motion";
import { resumeData } from "@/data/resume";
import { ExternalLink, Github } from "lucide-react";
import Link from "next/link";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.9, y: 30 },
  visible: { 
    opacity: 1, 
    scale: 1, 
    y: 0,
    transition: { type: "spring", stiffness: 50, damping: 15 }
  },
};

export function ProjectsSection() {
  return (
    <section id="projects" className="w-full py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl sm:text-5xl font-extrabold mb-6 tracking-tight">Featured Projects</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A selection of my best work, demonstrating my technical skills and problem-solving abilities in building robust systems.
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {resumeData.projects.map((project, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -10 }}
              className="group glass-card rounded-3xl overflow-hidden flex flex-col h-full hover-glow bg-background/50 backdrop-blur-xl border border-border/50"
            >
              <div className="relative w-full h-56 bg-gradient-to-br from-primary/10 via-background to-secondary/20 overflow-hidden flex items-center justify-center border-b border-border/50">
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors duration-500 z-10" />
                <motion.span 
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="font-mono text-6xl font-extrabold text-foreground/20 group-hover:text-primary/40 transition-colors duration-500 drop-shadow-xl"
                >
                  {project.title.charAt(0)}
                </motion.span>
              </div>

              <div className="p-8 flex flex-col flex-1">
                <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm flex-1 mb-6 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-8">
                  {project.techStack.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1.5 rounded-lg bg-secondary/60 border border-border/50 text-secondary-foreground text-xs font-semibold tracking-wide"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-6 pt-5 border-t border-border/50 mt-auto">
                  <Link
                    href={project.link}
                    className="flex items-center gap-2 text-sm font-semibold hover:text-primary transition-colors group/link"
                  >
                    <ExternalLink className="w-4 h-4 group-hover/link:scale-110 transition-transform" />
                    Live Demo
                  </Link>
                  <Link
                    href={project.github || "#"}
                    target="_blank"
                    className="flex items-center gap-2 text-sm font-semibold hover:text-primary transition-colors group/link"
                  >
                    <Github className="w-4 h-4 group-hover/link:scale-110 transition-transform" />
                    Source
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
