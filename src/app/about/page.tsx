export const metadata = {
  title: "About | Muhammad Ibrahim Nizamani",
  description:
    "Learn more about Muhammad Ibrahim Nizamani, a Senior Full Stack Engineer focused on backend systems, distributed systems, enterprise applications, and modern web products.",
};

export default function AboutPage() {
  return (
    <main id="main-content" className="flex-1">
      <section
        aria-labelledby="about-title"
        className="shell py-16 sm:py-20 lg:py-24"
      >
        <div className="max-w-4xl">
          <p className="text-sm font-medium uppercase tracking-[0.24em] text-(--muted-foreground)">
            About
          </p>

          <h1
            id="about-title"
            className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl"
          >
            Building software that solves real problems.
          </h1>

          <div className="mt-8 max-w-3xl space-y-5 text-base leading-7 text-(--muted-foreground) sm:text-lg">
            <p>
              I&apos;m a Senior Full Stack Engineer with 6+ years of experience
              building and scaling production-grade software across fintech,
              digital banking, enterprise SaaS, data governance, and educational
              platforms.
            </p>

            <p>
              My strongest areas are backend and distributed systems, APIs,
              microservices, enterprise integrations, and full-stack product
              development. I primarily work with Node.js, TypeScript, Python,
              and React, with hands-on experience designing RabbitMQ-based
              systems, REST and GraphQL APIs, cloud-native deployments, and
              CI/CD workflows.
            </p>

            <p>
              I enjoy taking ownership of problems from architecture and
              implementation through deployment and production support. I care
              about building systems that are scalable and maintainable while
              keeping engineering decisions practical and focused on customer
              and product impact.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}