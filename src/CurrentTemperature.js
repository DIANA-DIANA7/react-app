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
        <small id="fah"> F°</small>
        |
        <small id="cel">
          <a href="/" onClick={convertToCelsius}> C°</a>
        </small>
      </div>
    );
} else { 
    let celsiusTemp=(props.fahrenheit-32)* 5/9;
    return (
  <div className="currentTemperature">
    {Math.round(celsiusTemp)}
    <small id="fah">  
    <a href="/" onClick={convertToFahrenheit}>
        F°
    </a>
    </small>|
    <small id="cel">
      C°
    </small>
  </div>
);
}
}