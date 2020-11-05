import React,{Component} from 'react';
import logo from './logo.svg';
import {Cards, Charts, CountrySelector } from './components';
import './App.css';
import {fetchData} from './api';
import {viruscovid} from './images/VirusCovid-19.png';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

class Home extends Component {

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
      <div className ='Home'>
      <Cards data={data}/>
      <CountrySelector handleCountryChange={this.handleCountryChange}/>
      <Charts data={data} country={country}/>
      </div>
    );
  }
}

export default Home;
