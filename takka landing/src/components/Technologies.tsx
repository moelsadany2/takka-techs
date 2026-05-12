import { useTranslation } from "react-i18next";
import { motion } from "motion/react";

export function Technologies() {
  const { t } = useTranslation();

  const techStack = [
    "React", "Next.js", "Node.js", "Python", "Flutter", "Swift", "Kotlin", 
    "AWS", "Google Cloud", "Docker", "Kubernetes", "PostgreSQL", "MongoDB", "Figma"
  ];

  // Duplicate for infinite scroll effect
  const marqueeItems = [...techStack, ...techStack];

  return (
    <section id="tech" className="py-20 bg-background overflow-hidden border-y border-border/50">
      <div className="container mx-auto px-4 mb-12 text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-2xl md:text-4xl font-bold"
        >
          {t('tech.title')}
        </motion.h2>
      </div>

      <div className="relative flex overflow-x-hidden group">
        <div className="absolute top-0 bottom-0 left-0 w-32 z-10 bg-gradient-to-r from-background to-transparent pointer-events-none" />
        <div className="absolute top-0 bottom-0 right-0 w-32 z-10 bg-gradient-to-l from-background to-transparent pointer-events-none" />
        
        <motion.div 
          className="flex gap-8 whitespace-nowrap py-4"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 20,
            ease: "linear",
            repeat: Infinity,
          }}
        >
          {marqueeItems.map((tech, index) => (
            <div 
              key={index}
              className="px-8 py-4 rounded-full border border-border/50 bg-secondary/30 text-lg font-semibold text-muted-foreground hover:text-primary hover:border-[var(--color-takka-gold)] hover:shadow-[0_0_15px_rgba(212,175,55,0.2)] transition-all duration-300 cursor-default"
            >
              {tech}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
