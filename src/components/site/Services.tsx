import { useState } from "react";
import { useI18n } from "@/lib/i18n";
import {
  Mountain, GraduationCap, Trees, Dumbbell, ShoppingBag,
  PartyPopper, Backpack
} from "lucide-react";
import gBoulder from "@/assets/g-boulder.jpg";
import gClass from "@/assets/g-class.jpg";
import gOutdoor from "@/assets/g-outdoor.jpg";
import gGym from "@/assets/g-gym.jpg";
import gGear from "@/assets/g-gear.jpg";
import gMoon from "@/assets/g-moonboard.jpg";
import gRope from "@/assets/g-rope.jpg";
import gym1 from "@/assets/gym-1.jpg.asset.json";
import gym2 from "@/assets/gym-2.jpg.asset.json";
import gym3 from "@/assets/gym-3.jpg.asset.json";
import gym4 from "@/assets/gym-4.jpg.asset.json";
import moon1 from "@/assets/moon1.jpg.asset.json";
import moon2 from "@/assets/moon2.jpg.asset.json";
import gearShop1 from "@/assets/gear-shop-1.jpg.asset.json";
import gearShop2 from "@/assets/gear-shop-2.jpg.asset.json";
import gearShop3 from "@/assets/gear-shop-3.jpg.asset.json";
import gearShop5 from "@/assets/gear-shop-5.jpg.asset.json";
import { ImmersiveViewer } from "./ImmersiveViewer";

export function Services() {
  const { t } = useI18n();
  const items = t.services.items;

  const gymGallery = [gym1.url, gym2.url, gym3.url, gym4.url, moon1.url, moon2.url];
  const gearGallery = [gearShop2.url, gearShop3.url, gearShop1.url, gearShop5.url];

  const cards: Array<{
    key: keyof typeof items;
    icon: typeof Mountain;
    img: string;
    span?: string;
    gallery?: string[];
  }> = [
    { key: "indoor", icon: Mountain, img: gBoulder, span: "md:col-span-2 md:row-span-2" },
    { key: "classes", icon: GraduationCap, img: gClass },
    { key: "outdoor", icon: Trees, img: gOutdoor },
    { key: "gym", icon: Dumbbell, img: gym1.url, gallery: gymGallery },
    { key: "gear", icon: ShoppingBag, img: gearShop2.url, gallery: gearGallery },
    { key: "birthday", icon: PartyPopper, img: gMoon },
    { key: "rental", icon: Backpack, img: gRope },
  ];

  const [viewer, setViewer] = useState<{ images: string[]; alt: string } | null>(null);

  return (
    <section id="services" className="relative py-24 sm:py-32 topo-bg">
      <div className="container-pad">
        <div className="max-w-2xl mb-14">
          <span className="text-xs font-bold tracking-[0.25em] text-primary uppercase">
            {t.services.eyebrow}
          </span>
          <h2 className="mt-3 text-4xl sm:text-5xl text-foreground">{t.services.title}</h2>
          <p className="mt-4 text-lg text-muted-foreground">{t.services.subtitle}</p>
        </div>

        {/* Level indicator */}
        <div className="mb-12 rounded-2xl border border-border bg-card p-5 sm:p-6 flex flex-col sm:flex-row items-start sm:items-center gap-5 sm:gap-8">
          <p className="text-sm font-semibold text-foreground sm:max-w-[180px]">
            {t.services.levels.caption}
          </p>
          <div className="flex-1 w-full flex items-center gap-3">
            {(["beginner", "intermediate", "advanced"] as const).map((lvl, i) => (
              <div key={lvl} className="flex-1 flex items-center gap-3">
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-xs font-bold text-foreground">{t.services.levels[lvl]}</span>
                    <div className="flex gap-0.5">
                      {Array.from({ length: 3 }).map((_, j) => (
                        <Mountain
                          key={j}
                          className={`w-3 h-3 ${j <= i ? "text-primary fill-primary" : "text-border"}`}
                        />
                      ))}
                    </div>
                  </div>
                  <div className="h-1.5 rounded-full bg-muted overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-primary/60 to-primary rounded-full"
                      style={{ width: `${(i + 1) * 33.3}%`, animation: `reveal 1.2s ${i * 0.15}s ease-out both` }}
                    />
                  </div>
                </div>
                {i < 2 && <span className="text-border">→</span>}
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 md:auto-rows-[220px]">
          {cards.map(({ key, icon: Icon, img, span, gallery }) => {
            const item = items[key as keyof typeof items];
            const images = gallery ?? [img];
            return (
              <article
                key={key}
                onClick={() => setViewer({ images, alt: item.title })}
                className={`group relative overflow-hidden rounded-2xl bg-card border border-border shadow-sm hover:shadow-soft transition-all duration-500 cursor-pointer ${span ?? ""}`}
              >
                <img
                  src={img}
                  alt={item.title}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/60 to-navy/10" />
                <div className="relative h-full flex flex-col justify-end p-5 text-white min-h-[220px]">
                  <div className="w-10 h-10 rounded-xl bg-primary/90 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                    <Icon className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <h3 className="text-lg font-display font-extrabold leading-tight">{item.title}</h3>
                  <p className="mt-1.5 text-sm text-white/80 leading-snug">{item.desc}</p>
                </div>
              </article>
            );
          })}
        </div>
      </div>

      <ImmersiveViewer
        open={!!viewer}
        images={viewer?.images ?? []}
        alt={viewer?.alt ?? ""}
        onClose={() => setViewer(null)}
      />
    </section>
  );
}
