import React, {useState} from 'react';

import {Link} from 'react-router-dom';

import '../../styles/signup.css';
import { signup } from "../../actions";
import { connect } from "react-redux";


const Signup = (props) => {
  const { signup } = props;

  const initialState = {
    username: "",
    password: "",
    name: "",
    city: "",
    email: ""
  };

  const [user, setUser] = useState(initialState);
  const { username, password, name, city, email } = user;

  

  const handleChange = e => {
    setUser({...user, [e.target.name]: e.target.value});
    console.log([e.target.name], e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    signup(user);
    setUser(initialState);
  
    props.history.push('/');
  };

  return (

    <div className='container'>
      <h4 className='title2'>Ready to signup</h4>
      <form onSubmit={handleSubmit}>
        <div className='inputs'>
          <label className='bg'>Enter username</label>

    

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

          <label className='bg'>Enter password</label>

          <label>Enter password</label>

          <input
            type='password'
            name='password'
            onChange={handleChange}
            value={password}
            placeholder='********'
            required
          />
        </div>
        <div className='inputs'>

          <label className='bg'>Name</label>

          <input
            type='text'
            name='name'
            onChange={handleChange}
            value={name}
            placeholder='Name'
            required
          />
        </div>
        <div className='inputs'>

          <label className='bg'>Enter City</label>

          <input
            type='text'
            name='city'
            onChange={handleChange}
            value={city}
            placeholder='City'
            required
          />
        </div>

        <div className='inputs'>

          <label className='bg'>Enter email</label>



          <input
            type='email'
            name='email'
            onChange={handleChange}
            value={email}
            placeholder='Email'
            required
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

export default connect(null, { signup })(Signup);
