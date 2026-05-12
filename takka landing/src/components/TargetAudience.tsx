import { motion } from "motion/react";
import { Smartphone, Wrench, Headphones, HandCoins } from "lucide-react";
import { useTranslation } from "react-i18next";

export function TargetAudience() {
  const { t } = useTranslation();

  const targets = [
    {
      title: t('target.1.title'),
      desc: t('target.1.desc'),
      icon: <Smartphone className="w-8 h-8" />,
      color: "from-blue-500/20 to-blue-500/5",
      borderColor: "hover:border-blue-500/50"
    },
    {
      title: t('target.2.title'),
      desc: t('target.2.desc'),
      icon: <Wrench className="w-8 h-8" />,
      color: "from-[var(--color-takka-gold)]/20 to-[var(--color-takka-gold)]/5",
      borderColor: "hover:border-[var(--color-takka-gold)]/50"
    },
    {
      title: t('target.3.title'),
      desc: t('target.3.desc'),
      icon: <Headphones className="w-8 h-8" />,
      color: "from-purple-500/20 to-purple-500/5",
      borderColor: "hover:border-purple-500/50"
    },
    {
      title: t('target.4.title'),
      desc: t('target.4.desc'),
      icon: <HandCoins className="w-8 h-8" />,
      color: "from-emerald-500/20 to-emerald-500/5",
      borderColor: "hover:border-emerald-500/50"
    }
  ];

  return (
    <section className="py-32 bg-background relative border-y border-border">
      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">{t('target.title')}</h2>
          <p className="text-xl text-muted-foreground">{t('target.subtitle')}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {targets.map((target, index) => (
             <motion.div 
               key={index}
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: index * 0.1 }}
               className={`p-8 rounded-3xl bg-card border border-border transition-colors duration-300 ${target.borderColor} flex flex-col group`}
             >
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${target.color} flex items-center justify-center mb-6 text-foreground group-hover:scale-110 transition-transform duration-300`}>
                  {target.icon}
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{target.title}</h3>
                <p className="text-muted-foreground leading-relaxed flex-1">{target.desc}</p>
             </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
