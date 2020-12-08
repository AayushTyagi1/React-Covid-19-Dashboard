import React from "react";
import "./GlobalMap.css";

const GlobalMap = () => {
  return (
    <div>
      <h1 className="globalhead">GLOBAL MAP</h1>
      <div className="row align-content-center offset-1">
        <div className="col-xs-12 col-sm-6 p-1">
          <iframe
            src="https://www.google.com/maps/d/embed?mid=1a04iBi41DznkMaQRnICO40ktROfnMfMx"
            title="GlobalMap"
            width="580"
            height="480"
          ></iframe>
        </div>

        <div className="col-xs-12 col-sm-6 p-1">
          <iframe
            src="https://public.domo.com/cards/dJ45D"
            title="GlobalTable"
            width="580"
            height="480"
          ></iframe>
        </div>
      </div>
    </div>
  );
};
export default GlobalMap;
