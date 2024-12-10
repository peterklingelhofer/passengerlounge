// src/components/ThemeToggle/ThemeToggle.js
import React, { useEffect, useState } from "react";
import { DarkModeSwitch } from "react-toggle-dark-mode";

const themeToggleStyle = {
  position: "fixed",
  top: 13,
  right: 50,
  zIndex: 99999,
};

const ThemeToggle = () => {
  const isBrowser = typeof window !== "undefined";

  const getPreferredTheme = () => {
    if (!isBrowser) return "dark";
    const localTheme = localStorage.getItem("theme");
    if (localTheme) return localTheme;
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    return prefersDark ? "dark" : "light";
  };

  const [theme, setTheme] = useState(getPreferredTheme());

  useEffect(() => {
    if (isBrowser) {
      document.documentElement.setAttribute("data-theme", theme);
      localStorage.setItem("theme", theme);
    }
  }, [theme, isBrowser]);

  const handleToggle = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <div style={themeToggleStyle}>
      <DarkModeSwitch
        checked={theme === "dark"}
        onChange={handleToggle}
        size={20}
        sunColor="white"
      />
    </div>
  );
};

export default ThemeToggle;
