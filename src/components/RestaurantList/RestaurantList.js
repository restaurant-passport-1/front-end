import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import axiosWithAuth from '../../utils/axioswithauth';
import Restaurant from '../Restaurant/Restaurant';
import '../../styles/restaurantlist.css';

const RestaurantList = props => {
  const [list, setList] = useState([]);

  useEffect(() => {
    axiosWithAuth()
      .get('https://restaurantpassport1.herokuapp.com/api/auth/passport')
      .then(response => {
        console.log(response);
        setList(response.data);
      })
      .catch();
  }, []);

  return (
    <div className='container'>
      <h4 className='res'>Restaurant List</h4>
      <div className='list'>
        {list && list.map(each => {
          return (
            <Link to={`/restaurantlist/${each.id}`}>
              <div>
                <Restaurant each={each} key={each.id} />
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};
export default RestaurantList;
