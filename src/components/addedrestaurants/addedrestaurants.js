import React from 'react';
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
    id: 1
  }, 

  {
    restName: "Rondo",
    img: "https://source.unsplash.com/random",
    myRating: 4,
    stamped: true,
    id: 1
  }, 

  {
    restName: "Chung Chun Rice Dog",
    img: "https://source.unsplash.com/random",
    myRating: 4,
    stamped: true,
    id: 1
  }, 

  {
    restName: "Beecher's Handmade Cheese",
    img: "https://source.unsplash.com/random",
    myRating: 4,
    stamped: true,
    id: 1
  }, 

  {
    restName: "Skillet",
    img: "https://source.unsplash.com/random",
    myRating: 4,
    stamped: true,
    id: 1
  }, 

  {
    restName: "Ezell's Famous Chicken",
    img: "https://source.unsplash.com/random",
    myRating: 4,
    stamped: true,
    id: 1
  }, 

  {
    restName: "Din Tai Fung",
    img: "https://source.unsplash.com/random",
    myRating: 4,
    stamped: true,
    id: 1
  }, 

  {
    restName: "85°C Bakery",
    img: "https://source.unsplash.com/random",
    myRating: 4,
    stamped: true,
    id: 1
  }, 

  {
    restName: "Wataru",
    img: "https://source.unsplash.com/random",
    myRating: 4,
    stamped: true,
    id: 1
  }];

export const MyPassport = () => {
  return (
    <>
      <div className='container'>
        <h1>My Passport</h1>
        <h2>Las Vegas Stamped Restaurants</h2>
        <div className='passport-restaurants-grid'>
          {dummyPassportRestaurantList.map((restaurant, index) => {
            return (
              <Link to={"/restaurants"}>
                <PassportRestaurantCard id={index} />
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default MyPassport;