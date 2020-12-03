import React from 'react';
 
import { NavLink } from 'react-router-dom';
import "./Navigation.css";
 
const Navigation = () => {
    return (
       <nav>
          <NavLink to="/" exact className="navbar-light">Home </NavLink>
          <NavLink to="/GlobalMap" className="navbar-light">Map </NavLink>
          <NavLink to="/about" className="navbar-light">About</NavLink>
          
       </nav>
       
    );
}
 
export default Navigation;