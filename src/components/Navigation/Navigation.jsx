import React from 'react';
import {Navbar, NavbarBrand} from 'reactstrap';
import { NavLink } from 'react-router-dom';
import "./Navigation.css";
 
const Navigation = () => {
    return (
      <Navbar dark color='dark' background-color="black">
      <div className='container' id="appcontainer">
      <NavbarBrand href="/">COVID-19 Dashboard</NavbarBrand>
      </div>
      <nav>
          <NavLink to="/" exact className="navbar-light">Home </NavLink>
          <NavLink to="/GlobalMap" className="navbar-light">Map </NavLink>
          <NavLink to="/about" className="navbar-light">About</NavLink>
          </nav>
       </Navbar>
       
    );
}
export default Navigation;