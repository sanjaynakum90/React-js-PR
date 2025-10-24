import React from 'react';

const SearchBar = ({ city, setCity, fetchWeather }) => (
    <div className="input-group mb-4">
        <input
            type="text"
            className="form-control"
            placeholder="Enter city"
            value={city}
            onChange={(e) => setCity(e.target.value)}
        />
        <button className="btn btn-primary" onClick={fetchWeather}>
            Search
        </button>
    </div>
);

export default SearchBar;