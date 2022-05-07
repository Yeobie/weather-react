import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props) {
  let date = new Date(props.data.dt * 1000);
  let day = date.getDay();
  let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  return (
    <div className="WeatherForecastDay">
      <div className="Forecast-Day-Week fw-bold mb-2">{days[day]}</div>
      <div className="WeatherIcon">
        <WeatherIcon
          code={props.data.weather[0].icon}
          size={60}
          color="#225d6b"
        />
      </div>
      <div className="Forecast-Temperatures">
        <span className="Forecast-Temp-Max me-2">
          {Math.round(props.data.temp.max)}º
        </span>

        <span className="Forecast-Temp-Min">
          {Math.round(props.data.temp.min)}º
        </span>
      </div>
    </div>
  );
}
