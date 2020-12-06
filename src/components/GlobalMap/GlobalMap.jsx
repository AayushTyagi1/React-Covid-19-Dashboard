import React from 'react';
import './GlobalMap.css';


const GlobalMap = () => {
    return(
        <div className="container">
            <h1 className="offset-sm-3 globalhead">GLOBAL MAP</h1>
            <div className="row align-content-center offset-sm-3">
            <iframe src="https://www.google.com/maps/d/embed?mid=1a04iBi41DznkMaQRnICO40ktROfnMfMx" width="580" height="480"></iframe>
            </div>
        </div>
    )
}
export default GlobalMap;

