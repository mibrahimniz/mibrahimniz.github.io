"use client";

import { useSyncExternalStore } from "react";

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

  const nextTheme = theme === "dark" ? "light" : "dark";

  return (
    <button
      type="button"
      aria-label={`Switch to ${nextTheme} mode`}
      aria-pressed={theme === "dark"}
      className="inline-flex items-center justify-center rounded-full border border-(--border) bg-(--surface) px-4 py-2 text-sm font-medium backdrop-blur"
      onClick={() => {
        const updatedTheme = nextTheme;
        window.localStorage.setItem(STORAGE_KEY, updatedTheme);
        applyTheme(updatedTheme);
        emitChange();
      }}
    >
      {theme === "light" ? "Dark mode" : "Light mode"}
    </button>
  );
}
