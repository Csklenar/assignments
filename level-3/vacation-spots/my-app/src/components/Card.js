import React from "react"

export default function Cards(props) {
    let vacationPrice
    if(props.price <= 500) {
        vacationPrice = "$";
    } else if(props.price < 1000) {
        vacationPrice = "$$";
    } else if(props.price > 1000) {
        vacationPrice = "$$$";
    }

    let changeColor
    if(props.timeToGo === "Spring") {
        changeColor = "yellow";
    } else if(props.timeToGo === "Winter") {
        changeColor = "blue";
    } else if(props.timeToGo === "Fall") {
        changeColor = "orange";
    } else if(props.timeToGo === "Summer") {
        changeColor = "green"
    }

    
    return (
        <div className="card-wrapper">
        <img src={props.cardImg} className="card-images"/> 
        
    <div className="card-info">
           <h2>{props.place}</h2>
           <h3>Price: {props.price}</h3>
           <h4 style={{color: `${changeColor}`}}>Season: {props.timeToGo}</h4>
           <p>{vacationPrice}</p>
    </div>
        </div>
    )
}