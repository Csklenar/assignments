import React, {useState} from "react"
import Colors from './Colors'
import Buttons from './Buttons'
import './App.css';



function App() {

  const [color, setColor] = useState([
    "white", "white", "white", "white"
  ])

  function djSmall(){
    if(color[0] === "white")
{
  setColor(["black", "black", "black", "black"])

} else if (color[0] !== "white"){
  setColor(["white", "white", "white", "white"])
}
}

function partyDj() {
  setColor(["purple", "purple", color, color])
}

function leftBlue() {
  setColor([color, color, "blue", color])
}

function rightBlue() {
  setColor([color, color, color, "blue"])
}

function bigDjOne() {
  setColor(["red", color, color, color])
}

function bigDjTwo(){
  setColor([color, "green", color, color])
}

function bigDjThree(){
  setColor([color, color, "hotpink", color])
}

function bigDjFour(){
  setColor([color, color, color, "orange"])
}
    return (
      <div className="App">
     
      <Colors 
      style0={{backgroundColor: color[0]}}  
      style1={{backgroundColor: color[1]}} 
      style2={{backgroundColor: color[2]}} 
      style3={{backgroundColor: color[3]}} 
      />
      
      <Buttons 
      djSmall={djSmall} 
      partyDj={partyDj} 
      leftBlue={leftBlue} 
      rightBlue={rightBlue} 
      bigDjOne={bigDjOne}
      bigDjTwo={bigDjTwo}
      bigDjThree={bigDjThree}
      bigDjFour={bigDjFour}
      />
      </div>
  );
}

export default App;
