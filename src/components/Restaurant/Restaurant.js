import React from 'react';
import {Link} from 'react-router-dom';

import '../../styles/restaurant.css';

const Restaurant = props => {
  console.log(props);
  return <div className='restaurant'>{props.list.prisonName}</div>;
};

export default Restaurant;
