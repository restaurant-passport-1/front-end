import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

const Home = () => {
  return (
    <div>
      <h1>Welcome to the Restaurant Home Page</h1>
      <Link to='/restaurantlist'>
        <button>Show Restaurant List</button>
      </Link>
    </div>
  );
};

export default Home;
