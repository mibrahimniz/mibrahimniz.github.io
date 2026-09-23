type ExperienceItemProps = {
  role: string;
  company: string;
  location?: string;
  period: string;
  description: string;
  highlights?: readonly string[];
  index: number;
};

export function ExperienceItem({
  role,
  company,
  location,
  period,
  description,
  highlights,
  index,
}: ExperienceItemProps) {
  return (
    <article className="group relative grid gap-6 lg:grid-cols-[180px_minmax(0,1fr)]">
      <div className="relative hidden lg:block">
        <div className="sticky top-28 flex items-start gap-4">
          <div className="flex flex-col items-center">
            <span
              aria-hidden="true"
              className="mt-2 h-3.5 w-3.5 rounded-full border-2 border-(--accent) bg-(--background) shadow-[0_0_0_6px_color-mix(in_srgb,var(--accent)_10%,transparent)] transition-all duration-300 group-hover:bg-(--accent) group-hover:shadow-[0_0_0_8px_color-mix(in_srgb,var(--accent)_12%,transparent)]"
            />

            <span aria-hidden="true" className="mt-3 h-full min-h-24 w-px bg-(--border)" />
          </div>

          <div>
            <p className="font-mono text-lg font-semibold tracking-[0.16em] text-(--accent) uppercase">
              {String(index).padStart(2, "0")}
            </p>

            <p className="mt-2 max-w-36 text-base leading-6 text-(--muted-foreground)">{period}</p>
          </div>
        </div>
      </div>

      <div className="relative overflow-hidden rounded-[1.75rem] border border-(--border) bg-(--card) p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-(--accent) hover:shadow-xl sm:p-7 lg:p-8">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-24 -right-24 h-48 w-48 rounded-full bg-(--accent)/10 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100"
        />

        <div
          aria-hidden="true"
          className="absolute top-0 left-0 h-1 w-0 bg-linear-to-r from-(--accent) to-(--accent-secondary) transition-all duration-500 group-hover:w-full"
        />

        <div className="relative">
          <div className="mb-6 flex items-center justify-between gap-4 lg:hidden">
            <span className="inline-flex items-center gap-2 rounded-full border border-(--border) bg-(--background)/60 px-3.5 py-2 font-mono text-sm font-semibold tracking-[0.16em] text-(--accent) uppercase">
              <span aria-hidden="true" className="h-2 w-2 rounded-full bg-(--accent)" />

              {String(index).padStart(2, "0")}
            </span>

            <span className="text-sm leading-6 text-(--muted-foreground) sm:text-base">
              {period}
            </span>
          </div>

          <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <p className="font-mono text-sm font-semibold tracking-[0.16em] text-(--accent) uppercase">
                {company}
              </p>

              <h2 className="mt-3 text-2xl font-semibold tracking-tight transition-colors duration-300 group-hover:text-(--accent) sm:text-3xl">
                {role}
              </h2>

              {location && (
                <p className="mt-2 text-sm leading-6 text-(--muted-foreground) sm:text-base">
                  {location}
                </p>
              )}
            </div>

            <span className="hidden shrink-0 rounded-full border border-(--border) bg-(--background)/60 px-4 py-2 font-mono text-sm font-medium tracking-[0.08em] text-(--muted-foreground) uppercase sm:inline-flex">
              {period}
            </span>
          </div>

          <div className="my-6 h-px bg-(--border)" />

          <p className="max-w-3xl text-base leading-7 text-(--muted-foreground) sm:text-lg sm:leading-8">
            {description}
          </p>

          {highlights && highlights.length > 0 && (
            <div className="mt-8">
              <p className="font-mono text-base font-semibold tracking-[0.14em] text-(--accent) uppercase">
                Key contributions
              </p>

              <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                {highlights.map((highlight) => (
                  <li
                    key={highlight}
                    className="flex gap-3 rounded-2xl border border-(--border) bg-(--background)/40 p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-(--accent)/50 hover:bg-(--background)/70"
                  >
                    <span
                      aria-hidden="true"
                      className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-(--accent)/40 text-[11px] font-semibold text-(--accent)"
                    >
                      ✓
                    </span>

                    <span className="text-sm leading-6 text-(--muted-foreground) sm:text-base sm:leading-7">
                      {highlight}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="mt-8 flex items-center gap-3">
            <span
              aria-hidden="true"
              className="h-px w-10 bg-(--accent) transition-all duration-300 group-hover:w-16"
            />

            <span className="font-mono text-sm font-semibold tracking-[0.14em] text-(--muted-foreground) uppercase">
              Professional experience
            </span>
          </div>
        </div>
      </div>
    </article>
  );
}
