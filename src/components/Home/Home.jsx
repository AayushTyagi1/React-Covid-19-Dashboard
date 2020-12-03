import React,{Component} from 'react';
import {Cards, Charts, CountrySelector, InfoTable,mapView } from '..';
import { TinyButton  } from "react-scroll-up-button";
import './Home.css';
import {fetchData} from '../../api';



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
        <InfoTable data={data} country={country}/>
      <div>
      <CountrySelector handleCountryChange={this.handleCountryChange}/>
      </div>
      <mapView />
      <Cards data={data}/>
 
      <Charts data={data} country={country}/>
      <footer>
      <div className="App-footer">
          <div className=" align-content offset-xs-0 offset-md-8 offset-lg-10 text-white-50">
               Created By:<br/>
              <a href="https://aayushtyagiresume.000webhostapp.com/" target="_blank">Aayush Tyagi</a><br/>
              <a href="https://www.linkedin.com/in/aayush-tyagi-32a527190/" target="_blank">LinkedIn</a><br/>
              <a href="https://mail.google.com/mail/u/0/#inbox?compose=CllgCJTJFkzRjNxWClCGHDCxlTtDrwKXdKXDVwLHfxxpLdVhzrHmrQqkVjhMkpcQgzNcfMrqcBB" target="_blank">Mail</a><br/>
              <a href="https://github.com/mathdroid/covid-19-api" target="_blank">Data Source</a><br/>
          </div>
          </div>
      </footer>
      <TinyButton />
      </div>
    );
  }
}

export default Home;
