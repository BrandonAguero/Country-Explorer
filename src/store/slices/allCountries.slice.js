import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const allCountriesSlice = createSlice({
  name: "allCountries",
  initialState: [],
  reducers: {
    setAllCountriesG: (state, action) => action.payload,
  },
});

export const { setAllCountriesG } = allCountriesSlice.actions;

export default allCountriesSlice.reducer;

export const getAllCountriesThunk = () => (dispatch) => {
  const url = "https://restcountries.com/v3.1/all";
  axios
    .get(url)
    .then((res) => {
      dispatch(setAllCountriesG(res.data));
    })
    .catch((err) => {
      dispatch(setAllCountriesG(null));
    });
};
