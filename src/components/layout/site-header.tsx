import Link from "next/link";
import { ThemeToggle } from "@/components/theme/theme-toggle";
import { siteConfig } from "@/lib/site";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-(--border) bg-(--background)/95 backdrop-blur">
      <div className="shell flex flex-col gap-5 py-5 sm:flex-row sm:items-center sm:justify-between">
        <div className="space-y-1">
          <p className="text-base font-semibold tracking-tight">{siteConfig.name}</p>
          <p className="text-sm text-(--muted-foreground)">
            {siteConfig.title}
          </p>
        </div>

        <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
          <nav aria-label="Primary">
            <ul className="flex flex-wrap items-center gap-4 text-sm text-(--muted-foreground)">
              {siteConfig.navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="rounded-full px-2 py-1 hover:text-(--foreground)"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
