import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { useEffect, useState } from "react";
import { getAllCountriesThunk } from "./store/slices/allCountries.slice.js";
import FilterByName from "./components/FilterByName";
import FilterByContinent from "./components/FilterByContinent";

function App() {
  const [selectedContinent, setSelectedContinent] = useState("");

  const [inputFilterName, setInputFilterName] = useState("");

  const countries = useSelector((states) => states.allCountries);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllCountriesThunk());
  }, []);

  const filterCountriesByName = countries?.filter((country) => {
    const countryName = country.name.common.toLowerCase();
    const currentInput = inputFilterName.toLowerCase();
    const continent = country.region.toLowerCase();
    return countryName.includes(currentInput) &&
      (selectedContinent === '' || continent === selectedContinent.toLowerCase())
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
        <FilterByContinent
          selectedContinent={selectedContinent}
          setSelectedContinent={setSelectedContinent}
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