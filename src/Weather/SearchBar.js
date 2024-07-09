import React, { useState } from "react";
import axios from "axios";
const WeatherApp = () => {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);
  const API_KEY = "34f19ded3d6d17325e99ccf9aceaa809";
  const fetchWeatherData = async () => {
    console.log(city,'city');
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      );
      console.log("API response:", response.data);
      setWeather(response.data);
      
      setError(null);
    } catch (error) {
      console.error(
        "API call error:",
        error.response ? error.response.data : error.message
      );
      setError("City not found. Please enter a valid city name.");
      setWeather(null);
    }
  };
  console.log(weather);
  const handleButtonClick = () => {
    if (city.trim() !== "") {
      fetchWeatherData();
    } else {
      setError("Please enter a city name.");
    }
  };
  return (
    <div className="weather-app">
      <h2>Weather App</h2>
      <div>
        <input
          type="text"
          placeholder="Enter city name"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button onClick={handleButtonClick}>Get Weather</button>
      </div>
      {error && <p className="error">{error}</p>}
      <h1>City:{weather?.name}</h1>
      <h3>Temperature:{weather?.main.temp}</h3>
      <p> Humidity:{weather?.main.humidity}</p>

    </div>
  );
};
export default WeatherApp;