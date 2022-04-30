import React from "react";
import ReactAnimatedWeather from "react-animated-weather";
import FormattedDate from "./FormattedDate";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1 id="city-name">{props.data.city}</h1>
      <span id="current-date">
        {" "}
        <FormattedDate date={props.data.date} />{" "}
      </span>
      <p className="Conditions">
        <div className="Description">
          <p className="weatherdata" id="weather-description">
            {props.data.description}
          </p>
          <p className="weatherdata" id="wind">
            Wind: {Math.round(props.data.wind)}km/h
          </p>
          <p className="weatherdata" id="humidity">
            Humidity: {props.data.humidity}%
          </p>
        </div>
      </p>
      <div className="WeatherData">
        {" "}
        <div className="row">
          <div className="col-1"></div>
          <div className="col TemperatureValue" id="degrees-value">
            {Math.round(props.data.temperature)}
          </div>
          <div className="col Celsiusfahrenheit">
            <button id="celsius-degrees" className="Active">
              Cº{" "}
            </button>
            <button id="fahrenheit-degrees">Fº</button>
          </div>{" "}
          <div className="col Icon">
            <ReactAnimatedWeather
              icon="CLOUDY"
              color="grey"
              size={130}
              animate={true}
            />
          </div>
        </div>
        <h4>
          <strong></strong>
        </h4>
        <br />
        <div id="forecast"></div>
        <br />
        <br />
      </div>
    </div>
  );
}
