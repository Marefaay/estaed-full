import React, { createContext, useEffect, useState } from "react";
import "./Toggler.css";
export const modeContext = createContext();
const Toggler = () => {
  const [mode, setMode] = useState("");

  // Effect to set initial mode from localStorage
  useEffect(() => {
    const savedMode = localStorage.getItem("mode") || "light"; // Default to light mode
    setMode(savedMode);
    document.body.classList.toggle("dark", savedMode === "dark");
  }, []);

  // Function to toggle between light and dark modes
  const toggleMode = () => {
    const newMode = mode === "light" ? "dark" : "light";
    setMode(newMode);
    localStorage.setItem("mode", newMode);
    document.body.classList.toggle("dark", newMode === "dark");
  };
  return (
    <modeContext.Provider value={mode}>
      <span onClick={toggleMode} id="mode">
        {mode === "light" ? (
          <i class="fa-solid fa-sun"></i>
        ) : (
          <i class="fa-solid fa-moon"></i>
        )}
      </span>
    </modeContext.Provider>
  );
};

export default Toggler;
