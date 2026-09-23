import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { HiOutlineDocumentText } from "react-icons/hi2";

import { ContactForm } from "@/components/contact/contact-form";
import { siteConfig } from "@/lib/site";

export const metadata = {
  title: "Contact | Muhammad Ibrahim Nizamani",
  description:
    "Get in touch with Muhammad Ibrahim Nizamani about software engineering opportunities, projects, and technical work.",
};

export default function ContactPage() {
  return (
    <main id="main-content" className="flex-1">
      <section className="relative overflow-hidden border-b border-(--border)">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,color-mix(in_srgb,var(--accent)_12%,transparent),transparent_35%),radial-gradient(circle_at_85%_15%,color-mix(in_srgb,var(--accent-secondary)_12%,transparent),transparent_35%)]"
        />

        <div className="shell relative py-10 text-center sm:py-12 lg:py-14">
          <div className="mx-auto max-w-4xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-(--border) bg-(--card)/80 px-3.5 py-1.5 font-mono text-[10px] font-semibold tracking-[0.2em] text-(--accent) uppercase shadow-sm backdrop-blur-sm">
              <span
                aria-hidden="true"
                className="h-2 w-2 rounded-full bg-(--accent) shadow-[0_0_12px_color-mix(in_srgb,var(--accent)_60%,transparent)]"
              />
              Get in touch
            </div>

            <p className="mt-5 font-mono text-[11px] font-semibold tracking-[0.22em] text-(--accent) uppercase">
              Start a conversation
            </p>

            <h1 className="mx-auto mt-3 max-w-3xl text-4xl font-semibold tracking-tight sm:text-[2.75rem] lg:text-5xl">
              Let&apos;s build something{" "}
              <span className="bg-linear-to-r from-(--accent) to-(--accent-secondary) bg-clip-text text-transparent">
                useful.
              </span>
            </h1>

            <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-(--muted-foreground) sm:text-lg sm:leading-8">
              Whether you&apos;re hiring for a software engineering role, building a product, or
              looking for help with a technical challenge, feel free to reach out.
            </p>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden">
        <div aria-hidden="true" className="bg-grid pointer-events-none absolute inset-0" />

        <div className="shell relative py-10 sm:py-14 lg:py-16">
          <div className="grid gap-7 lg:grid-cols-[minmax(0,1fr)_300px] lg:items-start">
            <div className="rounded-[1.75rem] border border-(--border) bg-(--card) p-5 shadow-lg sm:p-7 lg:p-8">
              <div className="mb-7 text-center">
                <div className="flex justify-center">
                  <div
                    aria-hidden="true"
                    className="flex h-11 w-11 items-center justify-center rounded-xl border border-(--border) bg-(--background) text-(--accent)"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.7"
                      className="h-5 w-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8Z"
                      />
                    </svg>
                  </div>
                </div>

                <p className="mt-4 font-mono text-[11px] font-semibold tracking-[0.2em] text-(--accent) uppercase">
                  Direct message
                </p>

                <h2 className="mt-2 text-2xl font-semibold tracking-tight sm:text-[1.7rem]">
                  Tell me what you&apos;re working on.
                </h2>

                <p className="mx-auto mt-2 max-w-2xl text-sm leading-6 text-(--muted-foreground)">
                  Share a little context about your opportunity, project, or technical requirements
                  and I&apos;ll get back to you.
                </p>
              </div>

              <ContactForm />
            </div>

            <aside className="space-y-4 lg:sticky lg:top-24">
              <div className="rounded-[1.5rem] border border-(--border) bg-(--card) p-5 text-center shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg">
                <div className="flex justify-center">
                  <div
                    aria-hidden="true"
                    className="flex h-9 w-9 items-center justify-center rounded-xl border border-(--border) bg-(--background) text-(--accent)"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      className="h-4 w-4"
                    >
                      <rect width="20" height="16" x="2" y="4" rx="2" />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m22 7-8.97 5.7a2 2 0 0 1-2.06 0L2 7"
                      />
                    </svg>
                  </div>
                </div>

                <p className="mt-3 font-mono text-[10px] font-semibold tracking-[0.2em] text-(--accent) uppercase">
                  Direct contact
                </p>

                <h2 className="mt-3 text-lg font-semibold tracking-tight">Prefer email?</h2>

                <p className="mx-auto mt-2 max-w-[250px] text-sm leading-6 text-(--muted-foreground)">
                  You can also contact me directly using my professional email.
                </p>

                <a
                  href={`mailto:${siteConfig.links.email}`}
                  className="mt-4 inline-flex max-w-full text-sm font-medium break-all text-(--foreground) underline decoration-(--accent)/50 underline-offset-4 transition-all duration-200 hover:text-(--accent) hover:decoration-(--accent)"
                >
                  {siteConfig.links.email}
                </a>
              </div>

              <a
                href={siteConfig.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="group block rounded-[1.5rem] border border-(--border) bg-(--card) p-5 text-center shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-sky-500/30 hover:shadow-lg"
              >
                <div className="flex justify-center">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full border border-sky-500/20 bg-sky-500/10 text-[#0A66C2] transition-all duration-300 group-hover:bg-[#0A66C2] group-hover:text-white">
                    <FaLinkedinIn className="h-4.5 w-4.5" />
                  </div>
                </div>

                <span className="mt-3 block font-mono text-[11px] font-semibold tracking-[0.28em] text-[#0A66C2]">
                  LINKEDIN
                </span>

                <h3 className="mt-4 text-2xl font-semibold tracking-tight text-(--foreground)">
                  Connect professionally
                </h3>

                <p className="mx-auto mt-2 max-w-[250px] text-sm leading-6 text-(--muted-foreground)">
                  View my professional profile and experience.
                </p>
              </a>

              <a
                href={siteConfig.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="group block rounded-[1.5rem] border border-(--border) bg-(--card) p-5 text-center shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-white/20 hover:shadow-lg"
              >
                <div className="flex justify-center">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full border border-(--border) bg-(--background) text-(--foreground) transition-all duration-300 group-hover:bg-(--foreground) group-hover:text-(--background)">
                    <FaGithub className="h-4.5 w-4.5" />
                  </div>
                </div>

                <span className="mt-3 block font-mono text-[11px] font-semibold tracking-[0.28em] text-slate-500 dark:text-slate-400">
                  GITHUB
                </span>

                <h3 className="mt-4 text-2xl font-semibold tracking-tight text-(--foreground)">
                  Explore my code
                </h3>

                <p className="mx-auto mt-2 max-w-[250px] text-sm leading-6 text-(--muted-foreground)">
                  Browse selected repositories and engineering work.
                </p>
              </a>

              <a
                href={siteConfig.links.resume}
                target="_blank"
                rel="noopener noreferrer"
                className="group block rounded-[1.5rem] border border-(--border) bg-(--card) p-5 text-center shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-emerald-500/30 hover:shadow-lg"
              >
                <div className="flex justify-center">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full border border-emerald-500/20 bg-emerald-500/10 text-emerald-500 transition-all duration-300 group-hover:bg-emerald-500 group-hover:text-white">
                    <HiOutlineDocumentText className="h-4.5 w-4.5" />
                  </div>
                </div>

                <span className="mt-3 block font-mono text-[11px] font-semibold tracking-[0.28em] text-emerald-500">
                  RESUME
                </span>

                <h3 className="mt-4 text-2xl font-semibold tracking-tight text-(--foreground)">
                  View my resume
                </h3>

                <p className="mx-auto mt-2 max-w-[250px] text-sm leading-6 text-(--muted-foreground)">
                  Review my professional experience and technical background.
                </p>
              </a>
            </aside>
          </div>
        </div>
      </section>
    </main>
  );
}
