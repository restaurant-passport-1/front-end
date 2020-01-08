import React, {useState, useEffect} from 'react';
// import axios from 'axios';
// import {Link} from 'react-router-dom';
import axiosWithAuth from '../../utils/axioswithauth';
import Restaurant from '../Restaurant/Restaurant';
import '../../styles/restaurantlist.css';

const RestaurantList = props => {
  const [list, setList] = useState([]);

  useEffect(() => {
    axiosWithAuth()
      // .get('https://restaurantpassport1.herokuapp.com/api/auth/passport')
      .get('https://restaurantpassport1.herokuapp.com/api/auth/restaurants/search')
      .then(response => {
        console.log('res1', response);
        setList(response.data.businesses);
      })
      .catch();
  }, []);

  return (
    <div className='container'>
      <h4 className='res'>Restaurant List</h4>
   
        <div className='row'>
        {list && list.map(each => {
          return (
            // <Link to={`/restaurantlist/${each.id}`}>
              <div className='list col s12 m4 l3' >
                <Restaurant each={each} key={each.id} />
              </div>
            // </Link>
          );
        })}
      </div>
  
      
    </div>
  );
};
export default RestaurantList;
