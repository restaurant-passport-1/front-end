import React from 'react';
import 'materialize-css/dist/css/materialize.min.css';

export default function PassportRestaurantCard({ restName, id }) {
  return (
    <div className="card passport-card">
      <div className="card-image">
        <img src="https://source.unsplash.com/random" alt={`${id}`}/>
        <span className="card-title">{restName}</span>
      </div>
      <div className="card-action">
        <a href="#">Remove from passport</a>
        {/* <br />Remove from passport */}
      </div>
    </div>
  );
}