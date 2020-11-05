import React,{Component} from 'react';
import {Navbar, NavbarBrand, NavItem, NavLink} from 'reactstrap';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './Home';
import About from './components/About/About'
import Navigation from './components/Navigation/Navigation';

class App extends Component {

  render(){

    return(
      <BrowserRouter>
      <div>
      <Navbar dark color='dark'>
      <div className='container' id="appcontainer">
      <NavbarBrand href="/">COVID-19 Dashboard</NavbarBrand>
      </div>
      <Navigation />
      </Navbar>
      </div> 
      <Switch>
           <Route path="/" component={Home} exact/>
           <Route path="/about" component={About}/>
         </Switch>
    </BrowserRouter>
    );
  }
}

export default App;
