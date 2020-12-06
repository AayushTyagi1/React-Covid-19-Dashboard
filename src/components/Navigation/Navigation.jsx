import React from 'react';
import {Navbar, NavbarBrand, NavItem, Nav} from 'reactstrap';
import {NavLink} from 'react-router-dom'
import "./Navigation.css";
import GithubCorner from '../GithubCorner/GithubCorner'
 
const Navigation = () => {
    return (
      <Navbar dark color='dark' className="p-0">
      <div  id="appcontainer">
      <NavbarBrand href="/">COVID-19 Dashboard</NavbarBrand>
      </div>
      
          <Nav>
        <NavItem className='p-2'>
          <NavLink to="/" exact className="navbar-light">Home </NavLink></NavItem>
          <NavItem className='p-2'><NavLink to="/GlobalMap" className="navbar-light">Map  </NavLink></NavItem>
          <NavItem className='p-2'><NavLink to="/about" className="navbar-light">About</NavLink>
        </NavItem>
              <GithubCorner/>
          </Nav>
       </Navbar>
       
    );
}
export default Navigation;