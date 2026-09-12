import Link from "next/link";

type ProjectCardProps = {
  slug: string;
  name: string;
  category: string;
  description: string;
  technologies: readonly string[];
};

export function ProjectCard({
  slug,
  name,
  category,
  description,
  technologies,
}: ProjectCardProps) {
  return (
    <article className="panel flex h-full flex-col rounded-[1.75rem] p-6 sm:p-7">
      <p className="text-sm font-medium uppercase tracking-[0.2em] text-(--muted-foreground)">
        {category}
      </p>

      <h2 className="mt-4 text-xl font-semibold tracking-tight">
        {name}
      </h2>

      <p className="mt-3 flex-1 text-sm leading-6 text-(--muted-foreground)">
        {description}
      </p>

      <div className="mt-5">
        <ul className="flex flex-wrap gap-2">
          {technologies.map((technology) => (
            <li
              key={technology}
              className="rounded-full border border-(--border) px-3 py-1 text-xs text-(--muted-foreground)"
            >
              {technology}
            </li>
          ))}
        </ul>
      </div>

      <Link
        href={`/projects/${slug}`}
        className="mt-6 inline-flex w-fit text-sm font-medium transition hover:translate-x-1"
      >
        View case study →
      </Link>
    </article>
  );
}