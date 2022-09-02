import React from "react"
import './App.css';

function App() {
  const [formData, setFormData] = React.useState({
    dataArr: [],
    firstName: "",
    lastName:"",
    email: "",
    placeOfBirth: "",
    phone: "",
    favoriteFood: "",
    aboutYou: ""
  })

  function handleChange(event) {
    const {name, value} = event.target
    
    setFormData(prevFormData => ({
      ...prevFormData,
      [name]:value
    }))
  }

  function handleSubmit(event) {
    event.preventDefault()
    setFormData(prevFormData => {
      return {
        ...prevFormData,
          dataArr: [...prevFormData.dataArr, {
            firstName: prevFormData.firstName,
            lastName: prevFormData.lastName,
            email: prevFormData.email,
            placeOfBirth: prevFormData.placeOfBirth,
            phone: prevFormData.phone,
            favoriteFood: prevFormData.favoriteFood,
            aboutYou: prevFormData.aboutYou
          }],
          firstName: "",
          lastName:"",
          email: "",
          placeOfBirth: "",
          phone: "",
          favoriteFood: "",
          aboutYou: ""
      }
    })
  }

function phoneNumber(inputtxt)
{
  let phoneno = /^\d{10}$/;
  if((inputtxt.value.match(phoneno)))
        {
      return true;
        }
      else
        {
        alert("message");
        return false;
        }
}

  return (
    <div className="form-container">
      <form className="form-elements" onSubmit={(e) => handleSubmit(e)}>
       
        <div className="input-data">
        <input 
        className="input-first-name"
        maxLength={3}
        type="text"
        placeholder="First Name"
        name="firstName"
        onChange={handleChange}
        value={formData.firstName}
        />

        <input
        className="input-last-name"
        maxLength={3}
        type="text"
        placeholder="Last Name"
        name="lastName"
        onChange={handleChange}
        value={formData.lastName}
        />
        </div>

        <div>
        <input 
        className="input-email"
        maxLength={3}
        type="text"
        placeholder="Email"
        name="email"
        onChange={handleChange}
        value={formData.email}
        />

        <input 
        className="input-place-of-birth"
        maxLength={3}
        type="text"
        placeholder="Place Of Birth"
        name="placeOfBirth"
        onChange={handleChange}
        value={formData.placeOfBirth}
        />
        </div>

        <div>
        <input 
        className="input-phone"
        maxNumbers={3}
        type="number"
        placeholder="Phone"
        name="phone"
        onChange={handleChange}
        onClick={phoneNumber}
        value={formData.phone}
        />

        <input 
        className="input-favorite-food"
        maxLength={3}
        type="text"
        placeholder="Favorite Food"
        name="favoriteFood"
        onChange={handleChange}
        value={formData.favoriteFood}
        />
      </div>

       <textarea 
       className="about-you" 
       placeholder="Tell us about yourself" 
       name="aboutYou"
       type="text"
       value={formData.aboutYou}
       onChange={handleChange}

       rows="4" 
       cols="50"
       >
      </textarea>

        <div>

        <button className="form-buttom" disabled={!formData}>Submit</button>

        </div>
      </form>
      
      {formData.dataArr.map(item => {
        return (
          <div>
            <form>
              
                <div className="return-form-container">
                  <header>Badge:</header>
                <div className="badge-section1">
                <p> Name: {item.firstName} {item.lastName}</p>
                <p> Phone: {item.phone}</p>
                </div>

                <div className="badge-section2">
                  <p>Place of birth: {item.placeOfBirth}</p>
                  <p className>Favorite food: {item.favoriteFood}</p>
                </div>

                <div className="badge-section3">
                  <p className="badge-form-email">Email: {item.email}</p>
                </div>

                <div className="return-form-about-you"> 
                    {item.aboutYou}
                  </div>
                  
                    

              
              </div>
            </form>
          </div>
        )
      })}
    </div>
  );
}

export default App;
