import React from "react"

export default function Dicebox(props) {
      return (
        <div className="dice">
            <h1 className="header">Click The Button To Roll The Dice!</h1>
            <div className="dice-number">{props.numbers}</div>
        </div>
      )
  
}