import React from 'react';
import 'materialize-css/dist/css/materialize.min.css';

export default function PassportRestaurantCard(props) {

  const { restaurantName, streetAddress, city, zipcode, phoneNumber,
  websiteUrl, myRating, notes, stamped} = props.restaurant;
  // { restName, restaurant, removeFromPassport}
  return (
    <div className="card passport-card">
      <div className="card-content">
        <span className="card-title red-text">{restaurantName}</span>
        <p><span className='green-text'>Address:</span> {streetAddress}{', '}{city}{', '}
        {zipcode}</p>
        <p><span className='green-text'>Phone:</span> {phoneNumber}</p>
        <p><span className='green-text'>Web:</span> {websiteUrl}</p>
        <p><span className='green-text'>Rating:</span> {myRating}</p>
        <p><span className='green-text'>Notes:</span> {notes}</p>
        <p><span className='green-text'>Stamped:</span> {stamped}</p>
      </div>
      {/* <div className="card-action">
        <div onClick={() => removeFromPassport(restaurant.id)}>Remove from passport</div>
      </div> */}
    </div>
  );
}