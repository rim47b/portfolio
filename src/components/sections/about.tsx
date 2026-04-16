import { motion } from "framer-motion";
import { data } from "@/data";
import { CheckCircle2 } from "lucide-react";

const profilePhoto = "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop";

export function About() {
  return (
    <section id="about" className="py-24 bg-muted/30">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">About Me</h2>
            <div className="w-20 h-1 bg-primary mb-8" />
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              {data.person.bio}
            </p>
            <div className="space-y-4">
              {data.person.skills.map((skill, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle2 className="text-primary w-5 h-5 flex-shrink-0" />
                  <span className="text-foreground font-medium">{skill}</span>
                </div>
              ))}
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="aspect-square rounded-2xl overflow-hidden bg-card border border-border shadow-2xl relative z-10 flex flex-col">
              <img
                src={profilePhoto}
                alt={data.person.name}
                className="w-full flex-1 object-cover object-top"
              />
              <div className="p-6 text-center bg-card">
                <h3 className="text-xl font-bold">{data.person.name}</h3>
                <p className="text-primary text-sm font-medium mt-1">{data.person.title}</p>
              </div>
            </div>
            <div className="absolute -inset-4 bg-gradient-to-r from-primary to-blue-500 rounded-2xl blur-2xl opacity-20 z-0" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
