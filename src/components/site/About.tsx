import { useI18n } from "@/lib/i18n";
import gOutdoor from "@/assets/g-outdoor.jpg";
import gGym from "@/assets/g-gym.jpg";

export function About() {
  const { t } = useI18n();
  return (
    <section id="about" className="py-24 sm:py-32">
      <div className="container-pad grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <div className="relative grid grid-cols-5 grid-rows-6 gap-3 h-[460px] sm:h-[560px]">
          <div className="col-span-3 row-span-4 rounded-2xl overflow-hidden">
            <img src={gOutdoor} alt="West coast climbing" loading="lazy" className="w-full h-full object-cover" />
          </div>
          <div className="col-span-2 row-span-3 col-start-4 rounded-2xl overflow-hidden">
            <img src={gGym} alt="Inside the gym" loading="lazy" className="w-full h-full object-cover" />
          </div>
          <div className="col-span-2 row-span-2 col-start-1 row-start-5 rounded-2xl bg-navy text-white p-5 flex flex-col justify-center">
            <span className="text-3xl font-display font-extrabold text-primary">Peniche</span>
            <span className="text-xs uppercase tracking-widest text-white/60 mt-1">West Coast · Portugal</span>
          </div>
          <div className="col-span-3 row-span-3 col-start-3 row-start-4 rounded-2xl overflow-hidden">
            <img src={gOutdoor} alt="" loading="lazy" className="w-full h-full object-cover" />
          </div>
        </div>

        <div>
          <span className="text-xs font-bold tracking-[0.25em] text-primary uppercase">
            {t.about.eyebrow}
          </span>
          <h2 className="mt-3 text-4xl sm:text-5xl text-foreground">{t.about.title}</h2>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">{t.about.p1}</p>
          <p className="mt-4 text-lg text-muted-foreground leading-relaxed">{t.about.p2}</p>

          <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-6">
            {t.about.stats.map((s) => (
              <div key={s.label}>
                <div className="text-3xl sm:text-4xl font-display font-extrabold text-foreground">{s.value}</div>
                <div className="text-xs uppercase tracking-wider text-muted-foreground mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
