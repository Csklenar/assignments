import React from "react"
import './App.css';
import Data from "./components/Data"
import Locations from "./components/Locations"
import Navbar from "./components/Navbar"

function App() {
  const dataElements = Data.map((item, index) => {
    return (
      
      <Locations 
      key={index}
      title={item.title}
      location={item.location}
      googleMapsUrl={item.googleMapsUrl}
      startDate={item.startDate}
      endDate={item.endDate}
      description={item.description}
      img={item.imageUrl}
      />
    )
  })

  return (
    <div className="App">
      <Navbar />
      {dataElements}
      
    </div>
  )
}

export default App;
