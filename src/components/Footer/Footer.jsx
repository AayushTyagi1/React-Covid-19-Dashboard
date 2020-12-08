import React from 'react'
import './Footer.css'

const Footer = () => {
    return (
        <footer>
        <div className="App-footer">
            <div className=" align-content offset-xs-0 offset-md-8 offset-lg-10 text-white">
                 Created By:<br/>
                <a href="https://aayushtyagiresume.000webhostapp.com/" rel="noopener noreferrer">Aayush Tyagi</a><br/>
                <a href="https://www.linkedin.com/in/aayush-tyagi-32a527190/" rel="noopener noreferrer">LinkedIn</a><br/>
                <a href="https://mail.google.com/mail/u/0/#inbox?compose=CllgCJTJFkzRjNxWClCGHDCxlTtDrwKXdKXDVwLHfxxpLdVhzrHmrQqkVjhMkpcQgzNcfMrqcBB" rel="noopener noreferrer">Mail</a><br/>
                <a href="https://github.com/mathdroid/covid-19-api" rel="noopener noreferrer">Data Source</a><br/>
            </div>
            <div className="text-white">
            © Copyright 2020 GE-182013206 COVID-19 Dashboard
              <p><a href="https://www.geu.ac.in/" rel="noopener noreferrer">Graphic Era Univesity</a></p>
            </div>
            </div>
        </footer>
    )
}

export default Footer;