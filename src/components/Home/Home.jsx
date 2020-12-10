import React, { Component } from "react";
import { Cards, Charts, CountrySelector } from "..";

import "./Home.css";
import { fetchData } from "../../api";
import GlobalCards from "../GlobalCards/GlobalCards";

class Home extends Component {
  state = {
    data: {},
    country: "global",
  };

  async componentDidMount() {
    const fetchedData = await fetchData();

    this.setState({ data: fetchedData });
  }
  handleCountryChange = async (country) => {
    const fetchedData = await fetchData(country);
    this.setState({ data: fetchedData, country: country });
  };

  render() {
    const { data, country } = this.state;
    return (
      <div className="Home">
        <h1 className="globalhead p-2 m-2">Global</h1>
        <div className="row">
          <div className="col-xs-12 col-sm-4">
            {" "}
            <GlobalCards />
          </div>
          <div className="col-xs-12 col-sm-6 mt-5 ml-3">
            <Charts data={data} />
          </div>
        </div>
        <div>
          <CountrySelector handleCountryChange={this.handleCountryChange} />
        </div>
        <div>
          <div className="row">
            <div className="col-xs-12 col-sm-4 ml-4 p-2">
              {" "}
              <Cards data={data} country={country} />
            </div>
            <div className="col-xs-12 col-sm-6 mt-5 ml-3">
              <Charts data={data} country={country} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
