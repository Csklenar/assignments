import {React, useState, useEffect} from "react"
import './App.css';

function App() {
      const [color, setColor] = useState({})

useEffect(() => {
    fetch(`https://www.colr.org/json/color/random?timestamp=${new Date().getTime()}`)
        .then(res => res.json())
        .then(data => setColor(data.colors[0].hex))
}, [])
  // const [colorData, setColorData] = React.useState({})


  // React.useEffect( () => {
    
  //   fetch(`https://www.colr.org/json/color/random?timestamp=${new Date().getTime()}`)
  //     .then(res => res.json())
  //     .then(data => setColorData(data.colorData[0].hex))
  // }, [])

   return(
        console.log(color),
        <div style={{backgroundColor:`#${color}`,
                    height: '900px',
                    width: '900px'}}/>
    )
}

export default App;
