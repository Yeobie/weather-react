import React from "react";
import "./Credits.css";

export default function Credits() {
  return (
    <div className="Credits">
      <small className="credits">
        Project by{" "}
        <a href="https://github.com/Yeobie/weather-react" target="blank">
          Ilaria Vilardi.
        </a>{" "}
        Created with React.
      </small>
    </div>
  );
}
