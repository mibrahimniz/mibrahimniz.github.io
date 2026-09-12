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
        className="shell py-16 sm:py-20 lg:py-24"
      >
        <div className="max-w-4xl">
          <p className="text-sm font-medium uppercase tracking-[0.24em] text-(--muted-foreground)">
            Experience
          </p>

          <h1
            id="experience-title"
            className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl"
          >
            Building production software across fintech, data, and SaaS.
          </h1>

          <p className="mt-6 max-w-3xl text-base leading-7 text-(--muted-foreground) sm:text-lg">
            A career spanning enterprise applications, digital banking,
            distributed systems, data platforms, and full-stack product
            development.
          </p>

          <div className="mt-12 space-y-10">
            {experiences.map((experience) => (
              <ExperienceItem
                key={`${experience.company}-${experience.period}`}
                {...experience}
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}