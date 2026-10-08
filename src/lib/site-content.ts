import brunoPhoto from "@/assets/bruno-masini.jpg.asset.json";

export type SkillGroup = { title: string; skills: string[] };
export type Experience = {
  company: string;
  role: string;
  period: string;
  summary: string;
  details: string[];
};
export type Project = {
  eyebrow: string;
  title: string;
  description: string;
  tags: string[];
};
export type EducationItem = { eyebrow: string; title: string; subtitle: string };
export type LanguageItem = { name: string; level: string };

export type SiteContent = {
  hero: {
    availability: string;
    kicker: string;
    firstName: string;
    lastName: string;
    summary: string;
    photoUrl: string;
    photoAlt: string;
    badgeNumber: string;
    badgeLabel: string;
  };
  skills: { heading: string; intro: string; groups: SkillGroup[] };
  experience: {
    heading: string;
    intro: string;
    items: Experience[];
    previousTitle: string;
    previousIntro: string;
    previousCompanies: string[];
  };
  projects: { heading: string; intro: string; items: Project[] };
  education: {
    heading: string;
    intro: string;
    items: EducationItem[];
    certifications: string[];
    languages: LanguageItem[];
  };
  contact: { heading: string; email: string; emailSubject: string; linkedin: string };
  footer: { copyright: string; tagline: string };
};

