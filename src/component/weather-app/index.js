import Search from "./search";
// import "./styles.css";
import { useState, useEffect } from "react";

export default function Weather() {
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [weatherData, setWeatherData] = useState(null);

  async function fetchWeatherData(param) {
    setLoading(true);
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${param}&appid=93204d1dace96a616132b718b3e56200`
      );
      if(!response){
        return;
      }
      const data = await response.json();
      if (data) {       
        setLoading(false);
        setWeatherData(data);
      }     
    } catch (e) {
      setLoading(false);
      console.log(e);
    }
  }

  function handleSearch() {
    fetchWeatherData(search);
  }

  function getCurrentDate() {
    return new Date().toLocaleDateString("en-us", {
      weekday: "long",
      month: "long",
      year: "numeric",
      day: "numeric",
    });
  }

  useEffect(() => {
    fetchWeatherData("Guntur");
  }, []);

  return (
    <>
      <Search
        search={search}
        setSearch={setSearch}
        handleSearch={handleSearch}
      />
      {loading ? (
        <div className="loading">Loading....</div>
      ) : (
        <>
          <div className="city-name">
            <h2>
              {weatherData?.name} {weatherData?.sys?.country}
            </h2>
          </div>
          <div className="temp">
            <span>
              Temperature {parseInt(weatherData?.main?.temp - 273.15)}
            </span>
            <br />
            <span>
              Feels like {parseInt(weatherData?.main?.feels_like - 273.15)}
            </span>
          </div>
          <div className="desc">
            <span>{weatherData?.weather[0]?.description}</span>
          </div>
          <div className="date">
            <span>{getCurrentDate()}</span>
          </div>
          <div className="weather-info">
            <span>
              {weatherData?.wind?.speed} <p>Wind speed</p>
            </span>
            <span>
              {weatherData?.main?.humidity} <p>Humidity</p>
            </span>
          </div>
        </>
      )}
    </>
  );
}
