import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {Navbar, NavbarBrand} from 'reactstrap';
import {Cards, Charts, CountryTable } from './components';

class App extends Component {
  render(){
    return(
      <div className ='App'>
      <Navbar dark color='dark'>
      <div clasName='container'>
      <NavbarBrand href="/">COVID-19 Dashboard</NavbarBrand>
      </div>
      </Navbar>
      <Cards />
      <Charts />
      <CountryTable />
      </div>
    );
  }
}

export default App;
