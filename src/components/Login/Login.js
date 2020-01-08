import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import { login } from '../../actions';
import { connect } from 'react-redux';
import Preloader from '../../utils/Preloader';

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


    props.history.push('/');

  };

  if (props.isFetching) {
    return <Preloader />
  }


  return (
    <div className='container'>
      <h4 className='sign-title'>Log In</h4>
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

const mapStateToProps = state => {

  return {
    isFetching: state.isFetching
  
  }
}
export default connect(mapStateToProps, {login})(Login);
