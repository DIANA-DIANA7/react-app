import axios from "axios";
import React, { useState, useEffect, } from "react";
import Icons from "./Icons";
import "./WeatherForecast.css";
import WeatherDay from "./WeatherDay";

export default function WeatherForecast(props) {
  let [ready, setReady] = useState(false);
  let [forecast, setForecast] = useState(null);

useEffect(()=> {
 setReady(false);},
 [props.coord]);


  function handleResponse(response) {
    setForecast(response.data.daily);
    setReady(true);
  }
  if (ready) {
    console.log(forecast);
    return (
  <div>
      {forecast.map(function(dailyForecast,index){
        if(index<5){
        return(
         <div key={index}>
            <WeatherDay data={dailyForecast}/>
         </div>
         );
        } else {return null;}
        })}
    </div>);} else {
    let lat = props.coord.lat;
    let lon = props.coord.lon;
    let url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=aff85d13c648e8073308e541138f1d63&units=imperial`;
    axios.get(url).then(handleResponse);
    return null;
  }
}
