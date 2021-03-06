import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import {Link} from 'react-router-dom';
import axiosWithAuth from '../../utils/axioswithauth';
import Restaurant from '../Restaurant/Restaurant';
import '../../styles/restaurantlist.css';

import { connect } from 'react-redux';
import Preloader from '../../utils/Preloader';

const RestaurantList = props => {
  const [restaurants, setRestaurants] = useState([]);
  const [isloading, setIsloading] = useState(true);
  const { id, city } = props;

  console.log('fetching id', id);

  useEffect(() => {
    axiosWithAuth()
      .get(`/api/auth/restaurants/search?id=${id}`)
      .then(res => {
        console.log('all', res);
        // localStorage.setItem('token', res.data);
        setRestaurants(res.data.businesses);
        setIsloading(false);
      })
      .catch(err => {
        console.error(err.response.data.message);
        setIsloading(false);
      });
  }, [id]);

  if (isloading || restaurants === null) {
    return <Preloader />;
  }

  return (
    <div className="container">
      <h4 className="res">
        Restaurant List in {restaurants && `${city}`} Area
      </h4>

      <div className="row">
        {restaurants &&
          restaurants.map(each => {
            return (
              // <Link to={`/restaurantlist/${each.id}`}>
              <div className="list col s12 m4 l3">
                <Restaurant each={each} key={each.id} user_id={id} />
              </div>
              // </Link>
            );
          })}
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    id: state.user.id,
    city: state.user.city
  };
};
export default connect(mapStateToProps, {})(RestaurantList);
