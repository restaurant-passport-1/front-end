import React, {useState} from 'react';

export const Signup = () => {
  const [state, setState] = useState({
    name: '',
    city: '',
    email: ''
  });

  const handleChange = e => {
    setState({...state, [e.target.name]: e.target.value});
    // console.log([e.target.name], e.target.value);
  };

  return (
    <div className='container'>
      <h1>Welcome to signup form</h1>
      <form>
        <div className='inputs'>
          <label>Enter name</label>
          <input
            type='text'
            name='name'
            onChange={handleChange}
            value={state.name}
            placeholder='Sunil Karki'
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
            type='text'
            name='email'
            onChange={handleChange}
            value={state.email}
            placeholder='sunil@gmail.com'
          />
        </div>
      </form>
    </div>
  );
};
