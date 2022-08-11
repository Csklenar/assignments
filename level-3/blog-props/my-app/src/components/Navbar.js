import React from "react"
import "./style.css"

export default function Navbar() {
    return(
        <>
        <div className="navbar-wrapper" >
            {/* <div> */}
            <h2 className="navbar-bootstrap">Start Bootstrap</h2>
            {/* </div> */}
            
            <div>
            <ul className="nav-items">
            <li>HOME</li>
            <li>ABOUT</li>
            <li>SAMPLE POST</li>
            <li>CONTACT</li>
            </ul>
            </div>
            </div>
            
            <div className="img-titles">
            <h1 className="img-title">Clean Blog</h1>
            <span className="img-subtitle">A Blog Theme by Start Bootstap</span>
            </div>
            
            </>
        
    )
}