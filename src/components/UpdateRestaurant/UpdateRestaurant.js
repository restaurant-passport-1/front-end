import React, {useState} from 'react';
import {Link} from 'react-router-dom';

import '../../styles/update.css';

const UpdateRestaurant = () => {
  const [state, setState] = useState({
    streetAddress: '',
    city: '',
    zipcode: '',
    phoneNumber: '',
    password: '',
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
      <h4 className='title2'>Update</h4>
      <form onSubmit={handleSubmit}>
        <div className='inputs'>
          <label className='bg'>streetAddress</label>
          <input
            type='text'
            name='streetAddress'
            onChange={handleChange}
            value={state.streetAddress}
            placeholder='Sunil Karki'
          />
        </div>
        <div className='inputs'>
          <label className='bg'>City</label>
          <input
            type='text'
            name='city'
            onChange={handleChange}
            value={state.city}
            placeholder='Sunil Karki'
          />
        </div>
        <div className='inputs'>
          <label className='bg'>Zipcode</label>
          <input
            type='text'
            name='zipcode'
            onChange={handleChange}
            value={state.zipcode}
            placeholder='Sunil Karki'
          />
        </div>
        <div className='inputs'>
          <label className='bg'>Enter password</label>
          <input
            type='password'
            name='password'
            onChange={handleChange}
            value={state.password}
            placeholder='********'
          />
        </div>
        <div className='inputs'>
          <label className='bg'>Enter Notes</label>
          <input
            type='text'
            name='notes'
            onChange={handleChange}
            value={state.notes}
            placeholder='Kathmandu'
          />
        </div>

        <div className='inputs'>
          <label className='bg'>Enter email</label>
          <input
            type='email'
            name='email'
            onChange={handleChange}
            value={state.email}
            placeholder='sunil@gmail.com'
          />
        </div>
        <button className='btn'>Sign up</button>
        <Link to='/login'>
          <small className='small'>Need to Sign in </small>
        </Link>
      </form>
    </div>
  );
};

export default UpdateRestaurant;
