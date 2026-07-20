import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";
import { resumeData } from "@/data/resume";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-border bg-background py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex flex-col items-center md:items-start gap-2">
          <Link href="/" className="text-xl font-bold tracking-tight">
            OMAR<span className="text-primary">.</span>
          </Link>
          <p className="text-sm text-muted-foreground text-center md:text-left max-w-xs">
            {resumeData.personalInfo.motto}
          </p>
        </div>

        <div className="flex items-center gap-6">
          <a
            href={resumeData.personalInfo.github}
            target="_blank"
            rel="noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors p-2 hover:bg-secondary rounded-full"
            aria-label="GitHub"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href={resumeData.personalInfo.linkedin}
            target="_blank"
            rel="noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors p-2 hover:bg-secondary rounded-full"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a
            href={`mailto:${resumeData.personalInfo.email}`}
            className="text-muted-foreground hover:text-foreground transition-colors p-2 hover:bg-secondary rounded-full"
            aria-label="Email"
          >
            <Mail className="w-5 h-5" />
          </a>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-8 pt-8 border-t border-border/50 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted-foreground">
        <p>© {currentYear} Omar Ahmed. All rights reserved.</p>
        <div className="flex gap-4">
          <Link href="/privacy" className="hover:text-foreground transition-colors">Privacy Policy</Link>
          <Link href="/terms" className="hover:text-foreground transition-colors">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}
