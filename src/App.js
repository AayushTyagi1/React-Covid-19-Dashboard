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
        <Switch>
          <Route
            exact
            path="/React-Covid-19-Dashboard"
            component={Home}
            render={() => {
              return this.state.isUserAuthenticated ? (
                <Redirect to={Home} />
              ) : (
                <Redirect to="/404" />
              );
            }}
          />
          <Route exact path="/React-Covid-19-Dashboard" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/GlobalMap" component={GlobalMap} />
        </Switch>
        <TinyButton />
        <Footer />
      </BrowserRouter>
    );
  }
}

export default App;
