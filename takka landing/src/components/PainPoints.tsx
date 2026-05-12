import { motion } from "motion/react";
import { CheckCircle2, XOctagon } from "lucide-react";
import { AnimatedText } from "./AnimatedText";
import { useTranslation } from "react-i18next";

export function PainPoints() {
  const { t } = useTranslation();
  const beforePoints = [
    t('whyUs.before.1'),
    t('whyUs.before.2'),
    t('whyUs.before.3'),
  ];

  const afterPoints = [
    t('whyUs.after.1'),
    t('whyUs.after.2'),
    t('whyUs.after.3'),
  ];

  return (
    <section className="py-32 bg-background relative overflow-hidden" id="why-us">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 mix-blend-overlay"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20 fade-in-up">
          <AnimatedText 
            text={t('whyUs.title')} 
            className="text-4xl md:text-5xl font-bold mb-6 text-foreground"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
          {/* Before Column */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="p-8 md:p-12 rounded-3xl border border-red-500/20 bg-red-950/10 backdrop-blur-sm relative overflow-hidden group"
          >
            {/* Glitchy Effect Background */}
            <div className="absolute inset-0 bg-red-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            
            <div className="flex items-center gap-4 mb-10 border-b border-red-500/20 pb-6 relative z-10 rtl:text-right ltr:text-left">
              <div className="p-3 bg-red-500/20 rounded-xl text-red-500">
                <XOctagon className="w-8 h-8" />
              </div>
              <h3 className="text-3xl font-bold text-red-500/90">{t('whyUs.before.title')}</h3>
            </div>

            <ul className="space-y-6 relative z-10">
              {beforePoints.map((point, i) => (
                <motion.li 
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 + i * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-4 text-xl text-muted-foreground group-hover:text-red-300/80 transition-colors"
                >
                  <span className="w-2 h-2 rounded-full bg-red-500/50"></span>
                  {point}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* After Column */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="p-8 md:p-12 rounded-3xl border border-[var(--color-takka-gold)]/30 bg-secondary/30 backdrop-blur-md relative overflow-hidden group shadow-2xl hover:shadow-[0_20px_40px_rgba(212,175,55,0.15)] transition-all duration-500"
          >
            <div className="absolute inset-0 bg-[var(--color-takka-gold)]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--color-takka-gold)]/10 blur-[80px] rounded-full pointer-events-none group-hover:bg-[var(--color-takka-gold)]/20 transition-colors duration-700"></div>
            
            <div className="flex items-center gap-4 mb-10 border-b border-[var(--color-takka-gold)]/20 pb-6 relative z-10 rtl:text-right ltr:text-left">
              <div className="p-3 bg-[var(--color-takka-gold)]/20 rounded-xl text-[var(--color-takka-gold)]">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-3xl font-bold text-foreground">{t('whyUs.after.title')}</h3>
            </div>

            <ul className="space-y-6 relative z-10">
              {afterPoints.map((point, i) => (
                <motion.li 
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 + i * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-4 text-xl text-foreground font-medium"
                >
                  <CheckCircle2 className="w-6 h-6 text-[var(--color-takka-gold)] flex-shrink-0" />
                  {point}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
