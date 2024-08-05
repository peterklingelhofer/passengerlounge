const setDarkMode = (theme) => {
  const root = window.document.documentElement;
  root.setAttribute("data-theme", theme);
  localStorage.setItem("theme", theme);

  // Apply class for theme
  if (theme === "dark") {
    root.classList.remove("light-mode");
    root.classList.add("dark-mode");
  } else {
    root.classList.remove("dark-mode");
    root.classList.add("light-mode");
  }
};

export const initializeDarkMode = () => {
  const localTheme = localStorage.getItem("theme");
  const preferredTheme = window.matchMedia("(prefers-color-scheme: light)")
    .matches
    ? "light"
    : "dark";
  const theme = localTheme || preferredTheme;
  setDarkMode(theme);
  return theme;
};

export default setDarkMode;
