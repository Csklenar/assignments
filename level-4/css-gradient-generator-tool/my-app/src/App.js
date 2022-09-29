import React from "react"

import './App.css';

function App() {
  // setting state to update colors, anytime you want the value to change set state
  const [color, setColor] = React.useState({
    color1: "#FF0000",
    color2: "#0000ff",
    color3: "	#ffffff",
    angle: 0
  })

  // attempt to add color 
  const [addColor, setAddColor] = React.useState({
    color1: "#000000",
    color2: "#000000",
    color3: "#000000",
    angle: 0
  })
  // attempted function for trying to add a new color
  function addAnotherColor(event) {
    event.preventDefault()
    setAddColor(prevColor => {
      return {
        ...prevColor,
        color
      }
    })
  }

  function handleChange(event) {
    const {name, value} = event.target
    setColor(prevColor => {
      return ({
        ...prevColor,
        [name]: value
      })
    })
  }

  // generating cross-browser css code to appear in text box, assigning variable to pass to the textarea
 let generateCss = 
    `background: linear-gradient(${color.angle}deg, ${color.color1} , ${color.color2}); 
    -moz-background: linear-gradient(${color.angle}deg, ${color.color1} , ${color.color2}); 
    -webkit: linear-gradient(${color.angle}deg, ${color.color1} , ${color.color2})`


  /*using template literals below to grab the state properties to change the color */ 
  return (
    <div className="App">
      <h1>CSS Gradient Code Generator</h1>

      
        <div className="preview-gradient" 
        style={{background: `linear-gradient(${color.angle}deg, ${color.color1}, ${color.color2}, ${color.color3} )`
        , border: "1px solid black"}}>
        </div>
      
        <div>
          <h2>Options</h2>

          <div className="form">
          Color 1
          <input 
          className="input--form"
          type="color" 
          name="color1" 
          onChange={handleChange}
          value={color.color1}
          />
          Color 2
          <input 
          className="input--form"
          type="color" 
          name="color2" 
          onChange={handleChange}
          value={color.color2}
          />
          Angle
          <input 
          className="input--form"
          onChange={handleChange}
          type="number" 
          name="angle"
          value={color.angle}
          />
          </div>

          {/* <div>
          <button
          className="form--btn"
           onClick={addAnotherColor}
           >submit
           </button>
          </div> */}

           <textarea
           className="textArea" 
           value={generateCss}
           readOnly
           
           >

           </textarea>
        </div>
      
    </div>
  );
}
export default App;
  
  