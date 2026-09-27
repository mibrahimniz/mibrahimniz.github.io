import { ProjectCard } from "@/components/projects/project-card";
import { projects } from "@/lib/projects";

export const metadata = {
  title: "Projects | Muhammad Ibrahim Nizamani",
  description:
    "Selected software projects across enterprise data platforms, fintech, digital banking, and modern backend systems.",
};

export default function ProjectsPage() {
  return (
    <main id="main-content" className="flex-1">
      <section
        aria-labelledby="projects-title"
        className="relative overflow-hidden border-b border-(--border)"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,color-mix(in_srgb,var(--accent)_10%,transparent),transparent_35%),radial-gradient(circle_at_85%_15%,color-mix(in_srgb,var(--accent-secondary)_10%,transparent),transparent_35%)]"
        />

        <div className="shell relative py-5 text-center sm:py-6 lg:py-7">
          <div className="mx-auto max-w-5xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-(--border) bg-(--surface-strong)/80 px-3 py-1.5 font-mono text-[10px] font-semibold tracking-[0.2em] text-(--accent) uppercase shadow-sm backdrop-blur-sm">
              <span
                aria-hidden="true"
                className="h-2 w-2 rounded-full bg-(--accent) shadow-[0_0_12px_color-mix(in_srgb,var(--accent)_60%,transparent)]"
              />
              Selected Work
            </div>

            <p className="mt-2 font-mono text-[10px] font-semibold tracking-[0.22em] text-(--section-label) uppercase sm:text-[11px]">
              Enterprise · Fintech · Digital Products
            </p>

            <h1
              id="projects-title"
              className="mx-auto mt-2 max-w-5xl text-3xl font-semibold tracking-tight sm:text-[2.5rem] lg:text-5xl"
            >
              Systems and products I&apos;ve helped{" "}
              <span className="bg-linear-to-r from-(--accent) to-(--accent-secondary) bg-clip-text text-transparent">
                build.
              </span>
            </h1>

            <p className="mx-auto mt-2.5 max-w-3xl text-sm leading-6 text-(--muted-foreground) sm:text-base sm:leading-7">
              A selection of production software spanning enterprise data governance, digital
              banking, personal finance, and modern backend systems.
            </p>
          </div>
        </div>
      </section>

      <section aria-labelledby="projects-grid-title" className="relative overflow-hidden">
        <div aria-hidden="true" className="bg-grid pointer-events-none absolute inset-0" />

        <div className="relative mx-auto w-full max-w-[1400px] px-6 py-7 sm:px-8 sm:py-9 lg:px-10 lg:py-11">
          <div className="mb-6">
            <p className="eyebrow">Portfolio</p>

            <h2
              id="projects-grid-title"
              className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl"
            >
              Selected projects
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <ProjectCard key={project.slug} {...project} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
