import Link from "next/link";
import type { Project } from "@/lib/projects";

type ProjectCaseStudyProps = {
  project: Project;
};

export function ProjectCaseStudy({
  project,
}: ProjectCaseStudyProps) {
  return (
    <main id="main-content" className="flex-1">
      <article>
        {/* Header */}
        <section
          aria-labelledby="project-title"
          className="hero-surface border-b border-(--border)"
        >
          <div className="shell py-16 sm:py-20 lg:py-24">
            <div className="max-w-4xl">
              <Link
                href="/projects"
                className="text-sm text-(--muted-foreground) transition hover:text-(--foreground)"
              >
                ← Back to projects
              </Link>

              <p className="mt-8 text-sm font-medium uppercase tracking-[0.24em] text-(--muted-foreground)">
                {project.category}
              </p>

              <h1
                id="project-title"
                className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl"
              >
                {project.name}
              </h1>

              <p className="mt-4 text-sm text-(--muted-foreground)">
                {project.period}
              </p>

              <p className="mt-8 max-w-3xl text-lg leading-8 text-(--muted-foreground) sm:text-xl">
                {project.description}
              </p>
            </div>
          </div>
        </section>

        {/* Overview */}
        <section
          aria-labelledby="overview-title"
          className="border-b border-(--border)"
        >
          <div className="shell py-14 sm:py-16">
            <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr]">
              <div>
                <p className="text-sm font-medium uppercase tracking-[0.24em] text-(--muted-foreground)">
                  Overview
                </p>

                <h2
                  id="overview-title"
                  className="mt-3 text-2xl font-semibold tracking-tight"
                >
                  What is the product?
                </h2>
              </div>

              <p className="max-w-3xl text-base leading-7 text-(--muted-foreground) sm:text-lg">
                {project.overview}
              </p>
            </div>
          </div>
        </section>

        {/* Role */}
        <section
          aria-labelledby="role-title"
          className="border-b border-(--border)"
        >
          <div className="shell py-14 sm:py-16">
            <div className="max-w-3xl">
              <p className="text-sm font-medium uppercase tracking-[0.24em] text-(--muted-foreground)">
                My Role
              </p>

              <h2
                id="role-title"
                className="mt-3 text-2xl font-semibold tracking-tight"
              >
                What I worked on
              </h2>

              <p className="mt-5 text-base leading-7 text-(--muted-foreground) sm:text-lg">
                {project.role}
              </p>
            </div>
          </div>
        </section>

        {/* Contributions */}
        <section
          aria-labelledby="contributions-title"
          className="border-b border-(--border)"
        >
          <div className="shell py-14 sm:py-16">
            <div className="max-w-4xl">
              <p className="text-sm font-medium uppercase tracking-[0.24em] text-(--muted-foreground)">
                Contributions
              </p>

              <h2
                id="contributions-title"
                className="mt-3 text-2xl font-semibold tracking-tight"
              >
                Engineering work
              </h2>

              <ul className="mt-8 space-y-4">
                {project.contributions.map((contribution) => (
                  <li
                    key={contribution}
                    className="flex gap-4 text-base leading-7 text-(--muted-foreground)"
                  >
                    <span
                      aria-hidden="true"
                      className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-(--accent)"
                    />

                    <span>{contribution}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Technical details */}
        <section
          aria-labelledby="technical-title"
          className="border-b border-(--border)"
        >
          <div className="shell py-14 sm:py-16">
            <div className="max-w-4xl">
              <p className="text-sm font-medium uppercase tracking-[0.24em] text-(--muted-foreground)">
                Technical Details
              </p>

              <h2
                id="technical-title"
                className="mt-3 text-2xl font-semibold tracking-tight"
              >
                Architecture and engineering
              </h2>

              <ul className="mt-8 space-y-4">
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
        </section>

        {/* Technologies */}
        <section aria-labelledby="technologies-title">
          <div className="shell py-14 sm:py-16 lg:py-20">
            <div className="max-w-4xl">
              <p className="text-sm font-medium uppercase tracking-[0.24em] text-(--muted-foreground)">
                Technology
              </p>

              <h2
                id="technologies-title"
                className="mt-3 text-2xl font-semibold tracking-tight"
              >
                Technology stack
              </h2>

              <ul className="mt-6 flex flex-wrap gap-2">
                {project.technologies.map((technology) => (
                  <li
                    key={technology}
                    className="rounded-full border border-(--border) px-3 py-1.5 text-sm text-(--muted-foreground)"
                  >
                    {technology}
                  </li>
                ))}
              </ul>

              <div className="mt-10">
                <Link
                  href="/projects"
                  className="text-sm font-medium text-(--muted-foreground) transition hover:text-(--foreground)"
                >
                  ← Back to all projects
                </Link>
              </div>
            </div>
          </div>
        </section>
      </article>
    </main>
  );
}