import Link from "next/link";

type ProjectCardProps = {
  slug: string;
  name: string;
  category: string;
  description: string;
  technologies: readonly string[];
};

export function ProjectCard({ slug, name, category, description, technologies }: ProjectCardProps) {
  return (
    <article className="group relative flex h-full min-h-[520px] flex-col overflow-hidden rounded-[1.5rem] border border-(--border) bg-(--card) p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-(--accent) hover:shadow-xl sm:p-7">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-20 -right-20 h-40 w-40 rounded-full bg-(--accent)/10 opacity-0 blur-3xl transition-opacity duration-300 group-hover:opacity-100"
      />

      <div className="relative">
        <div className="flex items-start justify-between gap-3">
          <p className="text-sm font-semibold tracking-[0.14em] text-(--accent) uppercase lg:whitespace-nowrap">
            {category}
          </p>

          <span className="shrink-0 rounded-full border border-(--border) bg-(--background)/60 px-3 py-1 font-mono text-[10px] font-medium tracking-[0.1em] text-(--muted-foreground)">
            CASE STUDY
          </span>
        </div>

        <h2 className="mt-5 text-2xl font-semibold tracking-tight transition-colors duration-300 group-hover:text-(--accent) sm:text-[1.65rem]">
          {name}
        </h2>
      </div>

      <div className="relative my-6 h-px bg-(--border)" />

      <p className="relative flex-1 text-sm leading-7 text-(--muted-foreground) sm:text-[0.95rem]">
        {description}
      </p>

      <div className="relative mt-7">
        <p className="mb-3 font-mono text-sm font-semibold tracking-[0.16em] text-(--accent) uppercase">
          Technology
        </p>

        <ul className="flex flex-wrap gap-2">
          {technologies.map((technology) => (
            <li
              key={technology}
              className="rounded-full border border-(--border) bg-(--background)/60 px-3 py-1.5 text-xs font-medium text-(--muted-foreground) transition-colors duration-200 group-hover:border-(--border)"
            >
              {technology}
            </li>
          ))}
        </ul>
      </div>

      <div className="relative mt-8">
        <Link
          href={`/projects/${slug}`}
          className="inline-flex items-center gap-2 rounded-full border border-(--border) bg-(--background) px-4 py-2.5 text-sm font-semibold text-(--foreground) shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-(--accent) hover:bg-(--accent) hover:text-white hover:shadow-lg focus-visible:ring-2 focus-visible:ring-(--accent) focus-visible:ring-offset-2 focus-visible:outline-none"
        >
          <span>View case study</span>

          <span
            aria-hidden="true"
            className="transition-transform duration-300 group-hover:translate-x-1"
          >
            →
          </span>
        </Link>
      </div>

      <div
        aria-hidden="true"
        className="absolute right-7 bottom-0 left-7 h-px origin-left scale-x-0 bg-linear-to-r from-(--accent) to-(--accent-secondary) transition-transform duration-300 group-hover:scale-x-100"
      />
    </article>
  );
}
