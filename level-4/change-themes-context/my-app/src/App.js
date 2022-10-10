import React, {useContext} from "react"
import Navbar from "./Navbar"
import Main from "./Main"
import Footer from "./Footer"
import {ThemeContext} from "./themeContext"
import './App.css';

function App(props) {
  const {color} = useContext(ThemeContext)
  return (
   <>
    {/* <ThemeContextProvider> */}
    <div className={`${color}-theme`}>
      <Navbar />
      <Main />
      <Footer />
    </div>
    {/* </ThemeContextProvider> */}
   </>
  );
}

export default App;
