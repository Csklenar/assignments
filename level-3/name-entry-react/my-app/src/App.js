import React from "react"
import './App.css';

function App() {
  
  
  const [formData, setFormData] = React.useState({
    myArray: [],
    firstName: "",
    lastName: ""
  })
  
function handleChange(event) {
    // const {name, value, type} = event.target
    const {name, value} = event.target

    setFormData(prevFormData => ({
      ...prevFormData,
      // [name]: type === "text" ? value : value
      [name]:value
    }))

  }
    
  function handleSubmit(event) {
    event.preventDefault()
    setFormData(prevFormData => {
      return {
        ...prevFormData,
          myArray: [...prevFormData.myArray, {
            firstName: prevFormData.firstName,
            lastName: prevFormData.lastName
          }],
          firstName: "",
          lastName: ""
      }
    })
    }
  
  return (
    <div className="form-container">
      <form className="form" onSubmit={(e) => handleSubmit(e)}>
        <div>
        <input 
        className="input--form"
          type="text"
          placeholder="First Name"
          name="firstName"
          onChange={handleChange}
          value={formData.firstName}
          />
       </div>
       <div>
          <input 
          className="input--form"
            type="text"
            placeholder="Last Name"
            name="lastName"
            onChange={handleChange}
            value={formData.lastName}
            />
            </div>
            
    <button className="form--submit">Add Name</button>
    </form>
      {formData.myArray.map(item => {
        return (
          <div className="form-items">
            <ul className="list-items">
              <li>
              <h1>{item.firstName} {item.lastName}</h1>
              </li>
              </ul>
          </div>
        )
      })}
    </div>
  );
}

export default App;
