import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';

import '../../styles/home.css';

const Home = () => {
  return (
    <div className='home'>
      <h4 className='title'>Welcome to the Restaurant Home Page</h4>
      <Link to='/restaurantlist'>
        <button className='btn'>Show Restaurant List</button>
      </Link>
    </div>
  );
};

export default Home;
