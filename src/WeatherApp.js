import React, { useState } from "react";
import axios from "axios";

function WeatherApp() {
  let [submit, setSubmit] = useState(false);
  let [city, setCity] = useState("");
  let [info, setInfo] = useState({});

  function handleSubmit(event) {
    event.preventDefault();
    console.log(city);
    let apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=6b45fead1f572a2847620f61855bb862`;
    axios.get(apiURL).then(setDescription);
  }

  function citySearch(event) {
    setCity(event.target.value);
  }

  function setDescription(response) {
    setInfo({
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      wind: response.data.wind.speed,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}.png`,
    });
    setSubmit(true);
  }

  return (
    <div className="WeatherApp">
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={citySearch}></input>
        <input type="submit" value="Submit"></input>
      </form>
      {submit ? (
        <ul>
          <li>
            Temperature: <strong>{Math.round(info.temperature)}°C</strong>
          </li>
          <li>
            Description: <strong>{info.description}</strong>
          </li>
          <li>
            Wind: <strong>{info.wind} km/h</strong>
          </li>
          <li>
            Humidity: <strong>{Math.round(info.humidity)}%</strong>
          </li>
          <li>
            <img src={info.icon} alt={info.description} />
          </li>
        </ul>
      ) : (
        <></>
      )}
    </div>
  );
}

export default WeatherApp;
