export const metadata = {
  title: "About | Muhammad Ibrahim Nizamani",
  description:
    "Learn more about Muhammad Ibrahim Nizamani, a Senior Full Stack Engineer focused on backend systems, distributed systems, enterprise applications, and modern web products.",
};

function CodeIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="h-5 w-5">
      <path
        d="m8.5 8-4 4 4 4M15.5 8l4 4-4 4M13.5 5l-3 14"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function LayersIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="h-5 w-5">
      <path
        d="m12 3 8 4.5-8 4.5-8-4.5L12 3Z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
      <path
        d="m4 12 8 4.5 8-4.5M4 16.5l8 4.5 8-4.5"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function DatabaseIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="h-5 w-5">
      <ellipse cx="12" cy="5" rx="7" ry="3" stroke="currentColor" strokeWidth="1.7" />
      <path
        d="M5 5v7c0 1.66 3.13 3 7 3s7-1.34 7-3V5M5 12v7c0 1.66 3.13 3 7 3s7-1.34 7-3v-7"
        stroke="currentColor"
        strokeWidth="1.7"
      />
    </svg>
  );
}

function GlobeIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="h-5 w-5">
      <circle cx="12" cy="12" r="8.5" stroke="currentColor" strokeWidth="1.7" />
      <path
        d="M3.8 12h16.4M12 3.5c2.1 2.35 3.15 5.18 3.15 8.5S14.1 18.15 12 20.5C9.9 18.15 8.85 15.32 8.85 12S9.9 5.85 12 3.5Z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
    </svg>
  );
}

function ArrowDownIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" fill="none" className="h-4 w-4">
      <path
        d="M10 4v11M5.5 10.5 10 15l4.5-4.5"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function AboutPage() {
  return (
    <main id="main-content" className="flex-1">
      <section className="hero-surface relative overflow-hidden border-b border-(--border)">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute top-[15%] left-[5%] h-72 w-72 rounded-full bg-(--accent)/6 blur-3xl" />
          <div className="absolute top-[10%] right-[8%] h-80 w-80 rounded-full bg-(--accent-secondary)/6 blur-3xl" />
        </div>

        <div className="relative mx-auto flex w-full max-w-[1400px] justify-center px-6 py-10 text-center sm:px-8 sm:py-14 lg:px-10 lg:py-16">
          <div className="w-full max-w-5xl">
            <div className="eyebrow inline-flex items-center gap-3 rounded-full border border-(--border) bg-(--surface) px-5 py-2.5 shadow-sm">
              <span className="h-2.5 w-2.5 rounded-full bg-(--accent)" />
              Career & Engineering Profile
            </div>

            <p className="mt-7 font-mono text-[15px] font-semibold tracking-[0.18em] text-(--accent) uppercase">
              7+ Years · Full Stack · Backend Focused
            </p>

            <h1
              id="about-title"
              className="mx-auto mt-4 max-w-5xl text-5xl font-semibold tracking-[-0.045em] sm:text-6xl lg:text-7xl"
            >
              A career built around <span className="gradient-text">production software.</span>
            </h1>

            <p className="mx-auto mt-6 max-w-4xl text-lg leading-8 text-(--muted-foreground) sm:text-xl sm:leading-9">
              Seven-plus years of software engineering experience spanning enterprise applications,
              fintech, digital banking, personal finance, data platforms, and full-stack product
              development.
            </p>
          </div>
        </div>
      </section>

      <section className="border-b border-(--border)">
        <div className="shell py-10 sm:py-14">
          <div className="grid gap-4 md:grid-cols-3">
            <div className="interactive-card rounded-2xl p-6">
              <p className="eyebrow">Experience</p>

              <h2 className="mt-4 text-2xl font-semibold">7+ years</h2>

              <p className="mt-2 text-sm leading-6 text-(--muted-foreground)">
                Professional software development
              </p>
            </div>

            <div className="interactive-card rounded-2xl p-6">
              <p className="eyebrow">Focus</p>

              <h2 className="mt-4 text-2xl font-semibold">Full Stack</h2>

              <p className="mt-2 text-sm leading-6 text-(--muted-foreground)">
                Backend architecture with frontend experience
              </p>
            </div>

            <div className="interactive-card rounded-2xl p-6">
              <p className="eyebrow">Domains</p>

              <h2 className="mt-4 text-2xl font-semibold">Fintech + Data</h2>

              <p className="mt-2 text-sm leading-6 text-(--muted-foreground)">
                Enterprise systems and SaaS products
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-(--border)">
        <div className="shell py-20 sm:py-24 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-[0.65fr_1.35fr] lg:items-start">
            <div>
              <p className="eyebrow">01 · Profile</p>

              <h2 className="mt-4 max-w-sm text-3xl font-semibold tracking-tight sm:text-4xl">
                Building systems with a product mindset.
              </h2>

              <div className="mt-6 h-px w-16 bg-(--accent)" />
            </div>

            <div className="panel rounded-[1.75rem] p-8 sm:p-10">
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-(--border) bg-(--surface-soft) text-(--accent-secondary)">
                  <CodeIcon />
                </div>

                <div className="space-y-5 text-base leading-7 text-(--muted-foreground) sm:text-lg sm:leading-8">
                  <p>
                    I&apos;m Muhammad Ibrahim Nizamani, a Senior Full Stack Engineer focused on
                    building scalable backend systems, enterprise applications, and modern web
                    products.
                  </p>

                  <p>
                    My strongest areas are backend and distributed systems, APIs, microservices,
                    enterprise integrations, and full-stack product development. I primarily work
                    with Node.js, TypeScript, Python, and React.
                  </p>

                  <p>
                    Over my career, I&apos;ve worked across fintech, digital banking, personal
                    finance, enterprise data governance, SaaS, and educational technology,
                    contributing to products with complex business workflows and integration
                    requirements.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-(--border)">
        <div className="shell py-20 sm:py-24 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-[0.65fr_1.35fr]">
            <div>
              <p className="eyebrow">02 · Engineering Strengths</p>

              <h2 className="mt-4 max-w-sm text-3xl font-semibold tracking-tight sm:text-4xl">
                Areas where I do most of my work.
              </h2>

              <p className="mt-5 max-w-sm text-base leading-7 text-(--muted-foreground)">
                A combination of backend depth, full-stack experience, and production engineering
                across business-critical systems.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="interactive-card rounded-2xl p-6">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-(--border) bg-(--surface-soft) text-(--accent-secondary)">
                  <LayersIcon />
                </div>

                <p className="eyebrow mt-6">Architecture</p>

                <h3 className="mt-2 text-lg font-semibold">APIs & Microservices</h3>

                <p className="mt-3 text-sm leading-6 text-(--muted-foreground)">
                  REST and GraphQL APIs, modular services, distributed systems, service-oriented
                  architectures, and backend application design.
                </p>
              </div>

              <div className="interactive-card rounded-2xl p-6">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-(--border) bg-(--surface-soft) text-(--accent)">
                  <DatabaseIcon />
                </div>

                <p className="eyebrow mt-6">Data</p>

                <h3 className="mt-2 text-lg font-semibold">SQL & NoSQL Systems</h3>

                <p className="mt-3 text-sm leading-6 text-(--muted-foreground)">
                  PostgreSQL, MSSQL Server, MySQL, MongoDB, data access layers, caching,
                  persistence, and application data workflows.
                </p>
              </div>

              <div className="interactive-card rounded-2xl p-6">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-(--border) bg-(--surface-soft) text-(--accent-tertiary)">
                  <GlobeIcon />
                </div>

                <p className="eyebrow mt-6">Integration</p>

                <h3 className="mt-2 text-lg font-semibold">Enterprise Integrations</h3>

                <p className="mt-3 text-sm leading-6 text-(--muted-foreground)">
                  External APIs, identity systems, analytics platforms, messaging systems, payment
                  integrations, and business workflows.
                </p>
              </div>

              <div className="interactive-card rounded-2xl p-6">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-(--border) bg-(--surface-soft) text-(--accent)">
                  <CodeIcon />
                </div>

                <p className="eyebrow mt-6">Full Stack</p>

                <h3 className="mt-2 text-lg font-semibold">Product Development</h3>

                <p className="mt-3 text-sm leading-6 text-(--muted-foreground)">
                  React applications, state management, backend services, APIs, testing, deployment
                  workflows, and end-to-end product development.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-(--border)">
        <div className="shell py-20 sm:py-24 lg:py-28">
          <div className="max-w-3xl">
            <p className="eyebrow">03 · Domains</p>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
              Experience across different product environments.
            </h2>

            <p className="mt-5 text-base leading-7 text-(--muted-foreground) sm:text-lg">
              My professional work has covered several areas where backend reliability,
              integrations, data, and business workflows are central to the product.
            </p>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <div className="interactive-card rounded-2xl p-6">
              <p className="eyebrow">01</p>

              <h3 className="mt-5 text-lg font-semibold">Fintech</h3>

              <p className="mt-2 text-sm leading-6 text-(--muted-foreground)">
                Personal finance, financial workflows, transactions, savings, notifications, and
                banking integrations.
              </p>
            </div>

            <div className="interactive-card rounded-2xl p-6">
              <p className="eyebrow">02</p>

              <h3 className="mt-5 text-lg font-semibold">Digital Banking</h3>

              <p className="mt-2 text-sm leading-6 text-(--muted-foreground)">
                Retail and corporate banking workflows, accounts, transfers, payroll, beneficiaries,
                and back-office systems.
              </p>
            </div>

            <div className="interactive-card rounded-2xl p-6">
              <p className="eyebrow">03</p>

              <h3 className="mt-5 text-lg font-semibold">Enterprise Data</h3>

              <p className="mt-2 text-sm leading-6 text-(--muted-foreground)">
                Data governance, metadata, lineage, discovery, collaboration, and enterprise data
                integrations.
              </p>
            </div>

            <div className="interactive-card rounded-2xl p-6">
              <p className="eyebrow">04</p>

              <h3 className="mt-5 text-lg font-semibold">SaaS & Web</h3>

              <p className="mt-2 text-sm leading-6 text-(--muted-foreground)">
                Modern web applications, educational platforms, APIs, integrations, and full-stack
                product experiences.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-(--border)">
        <div className="shell py-20 sm:py-24 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-[0.65fr_1.35fr] lg:items-start">
            <div>
              <p className="eyebrow">04 · Engineering Approach</p>

              <h2 className="mt-4 max-w-sm text-3xl font-semibold tracking-tight sm:text-4xl">
                Practical engineering over unnecessary complexity.
              </h2>
            </div>

            <div className="space-y-4">
              <div className="interactive-card rounded-2xl p-6">
                <p className="eyebrow">Ownership</p>

                <p className="mt-3 text-base leading-7 text-(--muted-foreground)">
                  I enjoy taking problems from understanding the requirements through architecture,
                  implementation, testing, deployment, and production support.
                </p>
              </div>

              <div className="interactive-card rounded-2xl p-6">
                <p className="eyebrow">Maintainability</p>

                <p className="mt-3 text-base leading-7 text-(--muted-foreground)">
                  I value clear service boundaries, reusable patterns, understandable code, and
                  architecture that can evolve with the product.
                </p>
              </div>

              <div className="interactive-card rounded-2xl p-6">
                <p className="eyebrow">Product Thinking</p>

                <p className="mt-3 text-base leading-7 text-(--muted-foreground)">
                  Engineering decisions should ultimately support the product, its users, and the
                  business workflow rather than adding complexity for its own sake.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="shell py-20 sm:py-24 lg:py-28">
          <div className="panel accent-glow overflow-hidden rounded-[2rem] p-8 sm:p-10 lg:p-12">
            <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
              <div className="max-w-2xl">
                <p className="eyebrow">Explore the Work</p>

                <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
                  See the systems and products I&apos;ve worked on.
                </h2>

                <p className="mt-4 text-base leading-7 text-(--muted-foreground)">
                  Explore selected projects across enterprise data, fintech, digital banking, and
                  modern backend systems.
                </p>
              </div>

              <a href="/projects" className="button-primary shrink-0">
                View projects
                <ArrowDownIcon />
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
