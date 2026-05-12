import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { PhoneIncoming, Wrench, MessageCircle } from "lucide-react";
import { useTranslation } from "react-i18next";

export function MaintenanceFlow() {
  const sectionRef = useRef<HTMLElement>(null);
  const { t } = useTranslation();
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start center", "end center"]
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  const steps = [
    {
      title: t('flow.1.title'),
      desc: t('flow.1.desc'),
      icon: <PhoneIncoming className="w-6 h-6" />,
      color: "text-blue-400",
      bg: "bg-blue-400/20"
    },
    {
      title: t('flow.2.title'),
      desc: t('flow.2.desc'),
      icon: <Wrench className="w-6 h-6" />,
      color: "text-[var(--color-takka-gold)]",
      bg: "bg-[var(--color-takka-gold)]/20"
    },
    {
      title: t('flow.3.title'),
      desc: t('flow.3.desc'),
      icon: <MessageCircle className="w-6 h-6" />,
      color: "text-[#25D366]",
      bg: "bg-[#25D366]/20"
    }
  ];

  return (
    <section ref={sectionRef} className="py-32 bg-secondary/50 relative">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">{t('flow.title')}</h2>
          <p className="text-xl text-muted-foreground">{t('flow.desc')}</p>
        </div>

        <div className="relative">
          {/* Connecting Line */}
          <div className="absolute top-0 bottom-0 w-1 bg-border rounded-full transform ltr:left-8 rtl:right-8 ltr:-translate-x-1/2 rtl:translate-x-1/2 md:ltr:left-[50%] md:rtl:right-[50%] z-0">
            <motion.div 
              style={{ height: lineHeight }}
              className="absolute top-0 right-0 left-0 bg-[var(--color-takka-gold)] shadow-[0_0_15px_rgba(212,175,55,0.8)]"
            />
          </div>

          <div className="space-y-24">
            {steps.map((step, index) => {
              const isEven = index % 2 === 0;
              return (
                <div key={index} className="relative flex flex-col md:flex-row items-center w-full">
                   {/* Node */}
                   <div className="absolute ltr:left-8 rtl:right-8 md:ltr:left-[50%] md:rtl:right-[50%] transform ltr:-translate-x-1/2 rtl:translate-x-1/2 w-16 h-16 rounded-full bg-card border-4 border-background flex items-center justify-center z-10">
                      <div className={`p-2 rounded-full ${step.bg} ${step.color}`}>
                         {step.icon}
                      </div>
                   </div>

                   {/* Content Block */}
                   <div className={`w-full md:w-1/2 ltr:pl-24 rtl:pr-24 ltr:md:px-12 rtl:md:px-12 ${isEven ? 'md:ltr:mr-auto md:rtl:mr-auto md:ltr:text-right md:rtl:text-left' : 'md:ltr:ml-auto md:rtl:ml-auto md:ltr:text-left md:rtl:text-right'}`}>
                     <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        className="glass-panel p-8 rounded-3xl border border-border hover:border-[var(--color-takka-gold)]/40 transition-colors bg-card/80 backdrop-blur-xl shadow-sm"
                     >
                        <h3 className="text-2xl font-bold text-foreground mb-4 leading-normal">{step.title}</h3>
                        <p className="text-lg text-muted-foreground leading-relaxed">{step.desc}</p>
                     </motion.div>
                   </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
