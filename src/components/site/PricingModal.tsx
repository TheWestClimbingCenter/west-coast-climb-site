import { X, PartyPopper } from "lucide-react";
import { useEffect, useState } from "react";
import { useI18n } from "@/lib/i18n";

interface Props {
  open: boolean;
  onClose: () => void;
}

type TabKey = "indoor" | "outdoor" | "rentals";

type Section = {
  name: string;
  note?: string;
  rows: string[][];
};

export function PricingModal({ open, onClose }: Props) {
  const { t } = useI18n();
  const [tab, setTab] = useState<TabKey>("indoor");

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  if (!open) return null;

  const sections: Section[] = (t.pricing[tab] as Section[]) ?? [];
  const hasDeposits = tab === "rentals";

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center sm:p-4 bg-navy/85 backdrop-blur-md animate-in fade-in"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="relative w-full sm:max-w-3xl h-full sm:h-auto sm:max-h-[92vh] flex flex-col overflow-hidden bg-navy text-white sm:rounded-2xl shadow-soft border border-white/10"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="relative p-6 sm:p-8 pb-4 border-b border-white/10 bg-gradient-to-b from-white/[0.04] to-transparent">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full hover:bg-white/10 transition-colors"
            aria-label={t.pricing.close}
          >
            <X className="w-5 h-5" />
          </button>
          <span className="text-[11px] font-bold tracking-[0.25em] text-primary uppercase">
            {t.nav.prices}
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-display font-extrabold leading-tight">
            {t.pricing.title}
          </h2>
          <p className="text-sm text-white/60 mt-1.5">{t.pricing.subtitle}</p>
        </div>

        {/* Sticky Tabs */}
        <div className="sticky top-0 z-10 px-4 sm:px-8 py-3 bg-navy/95 backdrop-blur border-b border-white/10">
          <div className="inline-flex w-full sm:w-auto p-1 bg-white/5 rounded-full border border-white/10">
            {(Object.keys(t.pricing.tabs) as TabKey[]).map((k) => (
              <button
                key={k}
                onClick={() => setTab(k)}
                className={`flex-1 sm:flex-none px-5 py-2 text-sm font-bold rounded-full transition-all ${
                  tab === k
                    ? "bg-primary text-primary-foreground shadow-glow"
                    : "text-white/70 hover:text-white"
                }`}
              >
                {t.pricing.tabs[k]}
              </button>
            ))}
          </div>
        </div>

        {/* Body */}
        <div className="flex-1 overflow-y-auto px-4 sm:px-8 py-6 space-y-6">
          {sections.map((section) => (
            <section
              key={section.name}
              className="rounded-xl border border-white/10 bg-white/[0.03] p-5 sm:p-6 animate-in fade-in"
            >
              <h3 className="text-lg sm:text-xl font-display font-extrabold text-white mb-1">
                {section.name}
              </h3>
              {section.note && (
                <p className="text-xs text-white/55 italic mb-3">{section.note}</p>
              )}
              <ul className="mt-3 divide-y divide-white/10">
                {section.rows.map((row, i) => {
                  const [label, price, deposit] = row;
                  return (
                    <li
                      key={i}
                      className="flex items-baseline justify-between gap-4 py-3 text-sm"
                    >
                      <span className="text-white/85 flex-1">{label}</span>
                      <div className="text-right whitespace-nowrap">
                        <span className="font-bold text-primary text-base">{price}</span>
                        {hasDeposits && deposit && (
                          <span className="block text-[11px] text-white/50 mt-0.5">
                            {deposit}
                          </span>
                        )}
                      </div>
                    </li>
                  );
                })}
              </ul>
            </section>
          ))}

          {/* Birthday — pricing on request */}
          <section className="rounded-xl border border-primary/30 bg-gradient-to-br from-primary/10 to-transparent p-5 sm:p-6 flex items-start gap-4">
            <div className="shrink-0 w-11 h-11 rounded-full bg-primary/20 flex items-center justify-center">
              <PartyPopper className="w-5 h-5 text-primary" />
            </div>
            <div>
              <h3 className="text-lg font-display font-extrabold text-white">
                {t.pricing.birthday.title}
              </h3>
              <p className="text-sm text-white/70 mt-1">{t.pricing.birthday.text}</p>
            </div>
          </section>

          <p className="pt-2 text-xs text-white/45 italic text-center">
            {t.pricing.footnote}
          </p>
        </div>
      </div>
    </div>
  );
}
