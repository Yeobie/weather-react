import React, { useState } from "react";
import "./Content.css";
import axios from "axios";
import ReactAnimatedWeather from "react-animated-weather";

export default function Content(props) {
  let [weatherData, setWeatherData] = useState({ ready: false }); //this is to avoid the API making the call continuously. This way, it will make the call only when ready is set to true, which is only in the function handleResponse

  function handleResponse(response) {
    setWeatherData({
      city: response.data.name,
      ready: true, //see line 7
      date: "Tuesday 19:30",
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
    });
  }

  //see line 12
  if (weatherData.ready) {
    return (
      <div>
        <div className="row Content">
          <div className="col-4 d-none d-md-block">
            <h3>Weather in...</h3>
          </div>
          <div className="col-md-4 form">
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
            <button
              type="button"
              className="btn btn-primary"
              id="search-button"
            >
              Search
            </button>
          </div>
        </div>
        <br />
        <h1 id="city-name">{weatherData.city}</h1>
        <strong id="current-date">{weatherData.date}</strong>
        <p className="Conditions">
          <div className="Description">
            <p className="weatherdata" id="weather-description">
              {weatherData.description}
            </p>
            <p className="weatherdata" id="wind">
              Wind: {Math.round(weatherData.wind)}km/h
            </p>
            <p className="weatherdata" id="humidity">
              Humidity: {weatherData.humidity}%
            </p>
          </div>
        </p>
        <div className="WeatherData">
          {" "}
          <div className="row">
            <div className="col-1"></div>
            <div className="col TemperatureValue" id="degrees-value">
              {Math.round(weatherData.temperature)}
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
  } else {
    //if it's not ready, then it makes the API call that is below here
    const apiKey = "c85b27a23cdabeb4a98bf187361b3297";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
  }
}
