import React, { useState } from "react";
import axios from "axios";
import "./WeatherApp.css";
import Modal from "DialogueBox/Modal";
const WeatherApp = ({setActive,setWeatherInfo}:any) => {
  const [city, setCity] = useState<any>("");
  const [weather, setWeather] = useState<any>(null);
  const [error, setError] = useState<String>("");
  const API_KEY = "34f19ded3d6d17325e99ccf9aceaa809";
  const [show, setShow] = useState(false);

  const showModal = () => {
    setShow(true);
  };

  const hideModal = () => {
    setShow(false);
  };
 
  const fetchWeatherData = async () => {
    console.log(city,'city');
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      );
      console.log("API response:", response.data);
      setWeather(response.data);
      setWeatherInfo(response.data);
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
        <input className="input"
          type="text"
          placeholder="Enter city name"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <img className="img" src={require('../assets/images/search.png')} alt="search" onClick={handleButtonClick}/>
      </div>
      
      {error && <p className="error">{error}</p>}
      {weather &&
      <div>
      <img src={`http://openweathermap.org/img/wn/${weather?.weather[0].icon}.png`} alt="weather" className="weather-icon"/>
      <p className="temperature">{weather?.main.temp}°C</p>
      <p className="location">{weather?.name}</p>
      <div>
      <button className="WeatherMap" onClick={()=>setActive("2")}>Show in Map</button>
      </div>
      <div className="App">
      <button type="button" onClick={showModal} className="dialogueBox">Show in Popup</button>
      <Modal show={show} handleClose={hideModal}>
        <div className="PopUp">
        <h1>Location:{weather?.name}</h1>
        <p>Temperature:{weather?.main.temp}°C</p>
        <p>Humidity:{weather?.main.humidity}%</p>
        <p>Wind Speed:{weather?.wind.speed}Km/ph</p>
        </div>
      </Modal>
    </div>
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
      </div>}
      </div>

  );
};
export default WeatherApp;