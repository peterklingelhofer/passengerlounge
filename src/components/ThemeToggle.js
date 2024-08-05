import React, { useState, useEffect } from "react";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import setDarkMode, { initializeDarkMode } from "../utils/setDarkMode";

export const THEME_TOGGLE_SIZE = 20;

const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const localTheme = localStorage.getItem("theme");
    return localTheme === "dark";
  });

  useEffect(() => {
    initializeDarkMode();
  }, []);

  const toggleDarkMode = (checked) => {
    const theme = checked ? "dark" : "light";
    setIsDarkMode(checked);
    setDarkMode(theme);
  };

  return (
    <div style={{ position: "fixed", top: 12, right: 50 }}>
      <DarkModeSwitch
        checked={isDarkMode}
        onChange={toggleDarkMode}
        size={THEME_TOGGLE_SIZE}
        sunColor="gray"
      />
    </div>
  );
};

export default ThemeToggle;
