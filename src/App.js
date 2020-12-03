import React,{Component} from 'react';
import {Navbar, NavbarBrand} from 'reactstrap';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/Home/Home';
import About from './components/About/About';
import GlobalMap from './components/GlobalMap/GlobalMap';
import Navigation from './components/Navigation/Navigation';

class App extends Component {

  render(){

    return(
      <BrowserRouter>
      <div>
      <Navbar dark color='dark' background-color="black">
      <div className='container' id="appcontainer">
      <NavbarBrand href="/">COVID-19 Dashboard</NavbarBrand>
      </div>
      <Navigation />
      </Navbar>
      </div> 
      <Switch>
           <Route path="/" component={Home} exact/>
           <Route path="/about" component={About}/>
           <Route path="/GlobalMap" component={GlobalMap}/>
         </Switch>
    </BrowserRouter>
    );
  }
}

export default App;
