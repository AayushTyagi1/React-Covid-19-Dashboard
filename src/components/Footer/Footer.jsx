import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="App-footer">
        <div className=" align-content offset-xs-0 offset-md-8 offset-lg-10 text-white">
          Created By:
          <br />
          Aayush Tyagi
          <br />
          <a
            href="https://aayushtyagiresume.000webhostapp.com/"
            rel="noopener noreferrer"
            target="_blank"
          >
            <span>
              <img src="../images/website.png" width="2%" alt="website" />
            </span>
          </a>
          <a
            href="https://www.linkedin.com/in/aayush-tyagi-32a527190/"
            rel="noopener noreferrer"
            target="_blank"
          >
            <span>
              <img src="./images/linkedin.png" width="2%" alt="LinkedIn" />
            </span>
          </a>
          <a
            href="https://mail.google.com/mail/u/0/#inbox?compose=CllgCJTJFkzRjNxWClCGHDCxlTtDrwKXdKXDVwLHfxxpLdVhzrHmrQqkVjhMkpcQgzNcfMrqcBB"
            rel="noopener noreferrer"
            target="_blank"
          >
            <span>
              <img src="./images/gmail.png" width="2%" alt="Mail" />
            </span>
          </a>
          <a
            href="https://github.com/AayushTyagi1"
            rel="noopener noreferrer"
            target="_blank"
          >
            <span>
              <img src="./images/github2.png" width="2%" alt="Data Source" />
            </span>
          </a>
          <a
            href="https://github.com/mathdroid/covid-19-api"
            rel="noopener noreferrer"
            target="_blank"
          >
            <span>
              <img src="./images/api.png" width="2%" alt="github" />
            </span>
          </a>
          <br />
        </div>
        <div className="text-white">
          © Copyright 2020 GE-182013206 COVID-19 Dashboard
          <p>
            <a href="https://www.geu.ac.in/" rel="noopener noreferrer">
              Graphic Era Univesity
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
