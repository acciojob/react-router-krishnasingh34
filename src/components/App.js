
import React from "react";
import './../styles/App.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Home from "./Home";
import About from "./About";
import Navbar from "./Navbar";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
