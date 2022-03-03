import React, { useState } from "react";
import axios from "axios";

export default function Search() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState({});
  

  function showWeather(response) {
   
    setWeather({
        city: response.data.name,
      temperature: response.data.main.temp,
      description: response.data.weather[0].description,
      high: response.data.main.temp_max,
      low: response.data.main.temp_min,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      icon: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=aff85d13c648e8073308e541138f1d63&units=imperial`;
    axios.get(url).then(showWeather);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }
  let form = (
    <form className="search-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search city"
        autoComplete="off"
        id="search-bar"
        onChange={updateCity}
      />
      <input type="submit" value="Go" className="search-btn" />
      <button className="location-btn">Current Location</button>
    </form>
  );

    return (
      <div className="current-weather">
        {form}
        <h1 id="searched-city">{weather.city}</h1>
        <h2 id="date">monday, feb 10, 2022</h2>
        <img
          src={weather.icon}
          alt="Weather Icon"
          className="current-weather-icon"
          id="icon"
        />

        <span className="description" id="weather-description">
          <br />
          {weather.description}
        </span>
        <h3 id="currentTemperature">
          {Math.round(weather.temperature)}
          <small id="cel">F°</small>
          <span>|</span>
          <small id="fah">C°</small>
        </h3>

        <ul>
          <li>
            High: <span id="high">{Math.round(weather.high)}</span>°
          </li>
          <li>
            Low: <span id="low">{Math.round(weather.low)}</span>°
          </li>
          <li>
            Wind: <span id="wind">{Math.round(weather.wind)}</span>mph
          </li>
          <li>
            Humidity: <span id="humid">{weather.humidity}</span>%
          </li>
        </ul>
      </div>
    );
  
}
