"use client";

import { useEffect, useState } from "react";
import { HiOutlineCheckCircle, HiOutlineXMark } from "react-icons/hi2";

const FORM_ENDPOINT = "https://formspree.io/f/mkjgnrgr";

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!submitted) return;

    const timeout = window.setTimeout(() => {
      setSubmitted(false);
    }, 5000);

    return () => window.clearTimeout(timeout);
  }, [submitted]);

  async function handleSubmit(formData: FormData) {
    setIsSubmitting(true);
    setSubmitted(false);
    setError(false);

    try {
      const response = await fetch(FORM_ENDPOINT, {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Failed to send message");
      }

      setSubmitted(true);

      const form = document.getElementById("contact-form") as HTMLFormElement | null;

      form?.reset();
    } catch {
      setError(true);
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form
      id="contact-form"
      action={FORM_ENDPOINT}
      method="POST"
      onSubmit={(event) => {
        event.preventDefault();

        const form = event.currentTarget;
        const formData = new FormData(form);

        void handleSubmit(formData);
      }}
      className="space-y-6"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label
            htmlFor="name"
            className="mb-2 block font-mono text-[10px] font-semibold tracking-[0.2em] text-(--foreground) uppercase"
          >
            Your Name <span className="text-(--accent)">*</span>
          </label>

          <input
            id="name"
            name="name"
            type="text"
            required
            autoComplete="name"
            placeholder="John Doe"
            className="h-14 w-full rounded-xl border border-(--border) bg-(--background) px-4 text-sm text-(--foreground) transition-all outline-none placeholder:text-(--muted-foreground) focus:border-(--accent)/60 focus:ring-2 focus:ring-(--accent)/10"
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="mb-2 block font-mono text-[10px] font-semibold tracking-[0.2em] text-(--foreground) uppercase"
          >
            Your Email <span className="text-(--accent)">*</span>
          </label>

          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="john@example.com"
            className="h-14 w-full rounded-xl border border-(--border) bg-(--background) px-4 text-sm text-(--foreground) transition-all outline-none placeholder:text-(--muted-foreground) focus:border-(--accent)/60 focus:ring-2 focus:ring-(--accent)/10"
          />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label
            htmlFor="subject"
            className="mb-2 block font-mono text-[10px] font-semibold tracking-[0.2em] text-(--foreground) uppercase"
          >
            Subject <span className="text-(--accent)">*</span>
          </label>

          <input
            id="subject"
            name="subject"
            type="text"
            required
            placeholder="Project Inquiry / Job Opportunity"
            className="h-14 w-full rounded-xl border border-(--border) bg-(--background) px-4 text-sm text-(--foreground) transition-all outline-none placeholder:text-(--muted-foreground) focus:border-(--accent)/60 focus:ring-2 focus:ring-(--accent)/10"
          />
        </div>

        <div>
          <label
            htmlFor="engagement"
            className="mb-2 block font-mono text-[10px] font-semibold tracking-[0.2em] text-(--foreground) uppercase"
          >
            Engagement Type
          </label>

          <select
            id="engagement"
            name="engagement"
            defaultValue=""
            className="h-14 w-full rounded-xl border border-(--border) bg-(--background) px-4 text-sm text-(--foreground) transition-all outline-none focus:border-(--accent)/60 focus:ring-2 focus:ring-(--accent)/10"
          >
            <option value="" disabled>
              Select an option
            </option>
            <option value="Full-time opportunity">Full-time opportunity</option>
            <option value="Contract / freelance">Contract / freelance</option>
            <option value="Software project">Software project</option>
            <option value="Technical consultation">Technical consultation</option>
            <option value="Other">Other</option>
          </select>
        </div>
      </div>

      <div>
        <label
          htmlFor="message"
          className="mb-2 block font-mono text-[10px] font-semibold tracking-[0.2em] text-(--foreground) uppercase"
        >
          Project Details & Requirements <span className="text-(--accent)">*</span>
        </label>

        <textarea
          id="message"
          name="message"
          required
          rows={6}
          placeholder="Tell me about your project, technical requirements, goals, or opportunity..."
          className="min-h-40 w-full resize-y rounded-xl border border-(--border) bg-(--background) px-4 py-4 text-sm leading-6 text-(--foreground) transition-all outline-none placeholder:text-(--muted-foreground) focus:border-(--accent)/60 focus:ring-2 focus:ring-(--accent)/10"
        />
      </div>

      <input type="hidden" name="_subject" value="New message from portfolio website" />

      {submitted && (
        <div
          role="status"
          aria-live="polite"
          className="relative flex items-start gap-3 rounded-xl border border-emerald-500/25 bg-emerald-500/[0.08] px-4 py-3.5 pr-11 text-left"
        >
          <HiOutlineCheckCircle
            aria-hidden="true"
            className="mt-0.5 h-5 w-5 shrink-0 text-emerald-500"
          />

          <div className="min-w-0">
            <p className="text-sm font-semibold text-emerald-500">Message sent successfully.</p>

            <p className="mt-0.5 text-sm leading-6 text-emerald-500/80">
              Thanks for reaching out. I&apos;ll get back to you as soon as possible.
            </p>
          </div>

          <button
            type="button"
            aria-label="Dismiss success message"
            onClick={() => setSubmitted(false)}
            className="absolute top-3 right-3 flex h-7 w-7 items-center justify-center rounded-lg text-emerald-500/70 transition-colors hover:bg-emerald-500/10 hover:text-emerald-500"
          >
            <HiOutlineXMark aria-hidden="true" className="h-5 w-5" />
          </button>
        </div>
      )}

      {error && (
        <div
          role="alert"
          className="relative rounded-xl border border-red-500/25 bg-red-500/[0.08] px-4 py-3.5 pr-10 text-sm leading-6 text-red-500"
        >
          Unable to send your message right now. Please try again or contact me directly by email.
          <button
            type="button"
            aria-label="Dismiss error message"
            onClick={() => setError(false)}
            className="absolute top-3 right-3 flex h-7 w-7 items-center justify-center rounded-lg text-red-500/70 transition-colors hover:bg-red-500/10 hover:text-red-500"
          >
            <HiOutlineXMark aria-hidden="true" className="h-5 w-5" />
          </button>
        </div>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="group flex h-14 w-full items-center justify-center gap-3 rounded-xl bg-linear-to-r from-(--accent) to-(--accent-secondary) px-6 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0"
      >
        {isSubmitting ? (
          <>
            <span
              aria-hidden="true"
              className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white"
            />
            Sending Message...
          </>
        ) : (
          <>
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="m22 2-7 20-4-9-9-4Z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M22 2 11 13" />
            </svg>
            Send Message
            <span
              aria-hidden="true"
              className="transition-transform duration-300 group-hover:translate-x-1"
            >
              →
            </span>
          </>
        )}
      </button>
    </form>
  );
}
