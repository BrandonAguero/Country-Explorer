import { useRef } from "react";

const FilterByName = ({ inputFilterName, setInputFilterName }) => {
  const inputCountryName = useRef();

  const handleInputCountryName = () => {
    setInputFilterName(inputCountryName.current.value);
  };

  return (
    <div>
      <form>
        <input
          value={inputFilterName}
          onChange={handleInputCountryName}
          ref={inputCountryName}
          placeholder="Insert a country name"
          type="text"
        />
      </form>
    </div>
  );
};

export default FilterByName;
