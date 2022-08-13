import React from "react";
import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather />
        <footer>
          This project was coded by{" "}
          <a
            href="https://github.com/AnyaRatusnyak"
            target="_blank"
            rel="noopener noreferrer"
          >
            Anna Ratushnyak
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/AnyaRatusnyak/weather-react.git"
            target="_blank"
            rel="noopener noreferrer"
          >
            open-sourced on GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}
