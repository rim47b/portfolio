import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { data } from "@/data";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Wrench, BarChart } from "lucide-react";

export function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? data.portfolio.projects
      : data.portfolio.projects.filter((p) => p.category === activeCategory);

  return (
    <section id="portfolio" className="py-24">
      <div className="container mx-auto px-6 md:px-12">
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Featured Work</h2>
          <div className="w-20 h-1 bg-primary mb-8" />
          <p className="text-lg text-muted-foreground max-w-2xl">
            Real-world automation systems built to solve complex operational bottlenecks.
          </p>
        </div>

        <div className="flex flex-wrap gap-3 mb-12">
          {data.portfolio.categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeCategory === cat
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted text-muted-foreground hover:bg-muted/80 hover:text-foreground"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {filteredProjects.map((project, i) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="h-full hover-elevate border-border bg-card overflow-hidden flex flex-col group">
                  <CardHeader>
                    <div className="flex justify-between items-start mb-4">
                      <Badge variant="secondary" className="font-mono bg-primary/10 text-primary hover:bg-primary/20">
                        {project.category}
                      </Badge>
                    </div>
                    <CardTitle className="text-xl group-hover:text-primary transition-colors">
                      {project.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="flex-1 flex flex-col gap-6">
                    <div className="space-y-2">
                      <div className="text-sm font-semibold text-foreground flex items-center gap-2">
                        <ArrowRight className="w-4 h-4 text-destructive" /> Problem
                      </div>
                      <p className="text-sm text-muted-foreground">{project.problem}</p>
                    </div>
                    <div className="space-y-2">
                      <div className="text-sm font-semibold text-foreground flex items-center gap-2">
                        <BarChart className="w-4 h-4 text-green-500" /> Result
                      </div>
                      <p className="text-sm text-foreground font-medium">{project.result}</p>
                    </div>
                    <div className="mt-auto pt-6 border-t border-border">
                      <div className="text-xs font-semibold text-muted-foreground flex items-center gap-2 mb-3">
                        <Wrench className="w-3 h-3" /> Stack
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {project.tools.map((tool) => (
                          <span
                            key={tool}
                            className="text-xs px-2 py-1 bg-muted rounded-md text-muted-foreground font-mono"
                          >
                            {tool}
                          </span>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
