"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { type ReactNode } from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { SiUpwork } from "react-icons/si";
import { HiOutlineCodeBracket, HiOutlineDocumentText } from "react-icons/hi2";

import { ThemeToggle } from "@/components/theme/theme-toggle";
import { siteConfig } from "@/lib/site";

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-(--border) bg-(--background)/95 backdrop-blur-xl">
      <div className="shell">
        <div className="flex min-h-[80px] items-center justify-between gap-10">
          <Link href="/home" className="group flex items-center gap-3" aria-label="Go to home">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-(--border) bg-(--card)/50 text-(--muted-foreground) transition-all duration-200 group-hover:border-(--accent)/40 group-hover:bg-(--accent)/10 group-hover:text-(--accent)">
              <HiOutlineCodeBracket aria-hidden="true" className="h-[23px] w-[23px]" />
            </span>

            <span className="flex flex-col justify-center">
              <span className="text-[19px] leading-6 font-bold tracking-[-0.025em] text-(--foreground) transition-colors duration-200 group-hover:text-(--accent)">
                Muhammad Ibrahim Nizamani
              </span>

              <span className="mt-1 text-[14px] leading-4 font-medium text-(--muted-foreground)">
                Senior Full Stack Engineer
              </span>
            </span>
          </Link>

          <div className="hidden items-center lg:flex">
            <nav aria-label="Main navigation" className="flex items-center gap-2">
              {siteConfig.navItems.map((item) => {
                const isActive = pathname.startsWith(item.href);

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`group relative px-4 py-3 text-[15px] font-semibold tracking-[-0.01em] transition-colors duration-200 ${
                      isActive
                        ? "text-(--accent)"
                        : "text-(--muted-foreground) hover:text-(--foreground)"
                    } `}
                  >
                    {item.label}

                    <span
                      aria-hidden="true"
                      className={`absolute bottom-1 left-1/2 h-[2px] -translate-x-1/2 rounded-full bg-(--accent) transition-all duration-300 ${
                        isActive
                          ? "w-8 opacity-100"
                          : "w-0 opacity-0 group-hover:w-8 group-hover:opacity-100"
                      } `}
                    />
                  </Link>
                );
              })}
            </nav>

            <div aria-hidden="true" className="mx-5 h-8 w-px bg-(--border)" />

            <div className="flex items-center gap-4">
              <SocialIcon
                href={siteConfig.links.github}
                label="GitHub Profile"
                className="text-(--muted-foreground) hover:text-(--foreground) dark:hover:text-white"
              >
                <span className="relative flex h-8 w-8 items-center justify-center">
                  <span className="absolute inset-[5px] rounded-full bg-white/0 transition-all duration-200 group-hover:bg-white/10 dark:group-hover:bg-white/10" />

                  <FaGithub className="relative h-[23px] w-[23px]" />
                </span>
              </SocialIcon>

              <SocialIcon
                href={siteConfig.links.linkedin}
                label="LinkedIn Profile"
                className="text-(--muted-foreground) hover:text-[#0A66C2]"
              >
                <span className="relative flex h-7 w-7 items-center justify-center overflow-hidden rounded-[3px] transition-all duration-200 group-hover:bg-[#0A66C2]">
                  <FaLinkedinIn className="relative h-[21px] w-[21px] transition-colors duration-200 group-hover:text-white" />
                </span>
              </SocialIcon>

              {siteConfig.links.upwork && (
                <SocialIcon
                  href={siteConfig.links.upwork}
                  label="Upwork Profile"
                  className="text-(--muted-foreground) hover:text-[#14A800]"
                >
                  <SiUpwork className="h-[23px] w-[23px]" />
                </SocialIcon>
              )}

              <SocialIcon
                href={siteConfig.links.resume}
                label="Resume"
                className="text-(--muted-foreground) hover:text-(--accent)"
              >
                <HiOutlineDocumentText className="h-[23px] w-[23px]" />
              </SocialIcon>
            </div>

            <div className="ml-4">
              <ThemeToggle />
            </div>
          </div>

          <div className="flex items-center gap-3 lg:hidden">
            <SocialIcon
              href={siteConfig.links.github}
              label="GitHub Profile"
              className="text-(--muted-foreground) hover:text-(--foreground) dark:hover:text-white"
            >
              <FaGithub className="h-[21px] w-[21px]" />
            </SocialIcon>

            <SocialIcon
              href={siteConfig.links.linkedin}
              label="LinkedIn Profile"
              className="text-(--muted-foreground) hover:text-[#0A66C2]"
            >
              <span className="flex h-7 w-7 items-center justify-center rounded-[3px] transition-colors duration-200 group-hover:bg-[#0A66C2]">
                <FaLinkedinIn className="h-[19px] w-[19px] transition-colors duration-200 group-hover:text-white" />
              </span>
            </SocialIcon>

            {siteConfig.links.upwork && (
              <SocialIcon
                href={siteConfig.links.upwork}
                label="Upwork Profile"
                className="text-(--muted-foreground) hover:text-[#14A800]"
              >
                <SiUpwork className="h-[21px] w-[21px]" />
              </SocialIcon>
            )}

            <SocialIcon
              href={siteConfig.links.resume}
              label="Resume"
              className="text-(--muted-foreground) hover:text-(--accent)"
            >
              <HiOutlineDocumentText className="h-[21px] w-[21px]" />
            </SocialIcon>

            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
  );
}

function SocialIcon({
  href,
  label,
  children,
  className,
}: {
  href: string;
  label: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className={`group flex h-9 w-9 items-center justify-center rounded-md transition-all duration-200 hover:-translate-y-0.5 ${className ?? ""} `}
    >
      {children}
    </a>
  );
}
