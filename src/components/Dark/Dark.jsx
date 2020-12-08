import React, {useState} from "react";
import DarkModeToggle from "react-dark-mode-toggle";
import './Dark.css'
 
export default () => {
  const [isDarkMode, setIsDarkMode] = useState(() => false);
  return (
    <DarkModeToggle
      onChange={() => setIsDarkMode(document.body.classList.toggle("dark-mode"))}
      checked={isDarkMode}
      size={80}
    />
  );
};
