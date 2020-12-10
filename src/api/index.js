import axios from "axios";

const api_link = "https://covid19.mathdro.id/api";

export const fetchData = async (country) => {
  let changeableUrl = api_link;

  if (country) {
    changeableUrl = `${api_link}/countries/${country}`;
  }

  try {
    const {
      data: { confirmed, recovered, deaths, lastUpdate },
    } = await axios.get(changeableUrl);
    return { confirmed, recovered, deaths, lastUpdate };
  } catch (e) {
    console.log(e);
  }
};
export const fetchDailyData = async () => {
  try {
    const { data } = await axios.get(`${api_link}/daily`);
    const modifiedData = data.map((dailyData) => ({
      confirmed: dailyData.confirmed.total,
      deaths: dailyData.deaths.total,
      date: dailyData.reportDate,
    }));
    return modifiedData;
  } catch (e) {
    console.log(e);
  }
};

export const fetchCountries = async () => {
  try {
    const {
      data: { countries },
    } = await axios.get(`${api_link}/countries`);

    return countries.map((country) => country.name);
  } catch (e) {
    console.log(e);
  }
};
