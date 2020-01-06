import React, {useState} from 'react';

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
          <label>Enter email</label>
          <input
            type='email'
            name='email'
            onChange={handleChange}
            value={state.email}
            placeholder='sunil@gmail.com'
          />
        </div>
        <button>Sign up</button>
      </form>
    </div>
  );
};

export default Signup;
