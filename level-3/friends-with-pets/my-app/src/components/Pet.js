import React from "react"

export default function Pet(props) {
    return (
        <div className="pets">
            <h3> Pet Name: {props.name} </h3>
            <h3>Breed: {props.breed} </h3>
        </div>
    )
}