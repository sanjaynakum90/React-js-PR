import React, { useState } from 'react';
import MovieList from './Components/MovieList';
import SearchBar from './Components/SearchBar';


const App = () => {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState('');

  const handleSearch = async () => {
    if (!query) return;
    const res = await fetch(`https://www.omdbapi.com/?i=tt3896198&apikey=f48b0440=${query}`);
    const data = await res.json();
    if (data.Response === 'True') {
      setMovies(data.Search);
      setError('');
    } else {
      setMovies([]);
      setError(data.Error);
    }
  };

  return (
    <div className="container py-4">
      <h1 className="text-center mb-4">🎬 Movie Explorer</h1>
      <SearchBar query={query} setQuery={setQuery} handleSearch={handleSearch} />
      {error && <p className="text-danger text-center">{error}</p>}
      <MovieList movies={movies} />
    </div>
  );
};

export default App;