import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import { HeroSec } from './components/HeroSec'
import Footer from './components/Footer'
import SecLast from './components/SecLast'

function App() {

  return (
    <>
      <Header />
      <HeroSec />
      <SecLast />
      <Footer />
    </>
  );
}

export default App
