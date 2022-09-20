import React from "react"


export default function EditedMemeList(props) {
    const [editList, setEditList] = React.useState([{
    editTopText: "",
    editBottomText: "",
    randomMeme: "",
    memeHere: false
   }])

   const [isEditing, setIsEditing] = React.useState(false)

   const [isSaved, setIsSaved] = React.useState(false)

   //state for both top and bottom meme text
   

   //save button to reset memesList
   function saveMemeEdits(event) {
    const {name, value} = event.target
    console.log(editList.editTopText)
    console.log(editList.editBottomText)
    setIsEditing(!isEditing)
    setIsSaved(!isSaved)
    console.log(isSaved)
    setEditList(prevText => {
        return {
            ...prevText,
            [name]: value
        }
    })
   }

  
    return (
        <div className="MemeListDiv">
            {props.memeHere && <img className="MemeListImg" src={props.randomMeme} />}
            <h2 className="memeListTextTop">{props.topText}</h2>
            <h2 className="memeListTextBottom">{props.bottomText}</h2>
            <div className="buttons">
                {props.memeHere && <button className="DelMemeButton" onClick={props.onDelete}>Delete</button>}
                {props.memeHere && (isEditing === false ? 
                <button className="EditMemeBtn" onClick={() => setIsEditing(!isEditing)}>Edit</button> : 
                <button className="EditMemeBtn" onClick={saveMemeEdits}>Save</button>)}

            </div>
        </div>
    )
}