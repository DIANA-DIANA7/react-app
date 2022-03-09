import React from "react";
import FormateDate from "./FormateDate";
import Icons from"./Icons";
export default function Weather(props) {
  return (
    <div>
      <h1 id="searched-city">{props.details.city}</h1>
      <h2>
        
        <FormateDate date="wednesday" />
      </h2>
      <Icons code={props.details.icon}/>

      <span className="description" id="weather-description">
        <br />
        {props.details.description}
      </span>
      <h3 id="currentTemperature">
        {Math.round(props.details.temperature)}
        <small id="cel">F°</small>
        <span>|</span>
        <small id="fah">C°</small>
      </h3>

      <ul>
        <li>
          High: <span id="high">{Math.round(props.details.high)}</span>°
        </li>
        <li>
          Low: <span id="low">{Math.round(props.details.low)}</span>°
        </li>
        <li>
          Wind: <span id="wind">{Math.round(props.details.wind)}</span>mph
        </li>
        <li>
          Humidity: <span id="humid">{props.details.humidity}</span>%
        </li>
      </ul>
    </div>
  );
}
