import { motion } from "motion/react";
import { Printer, Smartphone, MessageCircle } from "lucide-react";
import { useTranslation } from "react-i18next";

export function Integrations() {
  const { t } = useTranslation();

  const tools = [
    { name: t('integrations.tool.1'), icon: <MessageCircle className="w-8 h-8 text-[#25D366]" />, pos: "top-0 ltr:left-[10%] rtl:right-[10%]", delay: 0 },
    { name: t('integrations.tool.2'), icon: <Printer className="w-8 h-8 text-blue-400" />, pos: "bottom-0 ltr:left-[10%] rtl:right-[10%]", delay: 0.5 },
    { name: t('integrations.tool.3'), icon: <ScanBarcodeIcon className="w-8 h-8 text-purple-400" />, pos: "top-0 ltr:right-[10%] rtl:left-[10%]", delay: 1 },
    { name: t('integrations.tool.4'), icon: <Smartphone className="w-8 h-8 text-red-500" />, pos: "bottom-0 ltr:right-[10%] rtl:left-[10%]", delay: 1.5 },
  ];

  return (
    <section className="py-32 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03] mix-blend-overlay"></div>
      
      <div className="container mx-auto px-4 relative z-10 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">{t('integrations.title')}</h2>
        <p className="text-xl text-muted-foreground mb-24 max-w-2xl mx-auto">{t('integrations.desc')}</p>

        <div className="relative max-w-4xl mx-auto h-[400px]">
          
          {/* Center Logo */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
            <motion.div 
               animate={{ scale: [1, 1.05, 1], boxShadow: ["0 0 20px rgba(212,175,55,0.2)", "0 0 60px rgba(212,175,55,0.6)", "0 0 20px rgba(212,175,55,0.2)"] }}
               transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
               className="w-32 h-32 bg-secondary rounded-3xl border-2 border-[var(--color-takka-gold)] flex items-center justify-center p-4 relative"
            >
               <span className="text-3xl font-black text-gold-gradient">تكّة</span>
               
               {/* Pulsing rings */}
               <motion.div 
                 animate={{ scale: [1, 2], opacity: [0.5, 0] }}
                 transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
                 className="absolute inset-0 rounded-3xl border border-[var(--color-takka-gold)]"
               ></motion.div>
               <motion.div 
                 animate={{ scale: [1, 2.5], opacity: [0.3, 0] }}
                 transition={{ duration: 2, repeat: Infinity, ease: "easeOut", delay: 0.5 }}
                 className="absolute inset-0 rounded-3xl border border-[var(--color-takka-gold)]"
               ></motion.div>
            </motion.div>
          </div>

          {/* Connecting Lines SVG */}
          <svg className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-20 z-0">
            {/* Top Left (idx 0) */}
            <motion.line x1="50%" y1="50%" x2="15%" y2="50px" stroke="var(--color-takka-gold)" strokeWidth="2" strokeDasharray="5,5" animate={{ strokeDashoffset: [0, -20] }} transition={{ duration: 1, repeat: Infinity, ease: "linear" }} />
             {/* Bottom Left (idx 1) */}
            <motion.line x1="50%" y1="50%" x2="15%" y2="calc(100% - 50px)" stroke="var(--color-takka-gold)" strokeWidth="2" strokeDasharray="5,5" animate={{ strokeDashoffset: [0, -20] }} transition={{ duration: 1, repeat: Infinity, ease: "linear" }} />
             {/* Top Right (idx 2) */}
            <motion.line x1="50%" y1="50%" x2="85%" y2="50px" stroke="var(--color-takka-gold)" strokeWidth="2" strokeDasharray="5,5" animate={{ strokeDashoffset: [0, 20] }} transition={{ duration: 1, repeat: Infinity, ease: "linear" }} />
             {/* Bottom Right (idx 3) */}
            <motion.line x1="50%" y1="50%" x2="85%" y2="calc(100% - 50px)" stroke="var(--color-takka-gold)" strokeWidth="2" strokeDasharray="5,5" animate={{ strokeDashoffset: [0, 20] }} transition={{ duration: 1, repeat: Infinity, ease: "linear" }} />
          </svg>

          {/* Integrated Tools */}
          {tools.map((tool, i) => (
             <div key={i} className={`absolute ${tool.pos} flex flex-col items-center gap-3 z-10`}>
                <motion.div 
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: tool.delay }}
                  className="w-20 h-20 rounded-2xl bg-card border border-border flex items-center justify-center shadow-xl hover:border-primary transition-colors cursor-pointer"
                >
                  {tool.icon}
                </motion.div>
                <motion.span 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: tool.delay + 0.3 }}
                  className="text-sm font-bold text-foreground bg-background/50 backdrop-blur-md px-3 py-1 rounded-full border border-border whitespace-nowrap"
                >
                  {tool.name}
                </motion.span>
             </div>
          ))}

        </div>
      </div>
    </section>
  );
}

function ScanBarcodeIcon(props: any) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M3 7V5a2 2 0 0 1 2-2h2"/><path d="M17 3h2a2 2 0 0 1 2 2v2"/><path d="M21 17v2a2 2 0 0 1-2 2h-2"/><path d="M7 21H5a2 2 0 0 1-2-2v-2"/><path d="M8 7v10"/><path d="M12 7v10"/><path d="M16 7v10"/>
    </svg>
  )
}
