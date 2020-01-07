import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import { login } from '../../actions';
import { connect } from 'react-redux';
import M from 'materialize-css/dist/js/materialize.min.js';

import '../../styles/signup.css';

export const Login = (props) => {
  const [user, setUser] = useState({
    username: '',
    password: ''
  });

  const { username, password } = user;

  const handleChange = e => {
    setUser({...user, 
      [e.target.name]: e.target.value});
   
  };

  const handleSubmit = e => {
    e.preventDefault();
    props.login(user);
    setUser({
        username:'',
        password: ''
    });

    M.toast({html: `Login Successfull by ${username}`})

    props.history.push('/');

  };

  return (
    <div className='container'>
      <h4 className='title1'>Welcome to Login form</h4>
      <div className='form-con'>
        <form onSubmit={handleSubmit}>
          <div className='inputs'>
            <label className='bg'>Username</label>
            <input
              type='text'
              name='username'
              onChange={handleChange}
              value={username}
              placeholder='Username'
              required
            />
          </div>
          <div className='inputs'>
            <label className='bg'>Password</label>
            <input
              type='password'
              name='password'
              onChange={handleChange}
              value={password}
              placeholder='********'
              required
            />
            <button className='btn'>Login</button>
            <Link to='/signup'>
              <small className='text'>Need to signup</small>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};


export default connect(null, {login})(Login);
