import { motion } from "motion/react";
import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

export function Testimonials() {
  const testimonials = [
    {
      text: "السيستم الصراحة سهل جداً وبسيط وفر عليا مجهود جرد كل شوية، وميزة الباركود فرقت معايا في المبيعات وتوفير الوقت جداً.",
      name: "أحمد سيد",
      role: "صاحب سنتر موبايلات",
    },
    {
      text: "أكثر حاجة عجبتني إن قسم الصيانة منفصل ومنظم وشاشة الفنيين مريحة.. عرفت أحكم الشغل وأتابع كل جهاز حالته إيه وهو فين.",
      name: "محمود حسن",
      role: "مدير صيانة",
    },
    {
      text: "بعد ما نقلت على النظام بتاعكم وأنا مستريح.. الربط بين فرع التجمع وفرع مدينة نصر شغال ممتاز، والتقارير بتطلع بشكل دقيق ومحترم.",
      name: "كريم ممدوح",
      role: "مؤسس سلسلة محلات",
    }
  ];

  return (
    <section id="testimonials" className="py-32 bg-secondary/10 relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-96 bg-[var(--color-takka-gold)]/5 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-block mb-4">
            <span className="text-[var(--color-takka-gold)] font-medium tracking-widest uppercase text-sm">
              آراء عملائنا
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">قالوا إيه عن سيستم تكّة</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full glass-panel border-gold-glow bg-card relative overflow-hidden group">
                <div className="absolute top-0 left-0 w-1 h-full bg-[var(--color-takka-gold)] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <CardContent className="p-10">
                  <Quote className="w-10 h-10 text-[var(--color-takka-gold)]/40 mb-8" />
                  <p className="text-lg text-muted-foreground mb-10 leading-relaxed font-light italic">
                    "{testimonial.text}"
                  </p>
                  <div>
                    <h4 className="font-bold text-lg text-foreground tracking-wide">{testimonial.name}</h4>
                    <p className="text-sm text-[var(--color-takka-gold)] mt-1">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
