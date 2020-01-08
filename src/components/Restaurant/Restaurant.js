import React from 'react';
import { addRestaurant } from '../../actions';
import { connect } from 'react-redux';



import '../../styles/restaurant.css';

const Restaurant = props => {
  const { each, addRestaurant } = props;

  const handleClick = (e) => {
    e.stopPropagation();
    addRestaurant(each);
  }

  console.log(props);
  return (
    // <div className='restaurant'>
      <div className='card'>
        <div className="card-image wave-effect wave-light wave-block">
          <img src={each.image_url} alt='restaurant' class='responsive-img' style={{maxHeight: '200px'}}/>
          <span class="card-title">{each.name}</span>
        </div>
        <div class="card-content">
           <p>Rating: {each.rating}</p>
           <p>Review Count: {each.review_count}</p>
           <p>Price: {each.price}</p>
           <p>City: {each.location.city}</p>
           {/* <p>Address: {each.display_address}</p> */}

          <button className='btn btn-small' onClick={handleClick} style={{marginTop: '10px', backgroundColor: '#ee6e73'}}>Add me</button>
        </div>

      {/* <p>Name: {each.restaurantName}</p>
      <p>City: {each.city}</p>
      <p>Rating (1-5): {each.myRating}</p>
      <p>Stamped: {each.stamped}</p> */}
      
    </div>
  );
};

export default connect(null, {addRestaurant})(Restaurant);
