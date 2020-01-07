import React, {useState} from 'react';

import {Link} from 'react-router-dom';
import M from 'materialize-css/dist/js/materialize.min.js';
import '../../styles/signup.css';
import { signup } from "../../actions";
import { connect } from "react-redux";


const Signup = (props) => {
  const { signup } = props;

  const initialState = {
    username: "",
    password: "",

    city: "",
    email: ""
  };

  const [user, setUser] = useState(initialState);
  const { username, password, city, email } = user;

  

  const handleChange = e => {
    setUser({...user, [e.target.name]: e.target.value});
    console.log([e.target.name], e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    signup(user);
    setUser(initialState);
    M.toast({html: `Signup successul by ${username}`})
    props.history.push('/');
  };

  return (

    <div className='container'>
      <h4 className='title2'>Ready to singup</h4>
      <form onSubmit={handleSubmit}>
        <div className='inputs'>
          <label className='bg'>Enter username</label>

    

          <input
            type='text'
            name='username'
            onChange={handleChange}
            value={username}
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
            value={password}
            placeholder='********'
          />
        </div>
        <div className='inputs'>

          <label className='bg'>Enter City</label>

          <input
            type='text'
            name='city'
            onChange={handleChange}
            value={city}
            placeholder='Kathmandu'
          />
        </div>

        <div className='inputs'>

          <label className='bg'>Enter email</label>



          <input
            type='email'
            name='email'
            onChange={handleChange}
            value={email}
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

export default connect(null, { signup })(Signup);
