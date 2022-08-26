import React, {useState} from "react"
import Dicebox from "./Dicebox"
import './App.css';

function App() {
const [numbers, setNumbers] = useState([1, 2, 5, 6, 3])

  function randomDice() {
    setNumbers([Math.floor(Math.random() * 6)])
  }

  return (
    <div className="container">
      <Dicebox numbers={numbers}/>
      <button className="button" onClick={randomDice}>Click Me!</button>
    </div>
  );
}

export default App;
