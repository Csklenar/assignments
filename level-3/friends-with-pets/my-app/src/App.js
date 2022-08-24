import React from "react"
import Friend from "./components/Friend"
import Data from "./components/Data"
import Navbar from "./components/Navbar"
import './App.css';



  const friendList = Data.map((friend, index) => {
    return (
    <Friend 
    key={index}
    friend={friend}
    pets={friend.pets}
    />
    )
  }
  )
  
  function App() {
  return (
    <div className="App">
      <Navbar />
      {friendList}
    </div>
  );
}

export default App;
