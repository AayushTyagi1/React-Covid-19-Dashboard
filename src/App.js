import React,{Component} from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import {Home, About, GlobalMap, Navigation, Dark} from './components'

import { TinyButton  } from "react-scroll-up-button";

class App extends Component {

  render(){
    return(
     
      <BrowserRouter>
      <div>
      <Navigation />
      </div> 
      <div className="d-flex justify-content-end p-2">
      <Dark />
      </div>
      <Switch>

           <Route path="/" component={Home} exact/>
           <Route path="/about" component={About}/>
           <Route path="/GlobalMap" component={GlobalMap}/>
         </Switch>
         <TinyButton />
    </BrowserRouter>
    );
  }
}

export default App;
