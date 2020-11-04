import React,{useState, useEffect} from 'react';
import { NativeSelect, FormControl} from '@material-ui/core';
  import './CountryTable.module.css'
  import { fetchCountries } from '../../api'
  

const CountryTable = ({ handleCountryChange}) => {
    const [fetchedCountries, setFetchedCountries ] =  useState([]);
    useEffect(
        () =>{
            const fetchAPI = async() => {
                setFetchedCountries(await fetchCountries());
            }
            fetchAPI();
        },[setFetchedCountries]);
    return(
        <FormControl>
            <NativeSelect defaultValue="" onChange={(e)=>handleCountryChange(e.target.value)}>
                <option value="global">Global</option>
                {fetchedCountries.map((country,i)=><option key={i} value={country}>{country}</option>)}    

            </NativeSelect>
        </FormControl>
    )
}
export default CountryTable;