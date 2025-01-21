import React, { useRef, useState } from "react";
import axios from "axios";
import WeatherCard from "./weatherCard";

function Weather() {

  // const [city,setCity] = useState("")

  const inputRef = useRef(null);
  const [weather,setWeatherData] = useState([])

  const getCityName = async () => {
    let cityName = inputRef.current.value;
    let apiKey = "f0740661325a3a1276bf855cd59a8e96";

    if (!cityName) {
        console.error("City name is required!");
        return;
    }

    try {
      let response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`
      );
    //   console.log(response.data);
      // Update the weatherData array with the new result
    setWeatherData([response.data]);
      
    } catch (e) {
      console.log(e);
    }

    // console.log(inputRef.current.value);
    // axios=>large project(external lib) fetch=> small project
  };
  return (
    <>
    <div>
    <div className="container rounded-5 ps-3">
        <div className="search-box m-2">
          <label htmlFor="cityName"></label>

          {/* <input type="text" onChange={(e)=>
          {setCity(e.target.value)
           console.log(city);
           }} id="cityName" /> */}
          <input
            className="m-3 rounded-5 p-4"
            type="text"
            ref={inputRef}
            placeholder="Enter a city name"
            id="cityName"
          />

          <i onClick={getCityName}
            className="cursor-pointer fa-solid fa-magnifying-glass bg-light p-2 rounded-5 m-2"
            id="searchIcon"
          ></i>
        </div>
        {/* Render Weather Data */}
        {weather.length > 0 ? <WeatherCard weather={weather}/> : ""}
        {/* containner */}
        </div>
        {/* end  */}
        </div>
    </>
  )
}

export default Weather;
