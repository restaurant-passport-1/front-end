import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

import Restaurant from '../Restaurant/Restaurant';

const RestaurantList = props => {
  const [state, setState] = useState([]);

  useEffect(() => {
    axios
      .get('https://prisoner-skills-bw.herokuapp.com/api/users/')
      .then(response => {
        console.log(response.data);
        setState(response.data);
      })
      .catch();
  }, []);

  return (
    <div>
      <h1>Welcome Everyone</h1>
      {state.map(list => {
        return (
          <Link to={`/restaurantlist/${list.id}`}>
            <div>
              <Restaurant list={list} key={list.id} />;
            </div>
          </Link>
        );
      })}
    </div>
  );
};
export default RestaurantList;
