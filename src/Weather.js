import React from "react";
import FormatDate from "./FormatDate";
import Icons from"./Icons";
import CurrentTemperature from "./CurrentTemperature";
export default function Weather(props) {
  return (
    <div>
      <h1>{props.details.city}</h1>
      <h2>
        <FormatDate date={props.details.date} />
      </h2>
      <Icons code={props.details.icon} />

      <span className="description" id="weather-description">
        <br />
        {props.details.description}
      </span>
      <CurrentTemperature
        fahrenheit={props.details.temperature}
        high={props.details.high}
        low={props.details.low}
        wind={props.details.wind}
        humid={props.details.humidity}
      />
    </div>
  );
}
