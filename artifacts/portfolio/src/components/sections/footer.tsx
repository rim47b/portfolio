import { Github, Linkedin } from "lucide-react";
import { data } from "@/data";

export function Footer() {
  return (
    <footer className="py-12 border-t border-border bg-background">
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-xl font-bold font-mono tracking-tight text-foreground">
          AU<span className="text-primary">.</span>
        </div>
        
        <p className="text-sm text-muted-foreground text-center">
          © 2026 {data.person.name}. All rights reserved.
        </p>
        
        <div className="flex gap-4">
          <a
            href="https://www.linkedin.com/in/anuj-upadhyay-154951258/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a
            href="#"
            className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
            aria-label="GitHub"
          >
            <Github className="w-5 h-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
