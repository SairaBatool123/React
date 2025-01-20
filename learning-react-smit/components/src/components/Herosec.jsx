import React from 'react'
import './components.css'

function Herosec() {
  return (
    <>
    <div className='mb-5 pb-5'>
    <div className="section">
    <img  src="react.png" alt="" />
    </div>
    <h1 className='display-5 fw-bold text-center'>React</h1>
    <h2 className='fs-3 text-center text-secondary'>The library for web and native user interfaces</h2>
    <div className="text-center mt-3 "> <button type="button" class="button me-lg-3 btn text-white btn-lg col-12 col-lg-2 fw-bold rounded-5
   ">Learn React</button>
    <button type="button" class="btn col-lg-2 btn-lg col-12 btn-outline-secondary rounded-5 fw-bold text-dark
">API Reference</button></div>
   </div>

    </>
  )
}

export default Herosec