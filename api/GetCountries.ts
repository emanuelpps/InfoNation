import axios from "axios";

export const GetCountries = async (country: string) => {
  const res = await axios.get(`https://restcountries.com/v3.1/name/${country}`);
  return res.data[0];
};
