import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Home, About, GlobalMap, Navigation, Dark, Footer } from "./components";

import { TinyButton } from "react-scroll-up-button";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Navigation />
        </div>
        <div className="d-flex justify-content-end p-2">
          <Dark />
        </div>
        <Switch>
          <Route exact href="/" component={Home} />
          <Route href="/about" component={About} />
          <Route href="/GlobalMap" component={GlobalMap} />
        </Switch>
        <TinyButton />
        <Footer />
      </BrowserRouter>
    );
  }
}

export default App;
