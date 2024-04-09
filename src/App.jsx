import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Header/Header'

import { Routes,Route } from "react-router-dom";
import Footer from './Footer/Footer'
import Home from './Home/Home'
import AboutMe from './AboutMe/AboutMe'
import Academia from './Academia/Academia'
import ImageShow from './ImageShow/DAE'
import DAE from './ImageShow/DAE'
import Gred from './ImageShow/Gred'
import Building from './ImageShow/Building'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header /> 
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/home" element={<Home />} />
    <Route path="/about" element={<AboutMe />} />
    <Route path="/academia" element={<Academia />} />
    <Route path="/dae" element={<DAE />} />
    <Route path="/gred" element={<Gred />} />
    <Route path="/building" element={<Building />} />
    <Route path="/projects" element={<Home />} />
    <Route path="/contact" element={<Home />} />

    </Routes>
    <Footer />
    </>
  )
}

export default App
