import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import "./css/style.css";
import "./css/styleSwitcher.css";
import "./App.css"
import Headers from './component/Headers';
import Home from "./component/Home";
import About from "./component/About";
import Experience from './component/Experience';
import Portfolia from './component/Portfolia';
import Education from './component/Education';
import Contact from "./component/Contact";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {


  return (
    <>
      <div>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About/>}/>
          <Route path="/experience" element={<Experience/>}/>
          <Route path="/portfolia" element={<Portfolia/>}/>
          <Route path="/Education" element={<Education/>}/>
          <Route path="/contact" element={<Contact/>}/>
      </Routes>
        <Headers/>
       
      </div>
     
      
      

       
    </>
  )
}

export default App
