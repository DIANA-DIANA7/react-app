import React from "react";
import FormatDate from "./FormatDate";
import Icons from"./Icons";
import CurrentTemperature from "./CurrentTemperature";
export default function Weather(props) {
  return (
    <div>
      <h1 id="searched-city">{props.details.city}</h1>
      <h2>
        
        <FormatDate  />
      </h2>
      <Icons code={props.details.icon}/>

      <span className="description" id="weather-description">
        <br />
        {props.details.description}
      </span>
      <CurrentTemperature fahrenheit={props.details.temperature} />
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