export const defaultContent: SiteContent = {
  hero: {
    availability: "Disponível para conexões profissionais",
    kicker: "Senior IT Analyst · 35 anos",
    firstName: "Bruno",
    lastName: "Masini",
    summary:
      "Mais de 14 anos transformando desafios de infraestrutura, operações e ambientes Microsoft em soluções confiáveis — hoje ampliadas por automação, nuvem e Inteligência Artificial.",
    photoUrl: brunoPhoto.url,
    photoAlt: "Retrato executivo de Bruno Masini",
    badgeNumber: "14+",
    badgeLabel: "anos em tecnologia",
  },
  skills: {
    heading: "Core skills",
    intro:
      "Visão técnica ampla para conectar pessoas, processos e plataformas em operações de TI mais eficientes.",
    groups: [
      {
        title: "Infraestrutura & Operações",
        skills: ["IT Infrastructure", "IT Operations", "Windows Server", "Active Directory"],
      },
      {
        title: "Ecossistema Microsoft",
        skills: ["Microsoft 365", "Microsoft Azure", "Microsoft Intune", "Power Platform"],
      },
      {
        title: "Serviços & Automação",
        skills: ["Service Desk N1/N2", "SLA", "Process Automation", "n8n", "Artificial Intelligence"],
      },
      {
        title: "Liderança & Entrega",
        skills: [
          "Technical Leadership",
          "Vendor Management",
          "IT Projects",
          "Implementations",
          "Technical Training",
        ],
      },
    ],
  },
  experience: {
    heading: "Trajetória profissional",
    intro:
      "Da sustentação à liderança técnica, uma trajetória construída perto da operação e das pessoas.",
    items: [
      {
        company: "NITRO",
        role: "Senior IT Analyst",
        period: "Fev 2025 — Presente",
        summary: "Operações críticas, automação e suporte executivo em ambiente corporativo.",
        details: [
          "Suporte especializado a executivos, incluindo CEO e diretores.",
          "Gestão das filas de atendimento N1/N2 e acompanhamento de SLA.",
          "Automação de processos com Power Platform, n8n e Inteligência Artificial.",
          "Desenvolvimento, com Lovable, de uma solução para padronizar procedimentos técnicos.",
          "Estruturação do processo corporativo .WIN para equipamentos Dell.",
        ],
      },
      {
        company: "SYNCONTI LTDA",
        role: "Senior Support Analyst",
        period: "Dez 2022 — Fev 2025",
        summary: "Liderança operacional, migrações Microsoft e padronização de redes.",
        details: [
          "Liderança da equipe de Service Desk e organização do atendimento técnico.",
          "Planejamento e execução de migrações para Microsoft 365.",
          "Padronização de ambientes de rede e melhoria das rotinas operacionais.",
        ],
      },
      {
        company: "CLÍNICAS INTELIGENTES",
        role: "IT Analyst",
        period: "Mar 2022 — Dez 2022",
        summary: "Suporte remoto em escala para uma operação distribuída nacionalmente.",
        details: [
          "Atendimento remoto a mais de 200 clínicas.",
          "Administração de Active Directory e Microsoft 365.",
          "Sustentação do ambiente tecnológico e apoio às equipes locais.",
        ],
      },
      {
        company: "UNIHEALTH LOGÍSTICA HOSPITALAR",
        role: "IT Systems Analyst",
        period: "Abr 2019 — Mar 2022",
        summary: "Sustentação de sistemas logísticos e da infraestrutura de TI.",
        details: [
          "Suporte aos sistemas UnilogWF, WAMAS, MV SOUL e LOGIMAT.",
          "Administração e suporte da infraestrutura necessária à operação logística.",
          "Atendimento a incidentes e continuidade dos sistemas de negócio.",
        ],
      },
    ],
    previousTitle: "Base técnica consolidada",
    previousIntro:
      "Passagens por operações de tecnologia, suporte e infraestrutura em diferentes segmentos.",
    previousCompanies: [
      "Ultracenter",
      "CTIS / Sonda IT",
      "GRCON",
      "Linkpartner",
      "Lan Designers",
      "TIVIT",
      "UOLDIVEO",
      "Rewar",
    ],
  },
  projects: {
    heading: "Projetos e destaques",
    intro: "Iniciativas que combinam visão operacional, padronização e novas tecnologias.",
    items: [
      {
        eyebrow: "IA aplicada",
        title: "Conhecimento técnico que escala",
        description:
          "Solução criada com Lovable para estruturar, padronizar e tornar procedimentos técnicos mais fáceis de consultar.",
        tags: ["Lovable", "AI", "Knowledge Base"],
      },
      {
        eyebrow: "Padronização",
        title: "Processo corporativo .WIN",
        description:
          "Desenvolvimento do processo de imagem corporativa para garantir consistência na preparação de equipamentos Dell.",
        tags: ["Dell", "Windows", "Deployment"],
      },
      {
        eyebrow: "Infraestrutura",
        title: "Ambientes prontos para evoluir",
        description:
          "Implantação de infraestrutura e condução de migrações para ambientes em nuvem com foco em continuidade operacional.",
        tags: ["Cloud", "Microsoft 365", "Migration"],
      },
    ],
  },
  education: {
    heading: "Formação contínua",
    intro:
      "Conhecimento técnico aliado à gestão para conduzir projetos e decisões com mais contexto.",
    items: [
      {
        eyebrow: "Em andamento · 2025—2027",
        title: "Mestrado em Gestão de Projetos de TI",
        subtitle: "Centro Universitário FAM",
      },
      {
        eyebrow: "Graduação",
        title: "Sistemas para Internet / Redes de Computadores",
        subtitle: "UNINOVE",
      },
    ],
    certifications: [
      "Formação de Claude AI · Viver de IA",
      "Formação de LOVABLE AI · Viver de IA",
      "Google AI Professional Certicate are fluent in AI · Coursera",
      "Google Ads for Beginners · Coursera",
      "Claude AI · Hashtag Treinamentos · Emitida em set de 2026",
      "Artificial Intelligence Executive",
      "AI & Automation Enterprise with n8n · Flowgrammers",
      "Introduction to Cybersecurity",
    ],
    languages: [
      { name: "Português", level: "Nativo" },
      { name: "Inglês", level: "Intermediário técnico" },
    ],
  },
  contact: {
    heading: "Vamos conversar",
    email: "bruno-masini@hotmail.com",
    emailSubject: "Contato via portfólio",
    linkedin: "https://www.linkedin.com/in/bruno-masini-29199563",
  },
  footer: {
    copyright: "© 2026 Bruno Masini. Todos os direitos reservados.",
    tagline: "Senior IT Analyst · São Paulo, Brasil",
  },
};

export const CONTENT_KEY = "portfolio";

export function mailtoHref(email: string, subject: string) {
  const address = email || defaultContent.contact.email;
  return subject ? `mailto:${address}?subject=${encodeURIComponent(subject)}` : `mailto:${address}`;
}

/** Deep-merges stored content over the defaults so new fields never break the page. */
export function mergeContent(stored: unknown): SiteContent {
  if (!stored || typeof stored !== "object") return defaultContent;
  const s = stored as Record<string, any>;
  const d = defaultContent;
  return {
    hero: { ...d.hero, ...(s['hero'] ?? {}) },
    skills: { ...d.skills, ...(s['skills'] ?? {}) },
    experience: { ...d.experience, ...(s['experience'] ?? {}) },
    projects: { ...d.projects, ...(s['projects'] ?? {}) },
    education: { ...d.education, ...(s['education'] ?? {}) },
    contact: { ...d.contact, ...(s['contact'] ?? {}) },
    footer: { ...d.footer, ...(s['footer'] ?? {}) },
  };
}
