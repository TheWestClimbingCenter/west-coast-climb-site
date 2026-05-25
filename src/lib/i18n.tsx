import { createContext, useContext, useEffect, useState, ReactNode } from "react";

export type Lang = "en" | "pt";

type Dict = (typeof translations)["en"];

export const translations = {
  en: {
    nav: { home: "Home", services: "Services", about: "About", faq: "FAQ", contact: "Contact", prices: "Prices" },
    hero: {
      title: "The West Climbing Center",
      subtitle: "The indoor climbing center of Portugal's west coast",
      ctaPrices: "View Prices",
      ctaVisit: "Visit Us",
    },
    services: {
      eyebrow: "What we offer",
      title: "Climb your way",
      subtitle: "From your first hold to your hardest project — we've built the space for it.",
      levels: { beginner: "Beginner", intermediate: "Intermediate", advanced: "Advanced", caption: "Routes & classes for every level" },
      items: {
        indoor: { title: "Indoor Climbing", desc: "Boulder, rope routes, auto-belays and our MoonBoard — all under one roof." },
        classes: { title: "Classes", desc: "Beginner-friendly intros and ongoing coaching for experienced climbers." },
        outdoor: { title: "Outdoor Climbing", desc: "Guided sessions and outdoor classes on Portugal's west coast crags." },
        gym: { title: "Gym Area", desc: "Strength, hangboards and a dedicated training zone to level up." },
        gear: { title: "Gear Shop", desc: "Physical shop with shoes, harnesses, chalk and essentials — no online store." },
        birthday: { title: "Birthday Parties", desc: "Unforgettable parties for kids and adults, fully supervised by our team." },
        rental: { title: "Rental Equipment", desc: "Shoes, harness and belay devices — everything you need to start today." },
      },
    },
    pricingCta: {
      title: "Ready to Start Climbing?",
      text: "Discover memberships, day passes, rentals and class pricing.",
      btn: "View Prices",
    },
    gallery: { eyebrow: "Inside The West", title: "A space built for climbers" },
    about: {
      eyebrow: "About us",
      title: "About The West Climbing Center",
      subtitle: "Indoor climbing in the heart of Portugal's west coast — Peniche.",
      p1: "The West Climbing Center is your destination to experience indoor climbing on Portugal's west coast. We believe climbing is more than a sport — it's a lifestyle. From first-timers to seasoned climbers, our routes and boulders welcome every level and every age.",
      p2: "What sets us apart is our commitment to safety, community and fun. Our team of passionate climbers creates a welcoming environment where you can push your limits, learn new skills and build lasting friendships.",
      p3: "Safety is our top priority — modern systems, certified gear and industry-leading standards. We run beginner classes and continuous support for advanced climbers. Because climbing isn't only about reaching the top — it's about the journey, the challenge, and the community that comes with it.",
      foundersTitle: "Founded by climbers, for climbers",
      foundersText: "The West was founded by two passionate climbers with a shared vision: build a strong climbing community on Portugal's west coast, combining high-quality indoor climbing with a welcoming, inclusive space for all levels.",
      founders: [
        { name: "Nuno Soares", role: "Co-founder" },
        { name: "Nuno Garcia", role: "Co-founder" },
      ],
      stats: [
        { value: "1500+", label: "Members" },
        { value: "12m", label: "Wall height" },
        { value: "200+", label: "Routes & boulders" },
        { value: "7", label: "Years climbing" },
      ],
    },

    faq: {
      eyebrow: "Good to know",
      title: "Frequently asked questions",
      items: [
        { q: "I've never climbed before. Can I come?", a: "Absolutely. The West welcomes complete beginners every day. Our team will guide you through a quick intro so you can start safely." },
        { q: "Do you rent climbing shoes?", a: "Yes — we rent shoes, harnesses and belay devices. Everything you need is available at reception." },
        { q: "How do memberships work?", a: "We offer day passes, multi-entry packs and monthly memberships. See full details in our pricing." },
        { q: "Do you offer classes?", a: "Yes. We run beginner courses, technique clinics and kids' classes throughout the week." },
        { q: "Is climbing safe?", a: "Safety is our top priority. All gear is industry-certified and our staff supervises the gym at all times." },
        { q: "Do you guide outdoor climbing?", a: "Yes — we run guided outdoor sessions on the west coast's best crags, for all levels." },
        { q: "Can I book a birthday party?", a: "Of course. We host parties for kids and adults — get in touch to plan your event." },
        { q: "What are the opening hours?", a: "Monday to Friday: 14:00–22:00. Saturday and Sunday: 14:00–20:30." },
      ],
    },
    contact: {
      eyebrow: "Find us",
      title: "Come climb with us",
      hours: "Opening hours",
      hoursWeek: "Mon – Fri: 14:00 – 22:00",
      hoursWeekend: "Sat – Sun: 14:00 – 20:30",
      address: "Address",
      email: "Email",
      social: "Follow us",
      whatsapp: "WhatsApp us",
    },
    pricing: {
      title: "Pricing",
      subtitle: "Indoor, outdoor and rental equipment — straight from the gym.",
      close: "Close",
      footnote: "Prices may be subject to change. For up-to-date pricing, contact us directly.",
      tabs: { indoor: "Indoor", outdoor: "Outdoor", rentals: "Rentals" },
      birthday: { title: "Birthday Parties", text: "Pricing on request — contact us to plan your event." },
      indoor: [
        {
          name: "Day Pass",
          rows: [
            ["Adult", "€11"],
            ["Student", "€9.90"],
            ["Child", "€8.90"],
            ["Pack 10 + 1", "€89.90"],
          ],
        },
        {
          name: "Monthly Membership",
          rows: [
            ["Adult", "€45"],
            ["Student", "€39.90"],
            ["Child", "€35.90"],
            ["Family (3 persons or more)", "€35.90 / person"],
          ],
        },
        {
          name: "Lessons",
          rows: [
            ["1 Person (1 hour)", "€35"],
            ["2 People (1 hour)", "€30 / person"],
            ["3 People (1 hour)", "€25 / person"],
            ["4 People (2 hours)", "€20 / person"],
          ],
        },
      ],
      outdoor: [
        {
          name: "Outdoor Climbing with Guide",
          rows: [
            ["1 Person with gear included", "€49"],
            ["1 Person without gear", "€45"],
            ["1 Person with membership or without gear included", "€45"],
            ["More than 4 people with gear included", "€40 / person"],
          ],
        },
      ],
      rentals: [
        {
          name: "Indoor Rental Equipment",
          rows: [
            ["Climbing Shoes", "€4"],
            ["Harness", "€4"],
            ["Rope", "€4"],
            ["Belay Device (Gri-Gri)", "€3"],
            ["Chalk Bag", "€2"],
          ],
        },
        {
          name: "Outdoor Rental Equipment",
          note: "Cash deposit required for each item — refunded on gear return.",
          rows: [
            ["Climbing Shoes", "€12", "€50 deposit"],
            ["Harness", "€8", "€25 deposit"],
            ["Rope", "€15", "€90 deposit"],
            ["Belay Device (Gri-Gri)", "€10", "€50 deposit"],
            ["Helmet", "€6", "€20 deposit"],
            ["6 / 12 Quickdraws", "€18 / €28", "€70 / €100 deposit"],
            ["Lock Carabiner", "€4", "€20 deposit"],
            ["All Gear (complete set)", "€73 / €82", "€300 deposit"],
          ],
        },
      ],
    },

    footer: { credit: "Design & Programming by Marita.R", rights: "All rights reserved." },
  },
  pt: {
    nav: { home: "Início", services: "Serviços", about: "Sobre", faq: "FAQ", contact: "Contacto", prices: "Preços" },
    hero: {
      title: "The West Climbing Center",
      subtitle: "O centro de escalada indoor da zona oeste!",
      ctaPrices: "Ver Preços",
      ctaVisit: "Visita-nos",
    },
    services: {
      eyebrow: "O que oferecemos",
      title: "Escala à tua maneira",
      subtitle: "Do primeiro agarro ao teu projecto mais difícil — temos o espaço certo.",
      levels: { beginner: "Iniciante", intermediate: "Intermédio", advanced: "Avançado", caption: "Vias e aulas para todos os níveis" },
      items: {
        indoor: { title: "Escalada Indoor", desc: "Boulder, vias de corda, auto-belays e o nosso MoonBoard — tudo no mesmo espaço." },
        classes: { title: "Aulas", desc: "Aulas para iniciantes e treino contínuo para escaladores experientes." },
        outdoor: { title: "Escalada Outdoor", desc: "Sessões guiadas e aulas outdoor nas falésias da zona oeste." },
        gym: { title: "Zona de Ginásio", desc: "Força, hangboards e zona de treino dedicada para evoluíres." },
        gear: { title: "Loja de Material", desc: "Loja física com sapatos, arneses, magnésio e essenciais — sem loja online." },
        birthday: { title: "Festas de Aniversário", desc: "Festas inesquecíveis para crianças e adultos, sempre supervisionadas." },
        rental: { title: "Aluguer de Material", desc: "Sapatos, arnês e descensores — tudo o que precisas para começar hoje." },
      },
    },
    pricingCta: {
      title: "Pronto para começar a escalar?",
      text: "Descobre preços de entradas, mensalidades, alugueres e aulas.",
      btn: "Ver Preços",
    },
    gallery: { eyebrow: "Por dentro do The West", title: "Um espaço feito para escaladores" },
    about: {
      eyebrow: "A nossa história",
      title: "Nascidos na zona oeste, feitos para a comunidade",
      p1: "Localizados em Peniche, o The West é mais do que um ginásio — é um ponto de encontro para escaladores de todos os níveis. Acreditamos que a escalada é um estilo de vida, e construímos um espaço que reflecte isso: paredes altas, boulders modernos e uma comunidade que se desafia.",
      p2: "Da tua primeira tentativa ao teu projecto mais difícil, a nossa equipa de escaladores apaixonados está aqui. Segurança, progressão e bom ambiente — em cada sessão.",
      stats: [
        { value: "1500+", label: "Membros" },
        { value: "12m", label: "Altura da parede" },
        { value: "200+", label: "Vias e boulders" },
        { value: "7", label: "Anos a escalar" },
      ],
    },
    faq: {
      eyebrow: "Bom saber",
      title: "Perguntas frequentes",
      items: [
        { q: "Nunca escalei. Posso ir?", a: "Claro. O The West recebe iniciantes todos os dias. A nossa equipa faz uma introdução rápida para começares em segurança." },
        { q: "Alugam sapatos de escalada?", a: "Sim — alugamos sapatos, arneses e descensores. Tudo o que precisas está disponível na recepção." },
        { q: "Como funcionam as mensalidades?", a: "Temos entradas diárias, packs de várias entradas e mensalidades. Vê todos os detalhes nos nossos preços." },
        { q: "Têm aulas?", a: "Sim. Temos cursos para iniciantes, clínicas de técnica e aulas para crianças durante a semana." },
        { q: "A escalada é segura?", a: "A segurança é a nossa prioridade. Todo o material é certificado e a nossa equipa supervisiona o ginásio sempre." },
        { q: "Guiam escalada outdoor?", a: "Sim — fazemos sessões guiadas nas melhores falésias da zona oeste, para todos os níveis." },
        { q: "Posso marcar uma festa de aniversário?", a: "Claro. Fazemos festas para crianças e adultos — contacta-nos para planear o teu evento." },
        { q: "Qual o horário?", a: "Segunda a Sexta: 14:00–22:00. Sábado e Domingo: 14:00–20:30." },
      ],
    },
    contact: {
      eyebrow: "Encontra-nos",
      title: "Vem escalar connosco",
      hours: "Horário",
      hoursWeek: "Seg – Sex: 14:00 – 22:00",
      hoursWeekend: "Sáb – Dom: 14:00 – 20:30",
      address: "Morada",
      email: "Email",
      social: "Segue-nos",
      whatsapp: "Envia WhatsApp",
    },
    pricing: {
      title: "Preços",
      subtitle: "Indoor, outdoor e aluguer de material — directamente do ginásio.",
      close: "Fechar",
      footnote: "Preços sujeitos a alteração. Para preços actualizados, contacta-nos directamente.",
      tabs: { indoor: "Indoor", outdoor: "Outdoor", rentals: "Aluguer" },
      birthday: { title: "Festas de Aniversário", text: "Preço sob consulta — contacta-nos para planear o teu evento." },
      indoor: [
        {
          name: "Entrada Diária",
          rows: [
            ["Adulto", "€11"],
            ["Estudante", "€9,90"],
            ["Infantil", "€8,90"],
            ["Pack 10 + 1", "€89,90"],
          ],
        },
        {
          name: "Mensalidade",
          rows: [
            ["Adulto", "€45"],
            ["Estudante", "€39,90"],
            ["Infantil", "€35,90"],
            ["Família (3 elementos ou mais)", "€35,90 / pax"],
          ],
        },
        {
          name: "Aulas",
          rows: [
            ["1 Pessoa (1 hora)", "€35"],
            ["2 Pessoas (1 hora)", "€30 / pax"],
            ["3 Pessoas (1 hora)", "€25 / pax"],
            ["4 Pessoas (2 horas)", "€20 / pax"],
          ],
        },
      ],
      outdoor: [
        {
          name: "Escalada em Rocha com Guia",
          rows: [
            ["1 Pessoa com material incluído", "€49"],
            ["1 Pessoa sem material", "€45"],
            ["1 Pessoa com mensalidade ou sem material incluído", "€45"],
            ["Mais de 4 pessoas com material incluído", "€40 / pax"],
          ],
        },
      ],
      rentals: [
        {
          name: "Aluguer de Material Indoor",
          rows: [
            ["Pés de Gato", "€4"],
            ["Arnês", "€4"],
            ["Corda", "€4"],
            ["Aparelho de Segurança Gri-Gri", "€3"],
            ["Bolsa de Magnésio", "€2"],
          ],
        },
        {
          name: "Aluguer de Material Outdoor",
          note: "Caução em dinheiro exigida por cada peça — devolvida na entrega do material.",
          rows: [
            ["Pés de Gato", "€12", "Caução €50"],
            ["Arnês", "€8", "Caução €25"],
            ["Corda", "€15", "Caução €90"],
            ["Aparelho de Segurança Gri-Gri", "€10", "Caução €50"],
            ["Capacete", "€6", "Caução €20"],
            ["6 / 12 Express", "€18 / €28", "Caução €70 / €100"],
            ["Mosquetão com Rosca de Segurança", "€4", "Caução €20"],
            ["Material Completo", "€73 / €82", "Caução €300"],
          ],
        },
      ],
    },

    footer: { credit: "Design & Programação por Marita.R", rights: "Todos os direitos reservados." },
  },
};

interface I18nCtx {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: Dict;
}

const I18nContext = createContext<I18nCtx | null>(null);

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");

  useEffect(() => {
    const stored = typeof window !== "undefined" ? (localStorage.getItem("lang") as Lang | null) : null;
    if (stored === "en" || stored === "pt") setLangState(stored);
  }, []);

  const setLang = (l: Lang) => {
    setLangState(l);
    if (typeof window !== "undefined") localStorage.setItem("lang", l);
    if (typeof document !== "undefined") document.documentElement.lang = l;
  };

  return (
    <I18nContext.Provider value={{ lang, setLang, t: translations[lang] }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used within I18nProvider");
  return ctx;
}
