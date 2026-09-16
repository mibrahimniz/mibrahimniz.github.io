import { FaLinkedinIn } from "react-icons/fa";
import { FiFileText } from "react-icons/fi";
import { SiGithub, SiUpwork } from "react-icons/si";
import { siteConfig } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-(--border)">
      <div className="shell flex flex-col gap-5 py-7 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-(--muted-foreground)">
          © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
        </p>

        <nav aria-label="Professional links">
          <ul className="flex flex-wrap items-center gap-5">
            {/* GitHub */}
            <li>
              <a
                href={siteConfig.links.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="group relative inline-flex items-center gap-2 text-sm font-medium text-(--muted-foreground) transition-all duration-300 hover:-translate-y-0.5 hover:text-(--foreground) focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--foreground)"
              >
                <SiGithub
                  className="h-4 w-4 transition-transform duration-300 group-hover:scale-110"
                  aria-hidden="true"
                />

                <span className="relative">
                  GitHub
                  <span className="absolute -bottom-1 left-0 h-px w-0 bg-current transition-all duration-300 group-hover:w-full" />
                </span>
              </a>
            </li>

            {/* LinkedIn */}
            <li>
              <a
                href={siteConfig.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="group relative inline-flex items-center gap-2 text-sm font-medium text-(--muted-foreground) transition-all duration-300 hover:-translate-y-0.5 hover:text-[#0A66C2] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0A66C2]"
              >
                <FaLinkedinIn
                  className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:scale-110"
                  aria-hidden="true"
                />

                <span className="relative">
                  LinkedIn
                  <span className="absolute -bottom-1 left-0 h-px w-0 bg-current transition-all duration-300 group-hover:w-full" />
                </span>
              </a>
            </li>

            {/* Upwork */}
            <li>
              <a
                href="https://www.upwork.com/freelancers/~01e09da957f3af849e"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Upwork"
                className="group relative inline-flex items-center gap-2 text-sm font-medium text-(--muted-foreground) transition-all duration-300 hover:-translate-y-0.5 hover:text-[#14A800] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#14A800]"
              >
                <SiUpwork
                  className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:scale-110"
                  aria-hidden="true"
                />

                <span className="relative">
                  Upwork
                  <span className="absolute -bottom-1 left-0 h-px w-0 bg-current transition-all duration-300 group-hover:w-full" />
                </span>
              </a>
            </li>

            {/* Resume */}
            <li>
              <a
                href={siteConfig.links.resume}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Resume"
                className="group relative inline-flex items-center gap-2 text-sm font-medium text-(--muted-foreground) transition-all duration-300 hover:-translate-y-0.5 hover:text-(--foreground) focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--foreground)"
              >
                <FiFileText
                  className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:scale-110"
                  aria-hidden="true"
                />

                <span className="relative">
                  Resume
                  <span className="absolute -bottom-1 left-0 h-px w-0 bg-current transition-all duration-300 group-hover:w-full" />
                </span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}