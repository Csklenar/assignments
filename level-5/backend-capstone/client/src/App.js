import React, {useState, useEffect} from "react"
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Home from "./components/Home"
import Navbar from "./components/Navbar"
import Anime from "./components/Anime"
import AddAnimeForm from "./components/AddAnimeForm"
import './App.css';
import axios from "axios"

function App() {

  const [animes, setAnimes] = useState([])

   function getAnimes() {
    axios
      .get('/anime')
      .then((res) => setAnimes(res.data))
      .catch((err) => console.log(err));
  }

  function addAnime(newAnime) {
    axios
      .post('/anime', newAnime) // sends the new movie
      .then((res) => {
        setAnimes((prevAnime) => [...prevAnime, res.data]);
      })
      .catch((err) => console.log(err));
  }

  function deleteAnime(animeId) {
    axios
      .delete(`/anime/${animeId}`)
      .then((res) => {
        setAnimes((prevAnime) =>
          prevAnime.filter((anime) => anime._id !== animeId)
        );
        // filter removes the item by returning a new array that doesn't include the one we asked to remove
      })
      .catch((err) => console.log(err));
  }

  function editAnime(updates, animeId) {
    axios
      .put(`/anime/${animeId}`, updates)
      .then((res) => {
        setAnimes((prevAnime) =>
          prevAnime.map((anime) => (anime._id !== animeId ? anime : res.data))
        );
      })
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    getAnimes()
  }, [])

  return (
    <div className="anime-container">
      
      <Routes>
        <Route path='/' element={<Home />} />
        
      </Routes>
      <Navbar />
      <AddAnimeForm 
      submit={addAnime}
      btnText="Add Anime"/>

      {animes.map((anime) => (
        <Anime 
        {...anime}
        key={anime.i}
        deleteAnime={deleteAnime}
        editAnime={editAnime}
        />
      ))}
    </div>
  )
}
  

export default App;



    
        

      
