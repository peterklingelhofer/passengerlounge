const setDarkMode = (theme) => {
  if (typeof window !== "undefined") {
    const root = window.document.documentElement;
    root.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);

    if (theme === "dark") {
      root.classList.remove("light-mode");
      root.classList.add("dark-mode");
    } else {
      root.classList.remove("dark-mode");
      root.classList.add("light-mode");
    }
  }
};

export const initializeDarkMode = () => {
  if (typeof window !== "undefined" && typeof localStorage !== "undefined") {
    const localTheme = localStorage.getItem("theme");
    const preferredTheme = window.matchMedia("(prefers-color-scheme: light)")
      .matches
      ? "light"
      : "dark";
    const theme = localTheme || preferredTheme;
    setDarkMode(theme);
    return theme;
  }
  return "dark"; // Default to dark theme if not in the browser
};

export default setDarkMode;
