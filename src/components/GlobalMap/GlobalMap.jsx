import React from 'react';
import './GlobalMap.css';


const GlobalMap = () => {
    return(
        <div>
            <h1 className="globalhead">GLOBAL MAP</h1>
            <div className="row align-content-center offset-1">
            <div className="col-xs-12 col-sm-6 p-1">
            <iframe src="https://www.google.com/maps/d/embed?mid=1a04iBi41DznkMaQRnICO40ktROfnMfMx" title="GlobalMap" width="580" height="480"></iframe>
            </div>
            
            <div className="col-xs-12 col-sm-6 p-1">
            <iframe src="https://public.domo.com/cards/dJ45D" title="GlobalTable" width="580" height="480"></iframe></div></div>
            <footer>
      <div className="App-footer">
          <div className=" align-content offset-xs-0 offset-md-8 offset-lg-10 text-white">
               Created By:<br/>
              <a href="https://aayushtyagiresume.000webhostapp.com/" target="_blank">Aayush Tyagi</a><br/>
              <a href="https://www.linkedin.com/in/aayush-tyagi-32a527190/" target="_blank">LinkedIn</a><br/>
              <a href="https://mail.google.com/mail/u/0/#inbox?compose=CllgCJTJFkzRjNxWClCGHDCxlTtDrwKXdKXDVwLHfxxpLdVhzrHmrQqkVjhMkpcQgzNcfMrqcBB" target="_blank">Mail</a><br/>
              <a href="https://github.com/mathdroid/covid-19-api" target="_blank">Data Source</a><br/>
          </div>
          <div className="text-white">
          © Copyright 2020 GE-182013206 COVID-19 Dashboard
            <p><a href="https://www.geu.ac.in/" target="_blank">Graphic Era Univesity</a></p>
          </div>
          </div>
      </footer>
        </div>
    )
}
export default GlobalMap;

