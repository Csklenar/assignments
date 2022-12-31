import React, {useState} from 'react'
import AddAnimeForm from './AddAnimeForm'

function Anime(props) {
    const {title, genre, img, _id} = props
    const [editToggle, setEditToggle] = useState(false)

  return (
    <div className="anime">
      { !editToggle ?
            <>
            <h1 className='title-header'> Title: {title}</h1>
            <p className="genre">Genre: {genre}</p>
            <img src={img} alt="anime image"/>
            <button 
            className="delete-btn"
            onClick={() => props.deleteAnime(_id)}>
                Delete
            </button>
            <button className="edit-btn"
            onClick={() => setEditToggle(prevToggle => !prevToggle)}>
                Edit
            </button>
            </>
        :
        <>
            <AddAnimeForm 
            title={title}
            genre={genre}
            _id={_id}
            btnText="Submit Edit"
            submit={props.editAnime}
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

export default Anime
