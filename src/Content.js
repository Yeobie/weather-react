import React from "react";
import "./Content.css";

export default function Content() {
  return (
    <div>
      <div className="row Content">
        <div className="col-4">
          <h3>Weather in...</h3>
        </div>
        <div className="col-4 form">
          <form id="search-form">
            <input
              type="search"
              placeholder="Search city..."
              className="form-control"
              id="search-city-input"
              autocomplete="off"
            />
          </form>
        </div>
        <div className="col search">
          <button type="button" className="btn btn-primary" id="search-button">
            Search
          </button>
        </div>
      </div>
      <br />
      <h1 id="city-name">Berlin</h1>
      <strong id="current-date">Tuesday 19:30</strong>
      <p className="Conditions">
        <div className="Description">
          <p className="weatherdata" id="weather-description">
            Cloudy
          </p>
          <p className="weatherdata" id="wind">
            Wind: 10km/h
          </p>
          <p className="weatherdata" id="humidity">
            Humidity: 70%
          </p>
        </div>
      </p>
      <div className="WeatherData">
        {" "}
        <div className="row">
          <div className="col-1"></div>
          <div className="col TemperatureValue" id="degrees-value">
            8
          </div>
          <div className="col Celsiusfahrenheit">
            <button id="celsius-degrees" className="Active">
              Cº{" "}
            </button>
            <button id="fahrenheit-degrees">Fº</button>
          </div>{" "}
          <div className="col Icon">
            <img
              src="http://openweathermap.org/img/wn/04d@2x.png"
              id="icon"
              alt=""
            />{" "}
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
