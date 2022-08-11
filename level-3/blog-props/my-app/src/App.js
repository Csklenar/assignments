import React from "react"
import Header from "./components/Header"
import Navbar from "./components/Navbar"
import Bloglist from "./components/Bloglist"
import Blogpost from "./components/Blogpost"
import Data from "./components/Data"
import './App.css';

function App() {
  console.log(Data)
 
return (
  <div className="App">
    <Header />
    <Bloglist />
    {/* {blogElements} */}
  </div>
)
}
export default App;
