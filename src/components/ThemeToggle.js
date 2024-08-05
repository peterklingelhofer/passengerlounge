import React, { useState, useEffect } from "react";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import setDarkMode, { initializeDarkMode } from "../utils/setDarkMode";

export const THEME_TOGGLE_SIZE = 20;

const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const localTheme = localStorage.getItem("theme");
    return localTheme === "dark";
  });

  const [togglePosition, setTogglePosition] = useState(0);

  const updateTogglePosition = () => {
    const viewportWidth = window.innerWidth;
    setTogglePosition(viewportWidth - THEME_TOGGLE_SIZE - 50);
  };

  useEffect(() => {
    initializeDarkMode();
    updateTogglePosition();
    window.addEventListener("resize", updateTogglePosition);
    return () => {
      window.removeEventListener("resize", updateTogglePosition);
    };
  }, []);

  const toggleDarkMode = (checked) => {
    const theme = checked ? "dark" : "light";
    setIsDarkMode(checked);
    setDarkMode(theme);
  };

  return (
    <div style={{ position: "absolute", top: 12, left: `${togglePosition}px` }}>
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
