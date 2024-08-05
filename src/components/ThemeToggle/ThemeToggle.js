import React, { useState, useEffect } from "react";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import setDarkMode, { initializeDarkMode } from "../../utils/setDarkMode";

const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(initializeDarkMode() === "dark");

  useEffect(() => {
    setDarkMode(isDarkMode ? "dark" : "light");
  }, [isDarkMode]);

  const handleToggle = () => {
    setIsDarkMode((prevMode) => !prevMode);
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
