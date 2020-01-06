import React from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import PassportRestaurantCard from './PassportRestaurantCard';

const dummyPassportRestaurantList = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

export default function MyPassport() {
  return (
    <>
      <div className="container">
        <h1>My Passport</h1>
        <h2>Las Vegas Stamped Restaurants</h2>
        <div className="passport-restaurants-grid">
          {dummyPassportRestaurantList.map((restaurant, index) => {
            return <PassportRestaurantCard id={index} />;
          })}
        </div>
      </div>
    </>
  );
}