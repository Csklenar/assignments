import React, {useState} from "react"
import AddBountyForm from "./AddBountyForm.js";

export default function Bounty(props) {
    const {firstName, lastName, living, bountyAmount, type, _id} = props;
    const [editToggle, setEditToggle] = useState(false)
    
    return (
        <div className="bounty">
                { !editToggle ?
                <>
                    <h1>First Name: <span className="bounty-info"> {firstName}</span></h1>
                    <h1>Last Name: <span  className="bounty-info">{lastName}</span></h1>
                    <p>Alive or Dead: <span  className="bounty-info">{living}</span></p>
                    <p>Bounty Amount: <span  className="bounty-info">{bountyAmount}</span></p>
                    <p>Jedi or Sith: <span  className="bounty-info">{type}</span></p>
                    <button 
                    className="delete-btn"
                    onClick={() => props.deleteBounty(_id)}>
                        Delete
                    </button>
                    <button className="edit-btn"
                    onClick={() => setEditToggle(prevToggle => !prevToggle)}>
                        Edit
                    </button>
                </>
                    :
                <>
                    <AddBountyForm 
                    firstName={firstName}
                    type={type}
                    _id={_id}
                    btnText="Submit Edit"
                    submit={props.editBounty}
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
            
