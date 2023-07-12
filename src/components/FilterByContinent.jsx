import React from "react";

function FilterByContinent({ selectedContinent, setSelectedContinent }) {

    const handleChange = (event) => {
        setSelectedContinent(event.target.value);
    };

    return (
        <select value={selectedContinent} onChange={handleChange}>
            <option value="">All Regions</option>
            <option value="Africa">Africa</option>
            <option value="Americas">Americas</option>
            <option value="Asia">Asia</option>
            <option value="Europe">Europe</option>
            <option value="Oceania">Oceania</option>
        </select>
    );
}

export default FilterByContinent;
