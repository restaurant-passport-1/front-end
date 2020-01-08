import React from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import { deleteRestaurant } from  '../../actions';
import { connect } from 'react-redux';

function PassportRestaurantCard(props) {

  const { restaurant: {restaurantName, streetAddress, city, zipcode, phoneNumber,
  websiteUrl, myRating, notes, stamped}, deleteRestaurant } = props;
  // { restName, restaurant, removeFromPassport}
  const onDelete = () => {
    deleteRestaurant(props.restaurant);
  }
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
        <a href="#!" onClick={onDelete} className="secondary-content"><i className="material-icons grey-text">delete</i></a>
      </div>
      
      {/* <div className="card-action">
        <div onClick={() => removeFromPassport(restaurant.id)}>Remove from passport</div>
      </div> */}
    </div>
  );
}

export default connect(null, {deleteRestaurant})(PassportRestaurantCard);