import React from 'react';
import {Link} from 'react-router-dom';

const Restaurant = props => {
  console.log(props);
  return <div>{props.list.prisonName}</div>;
};

export default Restaurant;
