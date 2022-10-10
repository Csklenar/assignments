import React, { useState, useContext } from 'react';

export default function EditThingList(props) {
  const [editThing, setEditThing] = useState([
    {
      title: '',
      description: '',
    },
  ]);

  const [editing, setEditing] = useState(false);

  const editData = (event) => {
    const { name, value } = event.target;
    setEditThing((prevThing) => !prevThing);
  };

  return (
    <div className='editedThingList'>
      <h1>{props.title}</h1>
      <p>{props.description}</p>

      <button className='editBtn' onClick={() => updateThing(_id)}>
        Edit
      </button>
      <button className='dltBtn' onClick={() => deleteThing(_id)}>
        Delete
      </button>

      {editing === true ? (
        <input
          className=''
          placeholder='Image URL'
          name='title'
          value={editThing.imgUrl}
          onChange={handleChange}
        />
      ) : null}

      {editing === true ? (
        <input
          className=''
          placeholder='Description'
          name='description'
          value={editThing.description}
          onChange={handleChange}
        />
      ) : null}
    </div>
  );
}
