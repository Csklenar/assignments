import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Navbar from './Navbar';
import SecondNavbar from './SecondNavbar';
import Animals from './Animals';
import Home from './Home';
import Contact from './Contact';
import "./desktop.css";
import "./Mobile.css";
import './App.css';

function App() {
  // in Route for the element is where you place the component you want to go to
  // You can have multiple routes to input just place the path and element you want to go to
  return (
    <div className='App'>
      {/* <Router> */}
        <Navbar />
        <SecondNavbar />
       
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/animals' element={<Animals />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      {/* </Router> */}
    </div>
  );
}

export default App;
