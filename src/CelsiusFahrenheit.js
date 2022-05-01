import React, { useState } from "react";

export default function CelsiusFahrenheit(props) {
  let [unit, setUnit] = useState("celsius");

  function convertFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function convertCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  if (unit === "celsius") {
    return (
      <div className="col-6">
        <div className="row">
          <div className="col TemperatureValue">
            {Math.round(props.celsius)}
          </div>
          <div className="col Celsiusfahrenheit">
            <span>Cº </span>
            <a
              href="/"
              className="text-decoration-none"
              onClick={convertFahrenheit}
            >
              Fº{" "}
            </a>{" "}
          </div>
        </div>
      </div>
    );
  } else {
    let fahrenheit = (props.celsius * 9) / 5 + 32;

    return (
      <div className="col-6">
        <div className="row">
          <div className="col TemperatureValue">{Math.round(fahrenheit)}</div>
          <div className="col Celsiusfahrenheit">
            <a
              href="/"
              className="text-decoration-none"
              onClick={convertCelsius}
            >
              Cº{" "}
            </a>
            <span>Fº </span>{" "}
          </div>
        </div>
      </div>
    );
  }
}
