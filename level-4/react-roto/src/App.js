import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Services from './Services';
import Navbar from "./Navbar"
import ServicesData from './ServicesData';
import ServicesDetails from './ServicesDetails'
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
          
        
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/services' element={<Services />} />
          <Route path='/services/:servicesId' element={<ServicesDetails />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
