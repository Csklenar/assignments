import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Home from './Home';
import About from './About';
import Services from './Services';

function App() {
  return (
    <div className='App'>
      <Router>
        <nav>
          <Link to='/' style={{ padding: 5 }}>
            Home
          </Link>
          <Link to='/about' style={{ padding: 5 }}>
            About
          </Link>
          <Link to='/services' style={{ padding: 5 }}>
            Services
          </Link>
        </nav>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/services' element={<Services />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
