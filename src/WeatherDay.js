import React from "react";
import Icons from "./Icons";
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
            {day()}{" "}
            <span className="tempHigh">{maxTemp()}</span>|
            <span className="tempLow">{lowTemp()}</span>{" "}
            <Icons code={props.data.weather[0].icon} size={30} />
          </li>
        </ul>
      </div>
    );
}