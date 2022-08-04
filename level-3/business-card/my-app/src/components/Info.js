import React from "react"
import img from "../assets/corey.jfif"



export default function Info(){
    return (
        <div className="main">
            
            <img src={img} className="img-para"/>
            <h1 className="personsName">Corey Sklenar</h1>
            <h3 className="jobTitle">Software Developer</h3>
            <h5 className="website">coreysklenar@website.com</h5>
            <button className="email-button"><i class="fa-solid fa-envelope"></i>Email</button>
            <button className="linkedin-button"><i class="fa-brands fa-linkedin"></i>LinkedIn</button>
        </div>
    )
}