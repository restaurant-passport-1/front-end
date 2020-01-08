import React, {useState, useEffect} from 'react';
// import axios from 'axios';
// import {Link} from 'react-router-dom';
import axiosWithAuth from '../../utils/axioswithauth';
import Restaurant from '../Restaurant/Restaurant';
import '../../styles/restaurantlist.css';
import { fetchAllRestaurant } from '../../actions';
import { connect } from 'react-redux';
import Preloader from '../../utils/Preloader';

const RestaurantList = props => {

const { fetchAllRestaurant, isFetching, restaurants, id } = props;
  useEffect(() => {
    fetchAllRestaurant(id);
  }, [id]);

  if (isFetching || restaurants  === null) {
    return <Preloader />
  }

  return (
    <div className='container'>
      <h4 className='res'>Restaurant List</h4>
   
        <div className='row'>
        {restaurants && restaurants.map(each => {
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

const mapStateToProps = state => {

  return {
    isFetching: state.isFetching,
    restaurants: state.restaurants,
    id: state.user.id

  }
}
export default connect(mapStateToProps, {fetchAllRestaurant})(RestaurantList);
