import React from 'react';
import {Link} from 'react-router-dom';

import '../../styles/restaurant.css';

const Restaurant = props => {
  console.log(props);
  return (
    <div className='restaurant'>
      <p>{props.list.prisonName}</p>
      <button className='btn-sec'>Add me</button>
    </div>
  );
};

export default Restaurant;
