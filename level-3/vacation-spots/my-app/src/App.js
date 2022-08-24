import React from "react"
import Data from "./components/Data"
import Card from "./components/Card"
import Navbar from "./components/Navbar"
import './App.css';
import "./components/style.css";

function App() {
  const cards = Data.map((item, index) => {
    return (
      <Card 
      key={index}
      cardImg={item.cardImg}
      place={item.place}
      price={item.price}
      timeToGo={item.timeToGo}
      />
    )
  })
  
  return (
  <div>
    <Navbar />
      {cards}
    </div>
  )
}
  

export default App;
