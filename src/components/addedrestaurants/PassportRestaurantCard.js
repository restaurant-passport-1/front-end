import React from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import stamp from './been-here-yellow.svg';

export default function PassportRestaurantCard({ restName, restaurant, removeFromPassport}) {
  return (
    <div className="card passport-card">

      <div className="card-image">
        <img src="https://source.unsplash.com/random" alt={`${restaurant.id}`}/>
        <span className="stamp"><img src={stamp} /></span>
        <span className="card-title">{restName}</span>
      </div>
      <div className="card-action">
        <div onClick={() => removeFromPassport(restaurant.id)}>Remove from passport</div>
      </div>
    </div>
  );
}