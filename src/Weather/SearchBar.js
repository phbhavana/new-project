import { useState } from "react";
import axios from "react";
import React from 'react';
import "./SearchBar.css";
const SearchBar=()=>{
  const [search, setSearch] = useState("");
  const [weather, setWeather] = useState("");
  const [error,setError] = useState("");
  const [city,setCity] = useState("");
      const fetchWeatherData = async () => {
      try {
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${'34f19ded3d6d17325e99ccf9aceaa809'}&units=metric`);
        setWeather(response.data);
        setError(null);
      } catch (error) {
        setError('City not found. Please enter a valid city name.');
        setWeather(null);
      }
    };
    const handleButtonClick =() => {
      if(city.trim()!==""){
        fetchWeatherData();}
      };

  return (
    <div className="App">
      <div className="App-container">
        <h1>Weather App</h1>
        <div className="search-box">
          <input
            type="text"
            placeholder="Enter city/town..."
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
          <button onClick={handleButtonClick}>Search</button>

         
          <div>
            <p>{city.name}</p>

            <p>{weather.main.temp}°C</p>

            <p>{weather.weather[0].main}</p>
            <p>({weather.weather[0].description})</p>  
          </div>
    
        </div>
          </div>
          </div>
  );
};

export default SearchBar;
