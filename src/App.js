import React,{Component} from 'react';
import logo from './logo.svg';
import {Navbar, NavbarBrand, NavItem, NavLink} from 'reactstrap';
import {Cards, Charts, CountrySelector } from './components';
import './App.css';
import {fetchData} from './api';
import {viruscovid} from './images/VirusCovid-19.png';

class App extends Component {

  state = {
    data: {},
    country: '',
  }

  async componentDidMount(){
    const fetchedData = await fetchData();
 
    this.setState({data: fetchedData})
  }
  handleCountryChange = async (country) =>{
    const fetchedData = await fetchData(country);
    this.setState({data: fetchedData, country:country});
  }
  render(){

    const {data, country}=this.state;
    return(
      <div className ='App'>
      <Navbar dark color='dark'>
      <div className='container' id="appcontainer">
      <NavbarBrand href="/">COVID-19 Dashboard</NavbarBrand>
      </div>
      </Navbar>
      <Cards data={data}/>
      <CountrySelector handleCountryChange={this.handleCountryChange}/>
      <Charts data={data} country={country}/>
      </div>
    );
  }
}

export default App;
