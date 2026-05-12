import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { CreditCard, Wrench, PackageCheck, ClipboardCheck } from "lucide-react";
import { useTranslation } from "react-i18next";

export function InteractiveTour() {
  const [activeTab, setActiveTab] = useState(0);
  const { t } = useTranslation();

  const tabs = [
    {
      id: 0,
      title: t('tour.tab.cashier.title'),
      icon: <CreditCard className="w-5 h-5" />,
      description: t('tour.tab.cashier.desc'),
      mockupBg: "from-blue-500/20 to-transparent"
    },
    {
      id: 1,
      title: t('tour.tab.maintenance.title'),
      icon: <Wrench className="w-5 h-5" />,
      description: t('tour.tab.maintenance.desc'),
      mockupBg: "from-[var(--color-takka-gold)]/20 to-transparent"
    },
    {
      id: 2,
      title: t('tour.tab.inventory.title'),
      icon: <PackageCheck className="w-5 h-5" />,
      description: t('tour.tab.inventory.desc'),
      mockupBg: "from-purple-500/20 to-transparent"
    },
    {
      id: 3,
      title: t('tour.tab.reports.title'),
      icon: <ClipboardCheck className="w-5 h-5" />,
      description: t('tour.tab.reports.desc'),
      mockupBg: "from-green-500/20 to-transparent"
    }
  ];

  return (
    <section className="py-32 bg-background relative overflow-hidden" id="tour">
      <div className="container mx-auto px-4 z-10 relative">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">{t('tour.title')}</h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 items-center max-w-6xl mx-auto">
          
          {/* Interactive Screen side */}
          <div className="w-full lg:w-3/5 h-[450px] relative rounded-3xl border border-border bg-card shadow-2xl p-4 overflow-hidden">
             {/* Dynamic Background */}
             <AnimatePresence mode="wait">
               <motion.div 
                 key={activeTab}
                 initial={{ opacity: 0 }}
                 animate={{ opacity: 1 }}
                 exit={{ opacity: 0 }}
                 transition={{ duration: 0.5 }}
                 className={`absolute inset-0 bg-gradient-to-br ${tabs[activeTab].mockupBg}`}
               />
             </AnimatePresence>

             {/* Fake UI Frame to give premium look */}
             <div className="relative z-10 w-full h-full bg-background/50 backdrop-blur-xl rounded-2xl border border-border flex flex-col overflow-hidden shadow-inner">
               <div className="h-10 bg-secondary border-b border-border flex items-center px-4 gap-2">
                 <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                 <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                 <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                 <div className="mx-auto text-xs text-muted-foreground">{tabs[activeTab].title} - Takka System</div>
               </div>
               
               <div className="flex-1 p-6 relative">
                 <AnimatePresence mode="wait">
                    <motion.div
                      key={activeTab}
                      initial={{ opacity: 0, y: 10, scale: 0.98 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -10, scale: 0.98 }}
                      transition={{ duration: 0.4 }}
                      className="h-full flex flex-col justify-center items-center text-center px-8"
                    >
                      <div className="w-20 h-20 rounded-2xl bg-secondary/50 border border-border flex items-center justify-center mb-6 text-[var(--color-takka-gold)]">
                        {tabs[activeTab].icon}
                      </div>
                      <h3 className="text-2xl font-bold text-foreground mb-4">{tabs[activeTab].title}</h3>
                      <p className="text-lg text-muted-foreground">{tabs[activeTab].description}</p>
                      
                      {/* Highlight Spotlight effect */}
                      <div className="absolute w-[300px] h-[300px] bg-primary/5 rounded-full blur-[80px] pointer-events-none"></div>
                    </motion.div>
                 </AnimatePresence>
               </div>
             </div>
          </div>

          {/* Controls side */}
          <div className="w-full lg:w-2/5 flex flex-col gap-4">
            {tabs.map((tab, idx) => (
              <button 
                key={tab.id}
                onClick={() => setActiveTab(idx)}
                className={`flex items-center gap-4 p-5 rounded-2xl transition-all duration-300 text-right ltr:text-left w-full border ${
                  activeTab === idx 
                  ? 'bg-card border-[var(--color-takka-gold)]/50 shadow-[0_0_20px_rgba(212,175,55,0.15)] scale-105 z-10' 
                  : 'bg-transparent border-transparent hover:border-border hover:bg-secondary/50 text-muted-foreground'
                }`}
              >
                <div className={`w-12 h-12 rounded-full flex items-center justify-center transition-colors ${
                  activeTab === idx ? 'bg-[var(--color-takka-gold)] text-[var(--color-takka-navy)]' : 'bg-secondary text-muted-foreground group-hover:text-foreground group-hover:bg-card'
                }`}>
                  {tab.icon}
                </div>
                <div className="flex-1">
                  <h3 className={`font-bold text-lg mb-1 ${activeTab === idx ? 'text-[var(--color-takka-gold)]' : 'text-foreground'}`}>
                    {tab.title}
                  </h3>
                  <p className="text-sm opacity-80 line-clamp-1">{tab.description}</p>
                </div>
              </button>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
