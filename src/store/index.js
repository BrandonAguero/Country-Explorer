import { configureStore } from "@reduxjs/toolkit";
import allCountries from "./slices/allCountries.slice.js";

export default configureStore({
  reducer: {
    allCountries,
  },
});
