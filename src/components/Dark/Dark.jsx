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
          document.getElementById("infected").classList.add("newstyle");
          document.getElementById("recovered").classList.add("newstyle");
          document.getElementById("deaths").classList.add("newstyle");
        }
        else{
        document.getElementById("infected").classList.remove("newstyle");
        document.getElementById("recovered").classList.remove("newstyle");
        document.getElementById("deaths").classList.remove("newstyle");
        }
      }}
      checked={isDarkMode}

      size={80}
    />
  );
};
