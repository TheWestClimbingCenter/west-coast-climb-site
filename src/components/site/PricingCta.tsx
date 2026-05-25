import { useI18n } from "@/lib/i18n";
import { ArrowRight } from "lucide-react";
import hero from "@/assets/hero.jpg";

interface Props {
  onOpenPricing: () => void;
}

export function PricingCta({ onOpenPricing }: Props) {
  const { t } = useI18n();
  return (
    <section className="relative py-24 sm:py-32 overflow-hidden bg-navy text-white">
      <img
        src={hero}
        alt=""
        aria-hidden
        loading="lazy"
        className="absolute inset-0 w-full h-full object-cover opacity-25 blur-sm scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy/95 to-primary/20" />
      <div className="relative container-pad text-center max-w-3xl">
        <span className="text-xs font-bold tracking-[0.25em] text-primary uppercase">
          {t.nav.prices}
        </span>
        <h2 className="mt-4 text-4xl sm:text-6xl leading-[1.05]">
          {t.pricingCta.title}
        </h2>
        <p className="mt-5 text-lg text-white/75 max-w-xl mx-auto">
          {t.pricingCta.text}
        </p>
        <button
          onClick={onOpenPricing}
          className="group mt-9 inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-base font-bold text-primary-foreground hover:brightness-110 transition shadow-glow"
        >
          {t.pricingCta.btn}
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </section>
  );
}
