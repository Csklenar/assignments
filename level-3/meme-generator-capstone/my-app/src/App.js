import React from "react"
import Header from "./components/Header"
import Meme from "./components/Meme"
import MemeList from "./components/MemeList"
import EditedMemeList from "./components/EditedMemeList"
import './App.css';

function App() {
  return (
    <div>
      <Header />
      <Meme />
      <MemeList />
      <EditedMemeList />
    </div>
  )
}

export default App;
