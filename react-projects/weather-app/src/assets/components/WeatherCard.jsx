import React, { useRef, useState } from "react";
const WeatherCard = (props) => {
  let citiesData = props.weather;
  return (
    <>
      {citiesData.map((weather, index) => (
        <div key={index}>
          {console.log(weather)}
          <div className="body" id="body">
            <img src="img.png" alt="" />
            <h3 id="city" className="text-light fw-bold">
              {weather?.name}&nbsp; ({weather?.sys?.country})
              {/* nullish, optional chinning */}
            </h3>
            <div className="detail">
              <div className="col">
                {/* <i className="fa-solid fa-droplet fs-3"></i> */}
                <div className="text-light">
                  <h5>{weather?.main?.temp} °C</h5>
                  <p>Temperature</p>
                </div>
              </div>
              <div className="col me-3">
                {/* <i className="fa-solid fa-wind fs-3"></i> */}
                <div className="text-light">
                  <h5>{weather?.wind?.speed}</h5>
                  <p>Wind Speed</p>
                </div>
              </div>
              <div className="col">
                {/* <i className="fa-solid fa-droplet fs-3"></i> */}
                <div className="text-light">
                  <h5 id="humidity">{weather?.main?.humidity} %</h5>
                  <p>Humidity</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};
export default WeatherCard;
