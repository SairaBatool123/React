import { useState } from 'react'
import { Routes, Route , Link , useNavigate } from "react-router";
import Home from "./assets/components/Home.jsx"
import About from "./assets/components/About.jsx"
import Services from "./assets/components/Services";
import './App.css'
import Login from './assets/components/Login.jsx';
import Signup from './assets/components/Signup.jsx';

function App() {
  const [isLogin,setIsLogin] = useState(false)
  return (
    <>
    <button onClick={()=>{setIsLogin(!isLogin)}}>Login/Logout</button>
    
    {
      (isLogin)?
      <ul>
      {/* previous approach => navigation */}
      {/* <li><a href="./services">Services</a></li> */}
      <li><Link to="/">Home</Link></li>
      <li><Link to="/about">About</Link></li>
      <li><Link to="/services">Home</Link></li>
    </ul>:
    <ul>
    <li><Link to="/">Login</Link></li>
    <li><Link to="/Signup">Signup</Link></li>
    </ul>
    }
    {
    (isLogin)?
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/services" element={<Services />} />
      <Route path="*" element={<div>Page not found</div>}/>
    </Routes>:
    <Routes>
    <Route path="/" element={<Login />} />
    <Route path="/signup" element={<Signup />} />
    <Route path="*" element={<useNavigate to="/"/>}/>
    </Routes>
    }
    </>
  )
}

export default App
