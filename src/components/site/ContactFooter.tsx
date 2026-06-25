import { Mail, MapPin, Clock, Instagram, Phone, MessageCircle } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import logoWhite from "@/assets/logo-white.png";

export function ContactFooter() {
  const { t } = useI18n();
  return (
    <footer id="contact" className="bg-navy text-white">
      <div className="container-pad py-20 sm:py-28">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          <div>
            <span className="text-xs font-bold tracking-[0.25em] text-primary uppercase">
              {t.contact.eyebrow}
            </span>
            <h2 className="mt-3 text-4xl sm:text-5xl">{t.contact.title}</h2>

            <div className="mt-10 space-y-6">
              <div className="flex gap-4">
                <Clock className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                <div>
                  <div className="text-xs uppercase tracking-widest text-white/50">{t.contact.hours}</div>
                  <div className="mt-1 text-white">{t.contact.hoursWeek}</div>
                  <div className="text-white">{t.contact.hoursWeekend}</div>
                </div>
              </div>

              <div className="flex gap-4">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                <div>
                  <div className="text-xs uppercase tracking-widest text-white/50">{t.contact.address}</div>
                  <div className="mt-1 text-white">Rua da Alfândega</div>
                  <div className="text-white">2520-330 Peniche, Portugal</div>
                </div>
              </div>

              <div className="flex gap-4">
                <Mail className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                <div>
                  <div className="text-xs uppercase tracking-widest text-white/50">{t.contact.email}</div>
                  <a href="mailto:geral@thewestclimbing.com" className="mt-1 text-white hover:text-primary block">
                    geral@thewestclimbing.com
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <Instagram className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                <div>
                  <div className="text-xs uppercase tracking-widest text-white/50">{t.contact.social}</div>
                  <div className="mt-1 flex gap-4">
                    <a href="https://www.instagram.com/" target="_blank" rel="noopener" className="text-white hover:text-primary">
                      Instagram
                    </a>
                    <a href="https://www.facebook.com/" target="_blank" rel="noopener" className="text-white hover:text-primary">
                      Facebook
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <a
              href="https://wa.me/351000000000"
              target="_blank"
              rel="noopener"
              className="mt-10 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-bold text-primary-foreground hover:brightness-110 transition"
            >
              <MessageCircle className="w-4 h-4" />
              {t.contact.whatsapp}
            </a>
          </div>

          <div className="rounded-2xl overflow-hidden border border-white/10 min-h-[360px] lg:min-h-full">
            <iframe
              title="The West Climbing Center map"
              src="https://www.google.com/maps?q=Rua+da+Alfandega+Peniche+Portugal&output=embed"
              className="w-full h-full min-h-[360px]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-pad py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <img src={logoWhite} alt="" className="h-7 w-auto opacity-80" />
            <span className="text-xs text-white/50">© {new Date().getFullYear()} The West Climbing Center. {t.footer.rights}</span>
          </div>
          <span className="text-xs text-white/40">{t.footer.credit}</span>
        </div>
      </div>

      {/* Floating WhatsApp */}
      <a
        href="https://wa.me/351000000000"
        target="_blank"
        rel="noopener"
        aria-label="WhatsApp"
        className="fixed bottom-6 right-6 z-40 w-14 h-14 rounded-full bg-primary text-primary-foreground flex items-center justify-center shadow-glow hover:scale-110 transition-transform"
      >
        <MessageCircle className="w-6 h-6" />
      </a>
    </footer>
  );
}
