import { useRef } from "react";
import { useTranslation } from "react-i18next";
import { motion, useScroll, useTransform } from "motion/react";
import { Search, PenTool, Code, CheckCircle, Rocket } from "lucide-react";
import { AnimatedText } from "./AnimatedText";

export function Workflow() {
  const { t } = useTranslation();
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  const steps = [
    { icon: <Search className="w-6 h-6" />, title: t("workflow.1.title"), desc: t("workflow.1.desc") },
    { icon: <PenTool className="w-6 h-6" />, title: t("workflow.2.title"), desc: t("workflow.2.desc") },
    { icon: <Code className="w-6 h-6" />, title: t("workflow.3.title"), desc: t("workflow.3.desc") },
    { icon: <CheckCircle className="w-6 h-6" />, title: t("workflow.4.title"), desc: t("workflow.4.desc") },
    { icon: <Rocket className="w-6 h-6" />, title: t("workflow.5.title"), desc: t("workflow.5.desc") },
  ];

  return (
    <section className="py-32 bg-background relative overflow-hidden" ref={containerRef}>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-28">
          <AnimatedText 
            text={t("workflow.title")} 
            className="text-4xl md:text-5xl font-bold mb-6 text-foreground"
          />
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Animated Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-white/5 -translate-x-1/2 rounded-full overflow-hidden">
            <motion.div 
              className="absolute top-0 left-0 right-0 bg-gradient-to-b from-[var(--color-takka-gold)] via-[var(--color-takka-gold)] to-transparent glow-line"
              style={{ height: lineHeight }}
            />
          </div>

          <div className="space-y-24 relative">
            {steps.map((step, index) => {
              const isEven = index % 2 === 0;
              return (
                <motion.div 
                  key={index}
                  className={`flex flex-col md:flex-row items-center gap-8 md:gap-16 ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8 }}
                >
                  {/* Content */}
                  <div className={`w-full md:w-1/2 pl-20 md:pl-0 ${isEven ? 'md:text-right rtl:md:text-left' : 'md:text-left rtl:md:text-right'}`}>
                    <div className="p-8 rounded-3xl border border-white/5 bg-card/30 backdrop-blur-sm hover:border-[var(--color-takka-gold)]/30 hover:bg-[var(--color-takka-gold)]/5 transition-all duration-300 group">
                      <h3 className="text-2xl font-bold mb-3 text-foreground group-hover:text-[var(--color-takka-gold)] transition-colors">{step.title}</h3>
                      <p className="text-muted-foreground text-lg leading-relaxed">{step.desc}</p>
                    </div>
                  </div>

                  {/* Icon / Node */}
                  <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-16 h-16 rounded-full border-4 border-background bg-[var(--color-takka-navy-light)] flex items-center justify-center z-10 shadow-[0_0_0_4px_rgba(255,255,255,0.05)]">
                    <motion.div 
                      className="text-[var(--color-takka-gold)]"
                      whileInView={{ scale: [1, 1.2, 1], rotate: [0, 10, -10, 0] }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                      viewport={{ once: true, margin: "-100px" }}
                    >
                      {step.icon}
                    </motion.div>
                  </div>

                  {/* Empty space for alternating layout */}
                  <div className="hidden md:block w-1/2"></div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
