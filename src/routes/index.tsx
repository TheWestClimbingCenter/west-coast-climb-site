import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { I18nProvider } from "@/lib/i18n";
import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { Services } from "@/components/site/Services";
import { PricingCta } from "@/components/site/PricingCta";

import { About } from "@/components/site/About";
import { Faq } from "@/components/site/Faq";
import { ContactFooter } from "@/components/site/ContactFooter";
import { PricingModal } from "@/components/site/PricingModal";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "The West Climbing Center — Indoor Climbing Gym in Peniche, Portugal" },
      {
        name: "description",
        content:
          "The West Climbing Center — indoor climbing, bouldering, rope climbing, MoonBoard, classes and outdoor guiding on Portugal's west coast in Peniche.",
      },
      { property: "og:title", content: "The West Climbing Center — Indoor Climbing in Peniche" },
      { property: "og:description", content: "Indoor & outdoor climbing on Portugal's west coast. Boulder, ropes, classes and community in Peniche." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "SportsActivityLocation",
          name: "The West Climbing Center",
          description: "Indoor climbing gym in Peniche, Portugal. Bouldering, rope climbing, MoonBoard, classes and outdoor guiding.",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Rua da Alfândega",
            postalCode: "2520-330",
            addressLocality: "Peniche",
            addressCountry: "PT",
          },
          email: "geral@thewestclimbing.com",
          openingHours: ["Mo-Fr 14:00-22:00", "Sa-Su 14:00-20:30"],
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  const [pricingOpen, setPricingOpen] = useState(false);
  return (
    <I18nProvider>
      <div className="min-h-screen bg-background">
        <Header onOpenPricing={() => setPricingOpen(true)} />
        <main>
          <Hero onOpenPricing={() => setPricingOpen(true)} />
          <Services />
          <PricingCta onOpenPricing={() => setPricingOpen(true)} />
          
          <About />
          <Faq />
        </main>
        <ContactFooter />
        <PricingModal open={pricingOpen} onClose={() => setPricingOpen(false)} />
      </div>
    </I18nProvider>
  );
}
