import React, { useState } from 'react';
import SearchBar from './Components/SearchBar';
import WeatherCard from './Components/WeatherCard';

const App = () => {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState('');

  const fetchWeather = async () => {
    if (!city) return;
    try {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=YOUR_API_KEY&units=metric`
      );
      const data = await res.json();
      if (data.cod === 200) {
        setWeather(data);
        setError('');
      } else {
        setWeather(null);
        setError(data.message);
      }
    } catch (err) {
      setError('Failed to fetch weather data');
    }
  };

  return (
    <div className="container py-5">
      <h1 className="text-center mb-4">🌤 Weather Dashboard</h1>
      <SearchBar city={city} setCity={setCity} fetchWeather={fetchWeather} />
      {error && <div className="alert alert-danger text-center">{error}</div>}
      {weather && <WeatherCard data={weather} />}
    </div>
  );
};

export default App;