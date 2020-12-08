import React, {useState} from "react";
import DarkModeToggle from "react-dark-mode-toggle";
import './Dark.css'


export default () => {
  const [isDarkMode, setIsDarkMode] = useState(() => false);
  return (
    <DarkModeToggle
      onChange={() => {
        setIsDarkMode(document.body.classList.toggle("dark-mode"));
        if (document.body.classList.contains("dark-mode")) {
          document.getElementById("infected").classList.add("bg-dark");
          document.getElementById("recovered").classList.add("bg-dark");
          document.getElementById("deaths").classList.add("bg-dark");
        }
        else{
        document.getElementById("infected").classList.remove("bg-dark");
        document.getElementById("recovered").classList.remove("bg-dark");
        document.getElementById("deaths").classList.remove("bg-dark");
        }
      }}
      checked={isDarkMode}

      size={80}
    />
  );
};
