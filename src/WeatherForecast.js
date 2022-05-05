import React from "react";
import WeatherIcon from "./WeatherIcon";
import axios from "axios";

export default function WeatherForecast(props) {
  function handleResponse(response) {}

  let apiKey = "c85b27a23cdabeb4a98bf187361b3297";
  let latitude = props.coordinates.lat;
  let longitude = props.coordinates.lon;
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(handleResponse);

  return (
    <div>
      <h4>
        <strong>Forecast</strong>
      </h4>{" "}
      <div className="row d-flex justify-content-between WeatherForecast">
        <div className="col-2 Forecast-Squares me-1">
          <div className="Forecast-Day-Week">Wed</div>
          <div className="WeatherIcon">
            <WeatherIcon code="09d" size={60} color="#225d6b" />
          </div>
          <div className="Forecast-Temperatures">
            <span className="Forecast-Temp-Max me-3">10º</span>
            <span className="Forecast-Temp-Min">19º</span>
          </div>
        </div>
      </div>
    </div>
  );
}
