import React from "react";
import { Navbar, NavbarBrand, NavItem, Nav } from "reactstrap";
import { NavLink } from "react-router-dom";
import "./Navigation.css";
import GithubCorner from "../GithubCorner/GithubCorner";

const Navigation = () => {
  return (
    <Navbar className="p-0 navbar">
      <div id="appcontainer">
        <NavbarBrand
          className="p-2 navbar-light"
          href="https://aayushtyagi1.github.io/React-Covid-19-Dashboard/"
        >
          COVID-19 Dashboard
        </NavbarBrand>
      </div>
      <Nav>
        <NavItem className="p-2">
          <NavLink
            to="/React-Covid-19-Dashboard"
            exact
            active
            className="navbar-light"
          >
            Home
          </NavLink>
        </NavItem>
        <NavItem className="p-2">
          <NavLink to="/GlobalMap" className="navbar-light">
            Map
          </NavLink>
        </NavItem>
        <NavItem className="p-2">
          <NavLink to="/about" className="navbar-light">
            About
          </NavLink>
        </NavItem>
        <GithubCorner />
      </Nav>
    </Navbar>
  );
};
export default Navigation;
