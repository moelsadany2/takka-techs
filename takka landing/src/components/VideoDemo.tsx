import { motion } from "motion/react";
import { Play } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useState } from "react";

export function VideoDemo() {
  const { t } = useTranslation();
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="py-32 bg-secondary/50 relative overflow-hidden" id="demo">
      <div className="container mx-auto px-4 relative z-10 text-center">
        <div className="inline-block mb-4">
           <span className="text-[var(--color-takka-gold)] font-medium tracking-widest uppercase text-sm">{t('video.badge')}</span>
        </div>
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">{t('video.title')}</h2>
        <p className="text-xl text-muted-foreground mb-16 max-w-2xl mx-auto">{t('video.desc')}</p>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative max-w-5xl mx-auto rounded-3xl overflow-hidden aspect-video border border-border shadow-[0_0_50px_rgba(212,175,55,0.15)] group"
        >
          {/* Default Image / Overlay */}
          {!isPlaying && (
            <>
              {/* Add an image of the software dashboard here ideally */}
              <div className="absolute inset-0 bg-gradient-to-br from-background to-card z-0 flex items-center justify-center">
                 {/* Fake UI background */}
                 <div className="w-full h-full opacity-30 pointer-events-none flex p-8 gap-4">
                    <div className="w-64 bg-secondary rounded-xl hidden md:block"></div>
                    <div className="flex-1 rounded-xl flex flex-col gap-4">
                       <div className="h-20 bg-secondary rounded-xl"></div>
                       <div className="flex-1 bg-secondary rounded-xl"></div>
                    </div>
                 </div>
              </div>
              <div className="absolute inset-0 bg-black/40 z-10 flex flex-col items-center justify-center group-hover:bg-black/50 transition-colors">
                <button 
                  onClick={() => setIsPlaying(true)}
                  className="w-24 h-24 bg-[var(--color-takka-gold)] rounded-full flex items-center justify-center shadow-[0_0_40px_rgba(212,175,55,0.5)] group-hover:scale-110 group-hover:shadow-[0_0_60px_rgba(212,175,55,0.8)] transition-all duration-300"
                >
                  <Play className="w-10 h-10 text-[var(--color-takka-navy)] rtl:mr-2 ltr:ml-2" fill="currentColor" />
                </button>
              </div>
            </>
          )}

          {/* Placeholder for real video */}
          {isPlaying && (
            <div className="absolute inset-0 bg-black z-20 flex items-center justify-center text-white text-xl">
               <span className="opacity-50">في انتظار رابط الفيديو التعريفي من العميل 🎥</span>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
