const fetchWeatherData = async () => {
    try {
      const response = await axios.get(https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric);
      setWeather(response.data);
      setError(null);
    } catch (error) {
      setError('City not found. Please enter a valid city name.');
      setWeather(null);
    }
};