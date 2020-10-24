import axios from 'axios';

const api_link='https://covid19.mathdro.id/api'

export const fetchData = async () =>{
    try{
        const {data: {confirmed, recovered, deaths, lastUpdate}} = await axios.get(api_link);
        return {confirmed, recovered, deaths, lastUpdate};
    }
    catch (e) {

    }
}