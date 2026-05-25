import { useI18n } from "@/lib/i18n";
import gBoulder from "@/assets/g-boulder.jpg";
import gRope from "@/assets/g-rope.jpg";
import gGym from "@/assets/g-gym.jpg";
import gOutdoor from "@/assets/g-outdoor.jpg";
import gClass from "@/assets/g-class.jpg";
import gMoon from "@/assets/g-moonboard.jpg";

export function Gallery() {
  const { t } = useI18n();
  const imgs = [
    { src: gGym, alt: "Climbing gym interior", cls: "md:col-span-2 md:row-span-2" },
    { src: gBoulder, alt: "Bouldering wall" },
    { src: gRope, alt: "Rope climbing" },
    { src: gOutdoor, alt: "Outdoor climbing on west coast", cls: "md:col-span-2" },
    { src: gClass, alt: "Climbing class" },
    { src: gMoon, alt: "MoonBoard training" },
  ];
  return (
    <section className="py-24 sm:py-32 bg-muted/40">
      <div className="container-pad">
        <div className="mb-12 max-w-2xl">
          <span className="text-xs font-bold tracking-[0.25em] text-primary uppercase">
            {t.gallery.eyebrow}
          </span>
          <h2 className="mt-3 text-4xl sm:text-5xl text-foreground">{t.gallery.title}</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:auto-rows-[180px]">
          {imgs.map((i, idx) => (
            <div
              key={idx}
              className={`relative overflow-hidden rounded-xl group ${i.cls ?? ""}`}
            >
              <img
                src={i.src}
                alt={i.alt}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-navy/0 group-hover:bg-navy/30 transition-colors" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
