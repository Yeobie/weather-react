import React from "react";

export default function Temperature(props) {
  return (
    <div className="col-6">
      <div className="row">
        <div className="col TemperatureValue me-2">
          {Math.round(props.celsius)}
        </div>
        <div className="col Temperature">
          <span>Cº </span>
        </div>
      </div>
    </div>
  );
}
