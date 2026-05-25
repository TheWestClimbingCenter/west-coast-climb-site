import { useI18n } from "@/lib/i18n";
import gOutdoor from "@/assets/g-outdoor.jpg";
import gClass from "@/assets/g-class.jpg";
import gGym from "@/assets/g-gym.jpg";

export function About() {
  const { t } = useI18n();
  const founderImgs = [gOutdoor, gClass];
  return (
    <section id="about" className="py-24 sm:py-32 bg-background">
      <div className="container-pad">
        {/* Header */}
        <div className="max-w-3xl">
          <span className="text-xs font-bold tracking-[0.25em] text-primary uppercase">
            {t.about.eyebrow}
          </span>
          <h2 className="mt-3 text-4xl sm:text-5xl text-foreground">{t.about.title}</h2>
          <p className="mt-4 text-lg text-muted-foreground">{t.about.subtitle}</p>
        </div>

        {/* Split: image collage + body */}
        <div className="mt-14 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="relative grid grid-cols-5 grid-rows-6 gap-3 h-[460px] sm:h-[560px]">
            <div className="col-span-3 row-span-4 rounded-2xl overflow-hidden group">
              <img
                src={gGym}
                alt="Indoor climbing gym in Peniche, Portugal"
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div className="col-span-2 row-span-3 col-start-4 rounded-2xl overflow-hidden group">
              <img
                src={gClass}
                alt="Climbing community and classes at The West"
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div className="col-span-2 row-span-2 col-start-1 row-start-5 rounded-2xl bg-navy text-white p-5 flex flex-col justify-center">
              <span className="text-3xl font-display font-extrabold text-primary">Peniche</span>
              <span className="text-xs uppercase tracking-widest text-white/60 mt-1">
                West Coast · Portugal
              </span>
            </div>
            <div className="col-span-3 row-span-3 col-start-3 row-start-4 rounded-2xl overflow-hidden group">
              <img
                src={gOutdoor}
                alt="Outdoor climbing on Portugal's west coast"
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          </div>

          <div className="space-y-5">
            <p className="text-lg text-muted-foreground leading-relaxed">{t.about.p1}</p>
            <p className="text-lg text-muted-foreground leading-relaxed">{t.about.p2}</p>
            <p className="text-base text-muted-foreground leading-relaxed">{t.about.p3}</p>

            <div className="pt-6 grid grid-cols-2 sm:grid-cols-4 gap-6 border-t border-border">
              {t.about.stats.map((s) => (
                <div key={s.label} className="pt-4">
                  <div className="text-3xl sm:text-4xl font-display font-extrabold text-foreground">
                    {s.value}
                  </div>
                  <div className="text-xs uppercase tracking-wider text-muted-foreground mt-1">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Founders */}
        <div className="mt-24 sm:mt-32">
          <div className="max-w-2xl">
            <span className="text-xs font-bold tracking-[0.25em] text-primary uppercase">
              {t.about.eyebrow}
            </span>
            <h3 className="mt-3 text-3xl sm:text-4xl text-foreground">
              {t.about.foundersTitle}
            </h3>
            <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
              {t.about.foundersText}
            </p>
          </div>

          <div className="mt-10 grid sm:grid-cols-2 gap-6 max-w-3xl">
            {t.about.founders.map((f, i) => (
              <article
                key={f.name}
                className="group relative overflow-hidden rounded-2xl border border-border bg-card transition-shadow hover:shadow-soft"
              >
                <div className="aspect-[4/5] overflow-hidden bg-muted">
                  <img
                    src={founderImgs[i]}
                    alt={`${f.name}, ${f.role} at The West Climbing Center`}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-5">
                  <h4 className="text-xl font-display font-extrabold text-foreground">
                    {f.name}
                  </h4>
                  <p className="text-sm text-muted-foreground mt-1">{f.role}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
