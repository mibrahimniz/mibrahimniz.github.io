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
        className="shell py-16 sm:py-20 lg:py-24"
      >
        <div className="max-w-4xl">
          <p className="text-sm font-medium uppercase tracking-[0.24em] text-(--muted-foreground)">
            Projects
          </p>

          <h1
            id="projects-title"
            className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl"
          >
            Selected systems and products I&apos;ve helped build.
          </h1>

          <p className="mt-6 max-w-3xl text-base leading-7 text-(--muted-foreground) sm:text-lg">
            A selection of production systems spanning enterprise data
            governance, digital banking, personal finance, and educational
            technology.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard
              key={project.slug}
              {...project}
            />
          ))}
        </div>
      </section>
    </main>
  );
}