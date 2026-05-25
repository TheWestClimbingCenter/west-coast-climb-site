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
      eyebrow: "Our story",
      title: "Born on the west coast, built for the community",
      p1: "Located in Peniche, The West is more than a gym — it's a meeting point for climbers of every level. We believe climbing is a lifestyle, and we've shaped a space that reflects that: high walls, modern boulders, and a community that pushes each other.",
      p2: "From your first try to your hardest send, our team of passionate climbers is here. Safety, progression and good vibes — every single session.",
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
      subtitle: "Memberships, day passes, classes and rentals.",
      sections: [
        {
          name: "Day Passes",
          rows: [
            ["Adult — full day", "€12"],
            ["Student / under 18", "€9"],
            ["Kids (under 12)", "€7"],
            ["First visit (intro included)", "€15"],
          ],
        },
        {
          name: "Multi-Entry Packs",
          rows: [
            ["5 entries", "€55"],
            ["10 entries", "€100"],
            ["20 entries", "€180"],
          ],
        },
        {
          name: "Memberships",
          rows: [
            ["Monthly — unlimited", "€55"],
            ["Monthly — student", "€45"],
            ["Annual — unlimited", "€550"],
          ],
        },
        {
          name: "Classes",
          rows: [
            ["Beginner course (4 sessions)", "€80"],
            ["Group class — drop in", "€20"],
            ["Private 1-on-1 (1h)", "€40"],
            ["Kids class — monthly", "€55"],
          ],
        },
        {
          name: "Rentals",
          rows: [
            ["Climbing shoes", "€3"],
            ["Harness", "€3"],
            ["Full pack (shoes + harness + belay)", "€7"],
          ],
        },
        {
          name: "Outdoor & Extras",
          rows: [
            ["Outdoor guided session (½ day)", "from €45"],
            ["Birthday party (up to 10 kids)", "from €150"],
          ],
        },
      ],
      footnote: "Prices are indicative. For up-to-date pricing, contact us directly.",
      close: "Close",
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
      subtitle: "Mensalidades, entradas, aulas e alugueres.",
      sections: [
        {
          name: "Entradas Diárias",
          rows: [
            ["Adulto — dia completo", "€12"],
            ["Estudante / menor de 18", "€9"],
            ["Crianças (até 12 anos)", "€7"],
            ["Primeira visita (com intro)", "€15"],
          ],
        },
        {
          name: "Packs de Entradas",
          rows: [
            ["5 entradas", "€55"],
            ["10 entradas", "€100"],
            ["20 entradas", "€180"],
          ],
        },
        {
          name: "Mensalidades",
          rows: [
            ["Mensal — ilimitado", "€55"],
            ["Mensal — estudante", "€45"],
            ["Anual — ilimitado", "€550"],
          ],
        },
        {
          name: "Aulas",
          rows: [
            ["Curso iniciante (4 sessões)", "€80"],
            ["Aula de grupo — avulso", "€20"],
            ["Aula privada 1-para-1 (1h)", "€40"],
            ["Aula de crianças — mensal", "€55"],
          ],
        },
        {
          name: "Alugueres",
          rows: [
            ["Sapatos de escalada", "€3"],
            ["Arnês", "€3"],
            ["Pack completo (sapatos + arnês + descensor)", "€7"],
          ],
        },
        {
          name: "Outdoor & Extras",
          rows: [
            ["Sessão outdoor guiada (½ dia)", "desde €45"],
            ["Festa de aniversário (até 10 crianças)", "desde €150"],
          ],
        },
      ],
      footnote: "Preços indicativos. Para preços actualizados, contacta-nos directamente.",
      close: "Fechar",
    },
    footer: { credit: "Design & Programação por Marita.R", rights: "Todos os direitos reservados." },
  },
} as const;

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
