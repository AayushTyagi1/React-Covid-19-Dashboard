import React from 'react';
 
import { NavLink } from 'react-router-dom';
import "./Navigation.css";
 
const Navigation = () => {
    return (
       <nav>
          <NavLink to="/ " exact ClassName="navbar-light" to="/">Home </NavLink>
          <NavLink to="/about" className="navbar-light"> About</NavLink>
       </nav>
       
    );
}
 
export default Navigation;