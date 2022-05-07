import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import Temperature from "./Temperature";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1>{props.data.city}</h1>
      <span id="current-date">
        {" "}
        <FormattedDate date={props.data.date} />{" "}
      </span>
      <p className="Conditions">
        <div className="Description">
          <p className="weatherdata">{props.data.description}</p>
          <p className="weatherdata">Wind: {Math.round(props.data.wind)}km/h</p>
          <p className="weatherdata">Humidity: {props.data.humidity}%</p>
        </div>
      </p>
      <div className="WeatherData">
        {" "}
        <div className="row">
          <div className="col-1 d-none d-md-block"></div>
          <Temperature celsius={props.data.temperature} />{" "}
          <div className="col Icon">
            <WeatherIcon code={props.data.icon} size={120} color="#4C8492" />
          </div>
        </div>
      </div>
    </div>
  );
}
