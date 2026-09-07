import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X, Globe } from "lucide-react";
import { useI18n, type Lang } from "@/lib/i18n";
import logoWhite from "@/assets/logo-white.png";

interface HeaderProps {
  onOpenPricing: () => void;
}

const sections = ["home", "services", "about", "faq", "contact"] as const;

export function Header({ onOpenPricing }: HeaderProps) {
  const { lang, setLang, t } = useI18n();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const switchLang = (l: Lang) => setLang(l);

  // Lock body scroll while the mobile menu is open so the header background
  // cannot change underneath the overlay.
  useEffect(() => {
    if (open) {
      const original = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = original;
      };
    }
  }, [open]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled || open
            ? "bg-navy/90 backdrop-blur-md border-b border-white/5"
            : "bg-transparent"
        }`}
      >
        <div className="container-pad flex items-center justify-between h-24 lg:h-20">
          <Link to="/" className="flex items-center gap-2">
            <img
              src={logoWhite}
              alt="The West Climbing Center"
              className="h-20 sm:h-11 w-auto"
            />
            <span className="hidden sm:block font-display font-extrabold text-white text-sm tracking-tight leading-tight">
              THE WEST
              <span className="block text-[10px] font-semibold text-primary tracking-widest">CLIMBING CENTER</span>
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-8">
            {sections.map((s) => (
              <a
                key={s}
                href={`#${s}`}
                className="text-sm font-medium text-white/85 hover:text-primary transition-colors"
              >
                {t.nav[s]}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <div className="hidden sm:flex items-center text-xs font-semibold text-white/80 border border-white/15 rounded-full px-2 py-1">
              <Globe className="w-3.5 h-3.5 mr-1.5" />
              <button
                onClick={() => switchLang("en")}
                className={`px-1.5 transition-colors ${lang === "en" ? "text-primary" : "hover:text-white"}`}
                aria-label="English"
              >EN</button>
              <span className="text-white/30">|</span>
              <button
                onClick={() => switchLang("pt")}
                className={`px-1.5 transition-colors ${lang === "pt" ? "text-primary" : "hover:text-white"}`}
                aria-label="Português"
              >PT</button>
            </div>

            {/* Mobile language pill — left of the burger */}
            <div className="flex sm:hidden items-center rounded-full border border-white/20 bg-white/5 p-1">
              <button
                onClick={() => switchLang("en")}
                className={`px-3 py-1.5 text-xs font-bold rounded-full transition-colors ${
                  lang === "en"
                    ? "bg-primary text-primary-foreground"
                    : "text-white/70 hover:text-white"
                }`}
                aria-label="English"
              >EN</button>
              <button
                onClick={() => switchLang("pt")}
                className={`px-3 py-1.5 text-xs font-bold rounded-full transition-colors ${
                  lang === "pt"
                    ? "bg-primary text-primary-foreground"
                    : "text-white/70 hover:text-white"
                }`}
                aria-label="Português"
              >PT</button>
            </div>

            <button
              onClick={onOpenPricing}
              className="hidden md:inline-flex items-center rounded-full bg-primary px-5 py-2 text-sm font-bold text-primary-foreground hover:brightness-110 transition-all shadow-glow"
            >
              {t.nav.prices}
            </button>

            <button
              className="lg:hidden text-white p-2"
              onClick={() => setOpen((v) => !v)}
              aria-label="Menu"
            >
              {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {open && (
        <div className="lg:hidden fixed inset-0 z-[60] bg-navy flex flex-col">
          <div className="container-pad flex items-center justify-end h-24 lg:h-20 bg-navy">
            <button
              className="text-white p-2"
              onClick={() => setOpen(false)}
              aria-label="Close menu"
            >
              <X className="w-7 h-7" />
            </button>
          </div>
          <div className="flex-1 container-pad flex flex-col items-center justify-center gap-8 text-center pb-12 bg-navy">
            {sections.map((s) => (
              <a
                key={s}
                href={`#${s}`}
                onClick={() => setOpen(false)}
                className="text-2xl font-semibold text-white/90 hover:text-primary"
              >
                {t.nav[s]}
              </a>
            ))}

            <button
              onClick={() => { onOpenPricing(); setOpen(false); }}
              className="rounded-full bg-primary px-8 py-4 text-lg font-bold text-primary-foreground hover:brightness-110 transition-all shadow-glow"
            >
              {t.nav.prices}
            </button>
          </div>
        </div>
      )}
    </>
  );
}
