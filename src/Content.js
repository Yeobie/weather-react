import React, { useState } from "react";
import "./Content.css";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";

export default function Content(props) {
  let [weatherData, setWeatherData] = useState({ ready: false }); //this is to avoid the API making the call continuously. This way, it will make the call only when ready is set to true, which is only in the function handleResponse
  let [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    setWeatherData({
      city: response.data.name,
      ready: true, //see line 7
      date: new Date(response.data.dt * 1000), //because response.data.dt gives a number that by convention needs to be multiplied *1000 in order to give the current time
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
    });
  }

  function search() {
    const apiKey = "c85b27a23cdabeb4a98bf187361b3297";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function updateCity(event) {
    setCity(event.target.value);
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
            <form id="search-form" onSubmit={handleSubmit}>
              <input
                type="search"
                placeholder="Search city..."
                className="form-control"
                id="search-city-input"
                autocomplete="off"
                onChange={updateCity}
              />
            </form>
          </div>
          <div className="col search">
            <button
              type="button"
              className="btn btn-primary"
              id="search-button"
              onClick={handleSubmit}
            >
              Search
            </button>
          </div>
        </div>
        <br />
        <WeatherInfo data={weatherData} />
      </div>
    );
  } else {
    //if it's not ready, then it makes the API call that is below here
    search();

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
      </div>
    );
  }
}
