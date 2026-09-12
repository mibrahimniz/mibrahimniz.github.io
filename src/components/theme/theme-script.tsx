const themeScript = `
(() => {
  const storageKey = "theme";
  const root = document.documentElement;
  const storedTheme = window.localStorage.getItem(storageKey);
  const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
  const theme =
    storedTheme === "dark" || storedTheme === "light"
      ? storedTheme
      : systemTheme;

  root.dataset.theme = theme;
  root.style.colorScheme = theme;
})();
`;

export function ThemeScript() {
  return <script dangerouslySetInnerHTML={{ __html: themeScript }} />;
}
