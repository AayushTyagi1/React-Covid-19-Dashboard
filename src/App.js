import React,{Component} from 'react';
import logo from './logo.svg';
import {Navbar, NavbarBrand} from 'reactstrap';
import {Cards, Charts, CountryTable } from './components';
import './App.css';
import {fetchData} from './api'

class App extends Component {

  state = {
    data: {},
  }

  async componentDidMount(){
    const fetchedData = await fetchData();
 
    this.setState({data: fetchedData})
  }
  render(){

    const {data}=this.state;
    return(
      <div className ='App'>
      <Navbar dark color='dark'>
      <div className='container'>
      <NavbarBrand href="/">COVID-19 Dashboard</NavbarBrand>
      </div>
      </Navbar>
      <br />
      <Cards data={data}/>
      <Charts />
      <CountryTable />
      </div>
    );
  }
}

export default App;
