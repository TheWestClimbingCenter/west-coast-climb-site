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
      { property: "og:url", content: "https://west-coast-climb-site.lovable.app/" },
      { property: "og:image", content: "https://west-coast-climb-site.lovable.app/__l5e/assets-v1/07ff4083-2a20-4368-a6ab-c588e55bcde2/hero-new.png" },
      { property: "og:image:width", content: "1920" },
      { property: "og:image:height", content: "1080" },
      { property: "og:image:alt", content: "Climber on indoor wall at The West Climbing Center" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: "https://west-coast-climb-site.lovable.app/__l5e/assets-v1/07ff4083-2a20-4368-a6ab-c588e55bcde2/hero-new.png" },
    ],
    links: [{ rel: "canonical", href: "https://west-coast-climb-site.lovable.app/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "SportsActivityLocation",
          name: "The West Climbing Center",
          description: "Indoor climbing gym in Peniche, Portugal. Bouldering, rope climbing, MoonBoard, classes and outdoor guiding.",
          url: "https://west-coast-climb-site.lovable.app/",
          image: "https://west-coast-climb-site.lovable.app/__l5e/assets-v1/07ff4083-2a20-4368-a6ab-c588e55bcde2/hero-new.png",
          telephone: "+351916871870",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Rua da Alfândega",
            postalCode: "2520-330",
            addressLocality: "Peniche",
            addressCountry: "PT",
          },
          email: "geral@thewestclimbing.com",
          sameAs: [
            "https://www.instagram.com/thewestclimbingcenter",
            "https://www.facebook.com/people/The-West-Climbing-Center/61556832601969/",
          ],
          openingHours: ["Mo-Fr 14:00-22:00", "Sa-Su 14:00-20:30"],
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [
            ["I've never climbed before. Can I come?", "Absolutely. The West welcomes complete beginners every day. Our team will guide you through a quick intro so you can start safely."],
            ["Do you rent climbing shoes?", "Yes — we rent shoes, harnesses and belay devices. Everything you need is available at reception."],
            ["How do memberships work?", "We offer day passes, multi-entry packs and monthly memberships. See full details in our pricing."],
            ["Do you offer classes?", "Yes. We run beginner courses, technique clinics and kids' classes throughout the week."],
            ["Is climbing safe?", "Safety is our top priority. All gear is industry-certified and our staff supervises the gym at all times."],
            ["Do you guide outdoor climbing?", "Yes — we run guided outdoor sessions on the west coast's best crags, for all levels."],
            ["Can I book a birthday party?", "Of course. We host parties for kids and adults — get in touch to plan your event."],
            ["What are the opening hours?", "Monday to Friday: 14:00–22:00. Saturday and Sunday: 14:00–20:30. Holidays: 14:00–20:30."],
          ].map(([q, a]) => ({
            "@type": "Question",
            name: q,
            acceptedAnswer: { "@type": "Answer", text: a },
          })),
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
