import React from "react";

export default function Locations(props) {
    return (
        <div className="locations-card">
            <img src={`${props.img}`} alt="clearwater beach pic" className="location-img"/>
            
            <div className="locations-info">
            <i className="fa-solid fa-location-dot" id="location-dot"></i><span className="location-title">{props.location}</span>
            <h1>{props.title}</h1>
            <p className="start-end-date">{props.startDate} - {props.endDate}</p>
            <p className="para-description">{props.description}</p>

            </div>
           </div>
    )
}