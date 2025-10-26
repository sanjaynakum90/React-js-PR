import React, { useState } from 'react';
import SearchBar from './components/SearchBar';
import CountryCard from './components/CountryCard';

const App = () => {
  const [query, setQuery] = useState('');
  const [country, setCountry] = useState(null);
  const [error, setError] = useState('');

  const handleSearch = async () => {
    if (!query) return;
    try {
      const res = await fetch(`https://restcountries.com/v3.1/name/${query}`);
      const data = await res.json();
      if (data && data.length > 0) {
        setCountry(data[0]);
        setError('');
      } else {
        setCountry(null);
        setError('Country not found');
      }
    } catch (err) {
      setError('Failed to fetch country data');
    }
  };

  return (
    <div className="container py-5">
      <h1 className="text-center mb-4">🌍 Country Info Finder</h1>
      <SearchBar query={query} setQuery={setQuery} handleSearch={handleSearch} />
      {error && <div className="alert alert-danger text-center">{error}</div>}
      {country && <CountryCard country={country} />}
    </div>
  );
};

export default App;