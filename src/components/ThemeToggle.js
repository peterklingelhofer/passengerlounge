import React, { useState, useEffect } from "react";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import setDarkMode, { initializeDarkMode } from "../utils/setDarkMode";

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
    <div style={{ position: "fixed", top: 13, right: 50 }}>
      <DarkModeSwitch
        checked={isDarkMode}
        onChange={toggleDarkMode}
        size={20}
        sunColor="white"
      />
    </div>
  );
};

export default ThemeToggle;
