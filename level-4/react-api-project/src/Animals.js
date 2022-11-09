import axios from 'axios';
import React, { useState, useEffect } from 'react';

// import {Link} from "react-router-dom"

export default function Animals() {
  const [randomAnimal, setRandomAnimal] = useState([]);

  const btnClick = (event) => {
    event.preventDefault();
    axios
      .get('https://zoo-animal-api.herokuapp.com/animals/rand')
      .then((res) => setRandomAnimal(res.data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    axios
      .get('https://zoo-animal-api.herokuapp.com/animals/rand/')
      .then((res) => setRandomAnimal(res.data))
      .catch((err) => console.log(err));
  }, []);

  // IDEAS:
  // first option: create an image slider and figure out a way to display the facts about the animal
  // if image slider then maybe add a textbox with facts

  // second option: have an image with facts already loaded when the page loads, add a button to get a new image with facts
  // have a previous button and a next button
  return (
    <div className='animals-wrapper'>
      <h1 className="animals-title">Explore Our Amazing Zoo Animals</h1>
      <div className='animals-main'>
        <img
          className='random-animal-img'
          src={randomAnimal.image_link}
          alt=''
        />
        <ul className='animal-facts'>
          <li>
            Name:{' '}
            <span className='animals-facts-span'>{randomAnimal.name}</span>
          </li>
          <li>
            Latin Name:{' '}
            <span className='animals-facts-span'>
              {randomAnimal.latin_name}
            </span>
          </li>
          <li>
            Animal Type:
            <span className='animals-facts-span'>
              {randomAnimal.animal_type}
            </span>
          </li>
          <li>
            Active Time:
            <span className='animals-facts-span'>
              {randomAnimal.active_time}
            </span>
          </li>
          <li>
            Minimum Length:
            <span className='animals-facts-span'>
              {randomAnimal.length_min}
            </span>
          </li>
          <li>
            Maximum Length:
            <span className='animals-facts-span'>
              {randomAnimal.length_max}
            </span>
          </li>
          <li>
            Minumum Weight:
            <span className='animals-facts-span'>
              {randomAnimal.weight_min}
            </span>
          </li>
          <li>
            Maximum Weight:
            <span className='animals-facts-span'>
              {randomAnimal.weight_max}
            </span>
          </li>
          <li>
            Lifespan:
            <span className='animals-facts-span'>{randomAnimal.lifespan}</span>
          </li>
          <li>
            Habitat:
            <span className='animals-facts-span'>{randomAnimal.habitat}</span>
          </li>
          <li>
            Diet:<span className='animals-facts-span'>{randomAnimal.diet}</span>
          </li>
          <li>
            Geo Range:
            <span className='animals-facts-span'>{randomAnimal.geo_range}</span>
          </li>
        </ul>
      </div>
      
      <div className='button-wrapper'>
        <button className='button' onClick={btnClick}>
          Next Animal
        </button>
      </div>
    </div>
  );
}
