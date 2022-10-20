import React from "react"
import {  Link } from 'react-router-dom';
export default function Navbar() {
    return (
        <div className="navbar">
            <Link to='/' >
            <a className="nav-items">Home</a>
          </Link>
          <Link to='/about' >
            <a className="nav-items">About</a>
          </Link>
          <Link to='/services' >
            <a className="nav-items">Services</a>
          </Link>
        </div>
    )
}