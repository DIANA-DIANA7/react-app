import React from "react";
import Icons from "./Icons";
import"./WeatherDay.css";

export default function WeatherDay(props){
function maxTemp(){
    let highTemp = Math.round(props.data.temp.max);
return `${highTemp}°`;
}
function lowTemp() {
  let lowTemp = Math.round(props.data.temp.min);
  return `${lowTemp}°`;
}
function day(){
    let date=new Date(props.data.dt*1000);
    let day=date.getDay();
    let days=["Sun", "Mon","Tue", "Wed", "Thu", "Fri", "Sat"];
    return days[day];
}
    return (
      <div className="Forecast">
        <ul>
          <li>
            <span className="day">{day()}</span>
          </li>
          <li>
           <span className="tempHigh">{maxTemp()}</span>
           |
            <span className="tempLow">{lowTemp()}</span>
          </li>
          <li>
            <span className="icons">
              <Icons code={props.data.weather[0].icon} size={30} />
            </span>
          </li>
        </ul>
      </div>
    );
}