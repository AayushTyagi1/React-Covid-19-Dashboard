import React,{Component} from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/Home/Home';
import About from './components/About/About';
import GlobalMap from './components/GlobalMap/GlobalMap';
import Navigation from './components/Navigation/Navigation';
import Dark from './components/Dark/Dark'
import { dark } from '@material-ui/core/styles/createPalette';

class App extends Component {

  render(){
    return(
     
      <BrowserRouter>
      <div>
      <Navigation />
      </div> 
      <Dark />
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
