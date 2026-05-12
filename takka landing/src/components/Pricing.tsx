import { motion } from "motion/react";
import { Check, X } from "lucide-react";
import { useTranslation } from "react-i18next";

export function Pricing() {
  const { t } = useTranslation();
  
  const plans = [
    {
      title: t('pricing.trial.title'),
      desc: t('pricing.trial.desc'),
      price: t('pricing.trial.price'),
      suffix: t('pricing.trial.suffix'),
      whatsappMsg: t('pricing.whatsapp.trial'),
      features: [
        { name: t('pricing.trial.feature.1'), included: true },
        { name: t('pricing.trial.feature.2'), included: true },
        { name: t('pricing.trial.feature.3'), included: true },
        { name: t('pricing.trial.feature.4'), included: true },
        { name: t('pricing.trial.feature.5'), included: true },
        { name: t('pricing.trial.feature.6'), included: true },
      ],
      highlighted: false,
      btnText: t('pricing.trial.btn')
    },
    {
      title: t('pricing.lifetime.title'),
      desc: t('pricing.lifetime.desc'),
      price: t('pricing.lifetime.price'),
      suffix: t('pricing.lifetime.suffix'),
      whatsappMsg: t('pricing.whatsapp.lifetime'),
      features: [
        { name: t('pricing.lifetime.feature.1'), included: true },
        { name: t('pricing.lifetime.feature.2'), included: true },
        { name: t('pricing.lifetime.feature.3'), included: true },
        { name: t('pricing.lifetime.feature.4'), included: true },
        { name: t('pricing.lifetime.feature.5'), included: true },
        { name: t('pricing.lifetime.feature.6'), included: true },
      ],
      highlighted: true,
      badge: t('pricing.lifetime.badge'),
      btnText: t('pricing.lifetime.btn')
    },
    {
      title: t('pricing.yearly.title'),
      desc: t('pricing.yearly.desc'),
      price: t('pricing.yearly.price'),
      suffix: t('pricing.yearly.suffix'),
      whatsappMsg: t('pricing.whatsapp.yearly'),
      features: [
        { name: t('pricing.yearly.feature.1'), included: true },
        { name: t('pricing.yearly.feature.2'), included: true },
        { name: t('pricing.yearly.feature.3'), included: true },
        { name: t('pricing.yearly.feature.4'), included: true },
        { name: t('pricing.yearly.feature.5'), included: true },
        { name: t('pricing.yearly.feature.6'), included: true },
      ],
      highlighted: false,
      btnText: t('pricing.yearly.btn')
    }
  ];

  return (
    <section className="py-32 bg-background relative overflow-hidden" id="pricing">
      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">{t('pricing.title')}</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">{t('pricing.desc')}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch pt-8">
           {plans.map((plan, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`relative flex flex-col p-8 rounded-3xl transition-all duration-300 ${
                  plan.highlighted 
                  ? 'bg-gradient-to-b from-secondary to-background border-2 border-[var(--color-takka-gold)] shadow-[0_0_40px_rgba(212,175,55,0.15)] md:-mt-4 md:mb-4' 
                  : 'bg-card border border-border shadow-sm hover:border-[var(--color-takka-gold)]/50'
                }`}
              >
                {plan.badge && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[var(--color-takka-gold)] text-[var(--color-takka-navy)] text-sm font-bold px-4 py-1 rounded-full shadow-lg whitespace-nowrap">
                    {plan.badge}
                  </div>
                )}
                
                <h3 className="text-2xl font-bold text-foreground mb-2">{plan.title}</h3>
                <p className="text-muted-foreground text-sm mb-6 min-h-[40px]">{plan.desc}</p>
                
                <div className="mb-8">
                   <div className="flex items-baseline gap-1">
                      <span className="text-4xl font-black text-foreground">
                        {plan.price}
                      </span>
                      <span className="text-lg text-muted-foreground font-medium">{plan.suffix}</span>
                   </div>
                </div>

                <div className="flex-1 space-y-4 mb-8">
                   {plan.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                         <div className={`mt-0.5 w-5 h-5 rounded-full flex items-center justify-center shrink-0 ${feature.included ? 'bg-green-500/20 text-green-500' : 'bg-red-500/10 text-red-500/50'}`}>
                            {feature.included ? <Check size={12} strokeWidth={3} /> : <X size={12} strokeWidth={3} />}
                         </div>
                         <span className={`text-sm ${feature.included ? 'text-foreground/90' : 'text-muted-foreground line-through'}`}>{feature.name}</span>
                      </div>
                   ))}
                </div>

                <button onClick={() => window.open(`https://wa.me/201037230660?text=${encodeURIComponent(plan.whatsappMsg)}`, '_blank')} className={`w-full py-4 rounded-xl font-bold transition-all ${
                  plan.highlighted 
                  ? 'bg-[var(--color-takka-gold)] text-[var(--color-takka-navy)] hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] hover:bg-foreground hover:text-background' 
                  : 'bg-secondary text-foreground hover:bg-secondary/80'
                }`}>
                  {plan.btnText}
                </button>
              </motion.div>
           ))}
        </div>
      </div>
    </section>
  );
}
