import {
  ArrowDown,
  ArrowUpRight,
  Award,
  BrainCircuit,
  BriefcaseBusiness,
  Check,
  CloudCog,
  GraduationCap,
  Languages,
  Linkedin,
  Mail,
  Menu,
  ServerCog,
  Sparkles,
  X,
} from "lucide-react";
import { useEffect, useRef, useState, type ReactNode } from "react";

import profilePlaceholder from "@/assets/bruno-executive-placeholder.jpg";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

const navItems = [
  ["Perfil", "#perfil"],
  ["Experiência", "#experiencia"],
  ["Projetos", "#projetos"],
  ["Formação", "#formacao"],
] as const;

const skillGroups = [
  {
    number: "01",
    title: "Infraestrutura & Operações",
    skills: ["IT Infrastructure", "IT Operations", "Windows Server", "Active Directory"],
  },
  {
    number: "02",
    title: "Ecossistema Microsoft",
    skills: ["Microsoft 365", "Microsoft Azure", "Microsoft Intune", "Power Platform"],
  },
  {
    number: "03",
    title: "Serviços & Automação",
    skills: ["Service Desk N1/N2", "SLA", "Process Automation", "n8n", "Artificial Intelligence"],
  },
  {
    number: "04",
    title: "Liderança & Entrega",
    skills: ["Technical Leadership", "Vendor Management", "IT Projects", "Implementations", "Technical Training"],
  },
] as const;

const experiences = [
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
] as const;

const projects = [
  {
    number: "01",
    icon: BrainCircuit,
    eyebrow: "IA aplicada",
    title: "Conhecimento técnico que escala",
    description:
      "Solução criada com Lovable para estruturar, padronizar e tornar procedimentos técnicos mais fáceis de consultar.",
    tags: ["Lovable", "AI", "Knowledge Base"],
  },
  {
    number: "02",
    icon: ServerCog,
    eyebrow: "Padronização",
    title: "Processo corporativo .WIN",
    description:
      "Desenvolvimento do processo de imagem corporativa para garantir consistência na preparação de equipamentos Dell.",
    tags: ["Dell", "Windows", "Deployment"],
  },
  {
    number: "03",
    icon: CloudCog,
    eyebrow: "Infraestrutura",
    title: "Ambientes prontos para evoluir",
    description:
      "Implantação de infraestrutura e condução de migrações para ambientes em nuvem com foco em continuidade operacional.",
    tags: ["Cloud", "Microsoft 365", "Migration"],
  },
] as const;

function Reveal({ children, className = "" }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setVisible(true);
          observer.unobserve(element);
        }
      },
      { threshold: 0.14 },
    );
    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={`${visible ? "reveal-visible" : "reveal"} ${className}`}>
      {children}
    </div>
  );
}

function SectionLabel({ number, children }: { number: string; children: ReactNode }) {
  return (
    <div className="flex items-center gap-4 text-xs font-semibold uppercase text-primary">
      <span>{number}</span>
      <span className="h-px w-10 bg-primary/45" />
      <span>{children}</span>
    </div>
  );
}

