import React, { Component } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { Home, About, GlobalMap, Navigation, Dark, Footer } from "./components";

import { TinyButton } from "react-scroll-up-button";

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: "React",
      isUserAuthenticated: true,
    };
  }

  render() {
    return (
      <BrowserRouter>
        <div>
          <Navigation />
        </div>
        <div className="d-flex justify-content-end p-2">
          <Dark />
        </div>
        <Route
          exact
          path="/"
          render={() => {
            return this.state.isUserAuthenticated ? (
              <Redirect to="/" />
            ) : (
              <Redirect to="/404" />
            );
          }}
        />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/GlobalMap" component={GlobalMap} />
        </Switch>
        <TinyButton />
        <Footer />
      </BrowserRouter>
    );
  }
}

export default App;
