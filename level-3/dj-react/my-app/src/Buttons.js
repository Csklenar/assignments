import React from "react"

export default function Square(props) {
    
    return (
        <div className="btnDiv">
            <button className="btn" onClick={props.djSmall}>DJ Small</button>
            <button className="btn" onClick={props.partyDj}>Party DJ</button>
            <button className="btn" onClick={props.leftBlue}>Left Blue</button>
            <button className="btn" onClick={props.rightBlue}>Right Blue</button>
            <button className="btn" onClick={props.bigDjOne}>Big DJ One</button>
            <button className="btn" onClick={props.bigDjTwo}>Big DJ Two</button>
            <button className="btn" onClick={props.bigDjThree}>Big DJ Three</button>
            <button className="btn" onClick={props.bigDjFour}>Big DJ Four</button>
        </div>
    )
}