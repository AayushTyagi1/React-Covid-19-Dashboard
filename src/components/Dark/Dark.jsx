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
          if(document.getElementById("infected")){
          document.getElementById("infected").classList.add("chart-dark");
          document.getElementById("recovered").classList.add("chart-dark");
          document.getElementById("deaths").classList.add("chart-dark");
          }
        }
        else{
          if(document.getElementById("infected")){
        document.getElementById("infected").classList.remove("chart-dark");
        document.getElementById("recovered").classList.remove("chart-dark");
        document.getElementById("deaths").classList.remove("chart-dark");
        
        }}
      }}
      checked={isDarkMode}

      size={80}
    />
  );
};
