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
        <span className="currentTemp">{Math.round(props.fahrenheit)}</span>
        <span>
          F°|
          <a href="/" onClick={convertToCelsius}>
            C°
          </a>
        </span>
        <ul>
          <li>
            High: <span>{Math.round(props.high)}</span>°
          </li>
          <li>
            Low: <span>{Math.round(props.low)}</span>°
          </li>
          <li>
            Wind: <span>{Math.round(props.wind)}</span>mph
           
          </li>
          <li>
            Humidity: <span>{props.humid}</span>%
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
        <span className="currentTemp">{Math.round(celsiusTemp)}</span>
        <span>
          <a href="/" onClick={convertToFahrenheit}>
            F°
          </a>
          |C°
        </span>
        <ul>
          <li>
            High: <span>{Math.round(highTemp)}</span>°
          </li>
          <li>
            Low: <span>{Math.round(lowTemp)}</span>°
          </li>
          <li>
            Wind: <span>{Math.round(windSpeed)}</span>km/h
          </li>
          <li>
            Humidity: <span>{props.humid}</span>%
          </li>
        </ul>
      </div>
    );
}
}