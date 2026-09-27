import { ExperienceItem } from "@/components/experience/experience-item";

export const metadata = {
  title: "Experience | Muhammad Ibrahim Nizamani",
  description:
    "Professional experience of Muhammad Ibrahim Nizamani across fintech, digital banking, enterprise SaaS, data governance, and software development.",
};

const experiences = [
  {
    role: "Senior Full Stack Engineer",
    company: "Basserah",
    location: "Remote, Saudi Arabia",
    period: "August 2025 – Present",
    description:
      "Designing and shipping enterprise-grade data governance and collaboration platform features across frontend and backend systems.",
    highlights: [
      "Built features across metadata management, data governance, lineage visualization, collaboration, and access-control workflows.",
      "Developed APIs and integrations for enterprise data platforms and authentication workflows.",
      "Worked across frontend and backend systems using React, Node.js, TypeScript, Express.js, Sequelize, and MSSQL.",
    ],
  },
  {
    role: "Software Engineer",
    company: "Aion Digital",
    location: "Remote, Bahrain",
    period: "February 2022 – March 2025",
    description:
      "Contributed to enterprise digital banking and personal finance platforms, building scalable backend services, APIs, integrations, and distributed systems.",
    highlights: [
      "Worked on transaction insights, notifications, payroll workflows, transfers, budgeting, and other banking capabilities.",
      "Designed and implemented distributed services and asynchronous processing using Node.js, TypeScript, Python, and RabbitMQ.",
      "Worked with containerized and Kubernetes-based production deployments.",
    ],
  },
  {
    role: "NodeJS Developer",
    company: "Viltco Technologies",
    location: "On-site, Lahore",
    period: "October 2021 – December 2021",
    description:
      "Worked on Node.js backend development, APIs, integrations, and production application workflows.",
  },
  {
    role: "NodeJS Backend Developer",
    company: "AKTCO-Khalifeh Advanced Est.",
    location: "Remote, Jordan",
    period: "May 2020 – September 2021",
    description:
      "Developed backend systems, API integrations, reporting functionality, and services for educational technology platforms.",
  },
  {
    role: "Freelance NodeJS Backend Developer",
    company: "Freelance",
    period: "April 2019 – May 2020",
    description:
      "Delivered backend systems, REST APIs, authentication workflows, third-party integrations, and Node.js applications for international client projects.",
  },
] as const;

export default function ExperiencePage() {
  return (
    <main id="main-content" className="flex-1">
      <section
        aria-labelledby="experience-title"
        className="relative overflow-hidden border-b border-(--border)"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,color-mix(in_srgb,var(--accent)_10%,transparent),transparent_35%),radial-gradient(circle_at_85%_15%,color-mix(in_srgb,var(--accent-secondary)_10%,transparent),transparent_35%)]"
        />

        <div className="shell relative py-6 text-center sm:py-7 lg:py-8">
          <div className="mx-auto max-w-5xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-(--border) bg-(--surface-strong)/80 px-3.5 py-1.5 font-mono text-[10px] font-semibold tracking-[0.2em] text-(--accent) uppercase shadow-sm backdrop-blur-sm">
              <span
                aria-hidden="true"
                className="h-2 w-2 rounded-full bg-(--accent) shadow-[0_0_12px_color-mix(in_srgb,var(--accent)_60%,transparent)]"
              />
              Career & Engineering Experience
            </div>

            <p className="mt-3 font-mono text-[11px] font-semibold tracking-[0.22em] text-(--section-label) uppercase">
              2019 — Present
            </p>

            <h1
              id="experience-title"
              className="mx-auto mt-2 max-w-5xl text-4xl font-semibold tracking-tight sm:text-[2.75rem] lg:text-5xl"
            >
              A career built around{" "}
              <span className="bg-linear-to-r from-(--accent) to-(--accent-secondary) bg-clip-text text-transparent">
                production software.
              </span>
            </h1>

            <p className="mx-auto mt-3 max-w-4xl text-sm leading-6 text-(--muted-foreground) sm:text-base sm:leading-7">
              Seven-plus years of software engineering experience spanning enterprise applications,
              fintech, digital banking, personal finance, data platforms, and full-stack product
              development.
            </p>
          </div>
        </div>
      </section>

      <section
        aria-label="Career overview"
        className="relative overflow-hidden border-b border-(--border)"
      >
        <div aria-hidden="true" className="bg-grid pointer-events-none absolute inset-0" />

        <div className="shell relative py-8 sm:py-10 lg:py-12">
          <div className="grid gap-5 md:grid-cols-3">
            <div className="group rounded-[1.5rem] border border-(--border) bg-(--surface-strong) p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-(--accent) hover:shadow-lg sm:p-7">
              <p className="font-mono text-base font-semibold tracking-[0.14em] text-(--accent) uppercase">
                Experience
              </p>

              <p className="mt-4 text-2xl font-semibold tracking-tight sm:text-[1.7rem]">
                7+ years
              </p>

              <p className="mt-2 text-sm leading-6 text-(--muted-foreground) sm:text-base">
                Professional software development
              </p>
            </div>

            <div className="group rounded-[1.5rem] border border-(--border) bg-(--surface-strong) p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-(--accent) hover:shadow-lg sm:p-7">
              <p className="font-mono text-base font-semibold tracking-[0.14em] text-(--accent) uppercase">
                Focus
              </p>

              <p className="mt-4 text-2xl font-semibold tracking-tight sm:text-[1.7rem]">
                Full Stack
              </p>

              <p className="mt-2 text-sm leading-6 text-(--muted-foreground) sm:text-base">
                Backend architecture with frontend experience
              </p>
            </div>

            <div className="group rounded-[1.5rem] border border-(--border) bg-(--surface-strong) p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-(--accent) hover:shadow-lg sm:p-7">
              <p className="font-mono text-base font-semibold tracking-[0.14em] text-(--accent) uppercase">
                Domains
              </p>

              <p className="mt-4 text-2xl font-semibold tracking-tight sm:text-[1.7rem]">
                Fintech + Data
              </p>

              <p className="mt-2 text-sm leading-6 text-(--muted-foreground) sm:text-base">
                Enterprise systems and SaaS products
              </p>
            </div>
          </div>
        </div>
      </section>

      <section aria-labelledby="career-title" className="relative overflow-hidden">
        <div aria-hidden="true" className="bg-grid pointer-events-none absolute inset-0" />

        <div className="shell relative py-12 sm:py-16 lg:py-20">
          <div className="mx-auto mb-10 max-w-4xl text-center sm:mb-12">
            <p className="font-mono text-base font-semibold tracking-[0.16em] text-(--accent) uppercase">
              Career Timeline
            </p>

            <h2
              id="career-title"
              className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl lg:text-[2.75rem]"
            >
              From backend development to{" "}
              <span className="bg-linear-to-r from-(--accent) to-(--accent-secondary) bg-clip-text text-transparent">
                full-stack engineering.
              </span>
            </h2>

            <p className="mx-auto mt-4 max-w-3xl text-base leading-7 text-(--muted-foreground) sm:text-lg">
              A progression through software development roles covering backend engineering,
              distributed systems, fintech, digital banking, enterprise data, and full-stack product
              development.
            </p>
          </div>

          <div className="space-y-8 lg:space-y-10">
            {experiences.map((experience, index) => (
              <ExperienceItem
                key={`${experience.company}-${experience.period}`}
                {...experience}
                index={index + 1}
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
