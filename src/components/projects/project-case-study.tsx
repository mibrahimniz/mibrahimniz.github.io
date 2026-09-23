import Link from "next/link";
import type { Project } from "@/lib/projects";

type ProjectCaseStudyProps = {
  project: Project;
};

function ArrowRight() {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" fill="none" className="h-4 w-4">
      <path
        d="M4 10h11M10.5 5.5 15 10l-4.5 4.5"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ArrowLeft() {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" fill="none" className="h-4 w-4">
      <path
        d="M16 10H5m4.5-4.5L5 10l4.5 4.5"
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
        d="m8.5 8-4 4 4 4M15.5 8l4 4-4 4M13.5 5l-3 14"
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
        d="m12 3 8 4.5-8 4.5-8-4.5L12 3Z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
      <path
        d="m4 12 8 4.5 8-4.5M4 16.5l8 4.5 8-4.5"
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

export function ProjectCaseStudy({ project }: ProjectCaseStudyProps) {
  return (
    <main id="main-content" className="flex-1">
      <article>
        <section
          aria-labelledby="project-title"
          className="hero-surface relative overflow-hidden border-b border-(--border)"
        >
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute top-[18%] left-[8%] h-64 w-64 rounded-full bg-(--accent)/5 blur-3xl" />
            <div className="absolute top-[10%] right-[8%] h-72 w-72 rounded-full bg-(--accent-secondary)/5 blur-3xl" />
          </div>

          <div className="shell relative py-12 sm:py-16 lg:py-20">
            <Link
              href="/projects"
              className="animated-link rounded-full border border-(--border) bg-(--surface) px-4 py-2 text-sm font-medium shadow-sm hover:border-(--accent)"
            >
              <ArrowLeft />
              <span>Back to projects</span>
            </Link>

            <div className="mt-12 grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
              <div className="max-w-4xl">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="eyebrow inline-flex items-center gap-2 rounded-full border border-(--border) bg-(--surface) px-3 py-2">
                    <span className="h-2 w-2 rounded-full bg-(--accent)" />
                    {project.category}
                  </span>

                  <span className="font-mono text-xs font-medium tracking-[0.2em] text-(--muted-foreground) uppercase">
                    Project{" "}
                    {String(
                      ["bayanatihub", "ingage-pfm", "rubix"].indexOf(project.slug) + 1,
                    ).padStart(2, "0")}
                  </span>
                </div>

                <h1
                  id="project-title"
                  className="mt-7 max-w-4xl text-5xl font-semibold tracking-[-0.04em] sm:text-6xl lg:text-7xl"
                >
                  <span className="gradient-text">{project.name}</span>
                </h1>

                <p className="mt-5 font-mono text-xs font-medium tracking-[0.2em] text-(--muted-foreground) uppercase">
                  {project.period}
                </p>

                <p className="mt-8 max-w-3xl text-lg leading-8 text-(--muted-foreground) sm:text-xl">
                  {project.description}
                </p>
              </div>

              <div className="hidden lg:block">
                <div className="font-mono text-[7rem] leading-none font-semibold tracking-[-0.08em] text-(--foreground)/5">
                  {String(
                    ["bayanatihub", "ingage-pfm", "rubix"].indexOf(project.slug) + 1,
                  ).padStart(2, "0")}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="border-b border-(--border)">
          <div className="shell py-10 sm:py-12">
            <div className="grid gap-4 md:grid-cols-3">
              <div className="interactive-card rounded-2xl p-6">
                <p className="eyebrow">Project</p>

                <h2 className="mt-4 text-lg font-semibold">{project.name}</h2>

                <p className="mt-2 text-sm text-(--muted-foreground)">{project.category}</p>
              </div>

              <div className="interactive-card rounded-2xl p-6">
                <p className="eyebrow">Timeline</p>

                <h2 className="mt-4 text-lg font-semibold">{project.period}</h2>

                <p className="mt-2 text-sm text-(--muted-foreground)">Professional project</p>
              </div>

              <div className="interactive-card rounded-2xl p-6">
                <p className="eyebrow">Focus</p>

                <h2 className="mt-4 text-lg font-semibold">Full Stack Engineering</h2>

                <p className="mt-2 text-sm text-(--muted-foreground)">
                  Backend-focused product development
                </p>
              </div>
            </div>
          </div>
        </section>

        <section aria-labelledby="overview-title" className="border-b border-(--border)">
          <div className="shell py-20 sm:py-24 lg:py-28">
            <div className="grid gap-12 lg:grid-cols-[0.65fr_1.35fr] lg:items-start">
              <div>
                <p className="eyebrow">01 · Overview</p>

                <h2
                  id="overview-title"
                  className="mt-4 max-w-sm text-3xl font-semibold tracking-tight sm:text-4xl"
                >
                  Understanding the product.
                </h2>

                <div className="mt-6 h-px w-16 bg-(--accent)" />
              </div>

              <div className="panel rounded-[1.75rem] p-8 sm:p-10">
                <p className="text-lg leading-8 text-(--muted-foreground) sm:text-xl sm:leading-9">
                  {project.overview}
                </p>
              </div>
            </div>
          </div>
        </section>

        <section aria-labelledby="role-title" className="border-b border-(--border)">
          <div className="shell py-20 sm:py-24 lg:py-28">
            <div className="grid gap-12 lg:grid-cols-[0.65fr_1.35fr] lg:items-start">
              <div>
                <p className="eyebrow">02 · My Role</p>

                <h2
                  id="role-title"
                  className="mt-4 max-w-sm text-3xl font-semibold tracking-tight sm:text-4xl"
                >
                  Where I contributed.
                </h2>

                <div className="mt-6 h-px w-16 bg-(--accent-secondary)" />
              </div>

              <div className="panel rounded-[1.75rem] p-8 sm:p-10">
                <div className="flex items-center gap-4 border-b border-(--border) pb-6">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-(--border) bg-(--surface-soft) text-(--accent-secondary)">
                    <CodeIcon />
                  </div>

                  <div>
                    <p className="eyebrow">Engineering Responsibility</p>
                  </div>
                </div>

                <p className="mt-8 text-lg leading-8 text-(--muted-foreground) sm:text-xl sm:leading-9">
                  {project.role}
                </p>
              </div>
            </div>
          </div>
        </section>

        <section aria-labelledby="contributions-title" className="border-b border-(--border)">
          <div className="shell py-20 sm:py-24 lg:py-28">
            <div className="grid gap-12 lg:grid-cols-[0.65fr_1.35fr]">
              <div>
                <p className="eyebrow">03 · Contributions</p>

                <h2
                  id="contributions-title"
                  className="mt-4 max-w-sm text-3xl font-semibold tracking-tight sm:text-4xl"
                >
                  Engineering work.
                </h2>

                <p className="mt-5 max-w-sm text-base leading-7 text-(--muted-foreground)">
                  The areas where I contributed across product development, backend systems,
                  integrations, and engineering workflows.
                </p>
              </div>

              <div className="space-y-3">
                {project.contributions.map((contribution, index) => (
                  <div key={contribution} className="interactive-card group rounded-2xl p-5 sm:p-6">
                    <div className="flex gap-5">
                      <span className="font-mono text-xs font-medium text-(--accent)">
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <p className="text-base leading-7 text-(--muted-foreground) transition-colors group-hover:text-(--foreground)">
                        {contribution}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section aria-labelledby="technical-title" className="border-b border-(--border)">
          <div className="shell py-20 sm:py-24 lg:py-28">
            <div className="grid gap-12 lg:grid-cols-[0.65fr_1.35fr]">
              <div>
                <p className="eyebrow">04 · Technical Architecture</p>

                <h2
                  id="technical-title"
                  className="mt-4 max-w-sm text-3xl font-semibold tracking-tight sm:text-4xl"
                >
                  How the system was engineered.
                </h2>

                <div className="mt-6 h-px w-16 bg-(--accent-tertiary)" />
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="interactive-card rounded-2xl p-6">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-(--border) bg-(--surface-soft) text-(--accent-secondary)">
                    <LayersIcon />
                  </div>

                  <p className="eyebrow mt-6">Architecture</p>

                  <h3 className="mt-2 text-lg font-semibold">Application Services</h3>

                  <p className="mt-3 text-sm leading-6 text-(--muted-foreground)">
                    Backend services, APIs, application workflows, and supporting platform
                    capabilities.
                  </p>
                </div>

                <div className="interactive-card rounded-2xl p-6">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-(--border) bg-(--surface-soft) text-(--accent)">
                    <DatabaseIcon />
                  </div>

                  <p className="eyebrow mt-6">Data</p>

                  <h3 className="mt-2 text-lg font-semibold">Data & Persistence</h3>

                  <p className="mt-3 text-sm leading-6 text-(--muted-foreground)">
                    Data access, persistence, APIs, integrations, and application-level data
                    workflows.
                  </p>
                </div>

                <div className="sm:col-span-2">
                  <div className="panel rounded-2xl p-6 sm:p-8">
                    <div className="flex items-center gap-3">
                      <div className="h-2 w-2 rounded-full bg-(--accent)" />

                      <p className="eyebrow">Engineering Highlights</p>
                    </div>

                    <ul className="mt-7 space-y-4">
                      {project.technicalHighlights.map((highlight) => (
                        <li
                          key={highlight}
                          className="flex gap-4 text-base leading-7 text-(--muted-foreground)"
                        >
                          <span
                            aria-hidden="true"
                            className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-(--accent)"
                          />

                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section aria-labelledby="technologies-title" className="border-b border-(--border)">
          <div className="shell py-20 sm:py-24 lg:py-28">
            <div className="grid gap-12 lg:grid-cols-[0.65fr_1.35fr]">
              <div>
                <p className="eyebrow">05 · Technology</p>

                <h2
                  id="technologies-title"
                  className="mt-4 max-w-sm text-3xl font-semibold tracking-tight sm:text-4xl"
                >
                  Technology behind the product.
                </h2>

                <p className="mt-5 max-w-sm text-base leading-7 text-(--muted-foreground)">
                  The primary technologies and engineering tools used across the project.
                </p>
              </div>

              <div className="panel rounded-[1.75rem] p-7 sm:p-9">
                <div className="flex flex-wrap gap-3">
                  {project.technologies.map((technology) => (
                    <span key={technology} className="tech-badge">
                      {technology}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="shell py-20 sm:py-24 lg:py-28">
            <div className="panel accent-glow overflow-hidden rounded-[2rem] p-8 sm:p-10 lg:p-12">
              <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
                <div className="max-w-2xl">
                  <p className="eyebrow">More Engineering Work</p>

                  <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
                    Explore more projects.
                  </h2>

                  <p className="mt-4 text-base leading-7 text-(--muted-foreground)">
                    Explore other production systems and products I&apos;ve worked on across
                    fintech, enterprise data, and digital banking.
                  </p>
                </div>

                <Link href="/projects" className="button-primary shrink-0">
                  View all projects
                  <ArrowRight />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </article>
    </main>
  );
}
