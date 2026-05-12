import { motion, useScroll, useTransform } from "motion/react";
import { Play } from "lucide-react";
import { Magnetic } from "./Magnetic";
import { useRef } from "react";
import { useTranslation } from "react-i18next";

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { t } = useTranslation();
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center pt-24 pb-12 overflow-hidden bg-background">
      {/* Dynamic Glowing Background */}
      <motion.div style={{ y, opacity }} className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-[600px] bg-gradient-to-b from-[var(--color-takka-navy-light)]/20 dark:from-[var(--color-takka-navy-light)]/60 to-transparent" />
        <motion.div 
          animate={{ opacity: [0.3, 0.6, 0.3], scale: [1, 1.2, 1] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[var(--color-takka-gold)]/20 rounded-full blur-[150px]" 
        />
      </motion.div>

      <div className="container mx-auto px-4 z-10 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-right rtl:lg:text-right ltr:lg:text-left flex flex-col items-center lg:items-start z-20">
            <Magnetic strength={0.2}>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2, type: "spring" }}
                className="inline-block mb-6 px-6 py-2 rounded-full border border-[var(--color-takka-gold)]/30 bg-background/30 backdrop-blur-md shadow-[0_0_30px_rgba(212,175,55,0.2)] hover:shadow-[0_0_50px_rgba(212,175,55,0.4)] transition-shadow duration-500 cursor-pointer"
              >
                <span className="text-[var(--color-takka-gold)] font-medium tracking-wide text-sm">
                  {t('hero.badge')}
                </span>
              </motion.div>
            </Magnetic>

            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-5xl md:text-6xl lg:text-[4.5rem] font-black tracking-tight mb-6 leading-[1.2] text-foreground"
            >
              {t('hero.title1')} <span className="text-gold-gradient relative inline-block">
                {t('hero.takka')}
                <motion.span 
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="absolute inset-0 bg-[var(--color-takka-gold)] blur-[40px] opacity-10 dark:opacity-20 -z-10"
                ></motion.span>
              </span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-xl md:text-2xl text-muted-foreground mb-10 leading-relaxed font-light max-w-2xl"
            >
              {t('hero.subtitle')}
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="flex flex-col sm:flex-row flex-wrap items-center gap-5 w-full sm:w-auto"
            >
              <Magnetic strength={0.3}>
                <button 
                  onClick={() => window.open('https://wa.me/201037230660', '_blank')}
                  className="w-full sm:w-auto text-lg h-16 px-10 bg-[var(--color-takka-gold)] text-[var(--color-takka-navy)] hover:bg-foreground hover:text-background hover:scale-105 transition-all duration-300 rounded-2xl font-bold shadow-[0_0_20px_rgba(212,175,55,0.4)]"
                >
                  {t('hero.btn.start')}
                </button>
              </Magnetic>
              
              <Magnetic strength={0.3}>
                <button 
                  onClick={() => window.open('https://tinyurl.com/takkatechs', '_blank')}
                  className="w-full sm:w-auto text-lg h-16 px-8 bg-transparent hover:bg-secondary/50 border border-[var(--color-takka-gold)] text-[var(--color-takka-gold)] hover:border-[var(--color-takka-gold)] transition-all duration-300 rounded-2xl flex items-center justify-center font-medium group"
                >
                  {t('nav.download')}
                </button>
              </Magnetic>
              
              <Magnetic strength={0.3}>
                <button 
                  onClick={() => { const tour = document.getElementById('tour'); if(tour) tour.scrollIntoView({behavior: 'smooth'}) }}
                  className="w-full sm:w-auto text-lg h-16 px-8 bg-transparent hover:bg-secondary/50 border border-transparent hover:border-border text-foreground transition-all duration-300 rounded-2xl flex items-center justify-center gap-3 font-medium group"
                >
                  <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center group-hover:bg-[var(--color-takka-gold)] group-hover:text-[var(--color-takka-navy)] transition-colors">
                    <Play className="w-4 h-4 ml-1" fill="currentColor" />
                  </div>
                  {t('hero.btn.demo')}
                </button>
              </Magnetic>
            </motion.div>
          </div>

          {/* Visual Content: 3D Mockup Simulation */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="relative lg:h-[600px] flex items-center justify-center mt-12 lg:mt-0 perspective-[2000px]"
          >
            {/* Main Laptop Mockup */}
            <motion.div 
              animate={{ y: [-10, 10, -10], rotateX: [10, 15, 10] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="relative z-10 w-full max-w-lg aspect-[16/10] bg-card rounded-2xl border border-border shadow-2xl overflow-hidden transform-style-3d shadow-xl"
            >
              <div className="absolute inset-0 bg-secondary/10"></div>
              {/* Fake Dashboard UI */}
              <div className="flex h-full rtl:flex-row ltr:flex-row-reverse relative z-10">
                <div className="w-1/4 border-l border-border bg-secondary/30 p-4">
                  <div className="w-full h-8 bg-muted rounded-md mb-4"></div>
                  <div className="w-full h-8 bg-[var(--color-takka-gold)]/50 rounded-md mb-2"></div>
                  <div className="w-full h-8 bg-muted rounded-md mb-2"></div>
                </div>
                <div className="w-3/4 p-6 bg-card/50">
                  <div className="flex justify-between mb-6">
                    <div className="w-32 h-6 bg-muted rounded-md"></div>
                    <div className="w-10 h-10 bg-[var(--color-takka-gold)]/50 rounded-full"></div>
                  </div>
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    <div className="h-20 bg-muted rounded-xl border border-border"></div>
                    <div className="h-20 bg-[var(--color-takka-gold)]/20 rounded-xl border border-[var(--color-takka-gold)]/30"></div>
                    <div className="h-20 bg-muted rounded-xl border border-border"></div>
                  </div>
                  <div className="h-32 bg-secondary rounded-xl border border-border"></div>
                </div>
              </div>
            </motion.div>

            {/* Floating Elements */}
            <motion.div 
              animate={{ y: [0, -20, 0], rotateZ: [-5, 5, -5] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -right-6 md:-right-12 top-1/4 z-20 bg-card border border-[var(--color-takka-gold)]/30 shadow-[0_10px_30px_rgba(212,175,55,0.2)] rounded-xl py-3 px-5 backdrop-blur-md flex items-center gap-3"
            >
              <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center">
                <span className="text-green-500 text-xl">✓</span>
              </div>
              <div className="text-right">
                <p className="text-sm font-bold text-foreground">{t('hero.mockup.newInvoice')}</p>
                <p className="text-xs text-muted-foreground">{t('hero.mockup.success')}</p>
              </div>
            </motion.div>

            <motion.div 
              animate={{ y: [0, 20, 0], rotateZ: [5, -5, 5] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
              className="absolute -left-6 md:-left-12 bottom-1/4 z-20 bg-card border border-blue-500/30 shadow-2xl rounded-xl py-3 px-5 backdrop-blur-md flex items-center gap-3"
            >
               <div className="text-right">
                <p className="text-sm font-bold text-foreground">{t('hero.mockup.maintenance')}</p>
                <p className="text-xs text-blue-400">{t('hero.mockup.s23')}</p>
              </div>
              <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center">
                <span className="text-blue-500 text-xl">🔧</span>
              </div>
            </motion.div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}
