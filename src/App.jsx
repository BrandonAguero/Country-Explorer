import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { useEffect, useState } from "react";
import { getAllCountriesThunk } from "./store/slices/allCountries.slice.js";
import FilterByName from "./components/FilterByName";

function App() {
  const [inputFilterName, setInputFilterName] = useState("");

  const countries = useSelector((states) => states.allCountries);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllCountriesThunk());
  }, []);

  const filterCountriesByName = countries?.filter((country) => {
    const countryName = country.name.common.toLowerCase();
    const currentInput = inputFilterName.toLowerCase();
    return countryName.includes(currentInput);
  });

  console.log(countries);

  return (
    <>
      <div>
        <h1>App</h1>
        <FilterByName
          inputFilterName={inputFilterName}
          setInputFilterName={setInputFilterName}
        />
        <ul>
          {filterCountriesByName?.map((country) => (
            <li key={country.name.common}>{country.name.common}</li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;
