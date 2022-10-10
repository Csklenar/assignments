import React, { useState, useContext } from 'react';
import { ListContext } from './ListContext';

// creating local state to handle the form by using state formInputs

// Context doesn't need to know what is in our formInputs state so that is why we aren't using the form in our context

/* we are still consuming context to grab the addNewThings function to pass into our form because
we still need that to add a new things*/
function Form(props) {
  const initInputs = {
    title: '',
    description: '',
    imgUrl: '',
  };
  const [formInputs, setFormInputs] = useState(initInputs);

  const { addNewThing } = useContext(ListContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    addNewThing(formInputs);
    // adding a new thing from the string of formInputs
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormInputs((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div>
      <form className='form-wrapper' onSubmit={handleSubmit}>
        <input
          className='input-imgUrl'
          placeholder='Image URL'
          name='imgUrl'
          value={formInputs.imgUrl}
          onChange={handleChange}
        />

        <input
          className='input-title'
          placeholder='Title'
          name='title'
          value={formInputs.title}
          onChange={handleChange}
        />

        <input
          className='input-description'
          placeholder='Description'
          name='description'
          value={formInputs.description}
          onChange={handleChange}
        />
        <button className='form-btn'>Add Ugly Thing</button>
      </form>
    </div>
  );
}
export default Form;
// export {ListContext}
