import { X } from "lucide-react";
import { useEffect } from "react";
import { useI18n } from "@/lib/i18n";

interface Props {
  open: boolean;
  onClose: () => void;
}

export function PricingModal({ open, onClose }: Props) {
  const { t } = useI18n();

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

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-navy/80 backdrop-blur-sm animate-in fade-in"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-card rounded-2xl shadow-soft"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="sticky top-0 z-10 flex items-start justify-between p-6 sm:p-8 bg-card border-b border-border">
          <div>
            <h2 className="text-2xl sm:text-3xl text-foreground">{t.pricing.title}</h2>
            <p className="text-sm text-muted-foreground mt-1">{t.pricing.subtitle}</p>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-muted transition-colors"
            aria-label={t.pricing.close}
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 sm:p-8 grid sm:grid-cols-2 gap-6">
          {t.pricing.sections.map((section) => (
            <div key={section.name} className="rounded-xl border border-border p-5">
              <h3 className="text-lg font-display font-extrabold text-foreground mb-4">
                {section.name}
              </h3>
              <ul className="space-y-2.5">
                {section.rows.map(([label, price]) => (
                  <li key={label} className="flex items-baseline justify-between gap-4 text-sm border-b border-dashed border-border last:border-0 pb-2 last:pb-0">
                    <span className="text-foreground/85">{label}</span>
                    <span className="font-bold text-primary whitespace-nowrap">{price}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p className="px-6 sm:px-8 pb-6 text-xs text-muted-foreground italic">
          {t.pricing.footnote}
        </p>
      </div>
    </div>
  );
}
