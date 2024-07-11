import React, { useState } from "react";
import axios from "axios";
import "./WeatherApp.css";
const WeatherApp = () => {
  const [city, setCity] = useState<any>("");
  const [weather, setWeather] = useState<any>(null);
  const [error, setError] = useState<String>("");
  const API_KEY = "34f19ded3d6d17325e99ccf9aceaa809";
  const fetchWeatherData = async () => {
    console.log(city,'city');
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      );
      console.log("API response:", response.data);
      setWeather(response.data);
      
      setError("");
    } catch (error) {
      
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
   
    <div className="weather">
      <div className="weather-container">
        <input className=" "
          type="text"
          placeholder="Enter city name"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <img src={require('../assets/images/search.png')} alt="search" onClick={handleButtonClick}/>
      </div>
      <img src='https://openweathermap.org/img/wn/03d@2x.png' alt="weather" className="weather-icon"/>
      {error && <p className="error">{error}</p>}
      <p className="temperature">{weather?.main.temp}°C</p>
      <p className="location">{weather?.name}</p>
      <p>{weather?.weather[0].icon}</p>
      <div className="weather-data">
        <div className="col">
          <img src={require('../assets/images/humidity.png')} alt=""/>
          <div>
            <p>{weather?.main.humidity}%</p>
            <span>Humidity</span>
          </div>
        </div>
        <div className="col">
          <img src={require('../assets/images/wind.png')} alt=""/>
          <div>
            <p>{weather?.wind.speed}Km/ph</p>
            <span>Wind-speed</span>
          </div>
        </div>
      </div>
      </div>

  );
};
export default WeatherApp;