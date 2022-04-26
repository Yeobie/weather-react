import React from "react";
import "./WeatherData.css";

export default function WeatherData() {
  return (
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
  );
}
