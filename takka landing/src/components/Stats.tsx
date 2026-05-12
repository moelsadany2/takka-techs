import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "motion/react";
import { useTranslation } from "react-i18next";

function Counter({ end, suffix = "", duration = 2 }: { end: number, suffix?: string, duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!isInView) return;
    
    let startTimestamp: number | null = null;
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / (duration * 1000), 1);
      
      // Easing out quadratic
      const easeOut = progress * (2 - progress);
      setCount(Math.floor(easeOut * end));
      
      if (progress < 1) {
        window.requestAnimationFrame(step);
      } else {
        setCount(end); // Ensure we end on the exact number
      }
    };
    window.requestAnimationFrame(step);
  }, [isInView, end, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
}

export function Stats() {
  const { t } = useTranslation();
  return (
    <section className="py-24 relative overflow-hidden bg-background border-y border-[var(--color-takka-gold)]/20">
      <div className="absolute inset-0 bg-gradient-to-r from-secondary/50 via-[var(--color-takka-gold)]/10 to-secondary/50"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-12 text-center max-w-6xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once:true }} className="group">
            <div className="text-6xl md:text-8xl font-black text-foreground mb-4 drop-shadow-2xl font-mono tracking-tighter group-hover:scale-110 transition-transform duration-500">
              <Counter end={parseInt(t('stats.1.num')) || 14} />
            </div>
            <div className="text-xl md:text-2xl text-muted-foreground font-bold group-hover:text-[var(--color-takka-gold)] transition-colors">{t('stats.1.text')}</div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once:true }} transition={{ delay: 0.1 }} className="group">
             <div className="text-6xl md:text-8xl font-black text-foreground mb-4 drop-shadow-2xl font-mono tracking-tighter group-hover:scale-110 transition-transform duration-500">
              <Counter end={parseInt(t('stats.2.num')) || 24} suffix={t('stats.2.suffix')} />
            </div>
            <div className="text-xl md:text-2xl text-muted-foreground font-bold group-hover:text-[var(--color-takka-gold)] transition-colors">{t('stats.2.text')}</div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once:true }} transition={{ delay: 0.2 }} className="group">
             <div className="text-6xl md:text-8xl font-black text-[var(--color-takka-gold)] mb-4 drop-shadow-2xl font-mono tracking-tighter group-hover:scale-110 transition-transform duration-500 text-glow">
              <Counter end={parseInt(t('stats.3.num')) || 100} suffix={t('stats.3.suffix')} />
            </div>
            <div className="text-xl md:text-2xl text-muted-foreground font-bold group-hover:text-foreground transition-colors">{t('stats.3.text')}</div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
