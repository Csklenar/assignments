import React from "react"
import EditedMemeList from "./EditedMemeList"


export default function MemeList(props) {
   const [editList, setEditList] = React.useState([{
    editTopText: "",
    editBottomText: "",
    randomMeme: "",
    memeHere: false
   }])

   const [isEditing, setIsEditing] = React.useState(false)

   const [isSaved, setIsSaved] = React.useState(false)

   //state for both top and bottom meme text
   function editMemeText(event) {
    const {name, value} = event.target
    setEditList(prevText => {
        return {
            ...prevText,
            [name]: value
        }
    })
   }

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
    <div className="MemeList-Container">
    <div className="MemeListDiv">
        {props.memeHere && <img className="MemeListImg" src={props.randomMeme}/>}
        
        
        {isSaved ? 
        <h2 className="editListTop">{editList.editTopText}</h2> :
        <h2 className="memeListTextTop">{props.topText}</h2>}

        {isSaved ? 
        <h2 className="editListBottom">{editList.editBottomText}</h2> :
        <h2 className="memeListTextBottom">{props.bottomText}</h2>}
        
    </div>
        <div className="buttons">
            {props.memeHere && <button className="DelMemeBtn" onClick={props.onDelete}>Delete</button>}

            {props.memeHere && (isEditing === false ? 
            <button className="editMemeBtn" onClick={() => setIsEditing(!isEditing)}>Edit</button> : 
            <button className="SaveMemeBtn" onClick={saveMemeEdits}>save</button>)}

            {isEditing && <form className="editInputBoxes">
                <input 
                className="inputsTop"
                placeholder="Top Text"
                name="editTopText"
                onChange={editMemeText}
                />

                <input 
                className="inputsBottom"
                placeholder="Bottom Text"
                name="editBottomText"
                onChange={editMemeText}
                />
                </form>}

        </div>
    </div>
   )
}