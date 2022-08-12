import React from "react";
import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather />
        <footer>
          <a
            href="https://github.com/AnyaRatusnyak/weather-react.git"
            target="_blank"
            rel="noopener noreferrer"
          >
            Open-source code
          </a>
          ,by{" "}
          <a
            href="https://github.com/AnyaRatusnyak"
            target="_blank"
            rel="noopener noreferrer"
          >
            Anna Ratushnyak
          </a>{" "}
          from{" "}
          <a
            href="https://www.shecodes.io"
            target="_blank"
            rel="noopener noreferrer"
          >
            SheCodes
          </a>
        </footer>
      </div>
    </div>
  );
}
