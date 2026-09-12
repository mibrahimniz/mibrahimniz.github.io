type ExperienceItemProps = {
  role: string;
  company: string;
  location?: string;
  period: string;
  description: string;
  highlights?: readonly string[];
};

export function ExperienceItem({
  role,
  company,
  location,
  period,
  description,
  highlights,
}: ExperienceItemProps) {
  return (
    <article className="border-t border-(--border) pt-6">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between">
        <div>
          <h2 className="text-xl font-semibold tracking-tight">{role}</h2>

          <p className="mt-1 text-(--muted-foreground)">
            {company}
            {location ? ` · ${location}` : ""}
          </p>
        </div>

        <p className="text-sm text-(--muted-foreground)">{period}</p>
      </div>

      <p className="mt-5 max-w-3xl text-base leading-7 text-(--muted-foreground)">
        {description}
      </p>

      {highlights && highlights.length > 0 && (
        <ul className="mt-5 max-w-3xl space-y-2 text-sm leading-6 text-(--muted-foreground)">
          {highlights.map((highlight) => (
            <li key={highlight} className="flex gap-3">
              <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-(--accent)" />
              <span>{highlight}</span>
            </li>
          ))}
        </ul>
      )}
    </article>
  );
}