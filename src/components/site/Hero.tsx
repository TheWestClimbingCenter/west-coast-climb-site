import { useI18n } from "@/lib/i18n";
import { ArrowRight, MapPin } from "lucide-react";
import hero from "@/assets/hero.jpg";

interface Props {
  onOpenPricing: () => void;
}

export function Hero({ onOpenPricing }: Props) {
  const { t } = useI18n();
  return (
    <section id="home" className="relative min-h-[100svh] flex items-end overflow-hidden">
      <img
        src={hero}
        alt="Climber on indoor wall at The West Climbing Center"
        className="absolute inset-0 w-full h-full object-cover scale-105"
        width={1920}
        height={1080}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-navy/40 via-navy/60 to-navy" />
      <div className="absolute inset-0 bg-gradient-to-r from-navy/70 via-transparent to-transparent" />

      <div className="relative container-pad pb-20 sm:pb-28 pt-32 text-white">
        <div className="max-w-3xl">
          <span className="reveal inline-flex items-center gap-2 text-xs font-bold tracking-[0.25em] text-primary uppercase mb-5">
            <span className="w-8 h-px bg-primary" />
            Peniche · Portugal
          </span>
          <h1 className="reveal reveal-delay-1 text-5xl sm:text-7xl lg:text-8xl font-extrabold leading-[0.95] tracking-tighter">
            {t.hero.title.split(" ").slice(0, 2).join(" ")}
            <br />
            <span className="text-primary">{t.hero.title.split(" ").slice(2).join(" ")}</span>
          </h1>
          <p className="reveal reveal-delay-2 mt-6 text-lg sm:text-xl text-white/85 max-w-xl">
            {t.hero.subtitle}
          </p>
          <div className="reveal reveal-delay-3 mt-9 flex flex-wrap gap-3">
            <button
              onClick={onOpenPricing}
              className="group inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-bold text-primary-foreground hover:brightness-110 transition shadow-glow"
            >
              {t.hero.ctaPrices}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/5 backdrop-blur-sm px-7 py-3.5 text-sm font-bold text-white hover:bg-white/10 transition"
            >
              <MapPin className="w-4 h-4" />
              {t.hero.ctaVisit}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
