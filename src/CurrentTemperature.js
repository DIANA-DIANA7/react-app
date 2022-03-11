import React,{useState} from "react";

export default function CurrentTemperature (props){
const[unit, setUnit]=useState("fahrenheit");
    function convertToCelsius(event){
    event.preventDefault();
    setUnit("celsius");
    }
  function convertToFahrenheit(event){
      event.preventDefault();
      setUnit("fahrenheit");
  }
if (unit === "fahrenheit" ){
    return (
      <div className="currentTemperature">
        {Math.round(props.fahrenheit)}
        <small id="fah"> F°</small>|
        <small id="cel">
          <a href="/" onClick={convertToCelsius}>
            {" "}
            C°
          </a>
        </small>
        <ul>
          <li>
            High: <span id="high">{Math.round(props.high)}</span>°
          </li>
          <li>
            Low: <span id="low">{Math.round(props.low)}</span>°
          </li>
          <li>
            Wind: <span id="wind">{Math.round(props.wind)}</span>mph
          </li>
          <li>
            Humidity: <span id="humid">{props.humid}</span>%
          </li>
        </ul>
      </div>
    );
} else { 
    let celsiusTemp=(props.fahrenheit-32)* 5/9;
    let highTemp=(props.high-32)* 5/9;
    let lowTemp=(props.low-32)* 5/9;
    let windSpeed = (props.wind) * 1.609;

    
    return (
      <div className="currentTemperature">
        {Math.round(celsiusTemp)}
        <small id="fah">
          <a href="/" onClick={convertToFahrenheit}>
            F°
          </a>
        </small>
        |<small id="cel">C°</small>
        <ul>
          <li>
            High: <span id="high">{Math.round(highTemp)}</span>°
          </li>
          <li>
            Low: <span id="low">{Math.round(lowTemp)}</span>°
          </li>
          <li>
            Wind: <span id="wind">{Math.round(windSpeed)}</span>km/h
          </li>
          <li>
            Humidity: <span id="humid">{props.humid}</span>%
          </li>
        </ul>
      </div>
    );
}
}