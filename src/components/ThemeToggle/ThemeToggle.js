// src/components/ThemeToggle/ThemeToggle.js
import React from "react";
import { DarkModeSwitch } from "react-toggle-dark-mode";

const ThemeToggle = () => {
  const isBrowser = typeof window !== "undefined";
  const storedTheme = isBrowser ? localStorage.getItem("theme") : null;
  const initialMode = storedTheme || "dark";
  const isDarkMode = initialMode === "dark";

  const handleToggle = () => {
    if (isBrowser) {
      const root = window.document.documentElement;
      const currentTheme =
        root.getAttribute("data-theme") === "dark" ? "dark" : "light";
      const newTheme = currentTheme === "dark" ? "light" : "dark";
      localStorage.setItem("theme", newTheme);
      root.setAttribute("data-theme", newTheme);
    }
  };

  return (
    <div style={{ position: "fixed", top: 13, right: 50 }}>
      <DarkModeSwitch
        checked={isDarkMode}
        onChange={handleToggle}
        size={20}
        sunColor="white"
      />
    </div>
  );
};

export default ThemeToggle;
