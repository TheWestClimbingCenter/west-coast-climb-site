import { useI18n } from "@/lib/i18n";
import aboutMain from "@/assets/about-main.jpg.asset.json";
import nunoSoares from "@/assets/nuno-soares.jpg.asset.json";
import nunoGarcia from "@/assets/nuno-garcia.jpg.asset.json";

export function About() {
  const { t } = useI18n();

  return (
    <section id="about" className="py-24 sm:py-32 bg-background">
      <div className="container-pad">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* LEFT — image grid only */}
          <div className="lg:col-span-6 lg:sticky lg:top-28">
            <div className="grid grid-cols-2 auto-rows-[120px] sm:auto-rows-[150px] gap-3">
              <div className="col-span-2 row-span-3 rounded-2xl overflow-hidden group">
                <img
                  src={aboutMain.url}
                  alt="Indoor climbing gym in Peniche, Portugal"
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="row-span-2 rounded-2xl overflow-hidden group">
                <img
                  src={nunoSoares.url}
                  alt="Nuno Soares, co-founder of The West Climbing Center"
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="row-span-2 rounded-2xl overflow-hidden group">
                <img
                  src={nunoGarcia.url}
                  alt="Nuno Garcia, co-founder of The West Climbing Center"
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </div>
          </div>

          {/* RIGHT — text only */}
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
              <p className="text-lg text-foreground/85 leading-relaxed">{t.about.p3}</p>
              <p className="text-base text-muted-foreground leading-relaxed">{t.about.p4}</p>
            </div>

            <div className="mt-16 max-w-xl">
              {t.about.foundersTitle && (
                <h3 className="text-2xl sm:text-3xl text-foreground">
                  {t.about.foundersTitle}
                </h3>
              )}
              <p className="mt-4 text-lg text-foreground/85 leading-relaxed">
                {t.about.foundersText}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
