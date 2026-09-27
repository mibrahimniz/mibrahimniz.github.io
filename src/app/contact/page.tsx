import type { ReactNode } from "react";

import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { HiOutlineDocumentText } from "react-icons/hi2";
import { SiUpwork } from "react-icons/si";

import { ContactForm } from "@/components/contact/contact-form";
import { siteConfig } from "@/lib/site";

export const metadata = {
  title: "Contact | Muhammad Ibrahim Nizamani",
  description:
    "Get in touch with Muhammad Ibrahim Nizamani about software engineering opportunities, projects, and technical work.",
};

export default function ContactPage() {
  const professionalLinks = [
    siteConfig.links.upwork
      ? {
          label: "UPWORK",
          title: "Hire me for freelance projects",
          description: "Freelance opportunities",
          href: siteConfig.links.upwork,
          cta: "View Upwork Profile",
          icon: <SiUpwork className="h-7 w-7" />,
          iconClass: "border-emerald-500/20 bg-emerald-500/10 text-emerald-500",
          labelClass: "text-emerald-500",
          ctaClass: "text-emerald-500 hover:text-emerald-400",
        }
      : null,
    {
      label: "LINKEDIN",
      title: "Connect professionally",
      description: "Professional networking and opportunities",
      href: siteConfig.links.linkedin,
      cta: "linkedin.com/in/muhammad-ibrahim-nizamani",
      icon: <FaLinkedinIn className="h-7 w-7" />,
      iconClass: "border-[#0A66C2]/20 bg-[#0A66C2]/10 text-[#0A66C2]",
      labelClass: "text-[#0A66C2]",
      ctaClass: "text-[#0A66C2] hover:text-[#3185d6]",
    },
    {
      label: "GITHUB",
      title: "View my code & contributions",
      description: "Repositories and engineering work",
      href: siteConfig.links.github,
      cta: "github.com/mibrahimniz",
      icon: <FaGithub className="h-7 w-7" />,
      iconClass: "border-(--border-strong) bg-(--background) text-(--foreground)",
      labelClass: "text-(--muted-foreground)",
      ctaClass: "text-(--foreground) hover:text-(--accent)",
    },
    {
      label: "RESUME",
      title: "View my professional experience",
      description: "Career background and experience",
      href: siteConfig.links.resume,
      cta: "View Resume",
      icon: <HiOutlineDocumentText className="h-7 w-7" />,
      iconClass: "border-(--accent)/20 bg-(--accent)/10 text-(--accent)",
      labelClass: "text-(--accent)",
      ctaClass: "text-(--accent) hover:text-emerald-400",
    },
  ].filter(Boolean) as Array<{
    label: string;
    title: string;
    description: string;
    href: string;
    cta: string;
    icon: ReactNode;
    iconClass: string;
    labelClass: string;
    ctaClass: string;
  }>;

  return (
    <main id="main-content" className="flex-1">
      <section className="relative overflow-hidden border-b border-(--border)">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,color-mix(in_srgb,var(--accent)_12%,transparent),transparent_35%),radial-gradient(circle_at_85%_15%,color-mix(in_srgb,var(--accent-secondary)_12%,transparent),transparent_35%)]"
        />

        <div className="shell relative py-7 text-center sm:py-8 lg:py-9">
          <div className="mx-auto max-w-4xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-(--border) bg-(--surface-strong)/80 px-3.5 py-1.5 font-mono text-[10px] font-semibold tracking-[0.2em] text-(--accent) uppercase shadow-sm backdrop-blur-sm">
              <span
                aria-hidden="true"
                className="h-2 w-2 rounded-full bg-(--accent) shadow-[0_0_12px_color-mix(in_srgb,var(--accent)_60%,transparent)]"
              />
              Get in touch
            </div>

            <p className="mt-3 font-mono text-[11px] font-semibold tracking-[0.22em] text-(--accent) uppercase">
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

        <div className="relative mx-auto w-full max-w-[1500px] px-5 py-8 sm:px-8 sm:py-10 lg:px-10 lg:py-12">
          <div className="grid gap-6 lg:grid-cols-[minmax(360px,0.75fr)_minmax(0,1.25fr)] lg:items-start">
            <aside className="rounded-[1.5rem] border border-(--border) bg-(--surface-strong) p-5 shadow-lg sm:p-6">
              <div className="mb-5">
                <h2 className="text-3xl font-bold tracking-tight sm:text-[2rem]">
                  Connect &amp; Hire
                </h2>
              </div>

              <div className="divide-y divide-(--border)">
                {professionalLinks.map((link) => (
                  <div
                    key={link.label}
                    className="group flex items-start gap-4 py-5 first:pt-3 last:pb-3"
                  >
                    <div
                      className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border transition-all duration-200 group-hover:scale-105 ${link.iconClass}`}
                    >
                      {link.icon}
                    </div>

                    <div className="min-w-0 flex-1">
                      <p
                        className={`font-mono text-sm font-bold tracking-[0.2em] uppercase ${link.labelClass}`}
                      >
                        {link.label}
                      </p>

                      <h3 className="mt-1 text-base font-semibold tracking-tight text-(--foreground) sm:text-lg">
                        {link.title}
                      </h3>

                      <p className="mt-0.5 text-sm leading-5 text-(--muted-foreground)">
                        {link.description}
                      </p>

                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`mt-2 inline-flex cursor-pointer items-center gap-2 font-mono text-sm font-bold transition-all duration-200 hover:translate-x-0.5 hover:underline hover:underline-offset-4 sm:text-base ${link.ctaClass}`}
                      >
                        {link.cta} →
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </aside>

            <div className="rounded-[1.5rem] border border-(--border) bg-(--surface-strong) p-5 shadow-lg sm:p-6 lg:p-7">
              <div className="mb-5 text-center">
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

                <p className="mt-3 font-mono text-[11px] font-semibold tracking-[0.2em] text-(--accent) uppercase">
                  Direct message
                </p>

                <h2 className="mt-1.5 text-2xl font-semibold tracking-tight sm:text-[1.7rem]">
                  Tell me what you&apos;re working on.
                </h2>

                <p className="mx-auto mt-2 max-w-2xl text-sm leading-6 text-(--muted-foreground)">
                  Share a little context about your opportunity, project, or technical requirements
                  and I&apos;ll get back to you.
                </p>

                <a
                  href={`mailto:${siteConfig.links.email}`}
                  aria-label={`Email ${siteConfig.links.email}`}
                  className="mx-auto mt-4 flex w-fit max-w-full items-center gap-3 rounded-xl border border-(--accent)/35 bg-(--accent)/5 px-4 py-2.5 text-sm font-bold text-(--accent) shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-(--accent)/60 hover:bg-(--accent)/10 hover:shadow-md sm:text-base"
                >
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.9"
                    className="h-5 w-5 shrink-0"
                  >
                    <rect width="20" height="16" x="2" y="4" rx="2" />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m22 7-8.97 5.7a2 2 0 0 1-2.06 0L2 7"
                    />
                  </svg>

                  <span className="shrink-0">Email me</span>

                  <span className="max-w-[220px] truncate font-medium text-(--muted-foreground)">
                    {siteConfig.links.email}
                  </span>

                  <svg
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="h-5 w-5 shrink-0"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14 5h5v5" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 11l6-6" />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19 13v5a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h5"
                    />
                  </svg>
                </a>
              </div>

              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
