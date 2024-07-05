
import { useState } from "react";

const WeatherApp=()=> {
  const [search, setSearch] = useState("");
  const [weather, setWeather] = useState({});

  const searchPressed = () => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&APPID=${'34f19ded3d6d17325e99ccf9aceaa809'}`)
      .then((res) => res.json())
      .then((result) => {
        setWeather(result);
      });
  };

  return (
    <div className="App">
      <header className="App-header">
        
        <h1>Weather App</h1>

       
        <div>
          <input
            type="text"
            placeholder="Enter city/town..."
            onChange={(e) => setSearch(e.target.value)}
          />
          <button onClick={searchPressed}>Search</button>
        </div>

        
        {typeof weather.main !== "undefined" ? (
          <div>
            
            <p>{weather.name}</p>

            
            <p>{weather.main.temp}°C</p>

            
            <p>{weather.weather[0].main}</p>
            <p>({weather.weather[0].description})</p>
          </div>
        ) : (
          ""
        )}
      </header>
    </div>
  );
}

export default WeatherApp;