export function PortfolioPage() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen overflow-hidden bg-background text-foreground">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-border/70 bg-background/90 backdrop-blur-xl">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-12">
          <a href="#perfil" className="font-display text-2xl text-foreground" aria-label="Bruno Masini, início">
            BM<span className="text-primary">.</span>
          </a>
          <nav className="hidden items-center gap-8 md:flex" aria-label="Navegação principal">
            {navItems.map(([label, href]) => (
              <a key={href} href={href} className="nav-link text-sm text-muted-foreground transition-colors hover:text-foreground">
                {label}
              </a>
            ))}
          </nav>
          <Button asChild size="lg" className="hidden rounded-none px-5 md:inline-flex">
            <a href="mailto:bruno-masini@hotmail.com">
              Contato <ArrowUpRight />
            </a>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X /> : <Menu />}
          </Button>
        </div>
        {menuOpen && (
          <nav className="border-t border-border bg-background px-5 py-5 md:hidden" aria-label="Navegação móvel">
            <div className="mx-auto flex max-w-7xl flex-col">
              {navItems.map(([label, href]) => (
                <a key={href} href={href} onClick={() => setMenuOpen(false)} className="border-b border-border py-4 font-medium">
                  {label}
                </a>
              ))}
              <a href="mailto:bruno-masini@hotmail.com" className="pt-5 font-semibold text-primary">Entrar em contato</a>
            </div>
          </nav>
        )}
      </header>

      <main>
        <section id="perfil" className="relative scroll-mt-20 pt-20">
          <div className="mx-auto grid min-h-[calc(100vh-5rem)] max-w-7xl items-center gap-10 px-5 py-12 sm:px-8 sm:py-16 lg:grid-cols-[1.1fr_0.9fr] lg:px-12 lg:py-20">
            <div className="relative z-10 order-2 lg:order-1">
              <div className="mb-8 flex items-center gap-3 text-xs font-semibold uppercase text-primary">
                <span className="relative flex size-2">
                  <span className="absolute inline-flex size-full animate-ping rounded-full bg-primary opacity-50" />
                  <span className="relative inline-flex size-2 rounded-full bg-primary" />
                </span>
                Disponível para conexões profissionais
              </div>
              <p className="mb-3 text-sm font-medium text-muted-foreground">Senior IT Analyst · 35 anos</p>
              <h1 className="font-display text-[clamp(4rem,9vw,8.6rem)] leading-[0.82] text-foreground">
                Bruno<br /><span className="italic text-primary">Masini</span>
              </h1>
              <p className="mt-8 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
                Mais de 14 anos transformando desafios de infraestrutura, operações e ambientes Microsoft em soluções confiáveis — hoje ampliadas por automação, nuvem e Inteligência Artificial.
              </p>
              <div className="mt-9 flex flex-wrap gap-3">
                <Button asChild size="lg" className="h-12 rounded-none px-6">
                  <a href="mailto:bruno-masini@hotmail.com"><Mail /> Entrar em contato</a>
                </Button>
                <Button asChild variant="outline" size="lg" className="h-12 rounded-none border-foreground/20 px-6">
                  <a href="https://www.linkedin.com/in/bruno-masini-29199563" target="_blank" rel="noreferrer"><Linkedin /> LinkedIn</a>
                </Button>
              </div>
              <a href="#competencias" className="mt-12 inline-flex items-center gap-3 text-xs font-semibold uppercase text-muted-foreground transition-colors hover:text-primary">
                Explorar perfil <ArrowDown className="size-4" />
              </a>
            </div>

            <div className="relative order-1 mx-auto w-full max-w-md lg:order-2 lg:max-w-none">
              <div className="absolute -left-5 top-10 hidden h-[72%] w-16 border-l border-t border-primary/35 lg:block" />
              <div className="relative ml-auto aspect-[4/5] max-h-[690px] overflow-hidden bg-secondary shadow-[var(--shadow-portrait)]">
                <img
                  src={profilePlaceholder}
                  alt="Retrato executivo provisório para o perfil de Bruno Masini"
                  width={1024}
                  height={1280}
                  className="h-full w-full object-cover grayscale-[12%]"
                />
                <div className="absolute inset-x-0 bottom-0 bg-foreground/85 px-5 py-4 text-xs text-background backdrop-blur-sm">
                  Imagem provisória · pronta para receber sua foto
                </div>
              </div>
              <div className="absolute -bottom-5 -left-4 bg-primary px-5 py-4 text-primary-foreground shadow-lg sm:-left-8">
                <strong className="block font-display text-3xl font-normal">14+</strong>
                <span className="text-[11px] uppercase">anos em tecnologia</span>
              </div>
            </div>
          </div>
        </section>

        <section id="competencias" className="scroll-mt-20 border-y border-border bg-secondary/55 py-20 sm:py-28">
          <Reveal className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
            <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
              <div>
                <SectionLabel number="01">Core skills</SectionLabel>
                <h2 className="mt-7 font-display text-5xl leading-none sm:text-6xl">Competência<br /><span className="italic text-primary">em contexto.</span></h2>
                <p className="mt-6 max-w-md leading-7 text-muted-foreground">Visão técnica ampla para conectar pessoas, processos e plataformas em operações de TI mais eficientes.</p>
              </div>
              <div className="border-t border-border">
                {skillGroups.map((group) => (
                  <article key={group.number} className="grid gap-4 border-b border-border py-7 sm:grid-cols-[3rem_1fr]">
                    <span className="font-mono text-xs text-primary">{group.number}</span>
                    <div>
                      <h3 className="text-lg font-semibold">{group.title}</h3>
                      <div className="mt-4 flex flex-wrap gap-2">
                        {group.skills.map((skill) => <span key={skill} className="border border-border bg-background px-3 py-1.5 text-xs text-muted-foreground">{skill}</span>)}
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </Reveal>
        </section>

        <section id="experiencia" className="scroll-mt-20 py-20 sm:py-28">
          <Reveal className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
            <SectionLabel number="02">Trajetória profissional</SectionLabel>
            <div className="mt-7 grid gap-10 lg:grid-cols-[0.65fr_1.35fr] lg:gap-20">
              <div>
                <h2 className="font-display text-5xl leading-none sm:text-6xl">Experiência que<br /><span className="italic text-primary">gera confiança.</span></h2>
                <p className="mt-6 max-w-sm leading-7 text-muted-foreground">Da sustentação à liderança técnica, uma trajetória construída perto da operação e das pessoas.</p>
              </div>
              <Accordion type="single" collapsible defaultValue="nitro" className="border-t border-border">
                {experiences.map((item, index) => (
                  <AccordionItem key={item.company} value={item.company.toLowerCase().split(" ")[0] ?? item.company} className="relative pl-8 sm:pl-12">
                    <span className="absolute left-0 top-8 size-3 rounded-full border-2 border-primary bg-background" />
                    {index < experiences.length - 1 && <span className="absolute bottom-0 left-[5px] top-11 w-px bg-border" />}
                    <AccordionTrigger className="py-7 hover:no-underline">
                      <div className="pr-4 text-left">
                        <p className="mb-2 text-xs font-semibold uppercase text-primary">{item.period}</p>
                        <h3 className="text-xl font-semibold sm:text-2xl">{item.company}</h3>
                        <p className="mt-1 text-sm text-muted-foreground">{item.role}</p>
                        <p className="mt-3 max-w-xl font-normal leading-6 text-muted-foreground">{item.summary}</p>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent>
                      <ul className="space-y-3 pb-4">
                        {item.details.map((detail) => (
                          <li key={detail} className="flex gap-3 leading-6 text-muted-foreground"><Check className="mt-1 size-4 shrink-0 text-primary" />{detail}</li>
                        ))}
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                ))}
                <AccordionItem value="anteriores" className="relative pl-8 sm:pl-12">
                  <span className="absolute left-0 top-8 size-3 rounded-full border-2 border-muted-foreground bg-background" />
                  <AccordionTrigger className="py-7 hover:no-underline">
                    <div className="pr-4 text-left">
                      <p className="mb-2 text-xs font-semibold uppercase text-muted-foreground">Experiências anteriores</p>
                      <h3 className="text-xl font-semibold sm:text-2xl">Base técnica consolidada</h3>
                      <p className="mt-3 max-w-xl font-normal leading-6 text-muted-foreground">Passagens por operações de tecnologia, suporte e infraestrutura em diferentes segmentos.</p>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="flex flex-wrap gap-2 pb-4">
                      {["Ultracenter", "CTIS / Sonda IT", "GRCON", "Linkpartner", "Lan Designers", "TIVIT", "UOLDIVEO", "Rewar"].map((company) => <span key={company} className="border border-border px-3 py-2 text-sm text-muted-foreground">{company}</span>)}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </Reveal>
        </section>

        <section id="projetos" className="scroll-mt-20 bg-foreground py-20 text-background sm:py-28">
          <Reveal className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
            <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
              <div>
                <div className="flex items-center gap-4 text-xs font-semibold uppercase text-accent"><span>03</span><span className="h-px w-10 bg-accent/60" /><span>Projetos e destaques</span></div>
                <h2 className="mt-7 font-display text-5xl leading-none sm:text-6xl">Tecnologia com<br /><span className="italic text-accent">impacto real.</span></h2>
              </div>
              <p className="max-w-md leading-7 text-background/65">Iniciativas que combinam visão operacional, padronização e novas tecnologias.</p>
            </div>
            <div className="mt-14 grid border-y border-background/15 lg:grid-cols-3">
              {projects.map((project, index) => {
                const Icon = project.icon;
                return (
                  <article key={project.number} className={`group py-8 lg:px-8 lg:py-10 ${index > 0 ? "border-t border-background/15 lg:border-l lg:border-t-0" : ""}`}>
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-xs text-background/45">/{project.number}</span>
                      <Icon className="size-6 text-accent transition-transform duration-300 group-hover:-translate-y-1" />
                    </div>
                    <p className="mt-14 text-xs font-semibold uppercase text-accent">{project.eyebrow}</p>
                    <h3 className="mt-3 font-display text-3xl leading-tight">{project.title}</h3>
                    <p className="mt-5 leading-7 text-background/65">{project.description}</p>
                    <div className="mt-8 flex flex-wrap gap-2">
                      {project.tags.map((tag) => <span key={tag} className="border border-background/20 px-2.5 py-1 text-[11px] text-background/70">{tag}</span>)}
                    </div>
                  </article>
                );
              })}
            </div>
          </Reveal>
        </section>

        <section id="formacao" className="scroll-mt-20 py-20 sm:py-28">
          <Reveal className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
            <SectionLabel number="04">Formação contínua</SectionLabel>
            <div className="mt-7 grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">
              <div>
                <h2 className="font-display text-5xl leading-none sm:text-6xl">Aprender para<br /><span className="italic text-primary">liderar melhor.</span></h2>
                <p className="mt-6 max-w-sm leading-7 text-muted-foreground">Conhecimento técnico aliado à gestão para conduzir projetos e decisões com mais contexto.</p>
              </div>
              <div className="grid gap-px bg-border sm:grid-cols-2">
                <article className="bg-background p-6 sm:p-8">
                  <GraduationCap className="size-6 text-primary" />
                  <p className="mt-8 text-xs font-semibold uppercase text-primary">Em andamento · 2025—2027</p>
                  <h3 className="mt-3 text-xl font-semibold">Mestrado em Gestão de Projetos de TI</h3>
                  <p className="mt-3 text-sm text-muted-foreground">Centro Universitário FAM</p>
                </article>
                <article className="bg-background p-6 sm:p-8">
                  <BriefcaseBusiness className="size-6 text-primary" />
                  <p className="mt-8 text-xs font-semibold uppercase text-primary">Graduação</p>
                  <h3 className="mt-3 text-xl font-semibold">Sistemas para Internet / Redes de Computadores</h3>
                  <p className="mt-3 text-sm text-muted-foreground">UNINOVE</p>
                </article>
                <article className="bg-background p-6 sm:p-8">
                  <Award className="size-6 text-primary" />
                  <p className="mt-8 text-xs font-semibold uppercase text-primary">Certificações</p>
                  <ul className="mt-4 space-y-3 text-sm leading-6 text-muted-foreground">
                    <li>Artificial Intelligence Executive</li>
                    <li>AI & Automation Enterprise with n8n · Flowgrammers</li>
                    <li>Introduction to Cybersecurity</li>
                  </ul>
                </article>
                <article className="bg-background p-6 sm:p-8">
                  <Languages className="size-6 text-primary" />
                  <p className="mt-8 text-xs font-semibold uppercase text-primary">Idiomas</p>
                  <div className="mt-4 space-y-4">
                    <div><h3 className="font-semibold">Português</h3><p className="text-sm text-muted-foreground">Nativo</p></div>
                    <div><h3 className="font-semibold">Inglês</h3><p className="text-sm text-muted-foreground">Intermediário técnico</p></div>
                  </div>
                </article>
              </div>
            </div>
          </Reveal>
        </section>

        <section id="contato" className="scroll-mt-20 border-t border-border bg-secondary/55">
          <div className="mx-auto grid max-w-7xl gap-10 px-5 py-20 sm:px-8 sm:py-24 lg:grid-cols-[1fr_auto] lg:items-end lg:px-12">
            <Reveal>
              <div className="mb-6 flex items-center gap-3 text-xs font-semibold uppercase text-primary"><Sparkles className="size-4" /> Vamos conversar</div>
              <h2 className="max-w-4xl font-display text-5xl leading-[0.95] sm:text-7xl">Boas operações começam com<br /><span className="italic text-primary">boas conexões.</span></h2>
            </Reveal>
            <Reveal className="flex flex-col gap-3 sm:flex-row lg:flex-col">
              <Button asChild size="lg" className="h-12 rounded-none px-6"><a href="mailto:bruno-masini@hotmail.com"><Mail /> Enviar e-mail</a></Button>
              <Button asChild variant="outline" size="lg" className="h-12 rounded-none px-6"><a href="https://www.linkedin.com/in/bruno-masini-29199563" target="_blank" rel="noreferrer"><Linkedin /> LinkedIn</a></Button>
            </Reveal>
          </div>
        </section>
      </main>

      <footer className="bg-foreground text-background">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 px-5 py-7 text-xs text-background/55 sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-12">
          <p>© 2026 Bruno Masini. Todos os direitos reservados.</p>
          <p>Senior IT Analyst · São Paulo, Brasil</p>
        </div>
      </footer>
    </div>
  );
}