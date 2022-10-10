import React, { useState, useContext } from 'react';
import { ListContext } from './ListContext';

export default function UglyThing(props) {
  const { title, imgUrl, description, _id } = props;

  const { updateThing } = useContext(ListContext);
  const { deleteThing } = useContext(ListContext);

  const [editThing, setEditThing] = useState({
    title: '',
    description: '',
    imgUrl: '',
  });

  const [editing, setEditing] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setEditThing((prevThing) => ({
      ...prevThing,
      [name]: value,
    }));
  };

  return (
    <div className='editedThingList'>
      <h1 className='header'>{props.title}</h1>
      <img className='images' src={props.imgUrl} />
      <p className='description'>{props.description}</p>

      <button className='editBtn' onClick={() => setEditing((prev) => !prev)}>
        Edit
      </button>
      <button className='dltBtn' onClick={() => deleteThing(_id)}>
        Delete
      </button>

      {editing === true ? (
        <input
          className='edit-title'
          placeholder='Title'
          name='title'
          value={editThing.title}
          onChange={handleChange}
        />
      ) : null}

      {editing === true ? (
        <input
          className='edit-imgUrl'
          placeholder='Image URL'
          name='imgUrl'
          value={editThing.imgUrl}
          onChange={handleChange}
        />
      ) : null}

      {editing === true ? (
        <input
          className='edit-description'
          placeholder='Description'
          name='description'
          value={editThing.description}
          onChange={handleChange}
        />
      ) : null}
      <button className='save-btn' onClick={() => updateThing(_id, editThing)}>
        Save
      </button>
    </div>
  );
}
