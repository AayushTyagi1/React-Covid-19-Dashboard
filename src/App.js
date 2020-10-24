import React,{Component} from 'react';
import logo from './logo.svg';
import {Navbar, NavbarBrand} from 'reactstrap';
import {Cards, Charts, CountryTable } from './components';
import './App.css';
import {fetchData} from './api'

class App extends Component {

  async componentDidMount(){
    const data = await fetchData();
    console.log(data);
  }
  render(){
    return(
      <div className ='App'>
      <Navbar dark color='dark'>
      <div className='container'>
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
