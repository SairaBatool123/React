import { useState } from 'react'
import './App.css'
import Weather from './assets/components/Weather';
// import WeatherCard from './assets/components/WeatherCard';


function App() {
  return (
    <>
      <h1 id="temp" className="text-light fw-bold display-5 mb-3">
        Current Weather
      </h1>
      <Weather />
      {/* <WeatherCard /> */}
    </>
  );
}

export default App
