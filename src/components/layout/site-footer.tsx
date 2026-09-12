import { siteConfig } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-(--border)">
      <div className="shell flex flex-col gap-5 py-7 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-(--muted-foreground)">
          © {new Date().getFullYear()} {siteConfig.name}
        </p>

        <nav aria-label="Professional links">
          <ul className="flex items-center gap-3">
            <li>
              <a
                href={siteConfig.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex rounded-full border border-(--border) px-4 py-2 text-sm font-medium text-(--muted-foreground) shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-(--foreground) hover:bg-(--foreground) hover:text-(--background) hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--foreground) focus-visible:ring-offset-2"
              >
                GitHub
              </a>
            </li>

            <li>
              <a
                href={siteConfig.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex rounded-full border border-(--border) px-4 py-2 text-sm font-medium text-(--muted-foreground) shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-(--foreground) hover:bg-(--foreground) hover:text-(--background) hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--foreground) focus-visible:ring-offset-2"
              >
                LinkedIn
              </a>
            </li>

            <li>
              <a
                href={siteConfig.links.resume}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex rounded-full border border-(--border) px-4 py-2 text-sm font-medium text-(--muted-foreground) shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-(--foreground) hover:bg-(--foreground) hover:text-(--background) hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--foreground) focus-visible:ring-offset-2"
              >
                Resume
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}