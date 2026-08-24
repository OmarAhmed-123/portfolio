"use client";

import { motion, type Variants } from "framer-motion";
import { ArrowRight, Download, Github, Linkedin, Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { resumeData } from "@/data/resume";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { type: "spring", stiffness: 50, damping: 15 } 
  },
};

export function HeroSection() {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden py-20 px-4 sm:px-6 lg:px-8">
      {/* Animated Background Gradients */}
      <div className="absolute inset-0 -z-10 bg-background overflow-hidden">
        <motion.div 
          animate={{ 
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-primary/20 blur-[150px] mix-blend-normal" 
        />
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-accent/20 blur-[150px] mix-blend-normal" 
        />
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col space-y-8 z-10"
        >
          <div className="space-y-6">
            <motion.span
              variants={itemVariants}
              className="inline-block py-1.5 px-4 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-semibold tracking-widest uppercase shadow-sm"
            >
              Available for Hire
            </motion.span>
            <motion.h1 variants={itemVariants} className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-foreground">
              Hi, I&apos;m <br />
              <span className="text-gradient leading-tight block mt-2">
                {resumeData.personalInfo.name.split(" ")[0]} {resumeData.personalInfo.name.split(" ")[1]}
              </span>
            </motion.h1>
            <motion.h2 variants={itemVariants} className="text-2xl sm:text-3xl text-muted-foreground font-medium">
              {resumeData.personalInfo.title}
            </motion.h2>
            <motion.p variants={itemVariants} className="text-lg text-muted-foreground max-w-lg leading-relaxed">
              {resumeData.personalInfo.motto}
            </motion.p>
          </div>

          <motion.div variants={itemVariants} className="flex flex-wrap gap-4 pt-2">
            <Link
              href="#contact"
              className="group flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-xl font-semibold hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 shadow-[0_0_20px_rgba(var(--primary),0.3)] hover:shadow-[0_0_30px_rgba(var(--primary),0.5)]"
            >
              Let&apos;s Talk
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform" />
            </Link>
            <Link
              href="/resume.pdf"
              target="_blank"
              className="group flex items-center justify-center gap-2 bg-secondary/80 backdrop-blur-md border border-border text-secondary-foreground px-8 py-4 rounded-xl font-semibold hover:bg-secondary hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
            >
              <Download className="w-5 h-5 group-hover:-translate-y-0.5 transition-transform" />
              Resume
            </Link>
          </motion.div>

          <motion.div variants={itemVariants} className="flex items-center gap-6 pt-6">
            <SocialLink href={resumeData.personalInfo.github} icon={<Github className="w-6 h-6" />} />
            <SocialLink href={resumeData.personalInfo.linkedin} icon={<Linkedin className="w-6 h-6" />} />
            <SocialLink href={`mailto:${resumeData.personalInfo.email}`} icon={<Mail className="w-6 h-6" />} />
          </motion.div>
        </motion.div>

        {/* Right Image/Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ type: "spring", stiffness: 40, damping: 20, delay: 0.4 }}
          className="relative flex justify-center lg:justify-end perspective-1000 z-10"
        >
          <motion.div 
            whileHover={{ scale: 1.05, rotateY: 5, rotateX: 5 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="relative w-[300px] h-[350px] sm:w-[400px] sm:h-[480px] rounded-3xl overflow-hidden border border-white/20 dark:border-white/10 shadow-2xl glass-card transform-style-3d"
          >
            <Image
              src="/omar.jpg"
              alt="Omar Ahmed"
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 300px, 400px"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent mix-blend-overlay" />
          </motion.div>
          
          {/* Floating Stats */}
          <FloatingStat delay={0.8} top="5%" right="-5%" label="Years Exp." value="2+" />
          <FloatingStat delay={1.0} bottom="10%" left="-10%" label="Projects" value="15+" />
        </motion.div>
      </div>
    </section>
  );
}

function SocialLink({ href, icon }: { href: string; icon: React.ReactNode }) {
  return (
    <Link
      href={href}
      target="_blank"
      className="p-3 rounded-full bg-secondary/50 border border-border text-muted-foreground hover:text-primary hover:bg-primary/10 hover:border-primary/30 transition-all hover:scale-110 transform duration-300 shadow-sm"
    >
      {icon}
    </Link>
  );
}

interface FloatingStatProps {
  delay: number;
  top?: string;
  right?: string;
  bottom?: string;
  left?: string;
  label: string;
  value: string;
}

function FloatingStat({ delay, top, right, bottom, left, label, value }: FloatingStatProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ type: "spring", stiffness: 50, delay }}
      className="absolute glass-card px-6 py-4 rounded-2xl flex flex-col items-center justify-center border-t border-white/40 dark:border-white/20 shadow-xl"
      style={{ top, right, bottom, left }}
    >
      <span className="text-4xl font-extrabold text-foreground">{value}</span>
      <span className="text-xs text-muted-foreground font-semibold uppercase tracking-widest mt-1">{label}</span>
    </motion.div>
  );
}
