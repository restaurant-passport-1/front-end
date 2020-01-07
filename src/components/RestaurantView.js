import React from 'react';
import 'materialize-css/dist/css/materialize.min.css';

const dummyRestaurant = {
  restName: "Suika",
  img: "https://source.unsplash.com/random",
  myRating: 4,
  stamped: true,
}

const RestaurantView = () => {
  return (
    <>
    <img className="big-restaurant-image" src="https://source.unsplash.com/random"/>

    <div className="container">
      <h1>{dummyRestaurant.restName}</h1>
      {new Array(dummyRestaurant.myRating).fill(<i class="material-icons">stars</i>)}
      <div className="passport-restaurants-grid">
        Hi
      </div>
    </div>

    </>
  );
}

export default RestaurantView;