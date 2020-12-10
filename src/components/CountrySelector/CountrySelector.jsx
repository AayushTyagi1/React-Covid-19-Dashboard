import React, { useState, useEffect } from "react";
import { NativeSelect, FormControl } from "@material-ui/core";
import "./CountrySelector.module.css";
import { fetchCountries } from "../../api";

const CountrySelector = ({ handleCountryChange }) => {
  const [fetchedCountries, setFetchedCountries] = useState([]);
  useEffect(() => {
    const fetchAPI = async () => {
      setFetchedCountries(await fetchCountries());
    };
    fetchAPI();
  }, [setFetchedCountries]);
  return (
    <FormControl id="form" className="form-control p-2 m-3 col-3 bg-info">
      <NativeSelect
        defaultValue=""
        onChange={(e) => handleCountryChange(e.target.value)}
      >
        <option value="" key="global">
          Global
        </option>
        {fetchedCountries.map((country, i) => (
          <option key={i} value={country}>
            {country}
          </option>
        ))}
      </NativeSelect>
    </FormControl>
  );
};
export default CountrySelector;
