import React, {useState} from "react";

export default function Contact() {
    
    const [inputs, setInputs] = useState({
        firstName: "",
        lastName: "",
        textArea: ""
    })

    // content of textArea goes in the value attribute
    const [textArea, setTextArea] = useState("")

   
        const handleChange = (event) => {
            // const name = event.target.name;
            // const value = event.target.value;
            const {name, textArea, value} = event.target;
            setInputs(values => ({...values, [name]: value}))
        }
    
            
        
        const handleSubmit = (event) => {
            event.preventDefault();
            console.log(inputs)
            alert(`${inputs.firstName} ${inputs.lastName} ${textArea}`)
            
        }
        
    const handleTextArea = (event) => {
        setTextArea(event.target.value)
    }


    return (
        <div className="form-wrapper">
            <section className="form-main">
            <form onSubmit={handleSubmit}>
                <label className="label-title">Enter Your Name:
                <br/>
                <input 
                className="form-firstName"
                placeholder="First Name"
                name="firstName"
                value={inputs.firstName}
                onChange={handleChange}
                />
                
            <br />
                <input 
                className="form-lastName"
                placeholder="Last Name"
                name="lastName"
                value={inputs.lastName}
                onChange={handleChange}
                />
                </label>
            <br />
            <div className="contact-textarea-wrapper">
                <label className="label-title">Tell Us About Your Favorite Animal!
                <br/>
                <textarea className="contact-textarea" value={textArea} onChange={handleTextArea} />
                <br />
                </label>
                </div>
                <button className="form-button" type="submit">Submit</button>
            </form>
            </section>
        </div>
    )
}