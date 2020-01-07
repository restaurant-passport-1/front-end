import React from 'react';
import {Link} from 'react-router-dom';

import '../../styles/restaurant.css';

const Restaurant = props => {
  const { each } = props;
  console.log(props);
  return (
    <div className='restaurant'>
      <p>Name: {each.restaurantName}</p>
      <p>City: {each.city}</p>
      <p>Rating (1-5): {each.myRating}</p>
      <p>Stamped: {each.stamped}</p>
      <button className='btn btn-small' style={{backgroundColor: '#ee6e73'}}>Add me</button>
    </div>
  );
};

export default Restaurant;
