import Link from "next/link";
import { ProjectCard } from "@/components/projects/project-card";
import { projects } from "@/lib/projects";
import { siteConfig } from "@/lib/site";

export default function Home() {
  return (
    <main id="main-content" className="flex-1">
      {/* Hero */}
      <section
        aria-labelledby="intro-title"
        className="hero-surface border-b border-(--border)"
      >
        <div className="shell py-16 sm:py-20 lg:py-24">
          <div className="max-w-3xl space-y-6">
            <p className="text-sm font-medium uppercase tracking-[0.28em] text-(--muted-foreground)">
              {siteConfig.title}
            </p>

            <h1
              id="intro-title"
              className="text-4xl font-semibold tracking-tight sm:text-5xl"
            >
              {siteConfig.name}
            </h1>

            <p className="max-w-2xl text-base leading-7 text-(--muted-foreground) sm:text-lg">
              {siteConfig.description}
            </p>

            <div className="flex flex-wrap gap-3">
              <a
                href="#projects"
                className="inline-flex items-center justify-center rounded-full bg-(--foreground) px-5 py-3 text-sm font-medium text-(--background) shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--foreground) focus-visible:ring-offset-2"
              >
                View Projects
              </a>

              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-full border-2 border-(--border) bg-(--surface) px-5 py-3 text-sm font-medium transition-all duration-200 hover:-translate-y-0.5 hover:border-(--foreground) hover:bg-(--foreground) hover:text-(--background) hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--foreground) focus-visible:ring-offset-2"
              >
                Contact Me
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Experience teaser */}
      <section
        id="experience"
        aria-labelledby="experience-title"
        className="scroll-mt-12 border-t border-(--border)"
      >
        <div className="shell py-16 sm:py-20">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.24em] text-(--muted-foreground)">
                Experience
              </p>

              <h2
                id="experience-title"
                className="mt-4 max-w-3xl text-2xl font-semibold tracking-tight sm:text-3xl"
              >
                Building production software across fintech, data, and SaaS.
              </h2>
            </div>

            <Link
              href="/experience"
              className="shrink-0 text-sm font-medium text-(--muted-foreground) transition hover:text-(--foreground)"
            >
              View full experience →
            </Link>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <article className="panel rounded-[1.75rem] p-6 sm:p-7">
              <p className="text-sm text-(--muted-foreground)">
                August 2025 – Present
              </p>

              <h3 className="mt-3 text-xl font-semibold tracking-tight">
                Senior Full Stack Engineer
              </h3>

              <p className="mt-1 text-sm text-(--muted-foreground)">
                Basserah · Remote, Saudi Arabia
              </p>

              <p className="mt-4 text-sm leading-6 text-(--muted-foreground)">
                Building enterprise data governance and collaboration
                capabilities across metadata, lineage, integrations, and
                access-control workflows.
              </p>
            </article>

            <article className="panel rounded-[1.75rem] p-6 sm:p-7">
              <p className="text-sm text-(--muted-foreground)">
                February 2022 – March 2025
              </p>

              <h3 className="mt-3 text-xl font-semibold tracking-tight">
                Software Engineer
              </h3>

              <p className="mt-1 text-sm text-(--muted-foreground)">
                Aion Digital · Remote, Bahrain
              </p>

              <p className="mt-4 text-sm leading-6 text-(--muted-foreground)">
                Built backend services and distributed systems for digital
                banking and personal finance products.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* Featured projects */}
      <section
        id="projects"
        aria-labelledby="projects-title"
        className="scroll-mt-12 border-t border-(--border)"
      >
        <div className="shell py-16 sm:py-20">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.24em] text-(--muted-foreground)">
                Featured Projects
              </p>

              <h2
                id="projects-title"
                className="mt-4 max-w-3xl text-2xl font-semibold tracking-tight sm:text-3xl"
              >
                Selected systems and products I&apos;ve helped build.
              </h2>
            </div>

            <Link
              href="/projects"
              className="shrink-0 text-sm font-medium text-(--muted-foreground) transition hover:text-(--foreground)"
            >
              View all projects →
            </Link>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects.slice(0, 3).map((project) => (
              <ProjectCard key={project.slug} {...project} />
            ))}
          </div>
        </div>
      </section>

      {/* Contact teaser */}
      <section
        id="contact"
        aria-labelledby="contact-title"
        className="scroll-mt-12 border-t border-(--border)"
      >
        <div className="shell py-16 sm:py-20">
          <div className="max-w-5xl">
            <p className="text-sm font-medium uppercase tracking-[0.24em] text-(--muted-foreground)">
              Contact
            </p>

            <h2
              id="contact-title"
              className="mt-4 max-w-3xl text-2xl font-semibold tracking-tight sm:text-3xl"
            >
              Let&apos;s build something useful.
            </h2>

            <p className="mt-6 max-w-4xl text-base leading-7 text-(--muted-foreground) sm:text-lg">
              Interested in working together, discussing a software product, or
              talking about engineering? I&apos;d be happy to connect.
            </p>

            <div className="mt-8">
              <a
                href={`mailto:${siteConfig.links.email}?subject=Portfolio%20Inquiry`}
                className="inline-flex items-center justify-center rounded-full bg-(--foreground) px-6 py-3.5 text-sm font-medium text-(--background) shadow-md transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--foreground) focus-visible:ring-offset-2"
              >
                Get in touch
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}