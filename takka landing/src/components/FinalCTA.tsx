import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { useTranslation } from "react-i18next";

export function FinalCTA() {
  const { t } = useTranslation();

  return (
    <section className="relative py-40 overflow-hidden bg-background flex items-center justify-center border-t border-border">
      {/* Intense Glowing Gradient Background */}
      <div className="absolute inset-0 z-0 opacity-80 mix-blend-screen">
         <motion.div 
           animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
           transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
           className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-[400px] bg-gradient-to-r from-[var(--color-takka-navy)] via-[var(--color-takka-gold)]/40 to-[var(--color-takka-navy-light)] blur-[100px] rounded-full"
         />
      </div>

      <div className="container mx-auto px-4 relative z-10 text-center">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-7xl font-black text-foreground mb-8 leading-tight drop-shadow-2xl max-w-4xl mx-auto">
            {t('cta.title')}
          </h2>
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">{t('cta.desc')}</p>
          
          <button onClick={() => window.open('https://wa.me/201037230660', '_blank')} className="group relative px-10 py-5 bg-[var(--color-takka-gold)] text-[var(--color-takka-navy)] rounded-2xl font-black text-2xl shadow-[0_0_40px_rgba(212,175,55,0.4)] hover:shadow-[0_0_60px_rgba(212,175,55,0.6)] hover:bg-foreground hover:text-background transition-all duration-300 overflow-hidden">
             <span className="relative z-10 flex items-center gap-3">
               {t('cta.btn')}
               <ArrowRight className="w-6 h-6 rtl:rotate-180 group-hover:-translate-x-2 ltr:group-hover:translate-x-2 transition-transform" />
             </span>
             {/* Shine effect */}
             <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_1s_forwards] bg-gradient-to-r from-transparent via-white/50 to-transparent skew-x-12 z-0"></div>
          </button>
        </motion.div>
      </div>
    </section>
  );
}
