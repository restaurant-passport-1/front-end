import React from 'react';
import RestaurantCard from '../restaurantcard/restaurantcard';

import 'materialize-css/dist/css/materialize.min.css';
import PassportRestaurantCard from './PassportRestaurantCard';

const AddedRestaurants = () => {
  return (
    <div className='restaurants_container'>
      <div className='added_restaurants'>
        <RestaurantCard />
      </div>
      {/* <div className="stamped_restaurants">
            </div>
            <div className="recommended_restaurants">
            </div> */}
    </div>
  );
};

export default AddedRestaurants;

const dummyPassportRestaurantList = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

export const MyPassport = () => {
  return (
    <>
      <div className='container'>
        <h1>My Passport</h1>
        <h2>Las Vegas Stamped Restaurants</h2>
        <div className='passport-restaurants-grid'>
          {dummyPassportRestaurantList.map((restaurant, index) => {
            return <PassportRestaurantCard id={index} />;
          })}
        </div>
      </div>
    </>
  );
};
