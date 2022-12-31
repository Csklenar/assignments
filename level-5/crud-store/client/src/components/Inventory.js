import React, {useState} from "react"
import AddInventoryForm from "./AddInventoryForm.js"

export default function Inventory(props){
    const {toppings, crust, size, _id} = props
    const [editToggle, setEditToggle] = useState(false)

    return (
        <div className="inventory">
            { !editToggle ?
            <>
            <h1>{toppings}</h1>
            <p>{crust}</p>
            <p>{size}</p>
            <button className="delete-btn"
            onClick={() => props.deleteMovie(_id) }>
                Delete
            </button>
            <button className="edit-btn"
            onClick={() => setEditToggle(prevToggle => !prevToggle)}>
                Edit
            </button>
            
            </>
            : 
            <>
                <AddInventoryForm 
                toppings={toppings}
                crust={crust}
                size={size}
                _id={_id}
                btnText="Submit Edit"
                submit={props.editInventory}
                />
                <button
                onClick={() => setEditToggle(prevToggle => !prevToggle)}>
                    Close
                </button>
            </>
            }
        </div>
    )
}