import { useState } from 'react'
import './App.css'
import './index.css'
import Weather from './assets/components/Weather.jsx'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <h1 id="temp" className=" text-light fw-bold display-5 mb-3">
        Current Weather
      </h1>
      <Weather />
    </>
  );
}

export default App
