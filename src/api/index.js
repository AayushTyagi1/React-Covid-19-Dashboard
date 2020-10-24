import axios from 'axios';

const api_link='https://covid19.mathdro.id/api'

export const fetchData = async () =>{
    try{
        const response = await axios.get(api_link);
        return response;
    }
    catch (e) {

    }
}