import React, {useState} from 'react';

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
      <h1>Welcome to Login form</h1>
      <form onSubmit={handleSubmit}>
        <div className='inputs'>
          <label>Username</label>
          <input
            type='text'
            name='username'
            onChange={handleChange}
            value={state.name}
            placeholder='Sunil Karki'
          />
        </div>
        <div className='inputs'>
          <label>Password</label>
          <input
            type='password'
            name='password'
            onChange={handleChange}
            value={state.city}
            placeholder='Kathmandu'
          />
        </div>
      </form>
    </div>
  );
};

export default Login;
