import { useState } from "react";
import { Plus } from "lucide-react";
import { useI18n } from "@/lib/i18n";

export function Faq() {
  const { t } = useI18n();
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="py-24 sm:py-32 bg-muted/40">
      <div className="container-pad max-w-3xl">
        <div className="mb-12 text-center">
          <span className="text-xs font-bold tracking-[0.25em] text-primary uppercase">
            {t.faq.eyebrow}
          </span>
          <h2 className="mt-3 text-4xl sm:text-5xl text-foreground">{t.faq.title}</h2>
        </div>
        <div className="space-y-3">
          {t.faq.items.map((item, i) => {
            const isOpen = open === i;
            return (
              <div
                key={i}
                className="rounded-xl bg-card border border-border overflow-hidden transition-all"
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-4 p-5 text-left"
                >
                  <span className="font-semibold text-foreground">{item.q}</span>
                  <Plus className={`w-5 h-5 text-primary flex-shrink-0 transition-transform ${isOpen ? "rotate-45" : ""}`} />
                </button>
                <div
                  className={`grid transition-all duration-300 ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
                >
                  <div className="overflow-hidden">
                    <p className="px-5 pb-5 text-muted-foreground leading-relaxed">{item.a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
