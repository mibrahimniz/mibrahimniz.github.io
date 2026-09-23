import Link from "next/link";

import { ProjectCard } from "@/components/projects/project-card";
import { projects } from "@/lib/projects";
import { siteConfig } from "@/lib/site";

export const metadata = {
  title: "Muhammad Ibrahim Nizamani | Senior Full Stack Engineer",
  description:
    "Senior Full Stack Engineer focused on scalable backend systems, enterprise applications, fintech platforms, and modern web products.",
};

const technologies = [
  "Node.js",
  "TypeScript",
  "NestJS",
  "Express.js",
  "React",
  "Python",
  "PostgreSQL",
  "MSSQL",
  "Redis",
  "RabbitMQ",
  "Docker",
  "Kubernetes",
];

function ArrowIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" fill="none" className="h-4 w-4">
      <path
        d="M4 10h11M10 5l5 5-5 5"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CodeIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="h-5 w-5">
      <path
        d="m8 8-4 4 4 4M16 8l4 4-4 4M14 5l-4 14"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function LayersIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="h-5 w-5">
      <path
        d="m12 3 8 4-8 4-8-4 8-4Z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
      <path
        d="m4 12 8 4 8-4M4 17l8 4 8-4"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function DatabaseIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="h-5 w-5">
      <ellipse cx="12" cy="5" rx="7" ry="3" stroke="currentColor" strokeWidth="1.7" />
      <path
        d="M5 5v7c0 1.66 3.13 3 7 3s7-1.34 7-3V5M5 12v7c0 1.66 3.13 3 7 3s7-1.34 7-3v-7"
        stroke="currentColor"
        strokeWidth="1.7"
      />
    </svg>
  );
}

function BriefcaseIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="h-5 w-5">
      <rect x="3" y="7" width="18" height="13" rx="2" stroke="currentColor" strokeWidth="1.7" />
      <path
        d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M3 12h18M10 12v2h4v-2"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" fill="none" className="h-4 w-4">
      <path
        d="m5 10 3 3 7-7"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function Home() {
  return (
    <main id="main-content" className="flex-1">
      <section
        aria-labelledby="intro-title"
        className="hero-surface relative overflow-hidden border-b border-(--border)"
      >
        <div className="shell relative py-14 sm:py-18 lg:py-20">
          <div className="grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-14">
            <div className="max-w-3xl">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-(--border) bg-(--surface) px-3.5 py-2 shadow-sm backdrop-blur-md">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-(--accent) opacity-30" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-(--accent)" />
                </span>

                <span className="eyebrow">Senior Full Stack Engineer</span>
              </div>

              <p className="eyebrow mb-3">Enterprise systems · Fintech · Modern web</p>

              <h1
                id="intro-title"
                className="max-w-4xl text-5xl font-semibold tracking-[-0.04em] sm:text-6xl lg:text-7xl"
              >
                Building software that scales with{" "}
                <span className="gradient-text">real-world needs.</span>
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-7 text-(--muted-foreground) sm:text-lg sm:leading-8">
                I&apos;m {siteConfig.name}, a Senior Full Stack Engineer focused on scalable backend
                systems, enterprise applications, fintech platforms, and modern web products.
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                <a href="#projects" className="button-primary group">
                  View Projects
                  <span className="transition-transform duration-200 group-hover:translate-x-1">
                    <ArrowIcon />
                  </span>
                </a>

                <a href={`/contact`} className="button-secondary">
                  Get in touch
                </a>

                <a
                  href={siteConfig.links.resume}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button-secondary"
                >
                  View Resume
                </a>
              </div>

              <div className="mt-8 border-t border-(--border) pt-6">
                <p className="eyebrow mb-3">Core engineering stack</p>

                <div className="flex max-w-3xl flex-wrap gap-2">
                  {technologies.slice(0, 8).map((technology) => (
                    <span key={technology} className="tech-badge">
                      {technology}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="relative">
              <div
                aria-hidden="true"
                className="absolute -inset-6 -z-10 rounded-[2rem] bg-[radial-gradient(circle_at_center,rgba(34,197,94,0.10),transparent_65%)] blur-2xl"
              />

              <article className="panel accent-glow rounded-[1.5rem] p-5 sm:p-6">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-(--border) bg-(--surface-soft) text-(--accent)">
                      <CodeIcon />
                    </div>

                    <div>
                      <p className="text-sm font-semibold">Engineering Profile</p>

                      <p className="mt-0.5 font-mono text-xs text-(--accent)">
                        full-stack / backend-focused
                      </p>
                    </div>
                  </div>

                  <span className="rounded-full border border-(--border) bg-(--surface-soft) px-3 py-1.5 font-mono text-[0.68rem] font-medium text-(--accent)">
                    7+ YEARS
                  </span>
                </div>

                <div className="my-5 h-px bg-(--border)" />

                <p className="text-sm leading-6 text-(--muted-foreground)">
                  Experienced in designing and building production software across fintech,
                  enterprise data, personal finance, and SaaS environments.
                </p>

                <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                  <div className="rounded-xl border border-(--border) bg-(--surface-soft) p-3.5">
                    <div className="mb-2.5 flex h-9 w-9 items-center justify-center rounded-lg bg-(--surface) text-(--cyan)">
                      <LayersIcon />
                    </div>

                    <p className="text-xs font-medium text-(--muted-foreground)">Architecture</p>

                    <p className="mt-1 text-sm font-semibold">APIs & Microservices</p>
                  </div>

                  <div className="rounded-xl border border-(--border) bg-(--surface-soft) p-3.5">
                    <div className="mb-2.5 flex h-9 w-9 items-center justify-center rounded-lg bg-(--surface) text-(--green)">
                      <DatabaseIcon />
                    </div>

                    <p className="text-xs font-medium text-(--muted-foreground)">Data</p>

                    <p className="mt-1 text-sm font-semibold">SQL & NoSQL Systems</p>
                  </div>

                  <div className="rounded-xl border border-(--border) bg-(--surface-soft) p-3.5">
                    <div className="mb-2.5 flex h-9 w-9 items-center justify-center rounded-lg bg-(--surface) text-(--blue)">
                      <BriefcaseIcon />
                    </div>

                    <p className="text-xs font-medium text-(--muted-foreground)">Domain</p>

                    <p className="mt-1 text-sm font-semibold">Fintech & Enterprise</p>
                  </div>

                  <div className="rounded-xl border border-(--border) bg-(--surface-soft) p-3.5">
                    <div className="mb-2.5 flex h-9 w-9 items-center justify-center rounded-lg bg-(--surface) text-(--accent)">
                      <CheckIcon />
                    </div>

                    <p className="text-xs font-medium text-(--muted-foreground)">Delivery</p>

                    <p className="mt-1 text-sm font-semibold">Production Software</p>
                  </div>
                </div>

                <div className="mt-5 rounded-xl border border-(--border) bg-(--surface-soft) px-4 py-3">
                  <div className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-(--accent) shadow-[0_0_12px_var(--accent)]" />

                    <span className="font-mono text-xs font-medium text-(--muted-foreground)">
                      NODE.JS · TYPESCRIPT · REACT · PYTHON
                    </span>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section
        id="experience"
        aria-labelledby="experience-title"
        className="scroll-mt-12 border-b border-(--border)"
      >
        <div className="shell py-14 sm:py-16 lg:py-18">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="eyebrow">Engineering experience</p>

              <h2
                id="experience-title"
                className="mt-3 max-w-3xl text-3xl font-semibold tracking-[-0.025em] sm:text-4xl"
              >
                Building production software across{" "}
                <span className="gradient-text">fintech, data, and SaaS.</span>
              </h2>
            </div>

            <Link href="/experience" className="animated-link shrink-0 text-sm font-medium">
              View full experience
              <ArrowIcon />
            </Link>
          </div>

          <div className="mt-7 grid gap-5 md:grid-cols-2">
            <article className="interactive-card group rounded-[1.35rem] p-5 sm:p-6">
              <div className="flex items-start justify-between gap-4">
                <p className="font-mono text-xs font-medium text-(--muted-foreground)">
                  AUG 2025 — PRESENT
                </p>

                <span className="rounded-full border border-(--border) bg-(--surface-soft) px-2.5 py-1 font-mono text-[0.65rem] text-(--accent)">
                  CURRENT
                </span>
              </div>

              <h3 className="mt-4 text-xl font-semibold tracking-tight">
                Senior Full Stack Engineer
              </h3>

              <p className="mt-1 text-sm text-(--accent)">Basserah · Remote, Saudi Arabia</p>

              <p className="mt-4 text-sm leading-6 text-(--muted-foreground)">
                Building enterprise data governance and collaboration capabilities across metadata,
                lineage, integrations, and access-control workflows.
              </p>

              <div className="mt-5 flex items-center gap-2 font-mono text-xs text-(--muted-foreground)">
                <span className="h-1.5 w-1.5 rounded-full bg-(--cyan)" />
                Enterprise data & collaboration
              </div>
            </article>

            <article className="interactive-card group rounded-[1.35rem] p-5 sm:p-6">
              <div className="flex items-start justify-between gap-4">
                <p className="font-mono text-xs font-medium text-(--muted-foreground)">
                  FEB 2022 — MAR 2025
                </p>

                <span className="rounded-full border border-(--border) bg-(--surface-soft) px-2.5 py-1 font-mono text-[0.65rem] text-(--blue)">
                  FINTECH
                </span>
              </div>

              <h3 className="mt-4 text-xl font-semibold tracking-tight">Software Engineer</h3>

              <p className="mt-1 text-sm text-(--accent-secondary)">
                Aion Digital · Remote, Bahrain
              </p>

              <p className="mt-4 text-sm leading-6 text-(--muted-foreground)">
                Built backend services and distributed systems for digital banking and personal
                finance products.
              </p>

              <div className="mt-5 flex items-center gap-2 font-mono text-xs text-(--muted-foreground)">
                <span className="h-1.5 w-1.5 rounded-full bg-(--green)" />
                Banking & personal finance
              </div>
            </article>
          </div>
        </div>
      </section>

      <section aria-labelledby="focus-title" className="border-b border-(--border)">
        <div className="shell py-14 sm:py-16 lg:py-18">
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            <div>
              <p className="eyebrow">Engineering focus</p>

              <h2
                id="focus-title"
                className="mt-3 text-3xl font-semibold tracking-[-0.025em] sm:text-4xl"
              >
                From system architecture to the{" "}
                <span className="gradient-text">final product.</span>
              </h2>

              <p className="mt-4 max-w-xl text-sm leading-6 text-(--muted-foreground) sm:text-base">
                My experience spans backend architecture, APIs, distributed systems, databases,
                integrations, and frontend applications.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {[
                {
                  title: "Backend Systems",
                  description: "Node.js, NestJS, Express.js, FastAPI and Python services.",
                  color: "var(--accent)",
                },
                {
                  title: "API Architecture",
                  description:
                    "REST, GraphQL, integrations, authentication and service boundaries.",
                  color: "var(--cyan)",
                },
                {
                  title: "Distributed Systems",
                  description: "Microservices, messaging, background processing and Redis.",
                  color: "var(--blue)",
                },
                {
                  title: "Full Stack",
                  description:
                    "React applications with modern state management and API integration.",
                  color: "var(--green)",
                },
                {
                  title: "Data Platforms",
                  description: "PostgreSQL, MSSQL, MongoDB and enterprise data workflows.",
                  color: "var(--cyan)",
                },
                {
                  title: "Cloud & Delivery",
                  description: "Docker, Kubernetes, CI/CD and production deployment workflows.",
                  color: "var(--accent-secondary)",
                },
              ].map((item) => (
                <article key={item.title} className="interactive-card group rounded-2xl p-4">
                  <div
                    className="mb-3 h-1 w-10 rounded-full"
                    style={{ backgroundColor: item.color }}
                  />

                  <h3 className="font-semibold tracking-tight">{item.title}</h3>

                  <p className="mt-1.5 text-sm leading-5 text-(--muted-foreground)">
                    {item.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        id="projects"
        aria-labelledby="projects-title"
        className="scroll-mt-12 border-b border-(--border)"
      >
        <div className="shell max-w-[1480px] py-14 sm:py-16 lg:py-18">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="eyebrow">Selected projects</p>

              <h2
                id="projects-title"
                className="mt-3 max-w-3xl text-3xl font-semibold tracking-[-0.025em] sm:text-4xl"
              >
                Systems and products I&apos;ve helped <span className="gradient-text">build.</span>
              </h2>
            </div>

            <Link href="/projects" className="animated-link shrink-0 text-sm font-medium">
              View all projects
              <ArrowIcon />
            </Link>
          </div>

          <div className="mt-7 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {projects.slice(0, 3).map((project) => (
              <ProjectCard key={project.slug} {...project} />
            ))}
          </div>
        </div>
      </section>

      <section id="contact" aria-labelledby="contact-title" className="scroll-mt-12">
        <div className="shell py-14 sm:py-16 lg:py-18">
          <div className="panel relative overflow-hidden rounded-[1.5rem] p-6 sm:p-8 lg:p-10">
            <div
              aria-hidden="true"
              className="absolute -top-32 -right-32 h-80 w-80 rounded-full bg-[radial-gradient(circle,rgba(34,197,94,0.10),transparent_68%)] blur-2xl"
            />

            <div className="relative max-w-3xl">
              <p className="eyebrow">Let&apos;s connect</p>

              <h2
                id="contact-title"
                className="mt-3 text-3xl font-semibold tracking-[-0.025em] sm:text-4xl"
              >
                Have a product, system, or engineering problem to solve?
              </h2>

              <p className="mt-4 max-w-2xl text-base leading-7 text-(--muted-foreground)">
                I&apos;m open to conversations around software engineering, product development,
                backend systems, and full-stack work.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <a href="/contact" className="button-primary group">
                  Get in touch
                  <span className="transition-transform duration-200 group-hover:translate-x-1">
                    <ArrowIcon />
                  </span>
                </a>

                <a
                  href={siteConfig.links.resume}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button-secondary"
                >
                  View Resume
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
