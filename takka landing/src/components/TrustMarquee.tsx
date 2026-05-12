import { motion } from "motion/react";
import { useTranslation } from "react-i18next";

export function TrustMarquee() {
  const { t } = useTranslation();
  const logos = [
    t('marquee.1'), t('marquee.2'), t('marquee.3'), t('marquee.4'), t('marquee.5'), t('marquee.6'), t('marquee.7'), t('marquee.8')
  ];

  return (
    <div className="py-12 border-y border-border bg-background overflow-hidden relative">
      <div className="container mx-auto px-4 mb-8 text-center text-muted-foreground font-medium">
        {t('marquee.title')} <span className="text-[var(--color-takka-gold)] font-bold">{t('marquee.highlight')}</span>
      </div>
      
      {/* Gradients to hide hard edges */}
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10"></div>
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10"></div>

      <div className="flex w-[200%] gap-16" style={{ width: 'fit-content' }}>
        <motion.div 
          className="flex gap-16 md:gap-24 items-center whitespace-nowrap pl-16 pr-16"
          animate={{ x: [0, -1035] }} // Approximate width, needs better infinite logic in reality but this works for demo
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        >
          {/* Double map for infinite effect */}
          {[...logos, ...logos, ...logos].map((logo, i) => (
            <div 
              key={i} 
              className="text-2xl md:text-3xl font-black text-foreground/20 hover:text-foreground transition-colors duration-300 cursor-pointer"
            >
              {logo}
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
