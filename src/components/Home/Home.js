import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';

import '../../styles/home.css';

const Home = () => {
  return (
    <div className='home'>
      <div className='title'>
        <h3 className='text'>Restaurant Home Page</h3>
      </div>
      <Link to='/restaurantlist'>
        <button className='btn'>Show Restaurant List</button>
      </Link>
    </div>
  );
};

export default Home;
