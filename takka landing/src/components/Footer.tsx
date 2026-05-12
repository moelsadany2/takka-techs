import { Facebook, MessageCircle, Instagram } from "lucide-react";
import { useTranslation } from "react-i18next";

export function Footer() {
  const currentYear = new Date().getFullYear();
  const { t } = useTranslation();

  return (
    <footer className="bg-background pt-16 pb-8 border-t border-border rtl:text-right ltr:text-left">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 border-b border-border pb-8 mb-8">
           
           {/* Branding */}
           <div className="flex flex-col md:items-start items-center gap-4 text-center ltr:md:text-left rtl:md:text-right">
              <div className="flex items-center gap-3 select-none">
                <img src="/logo.png" alt="Takka Logo" className="h-12 w-auto object-contain rounded-xl shadow-lg border border-border/50" />
              </div>
              <p className="text-muted-foreground text-sm max-w-xs">{t('footer.desc')}</p>
           </div>
           
           {/* Links */}
           <div className="flex flex-wrap justify-center gap-8 text-sm font-medium text-foreground/80">
              <a href="#" className="hover:text-[var(--color-takka-gold)] transition-colors">{t('footer.links.privacy')}</a>
              <a href="#" className="hover:text-[var(--color-takka-gold)] transition-colors">{t('footer.links.terms')}</a>
              <a href="https://wa.me/201037230660" target="_blank" className="hover:text-[var(--color-takka-gold)] transition-colors flex items-center gap-1"><MessageCircle size={14}/> {t('footer.links.sales')}</a>
           </div>

           {/* Socials */}
           <div className="flex gap-4">
               <a href="https://www.facebook.com/profile.php?id=61574502873321" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-[#1877F2] hover:text-white transition-colors border border-border">
                 <Facebook size={18} />
               </a>
               <a href="https://www.instagram.com/takka_techs/" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-gradient-to-tr hover:from-[#f09433] hover:via-[#dc2743] hover:to-[#bc1888] hover:text-white transition-colors border border-border">
                 <Instagram size={18} />
               </a>
               <a href="https://wa.me/201037230660" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-[#25D366] hover:text-white transition-colors border border-border">
                 <MessageCircle size={18} />
               </a>
           </div>
        </div>
        
        <div className="text-center text-sm text-muted-foreground flex flex-col md:flex-row items-center justify-center gap-2">
          <span>&copy; {currentYear} {t('footer.copy')}</span>
          <span className="hidden md:inline">|</span>
          <span className="flex items-center gap-1">{t('footer.made')} <span className="text-red-500 text-lg leading-none">♥</span> {t('footer.egypt')}</span>
        </div>
      </div>
    </footer>
  );
}
