import { useI18n } from "@/lib/i18n";
import gOutdoor from "@/assets/g-outdoor.jpg";
import gClass from "@/assets/g-class.jpg";
import gGym from "@/assets/g-gym.jpg";
import gBoulder from "@/assets/g-boulder.jpg";

export function About() {
  const { t } = useI18n();
  const founderImgs = [gOutdoor, gClass];

  return (
    <section id="about" className="py-24 sm:py-32 bg-background">
      <div className="container-pad">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* LEFT — masonry collage */}
          <div className="lg:col-span-6 lg:sticky lg:top-28">
            <div className="grid grid-cols-6 auto-rows-[70px] sm:auto-rows-[90px] gap-3">
              <div className="col-span-6 row-span-4 rounded-2xl overflow-hidden group">
                <img
                  src={gGym}
                  alt="Indoor climbing gym in Peniche, Portugal"
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="col-span-3 row-span-3 rounded-2xl overflow-hidden group">
                <img
                  src={gOutdoor}
                  alt="Nuno Soares, co-founder of The West Climbing Center"
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="col-span-3 row-span-3 rounded-2xl overflow-hidden group">
                <img
                  src={gClass}
                  alt="Nuno Garcia, co-founder of The West Climbing Center"
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="col-span-6 row-span-2 rounded-2xl overflow-hidden group">
                <img
                  src={gBoulder}
                  alt="Climbing lifestyle on Portugal's west coast"
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </div>
          </div>

          {/* RIGHT — editorial content */}
          <div className="lg:col-span-6 lg:pl-4">
            <span className="text-xs font-bold tracking-[0.25em] text-primary uppercase">
              {t.about.eyebrow}
            </span>
            <h2 className="mt-3 text-4xl sm:text-5xl text-foreground leading-[1.05]">
              {t.about.title}
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">{t.about.subtitle}</p>

            <div className="mt-10 space-y-5 max-w-xl">
              <p className="text-lg text-foreground/85 leading-relaxed">{t.about.p1}</p>
              <p className="text-lg text-foreground/85 leading-relaxed">{t.about.p2}</p>
              <p className="text-base text-muted-foreground leading-relaxed">{t.about.p3}</p>
            </div>

            {/* Soft divider */}
            <div className="mt-14 mb-10 h-px w-16 bg-border" />

            {/* Founders — integrated, not a new section */}
            <h3 className="text-2xl sm:text-3xl text-foreground">
              {t.about.foundersTitle}
            </h3>
            <p className="mt-3 text-base text-muted-foreground leading-relaxed max-w-xl">
              {t.about.foundersText}
            </p>

            <div className="mt-8 grid sm:grid-cols-2 gap-4 max-w-xl">
              {t.about.founders.map((f, i) => (
                <article
                  key={f.name}
                  className="group flex items-center gap-4 p-3 rounded-xl border border-border bg-card/40 transition-all hover:shadow-soft hover:border-border/80"
                >
                  <div className="h-14 w-14 shrink-0 rounded-full overflow-hidden bg-muted">
                    <img
                      src={founderImgs[i]}
                      alt={`${f.name}, ${f.role} at The West Climbing Center`}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                  <div className="min-w-0">
                    <h4 className="text-base font-display font-extrabold text-foreground truncate">
                      {f.name}
                    </h4>
                    <p className="text-xs uppercase tracking-wider text-muted-foreground mt-0.5">
                      {f.role}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
