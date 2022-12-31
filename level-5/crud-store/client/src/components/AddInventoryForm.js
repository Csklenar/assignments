import React, {useState} from "react"

export default function AddInventoryForm(props){
    const initInputs = {toppings: props.toppings || "", crust: props.crust || "", size: props.size || ""}
    const [inputs, setInputs] = useState(initInputs)

    const handleChange = (e) => {
        const {name, value} = e.target
        setInputs(prevInputs => ({...prevInputs, [name]: value}))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        props.submit(inputs, props._id)
        setInputs(initInputs)
    }

    return (
        <form onSubmit={handleSubmit}>
            <input 
            type="text"
            name="toppings"
            value={inputs.toppings}
            onChange={handleChange}
            placeholder="Toppings"
            />
               <input 
            type="text"
            name="crust"
            value={inputs.crust}
            onChange={handleChange}
            placeholder="Crust"
            />
               <input 
            type="text"
            name="size"
            value={inputs.size}
            onChange={handleChange}
            placeholder="Size"
            />
            <button>{props.btnText}</button>
        </form>
    )
}