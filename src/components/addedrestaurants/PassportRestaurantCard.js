import React from 'react';
import 'materialize-css/dist/css/materialize.min.css';

export default function PassportRestaurantCard({ id }) {
  return (
    <div className="card passport-card">
      <div className="card-image">
        <img src="https://source.unsplash.com/random" alt={`${id}`}/>
        <span className="card-title">Restaurant Title id is {id}</span>
        <div className="card-action">
          <a href="#">Remove from passport</a>
        </div>
      </div>
    </div>
  );
}