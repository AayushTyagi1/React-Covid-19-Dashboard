import React, { Component } from "react";
import { Cards, Charts, CountrySelector } from "..";

import "./Home.css";
import { fetchData } from "../../api";

class Home extends Component {
  state = {
    data: {},
    country: "",
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
        <div>
          <CountrySelector handleCountryChange={this.handleCountryChange} />
        </div>
        <Cards data={data} />
        <Charts data={data} country={country} />
      </div>
    );
  }
}

export default Home;
