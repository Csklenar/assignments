import React from "react"
import './App.css';

function App() {
  
  const initialInputs = {
    firstName: "",
    lastName: ""
    
  }
  
  const [inputs, setInputs] = React.useState(initialInputs)
  
  const [formData, setFormData] = React.useState([])


  // function addName() {
  //   setFormData(prevFormData => {
  //     return [...prevFormData, `${prevFormData.length + 1}`]
  //   })
  // }
  // const formElements = formData.map(firstName, lastName => <h1 key={name}></h1>)

  // const formElements = formData.map(data => data)
  // console.log(formElements, "formElements")

  function handleChange(event) {
    // const {name, value, type} = event.target
    const {name, value} = event.target

    setInputs(prevInputs => ({
      ...prevInputs,
      // [name]: type === "text" ? value : value
      [name]:value
    }))

  }
    
  function handleSubmit(event) {
    event.preventDefault()
    console.log(inputs, "inputs")
    }
  
  return (
    <div className="form-container">
      <form className="form" onSubmit={handleSubmit}>
        <input 
          type="text"
          placeholder="First Name"
          name="firstName"
          onChange={handleChange}
          value={inputs.firstName}
          />

          <input 
            type="text"
            placeholder="Last Name"
            name="lastName"
            onChange={handleChange}
            value={inputs.lastName}
            />
    <button className="form--submit">Add Name</button>
    
    {/* <h1>{formData.firstName} {formData.lastName}</h1> */}
      </form>
      <h1>{inputs.firstName} {inputs.lastName}</h1>
    </div>
  );
}

export default App;
