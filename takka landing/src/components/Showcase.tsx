import { useTranslation } from "react-i18next";
import { motion } from "motion/react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { AnimatedText } from "./AnimatedText";
import { Magnetic } from "./Magnetic";

export function Showcase() {
  const { t, i18n } = useTranslation();

  const apps = [
    {
      title: "ERP System",
      desc: "Comprehensive business management solution",
      image: "https://picsum.photos/seed/erp/800/600?blur=1"
    },
    {
      title: "E-Commerce App",
      desc: "Modern mobile shopping experience",
      image: "https://picsum.photos/seed/ecommerce/800/600?blur=1"
    },
    {
      title: "Healthcare Portal",
      desc: "Smart clinic management system",
      image: "https://picsum.photos/seed/health/800/600?blur=1"
    },
    {
      title: "Logistics Dashboard",
      desc: "Real-time tracking and analytics",
      image: "https://picsum.photos/seed/logistics/800/600?blur=1"
    }
  ];

  return (
    <section id="showcase" className="py-32 bg-background relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-full h-[500px] bg-[var(--color-takka-gold)]/5 blur-[150px] -translate-y-1/2 pointer-events-none" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-20 flex flex-col items-center"
        >
          <div className="inline-block mb-4 overflow-hidden">
            <motion.span 
              initial={{ y: "100%" }}
              whileInView={{ y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.33, 1, 0.68, 1] }}
              className="inline-block text-[var(--color-takka-gold)] font-medium tracking-widest uppercase text-sm"
            >
              {t('showcase.title')}
            </motion.span>
          </div>
          <AnimatedText text={t('showcase.title')} className="text-4xl md:text-5xl lg:text-7xl font-bold mb-6 text-foreground" delay={2} />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-6xl mx-auto"
        >
          <Carousel
            opts={{
              align: "start",
              loop: true,
              direction: i18n.language === 'ar' ? 'rtl' : 'ltr',
            }}
            className="w-full"
          >
            <CarouselContent className="-ms-4 md:-ms-6">
              {apps.map((app, index) => (
                <CarouselItem key={index} className="ps-4 md:ps-6 md:basis-1/2 lg:basis-1/2">
                  <div className="py-8"> {/* Added vertical padding for hover space */}
                    <motion.div
                      whileHover={{ y: -15, scale: 1.02 }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                      className="h-full"
                    >
                      <Card className="overflow-hidden glass-panel border-gold-glow group cursor-pointer bg-card shadow-2xl hover:shadow-[0_20px_40px_rgba(212,175,55,0.15)] transition-all duration-500 rounded-3xl h-full">
                        <CardContent className="p-0 relative aspect-[4/3] overflow-hidden">
                          <motion.img 
                            whileHover={{ scale: 1.1 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            src={app.image} 
                            alt={app.title}
                            loading="lazy"
                            className="object-cover w-full h-full filter saturate-50 group-hover:saturate-100 transition-all duration-700"
                            referrerPolicy="no-referrer"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-takka-navy)]/90 via-[var(--color-takka-navy)]/50 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-500 flex flex-col justify-end p-8 md:p-12">
                            <motion.h3 
                              initial={{ y: 20, opacity: 0 }}
                              whileInView={{ y: 0, opacity: 1 }}
                              transition={{ duration: 0.5, delay: 0.2 }}
                              className="text-3xl lg:text-4xl font-bold text-white mb-3 translate-y-4 group-hover:translate-y-0 transition-transform duration-500"
                            >
                              {app.title}
                            </motion.h3>
                            <p className="text-white/80 text-lg translate-y-4 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-100">
                              {app.desc}
                            </p>
                            
                            {/* Decorative Line that draws on hover */}
                            <div className="w-0 h-[2px] bg-[var(--color-takka-gold)] mt-6 group-hover:w-full transition-all duration-700 ease-in-out delay-150"></div>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center gap-6 mt-12 pb-12">
              <Magnetic strength={0.3}>
                <div className="hover-target">
                  <CarouselPrevious className="static translate-y-0 border-2 border-[var(--color-takka-gold)]/40 hover:bg-[var(--color-takka-gold)] hover:text-primary-foreground transition-all duration-300 h-16 w-16" />
                </div>
              </Magnetic>
              <Magnetic strength={0.3}>
                <div className="hover-target">
                  <CarouselNext className="static translate-y-0 border-2 border-[var(--color-takka-gold)]/40 hover:bg-[var(--color-takka-gold)] hover:text-primary-foreground transition-all duration-300 h-16 w-16" />
                </div>
              </Magnetic>
            </div>
          </Carousel>
        </motion.div>
      </div>
    </section>
  );
}
