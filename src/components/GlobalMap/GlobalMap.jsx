import React from "react";
import "./GlobalMap.css";

const GlobalMap = () => {
  return (
    <div>
      <h1 className="globalhead">GLOBAL MAP</h1>
      <div className="row align-content-center offset-3 p-4">
        <div className="c1">
          <iframe
            title="GlobalMap"
            className="c3"
            src="https://react-covid19-tracker.netlify.app/"
            scrolling="no"
          ></iframe>
        </div>
      </div>
    </div>
  );
};
export default GlobalMap;
