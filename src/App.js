import React,{Component} from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/Home/Home';
import About from './components/About/About';
import GlobalMap from './components/GlobalMap/GlobalMap';
import Navigation from './components/Navigation/Navigation';
import Dark from './components/Dark/Dark';
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
