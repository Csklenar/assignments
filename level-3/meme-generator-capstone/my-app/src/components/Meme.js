import React from "react"
import MemeList from "./MemeList"


export default function Meme() {

  const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    randomMeme: "https:\/\/i.imgflip.com\/3lmzyx.jpg",
    memeHere: false,
  })

  //array of all memes from the api
  const [allMemes, setAllMemes] = React.useState([{
    topText: meme.topText,
    bottomText: meme.bottomText,
    randomMeme: meme.randomMeme,
    id: meme.id,
    memeHere: false
  }])



  React.useEffect( () => {
    getMemes()
  }, [])

  // function is getting the data from the api, the data is the meme images
  async function getMemes() {
    await fetch("https://api.imgflip.com/get_memes")
    .then(res => res.json())
    .then(data => setAllMemes(data.data.memes))
    console.log(allMemes)
  }

  // function getMemeImage allows the new meme to randomize then populate, replacing the old meme
  function getMemeImage() {
    const randomNum = Math.floor(Math.random() * allMemes.length)
    const {id} = allMemes[randomNum]
    const {url} = allMemes[randomNum]
    console.log(url)
    console.log(id)
    setMeme(a => ({
      ...a,
      randomMeme: url,
      memeHere: true,
      memeId: id
    }))
  }

  // state for the top and bottom meme text
  function AddText (event) {
    const {name, value} = event.target
    setMeme(prevText => {
      return {
        ...prevText,
        [name]: value
      }
    })
  }

  // Meme list useState for the add meme button
  const [memeList, setMemeList] = React.useState([{
    topText: "",
    bottomText: "",
    randomMeme: "",
    id: allMemes.id,
    memeHere: false
  }])

  // function on button click adds the meme to the list

  function addMemeToList(event) {
    event.preventDefault()
    const {name, value} = event.target
    console.log(meme.randomMeme)
    setMemeList(prevMeme => {
      return [
        ...prevMeme,
        meme
      ]
    })
  }

  // delete meme filter index for deleting meme on click of delete button
  const deleteMeme = (index) => setMemeList(memeList.filter((_, i) => i !== index))

  const memesListElements = memeList.map((meme, index) => {
    return <MemeList key = {index} {...meme} onDelete={() => deleteMeme(index)}/>
  })

  // function handleChange(event) {
  //   const {name, value} = event.target
  //   setMeme(prevMeme => ({
  //     ...prevMeme,
  //     [name]: value
  //   }))
  // }

//   function deleteMeme(id) {
//     setSavedAllMemes(prevMeme.filter((meme, i) => (i !== id)))
//   }

  return (
    <main>
    <div className="form">
      <input 
      type="text"
      placeholder="Top Text"
      className="form--input"
      name="topText"
      value={meme.topText}
      onChange={AddText}
      />
      <input 
      type="text"
      placeholder="Bottom Text"
      className="form--input"
      name="bottomText"
      value={meme.bottomText}
      onChange={AddText}
      />
      </div>

    {/* Meme button, the button to generate new memes from the API */}
    <div className="meme-button-div">
      <button className="btn" onClick={getMemeImage}>Get a new meme image</button>
  </div>
  
  
  {/*Div for where the meme sits after the API call and meme generation */}
  <div className="textOnImg-container">
  <div className="memeDiv">
      {meme.memeHere && <img className="memeImg" src={meme.randomMeme} alt=""/>}
        {meme.memeHere && <h2 className="memeTextTop">{meme.topText}</h2>}
        {meme.memeHere && <h2 className="memeTextBottom">{meme.bottomText}</h2>}
        </div>
    </div>

  {/*Button div for adding meme to that memeList array */}
  <div className="save-meme-button-div">
    <button className="btn" onClick={addMemeToList}>Add Meme To Your List</button>
  </div>

    {/*delete meme button div, still working out placement of delete button */}
    {meme.memeHere && <div>{memesListElements}</div>}
  </main>
  
  
  );
}

