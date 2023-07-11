import { useDispatch } from "react-redux";
import "./App.css";
import { useEffect } from "react";
import { getAllCountriesThunk } from "./store/slices/allCountries.slice.js";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllCountriesThunk());
  }, []);

  return (
    <>
      <div>
        <h1>App</h1>
      </div>
    </>
  );
}

export default App;
