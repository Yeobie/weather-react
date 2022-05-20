import React from "react";
import "./Credits.css";

export default function Credits() {
  return (
    <div className="Credits">
      <small className="credits">
        Project by{" "}
        <a
          href="https://github.com/Yeobie/weather-react"
          target="blank"
          title="Github repository"
        >
          Ilaria Vilardi.
        </a>{" "}
        Created with React and{" "}
        <a
          href="https://app.netlify.com/sites/glittery-hotteok-42143e/overview"
          target="blank"
          title="Netlify link"
        >
          hosted on Netlify.
        </a>
      </small>
    </div>
  );
}
