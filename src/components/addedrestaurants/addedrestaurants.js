import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import 'materialize-css/dist/css/materialize.min.css';
import PassportRestaurantCard from './PassportRestaurantCard';

const dummyPassportRestaurantList = [
  {
    restName: "Suika",
    img: "https://source.unsplash.com/random",
    myRating: 4,
    stamped: true,
    id: 1
  }, 

  {
    restName: "Tamari Bar",
    img: "https://source.unsplash.com/random",
    myRating: 4,
    stamped: true,
    id: 2
  }, 

  {
    restName: "Rondo",
    img: "https://source.unsplash.com/random",
    myRating: 4,
    stamped: true,
    id: 3
  }, 

  {
    restName: "Chung Chun Rice Dog",
    img: "https://source.unsplash.com/random",
    myRating: 4,
    stamped: true,
    id: 4
  }, 

  {
    restName: "Beecher's Handmade Cheese",
    img: "https://source.unsplash.com/random",
    myRating: 4,
    stamped: true,
    id: 5
  }, 

  {
    restName: "Skillet",
    img: "https://source.unsplash.com/random",
    myRating: 4,
    stamped: true,
    id: 6
  }, 

  {
    restName: "Ezell's Famous Chicken",
    img: "https://source.unsplash.com/random",
    myRating: 4,
    stamped: true,
    id: 7
  }, 

  {
    restName: "Din Tai Fung",
    img: "https://source.unsplash.com/random",
    myRating: 4,
    stamped: true,
    id: 8
  }, 

  {
    restName: "85°C Bakery",
    img: "https://source.unsplash.com/random",
    myRating: 4,
    stamped: true,
    id: 9
  }, 

  {
    restName: "Wataru",
    img: "https://source.unsplash.com/random",
    myRating: 4,
    stamped: true,
    id: 10
  }
];

export const MyPassport = () => {
  const [passportRestaurantList, setPassportRestaurantList] = useState(dummyPassportRestaurantList);

  const removeFromPassport = (id) => {
    console.log('got ' + id + 'from child');
  };

  return (
    <div className='container'>
      <h1>My Passport</h1>
      <h2>Las Vegas Stamped Restaurants</h2>
      <div className='passport-restaurants-grid'>
        {passportRestaurantList.map((restaurant, index) => {
          return (
            <Link to={"/restaurants"}>
              <PassportRestaurantCard 
                id={index} 
                restName={restaurant.restName} 
                removeFromPassport={removeFromPassport}
              />
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default MyPassport;