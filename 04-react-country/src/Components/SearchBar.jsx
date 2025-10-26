import React from 'react';

const SearchBar = ({ query, setQuery, handleSearch }) => (
    <div className="input-group mb-4">
        <input
            type="text"
            className="form-control"
            placeholder="Enter country name"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
        />
        <button className="btn btn-primary" onClick={handleSearch}>
            Search
        </button>
    </div>
);

export default SearchBar;