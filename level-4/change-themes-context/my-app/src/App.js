import React from "react"
import Navbar from "./Navbar"
import Main from "./Main"
import Footer from "./Footer"
import {ThemeContextProvider} from "./themeContext"
import './App.css';

function App(props) {
  return (
   <>
    <ThemeContextProvider>
      <Navbar />
      <Main />
      <Footer />
    </ThemeContextProvider>
   </>
  );
}

export default App;
