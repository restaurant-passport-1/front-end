import React, {useState} from 'react';

import {Link} from 'react-router-dom';

import '../../styles/signup.css';



const Signup = () => {
  const [state, setState] = useState({
    username: '',
    password: '',
    city: '',
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
      <h4 className='title2'>Ready to singup</h4>
      <form onSubmit={handleSubmit}>
        <div className='inputs'>
          <label className='bg'>Enter username</label>

    <div>
      <h1>Welcome to signup form</h1>
      <form onSubmit={handleSubmit}>
        <div className='inputs'>
          <label>Enter username</label>

          <input
            type='text'
            name='username'
            onChange={handleChange}
            value={state.username}
            placeholder='Sunil Karki'
          />
        </div>
        <div className='inputs'>

          <label className='bg'>Enter password</label>

          <label>Enter password</label>

          <input
            type='password'
            name='password'
            onChange={handleChange}
            value={state.password}
            placeholder='********'
          />
        </div>
        <div className='inputs'>

          <label className='bg'>Enter City</label>

          <input
            type='text'
            name='city'
            onChange={handleChange}
            value={state.city}
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

export default Signup;
