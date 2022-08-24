import React from "react"
import Pet from "./Pet.js"

export default function Friend(props) {
    let { pets } = props

    pets = pets.map((pet, index) => {
        return (
            <Pet 
            key={index}
            name={pet.name}
            breed={pet.breed}
            />
        )
    })
    return (
       <div className="friend-wrapper">
            <div className="friend-info">
            <h1> Name: {props.friend.name}</h1>
            <h2> Age:  {props.friend.age}</h2>
            <>{pets}</>
            </div>
            <hr className="hr"></hr>
        </div> 
    )
    
}