import React, {useState} from 'react';

const UpdateRestaurant = () => {
  const [state, setState] = useState({
    restaurantName: '',
    streetAddress: '',
    city: '',
    zipcode: '',
    phoneNumber: '',
    myRating: '',
    notes: '',
    email: ''
  });

  const handleChange = e => {
    setState({...state, [e.target.name]: e.target.value});
    console.log([e.target.name], e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
  };

  return (
    <div className='container'>
      <h1>Welcome to updateform</h1>
      <form onSubmit={handleSubmit}>
        <div className='inputs'>
          <label>Enter restaurantName</label>
          <input
            type='text'
            name='restaurantName'
            onChange={handleChange}
            value={state.restaurantName}
            placeholder='Sunil Karki'
          />
        </div>
        <div className='inputs'>
          <label>Enter streetAddress</label>
          <input
            type='streetAddress'
            name='streetAddress'
            onChange={handleChange}
            value={state.streetAddress}
            placeholder='123 garden ave s'
          />
        </div>
        <div className='inputs'>
          <label>Enter City</label>
          <input
            type='text'
            name='city'
            onChange={handleChange}
            value={state.city}
            placeholder='Kathmandu'
          />
        </div>

        <div className='inputs'>
          <label>Enter Notes</label>
          <input
            type='notes'
            name='notes'
            onChange={handleChange}
            value={state.email}
            placeholder='sunil@gmail.com'
          />
        </div>

        <label>Rate it</label>
        <div className='drop'>
          <select name='stars'>
            <option value='1'>1</option>
            <option value={2}>"2"</option>
            <option value={3}>"3"</option>
            <option value={4}>"4"</option>
            <option value={5}>"5"</option>
          </select>
        </div>
        <button>Sign up</button>
      </form>
    </div>
  );
};

export default UpdateRestaurant;
