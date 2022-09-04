import React from "react";
import "./weather.css";

export default function Weather() {
  let weatherData = {
    city: "New York",
    date: "Tuesday 10:00",
    description: "Cloudy",
    temperature: 21,
    imageUrl: "http://openweathermap.org/img/wn/04d@2x.png",
    wind: 2,
    humidity: 51,
  };
  return (
    <div className="Weather">
      <form>
        <input
          type="text"
          label="city"
          placeholder="Enter a city"
          autocomplete="off"
        />
        <input type="submit" label="submit" className="submit" value="search" />
      </form>
      <br />
      <button>Your location</button>

      <hr />
      <h1>{weatherData.city}</h1>
      <ul className="update">
        <li>
          Last updated: <span>{weatherData.date}</span>
        </li>
        <li>
          <div>{weatherData.description}</div>
        </li>
      </ul>

      <h2>
        <img
          src="http://openweathermap.org/img/wn/04d@2x.png"
          alt="weather-icon"
        />{" "}
        <span>{weatherData.temperature}</span> <span className="c-f">°C</span>
      </h2>
      <div className="weather_detail">
        <div>
          Humidity:<span>{weatherData.humidity}</span>%
        </div>
        Wind: <span>{weatherData.wind}</span>m/s
      </div>
      <hr />
      <div className="weather-forecast"></div>
      <small>
        An{" "}
        <a
          href="https://github.com/tashabes/weather-app"
          target="_blank"
          rel="noreferrer"
        >
          open-source code
        </a>{" "}
        by Natasha Abel
      </small>
    </div>
  );
}
