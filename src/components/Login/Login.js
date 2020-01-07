import React, {useState} from 'react';
import {Link} from 'react-router-dom';

import '../../styles/signup.css';

export const Login = () => {
  const [state, setState] = useState({
    username: '',
    password: ''
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
      <h4 className='title'>Welcome to Login form</h4>
      <form onSubmit={handleSubmit}>
        <div className='inputs'>
          <label className='bg'>Username</label>
          <input
            type='text'
            name='username'
            onChange={handleChange}
            value={state.name}
            placeholder='Sunil Karki'
          />
        </div>
        <div className='inputs'>
          <label className='bg'>Password</label>
          <input
            type='password'
            name='password'
            onChange={handleChange}
            value={state.password}
            placeholder='********'
          />
          <button className='btn'>Login</button>
          <Link to='/signup'>
            <small className='text'>Need to signup</small>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
