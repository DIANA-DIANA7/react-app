import React, { useState } from "react";
import axios from "axios";
import "./search.css";
import Weather from "./Weather";
import WeatherForecast from "./WeatherForecast";
export default function Search(props) {
  const [city, setCity] = useState(props.defaultCity);
  const [weather, setWeather] = useState({ ready: false });

  function showWeather(response) {
   
    setWeather({
      ready: true,
      coord: response.data.coord,
      city: response.data.name,
      date: new Date(response.data.dt*1000),
      temperature: response.data.main.temp,
      description: response.data.weather[0].description,
      high: response.data.main.temp_max,
      low: response.data.main.temp_min,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      icon: response.data.weather[0].icon,
      
    });
  }
  function search() {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=aff85d13c648e8073308e541138f1d63&units=imperial`;
    axios.get(url).then(showWeather);
  }
  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  if (weather.ready) {
    return (
      <div className="current-weather">
        <form className="search-form" onSubmit={handleSubmit}>
          <input
            type="search"
            placeholder="Enter a city"
            autoComplete="off"
            autoFocus="on"
            id="search-bar"
            onChange={updateCity}
          />
          <input type="submit" value="Search" className="search-btn" />
          <button className="location-btn">Current Location</button>
        </form>
         <Weather details={weather} />
         <WeatherForecast coord={weather.coord}/>
      </div>
    );
  } else {
    search();
    return "loading...";
  }
}
