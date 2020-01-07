import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import axiosWithAuth from '../../utils/axioswithauth';
import Restaurant from '../Restaurant/Restaurant';
import '../../styles/restaurantlist.css';

const RestaurantList = props => {
  const [state, setState] = useState([]);

  useEffect(() => {
    axiosWithAuth()
      .get('https://restaurantpassport1.herokuapp.com/api/auth/passport')
      .then(response => {
        console.log(response);
        setState(response.data);
      })
      .catch();
  }, []);

  return (
    <div className='container'>
      <h4 className='res'>Restaurant List</h4>
      <div className='list'>
        {state.map(list => {
          return (
            <Link to={`/restaurantlist/${list.id}`}>
              <div>
                <Restaurant list={list} key={list.id} />
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};
export default RestaurantList;
