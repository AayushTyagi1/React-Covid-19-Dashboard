import React,{useState, useEffect} from 'react';
import { NativeSelect, FormControl} from '@material-ui/core';
  import './CountryTable.module.css'
  import { fetchCountries } from '../../api'
  

const CountryTable = () => {
    const [fetchedCountries, setFetchedCountries ] =  useState([]);
    useEffect(
        () =>{
            const fetchAPI = async() => {
                setFetchedCountries(await fetchCountries);
            }
            fetchAPI();
        },[setFetchedCountries]);
    return(
        <FormControl>
            <NativeSelect>
                <option value="global">Global</option>
    

            </NativeSelect>
        </FormControl>
    )
}
export default CountryTable;