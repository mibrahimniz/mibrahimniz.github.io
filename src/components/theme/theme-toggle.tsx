"use client";

import { useSyncExternalStore } from "react";
import { HiMoon, HiSun } from "react-icons/hi2";

const STORAGE_KEY = "theme";
const listeners = new Set<() => void>();

type Theme = "light" | "dark";

function getSystemTheme(): Theme {
  if (typeof window === "undefined") {
    return "light";
  }

  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

function applyTheme(theme: Theme) {
  document.documentElement.dataset.theme = theme;
  document.documentElement.style.colorScheme = theme;
}

function emitChange() {
  listeners.forEach((listener) => listener());
}

function getThemeSnapshot(): Theme {
  if (typeof document === "undefined") {
    return "light";
  }

  const documentTheme = document.documentElement.dataset.theme;

  if (documentTheme === "dark" || documentTheme === "light") {
    return documentTheme;
  }

  return getSystemTheme();
}

function subscribe(listener: () => void) {
  listeners.add(listener);

  if (typeof window === "undefined") {
    return () => {
      listeners.delete(listener);
    };
  }

  const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

  const handleChange = (event: MediaQueryListEvent) => {
    if (window.localStorage.getItem(STORAGE_KEY)) {
      return;
    }

    applyTheme(event.matches ? "dark" : "light");
    emitChange();
  };

  mediaQuery.addEventListener("change", handleChange);

  return () => {
    listeners.delete(listener);
    mediaQuery.removeEventListener("change", handleChange);
  };
}

export function ThemeToggle() {
  const theme = useSyncExternalStore(subscribe, getThemeSnapshot, () => "light");

  const isDark = theme === "dark";
  const nextTheme = isDark ? "light" : "dark";

  return (
    <button
      type="button"
      aria-label={`Switch to ${nextTheme} mode`}
      title={`Switch to ${nextTheme} mode`}
      onClick={() => {
        const updatedTheme = isDark ? "light" : "dark";

        window.localStorage.setItem(STORAGE_KEY, updatedTheme);
        applyTheme(updatedTheme);
        emitChange();
      }}
      className="group inline-flex h-9 w-9 cursor-pointer items-center justify-center rounded-md border border-(--border) bg-(--surface) text-(--muted-foreground) transition-all duration-200 hover:-translate-y-0.5 hover:border-(--accent)/50 hover:bg-(--accent)/10 hover:text-(--accent) focus-visible:ring-2 focus-visible:ring-(--accent) focus-visible:ring-offset-2 focus-visible:outline-none"
    >
      {isDark ? (
        <HiSun className="h-5 w-5" />
      ) : (
        <HiMoon
          aria-hidden="true"
          className="h-[19px] w-[19px] transition-transform duration-300 group-hover:-rotate-12"
        />
      )}
    </button>
  );
}
