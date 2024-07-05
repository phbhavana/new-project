import React from 'react';
import "./App.css";
import SearchBar from './Weather/SearchBar';
import WeatherApp from './Weather/weather-app';

function App() {

  return (
      <div className="search-bar-container">
        <WeatherApp/>
    </div>
  );
}

export default App;
