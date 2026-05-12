import { useState } from "react";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "motion/react";
import { FileText, Bell, Plus, CheckCircle, BarChart3, Users, Settings } from "lucide-react";
import { AnimatedText } from "./AnimatedText";
import { Magnetic } from "./Magnetic";

export function ProductDemo() {
  const { t } = useTranslation();
  const [isCreating, setIsCreating] = useState(false);
  const [invoiceCreated, setInvoiceCreated] = useState(false);

  const handleCreate = () => {
    setIsCreating(true);
    setTimeout(() => {
      setIsCreating(false);
      setInvoiceCreated(true);
      setTimeout(() => setInvoiceCreated(false), 3000);
    }, 1500);
  };

  return (
    <section className="py-32 bg-background relative overflow-hidden">
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-[var(--color-takka-gold)]/5 blur-[150px] -translate-y-1/2 pointer-events-none rounded-full" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <AnimatedText 
            text={t("demo.title")} 
            className="text-4xl md:text-5xl font-bold mb-6 text-foreground"
          />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto rounded-3xl border border-white/10 glass-panel overflow-hidden shadow-2xl relative"
        >
          {/* Dashboard Header Fake */}
          <div className="bg-[var(--color-takka-navy)]/80 backdrop-blur-md border-b border-white/10 p-4 flex justify-between items-center">
            <div className="flex items-center gap-2">
              <div className="flex gap-1.5 ml-4">
                <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
              </div>
            </div>
            <div className="flex items-center gap-4 text-muted-foreground mr-4 pl-4 rtl:mr-0 rtl:ml-4 rtl:pr-0 rtl:pl-4">
              <Bell className="w-5 h-5 flex-shrink-0" />
              <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center">
                <span className="text-xs font-bold text-foreground">TA</span>
              </div>
            </div>
          </div>

          <div className="flex h-[500px]">
            {/* Sidebar Fake */}
            <div className="w-64 border-l border-white/10 bg-[var(--color-takka-navy)]/40 p-6 hidden md:flex flex-col gap-6 rtl:border-l-0 rtl:border-r">
              <div className="space-y-4">
                <div className="h-10 rounded-xl bg-[var(--color-takka-gold)]/10 text-[var(--color-takka-gold)] flex items-center gap-3 px-4 font-medium">
                  <BarChart3 className="w-5 h-5" /> Dashboard
                </div>
                <div className="h-10 rounded-xl hover:bg-white/5 text-muted-foreground transition-colors flex items-center gap-3 px-4 font-medium cursor-pointer">
                  <FileText className="w-5 h-5" /> Invoices
                </div>
                <div className="h-10 rounded-xl hover:bg-white/5 text-muted-foreground transition-colors flex items-center gap-3 px-4 font-medium cursor-pointer">
                  <Users className="w-5 h-5" /> Clients
                </div>
                <div className="h-10 rounded-xl hover:bg-white/5 text-muted-foreground transition-colors flex items-center gap-3 px-4 font-medium cursor-pointer">
                  <Settings className="w-5 h-5" /> Settings
                </div>
              </div>
            </div>

            {/* Main Area Fake */}
            <div className="flex-1 p-8 md:p-12 relative flex flex-col justify-center items-center bg-gradient-to-br from-transparent to-[var(--color-takka-gold)]/5">
              <Magnetic strength={0.2}>
                <button
                  onClick={handleCreate}
                  disabled={isCreating}
                  className="interactive-btn group relative px-8 py-4 bg-[var(--color-takka-gold)] text-[var(--color-takka-navy)] rounded-2xl font-bold text-xl shadow-[0_0_40px_rgba(212,175,55,0.3)] hover:shadow-[0_0_60px_rgba(212,175,55,0.5)] transition-all duration-300 disabled:opacity-80 disabled:cursor-wait"
                >
                  <span className="flex items-center gap-3">
                    {isCreating ? (
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                      >
                        <Plus className="w-6 h-6" />
                      </motion.div>
                    ) : (
                      <Plus className="w-6 h-6 group-hover:scale-125 transition-transform" />
                    )}
                    {t("demo.createInvoice")}
                  </span>
                </button>
              </Magnetic>

              {/* Notification Popup */}
              <AnimatePresence>
                {invoiceCreated && (
                  <motion.div
                    initial={{ opacity: 0, y: 50, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -20, scale: 0.9 }}
                    className="absolute bottom-12 bg-[#25D366] text-white px-6 py-4 rounded-xl shadow-2xl flex items-center gap-4 backdrop-blur-md"
                  >
                    <CheckCircle className="w-6 h-6" />
                    <div className="text-right rtl:text-right">
                      <p className="font-bold">{t("demo.invoiceCreated")}</p>
                      <p className="text-sm opacity-90">{t("demo.total")}: $1,250.00</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
              
              {/* Decorative elements */}
              <div className="absolute top-10 right-10 flex gap-4 opacity-50">
                <div className="w-32 h-20 rounded-xl border border-white/10 bg-white/5"></div>
                <div className="w-32 h-20 rounded-xl border border-[var(--color-takka-gold)]/20 bg-[var(--color-takka-gold)]/5"></div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
