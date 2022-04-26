import React from "react";
import "./CelsiusFahrenheit.css";

export default function CelsiusFahrenheit() {
  return (
    <div className="col Celsiusfahrenheit">
      <button id="celsius-degrees" className="Active">
        Cº{" "}
      </button>
      <button id="fahrenheit-degrees">Fº</button>
    </div>
  );
}
