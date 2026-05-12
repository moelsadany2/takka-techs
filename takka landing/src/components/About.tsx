import { useTranslation } from "react-i18next";
import { motion, useMotionTemplate, useMotionValue, useSpring, useTransform } from "motion/react";
import { Card, CardContent } from "@/components/ui/card";
import { MonitorSmartphone, Code2, Briefcase, Palette } from "lucide-react";
import { AnimatedText } from "./AnimatedText";

const TiltCard = ({ service, index }: { service: any, index: number }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  const springConfig = { damping: 20, stiffness: 300, mass: 0.5 };
  const smoothX = useSpring(x, springConfig);
  const smoothY = useSpring(y, springConfig);

  const rotateX = useTransform(smoothY, [-0.5, 0.5], ["15deg", "-15deg"]);
  const rotateY = useTransform(smoothX, [-0.5, 0.5], ["-15deg", "15deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    
    // Normalize values between -0.5 and 0.5
    x.set(mouseX / width - 0.5);
    y.set(mouseY / height - 0.5);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: index * 0.1, duration: 0.8, ease: "easeOut" }}
      style={{ perspective: 1000 }}
      className="h-full z-10"
    >
      <motion.div
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className="h-full cursor-pointer hover-target"
      >
        <Card className="h-full glass-panel border-gold-glow group relative overflow-hidden bg-card/60 backdrop-blur-xl shadow-xl hover:shadow-[0_20px_40px_rgba(212,175,55,0.15)] transition-shadow duration-500 rounded-3xl">
          {/* Animated glow following cursor - approximate center based on spring */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" 
               style={{ background: "radial-gradient(circle at center, rgba(212,175,55,0.1) 0%, transparent 70%)" }} />
          
          <CardContent 
            style={{ transform: "translateZ(50px)" }}
            className="p-10 flex flex-col items-center text-center relative z-10 h-full justify-center"
          >
            <div className="p-6 rounded-full bg-[var(--color-takka-navy-light)] border border-white/5 text-[var(--color-takka-gold)] mb-8 shadow-[0_0_20px_rgba(212,175,55,0.15)] group-hover:scale-110 transition-transform duration-500 group-hover:shadow-[0_0_30px_rgba(212,175,55,0.3)]">
              {service.icon}
            </div>
            <h3 className="text-2xl font-bold tracking-wide text-foreground group-hover:text-[var(--color-takka-gold)] transition-colors">{service.title}</h3>
          </CardContent>
        </Card>
      </motion.div>
    </motion.div>
  );
};

export function About() {
  const { t } = useTranslation();

  const services = [
    { icon: <MonitorSmartphone className="w-10 h-10" />, title: t('services.smartSystems') },
    { icon: <Code2 className="w-10 h-10" />, title: t('services.mobileApps') },
    { icon: <Briefcase className="w-10 h-10" />, title: t('services.businessManagement') },
    { icon: <Palette className="w-10 h-10" />, title: t('services.uiux') },
  ];

  return (
    <section id="services" className="py-32 bg-background relative overflow-hidden">
       {/* Background decorative blob */}
       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-[400px] bg-[var(--color-takka-gold)]/5 blur-[150px] pointer-events-none rounded-full" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-24">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block mb-6 overflow-hidden"
          >
            <motion.span 
              initial={{ y: "100%" }}
              whileInView={{ y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="inline-block px-4 py-1.5 rounded-full border border-[var(--color-takka-gold)]/20 bg-background/50 backdrop-blur-sm text-[var(--color-takka-gold)] font-medium tracking-widest uppercase text-sm"
            >
              {t('nav.about')}
            </motion.span>
          </motion.div>
          
          <AnimatedText 
            text={t('about.title')} 
            className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 text-foreground"
          />
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-xl md:text-2xl text-muted-foreground leading-relaxed font-light"
          >
            {t('about.desc')}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          {services.map((service, index) => (
            <TiltCard key={index} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
