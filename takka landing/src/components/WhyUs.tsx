import { useTranslation } from "react-i18next";
import { motion } from "motion/react";
import { Zap, Layers, PenTool, HeadphonesIcon, Server } from "lucide-react";
import branchesImg from '../assets/branches.png';

export function WhyUs() {
  const { t } = useTranslation();

  const features = [
    { icon: <Zap className="w-5 h-5" />, title: t('whyUs.fastDev') },
    { icon: <Layers className="w-5 h-5" />, title: t('whyUs.modernTech') },
    { icon: <PenTool className="w-5 h-5" />, title: t('whyUs.proUIUX') },
    { icon: <HeadphonesIcon className="w-5 h-5" />, title: t('whyUs.reliableSupport') },
    { icon: <Server className="w-5 h-5" />, title: t('whyUs.scalableArch') },
  ];

  return (
    <section id="why-us" className="py-32 bg-secondary/30 relative">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-20 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/2"
          >
            <div className="inline-block mb-4">
              <span className="text-[var(--color-takka-gold)] font-medium tracking-widest uppercase text-sm">
                {t('nav.whyUs')}
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-12 text-foreground">{t('whyUs.title')}</h2>
            <div className="space-y-4">
              {features.map((feature, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-6 p-5 rounded-xl bg-card border border-border/50 hover:border-[var(--color-takka-gold)]/30 hover:shadow-sm transition-all duration-300 group"
                >
                  <div className="p-3 rounded-full bg-secondary text-[var(--color-takka-gold)] group-hover:bg-[var(--color-takka-gold)] group-hover:text-primary-foreground transition-colors duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="text-lg font-medium tracking-wide text-foreground">{feature.title}</h3>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/2 relative"
          >
            <div className="relative z-10 rounded-2xl overflow-hidden border border-border/50 shadow-xl">
              <img 
                src={branchesImg} 
                alt="Workspace" 
                className="w-full h-full object-cover aspect-square hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
