import React, { useState } from "react"

export default function AddAnimeForm(props) {
    const initInputs = {title: props.title || "", genre: props.title || "", img: props.img || ""}
    const [inputs, setInputs] = useState(initInputs)

    const handleChange = (e) => {
        const { name, value} = e.target
        setInputs(prevInputs => ({
            ...prevInputs, [name]: value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(inputs)
        props.submit(inputs, props._id)
        setInputs(initInputs)
    }

    return (
        <form className="form" onSubmit={handleSubmit}>
            <input 
            className="form-inputs"
            type="text"
            name="title"
            value={inputs.title}
            onChange={handleChange}
            placeholder="Title"
            />

            <input
            className="form-inputs" 
            type="text"
            name="genre"
            value={inputs.genre}
            onChange={handleChange}
            placeholder="Genre"
            />

            <input 
            className="form-inputs"
            type="text"
            name="img"
            value={inputs.img}
            onChange={handleChange}
            placeholder="Image URL"
            />
            <button 
            className="form-button">
                {props.btnText}
            </button>
        </form>
    )
}