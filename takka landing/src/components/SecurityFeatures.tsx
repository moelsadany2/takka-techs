import { motion } from "motion/react";
import { ShieldCheck, Cloud, Users, History } from "lucide-react";
import { useTranslation } from "react-i18next";

export function SecurityFeatures() {
  const { t } = useTranslation();

  const features = [
    {
      title: t('security.1.title'),
      desc: t('security.1.desc'),
      icon: <Cloud className="w-8 h-8" />
    },
    {
      title: t('security.2.title'),
      desc: t('security.2.desc'),
      icon: <Users className="w-8 h-8" />
    },
    {
      title: t('security.3.title'),
      desc: t('security.3.desc'),
      icon: <History className="w-8 h-8" />
    }
  ];

  return (
    <section className="py-32 bg-secondary/80 relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      
      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
           
           <div className="w-full lg:w-1/2 rtl:text-right ltr:text-left">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-green-500/20 text-green-500 rounded-xl">
                  <ShieldCheck className="w-8 h-8" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground">{t('security.title')}</h2>
              </div>
              <p className="text-lg text-muted-foreground mb-10 leading-relaxed max-w-xl">{t('security.subtitle')}</p>

              <div className="space-y-8">
                {features.map((feature, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex gap-4 items-start"
                  >
                    <div className="p-3 bg-background rounded-xl shadow-sm text-foreground shrink-0 border border-border">
                       {feature.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground mb-2">{feature.title}</h3>
                      <p className="text-muted-foreground">{feature.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
           </div>

           <div className="w-full lg:w-1/2 relative mt-10 lg:mt-0">
             <div className="absolute inset-0 bg-gradient-to-tr from-green-500/20 to-[var(--color-takka-gold)]/20 blur-3xl -z-10 rounded-full"></div>
             <motion.div 
               initial={{ opacity: 0, scale: 0.9 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
               className="bg-card border border-border rounded-3xl p-6 shadow-2xl relative overflow-hidden"
             >
               {/* Dashboard Mockup abstract */}
               <div className="flex items-center justify-between border-b border-border pb-4 mb-6">
                 <div className="flex gap-2">
                   <div className="w-3 h-3 rounded-full bg-red-500"></div>
                   <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                   <div className="w-3 h-3 rounded-full bg-green-500"></div>
                 </div>
                 <div className="text-xs font-mono text-muted-foreground text-left">Takka Log System</div>
               </div>

               <div className="space-y-4 font-mono text-sm rtl:text-right ltr:text-left">
                  <div className="flex gap-4 items-center bg-secondary/50 p-3 rounded-lg border border-border/50">
                    <span className="text-green-500 shrink-0">[10:00 AM]</span>
                    <span className="text-foreground">Backup saved securely to Cloud Server.</span>
                  </div>
                  <div className="flex gap-4 items-center bg-secondary/50 p-3 rounded-lg border border-border/50">
                    <span className="text-blue-500 shrink-0">[10:15 AM]</span>
                    <span className="text-foreground">Cashier 'Ahmed' started a new shift.</span>
                  </div>
                  <div className="flex gap-4 items-center bg-secondary/50 p-3 rounded-lg border border-border/50">
                    <span className="text-yellow-500 shrink-0">[11:30 AM]</span>
                    <span className="text-foreground">Manager updated 'Samsung S23' price.</span>
                  </div>
                   <div className="flex gap-4 items-center bg-red-500/10 border border-red-500/20 p-3 rounded-lg">
                    <span className="text-red-500 shrink-0">[12:45 PM]</span>
                    <span className="text-foreground text-red-400">Cashier attempted to delete Invoice #1023 (Blocked - No Permission).</span>
                  </div>
               </div>
             </motion.div>
           </div>
        </div>
      </div>
    </section>
  );
}
