import { Link } from "@tanstack/react-router";
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

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { defaultContent, mailtoHref, type SiteContent } from "@/lib/site-content";

const navItems = [
  ["Perfil", "#perfil"],
  ["Experiência", "#experiencia"],
  ["Projetos", "#projetos"],
  ["Formação", "#formacao"],
] as const;

const projectIcons = [BrainCircuit, ServerCog, CloudCog];
const educationIcons = [GraduationCap, BriefcaseBusiness];

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

export function PortfolioPage({ content = defaultContent }: { content?: SiteContent }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const { hero, skills, experience, projects, education, contact, footer } = content;
  const mailto = mailtoHref(contact.email, contact.emailSubject);

  return (
    <div className="min-h-screen overflow-hidden bg-background text-foreground">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-border/70 bg-background/90 backdrop-blur-xl">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-12">
          <a href="#perfil" className="font-display text-2xl text-foreground" aria-label="Início">
            {hero.firstName.charAt(0)}
            {hero.lastName.charAt(0)}
            <span className="text-primary">.</span>
          </a>
          <nav className="hidden items-center gap-8 md:flex" aria-label="Navegação principal">
            {navItems.map(([label, href]) => (
              <a key={href} href={href} className="nav-link text-sm text-muted-foreground transition-colors hover:text-foreground">
                {label}
              </a>
            ))}
          </nav>
          <Button asChild size="lg" className="hidden rounded-none px-5 md:inline-flex">
            <a href={mailto}>
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
              <a href={mailto} className="pt-5 font-semibold text-primary">Entrar em contato</a>
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
                {hero.availability}
              </div>
              <p className="mb-3 text-sm font-medium text-muted-foreground">{hero.kicker}</p>
              <h1 className="font-display text-[clamp(4rem,9vw,8.6rem)] leading-[0.82] text-foreground">
                {hero.firstName}<br /><span className="italic text-primary">{hero.lastName}</span>
              </h1>
              <p className="mt-8 max-w-2xl whitespace-pre-line text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
                {hero.summary}
              </p>
              <div className="mt-9 flex flex-wrap gap-3">
                <Button asChild size="lg" className="h-12 rounded-none px-6">
                  <a href={mailto}><Mail /> Entrar em contato</a>
                </Button>
                <Button asChild variant="outline" size="lg" className="h-12 rounded-none border-foreground/20 px-6">
                  <a href={contact.linkedin} target="_blank" rel="noreferrer"><Linkedin /> LinkedIn</a>
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
                  src={hero.photoUrl}
                  alt={hero.photoAlt}
                  className="h-full w-full object-cover object-top"
                />
              </div>
              <div className="absolute -bottom-5 -left-4 bg-primary px-5 py-4 text-primary-foreground shadow-lg sm:-left-8">
                <strong className="block font-display text-3xl font-normal">{hero.badgeNumber}</strong>
                <span className="text-[11px] uppercase">{hero.badgeLabel}</span>
              </div>
            </div>
          </div>
        </section>

        <section id="competencias" className="scroll-mt-20 border-y border-border bg-secondary/55 py-20 sm:py-28">
          <Reveal className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
            <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
              <div>
                <SectionLabel number="01">{skills.heading}</SectionLabel>
                <h2 className="mt-7 font-display text-5xl leading-none sm:text-6xl">Competência<br /><span className="italic text-primary">em contexto.</span></h2>
                <p className="mt-6 max-w-md leading-7 text-muted-foreground">{skills.intro}</p>
              </div>
              <div className="border-t border-border">
                {skills.groups.map((group, index) => (
                  <article key={`${group.title}-${index}`} className="grid gap-4 border-b border-border py-7 sm:grid-cols-[3rem_1fr]">
                    <span className="font-mono text-xs text-primary">{String(index + 1).padStart(2, "0")}</span>
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
            <SectionLabel number="02">{experience.heading}</SectionLabel>
            <div className="mt-7 grid gap-10 lg:grid-cols-[0.65fr_1.35fr] lg:gap-20">
              <div>
                <h2 className="font-display text-5xl leading-none sm:text-6xl">Experiência que<br /><span className="italic text-primary">gera confiança.</span></h2>
                <p className="mt-6 max-w-sm leading-7 text-muted-foreground">{experience.intro}</p>
              </div>
              <Accordion type="single" collapsible defaultValue="exp-0" className="border-t border-border">
                {experience.items.map((item, index) => (
                  <AccordionItem key={`${item.company}-${index}`} value={`exp-${index}`} className="relative pl-8 sm:pl-12">
                    <span className="absolute left-0 top-8 size-3 rounded-full border-2 border-primary bg-background" />
                    {index < experience.items.length - 1 && <span className="absolute bottom-0 left-[5px] top-11 w-px bg-border" />}
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
                {experience.previousCompanies.length > 0 && (
                  <AccordionItem value="anteriores" className="relative pl-8 sm:pl-12">
                    <span className="absolute left-0 top-8 size-3 rounded-full border-2 border-muted-foreground bg-background" />
                    <AccordionTrigger className="py-7 hover:no-underline">
                      <div className="pr-4 text-left">
                        <p className="mb-2 text-xs font-semibold uppercase text-muted-foreground">Experiências anteriores</p>
                        <h3 className="text-xl font-semibold sm:text-2xl">{experience.previousTitle}</h3>
                        <p className="mt-3 max-w-xl font-normal leading-6 text-muted-foreground">{experience.previousIntro}</p>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="flex flex-wrap gap-2 pb-4">
                        {experience.previousCompanies.map((company) => <span key={company} className="border border-border px-3 py-2 text-sm text-muted-foreground">{company}</span>)}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                )}
              </Accordion>
            </div>
          </Reveal>
        </section>

        <section id="projetos" className="scroll-mt-20 bg-foreground py-20 text-background sm:py-28">
          <Reveal className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
            <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
              <div>
                <div className="flex items-center gap-4 text-xs font-semibold uppercase text-accent"><span>03</span><span className="h-px w-10 bg-accent/60" /><span>{projects.heading}</span></div>
                <h2 className="mt-7 font-display text-5xl leading-none sm:text-6xl">Tecnologia com<br /><span className="italic text-accent">impacto real.</span></h2>
              </div>
              <p className="max-w-md leading-7 text-background/65">{projects.intro}</p>
            </div>
            <div className="mt-14 grid border-y border-background/15 lg:grid-cols-3">
              {projects.items.map((project, index) => {
                const Icon = projectIcons[index % projectIcons.length]!;
                return (
                  <article key={`${project.title}-${index}`} className={`group py-8 lg:px-8 lg:py-10 ${index > 0 ? "border-t border-background/15 lg:border-l lg:border-t-0" : ""}`}>
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-xs text-background/45">/{String(index + 1).padStart(2, "0")}</span>
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
            <SectionLabel number="04">{education.heading}</SectionLabel>
            <div className="mt-7 grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">
              <div>
                <h2 className="font-display text-5xl leading-none sm:text-6xl">Aprender para<br /><span className="italic text-primary">liderar melhor.</span></h2>
                <p className="mt-6 max-w-sm leading-7 text-muted-foreground">{education.intro}</p>
              </div>
              <div className="grid gap-px bg-border sm:grid-cols-2">
                {education.items.map((item, index) => {
                  const Icon = educationIcons[index % educationIcons.length]!;
                  return (
                    <article key={`${item.title}-${index}`} className="bg-background p-6 sm:p-8">
                      <Icon className="size-6 text-primary" />
                      <p className="mt-8 text-xs font-semibold uppercase text-primary">{item.eyebrow}</p>
                      <h3 className="mt-3 text-xl font-semibold">{item.title}</h3>
                      <p className="mt-3 text-sm text-muted-foreground">{item.subtitle}</p>
                    </article>
                  );
                })}
                <article className="bg-background p-6 sm:p-8">
                  <Award className="size-6 text-primary" />
                  <p className="mt-8 text-xs font-semibold uppercase text-primary">Certificações</p>
                  <ul className="mt-4 space-y-3 text-sm leading-6 text-muted-foreground">
                    {education.certifications.map((item) => <li key={item}>{item}</li>)}
                  </ul>
                </article>
                <article className="bg-background p-6 sm:p-8">
                  <Languages className="size-6 text-primary" />
                  <p className="mt-8 text-xs font-semibold uppercase text-primary">Idiomas</p>
                  <div className="mt-4 space-y-4">
                    {education.languages.map((lang) => (
                      <div key={lang.name}><h3 className="font-semibold">{lang.name}</h3><p className="text-sm text-muted-foreground">{lang.level}</p></div>
                    ))}
                  </div>
                </article>
              </div>
            </div>
          </Reveal>
        </section>

        <section id="contato" className="scroll-mt-20 border-t border-border bg-secondary/55">
          <div className="mx-auto grid max-w-7xl gap-10 px-5 py-20 sm:px-8 sm:py-24 lg:grid-cols-[1fr_auto] lg:items-end lg:px-12">
            <Reveal>
              <div className="mb-6 flex items-center gap-3 text-xs font-semibold uppercase text-primary"><Sparkles className="size-4" /> {contact.heading}</div>
              <h2 className="max-w-4xl font-display text-5xl leading-[0.95] sm:text-7xl">Boas operações começam com<br /><span className="italic text-primary">boas conexões.</span></h2>
            </Reveal>
            <Reveal className="flex flex-col gap-3 sm:flex-row lg:flex-col">
              <Button asChild size="lg" className="h-12 rounded-none px-6"><a href={mailto}><Mail /> Enviar e-mail</a></Button>
              <Button asChild variant="outline" size="lg" className="h-12 rounded-none px-6"><a href={contact.linkedin} target="_blank" rel="noreferrer"><Linkedin /> LinkedIn</a></Button>
            </Reveal>
          </div>
        </section>
      </main>

      <footer className="bg-foreground text-background">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 px-5 py-7 text-xs text-background/55 sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-12">
          <p>{footer.copyright}</p>
          <div className="flex items-center gap-5">
            <p>{footer.tagline}</p>
            <Link to="/admin" className="text-background/45 transition-colors hover:text-background">Admin</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
