import React from 'react';
import { setCurrent } from '../../actions';
import { connect } from 'react-redux';



import '../../styles/restaurant.css';

const Restaurant = props => {
  const { each, setCurrent, user_id } = props;

  console.log(props);
  return (
    // <div className='restaurant'>
      <div className='card'>
        <div className="card-image wave-effect waves-light waves-block">
          <img src={each.image_url} alt='restaurant' class='responsive-img' style={{height: '200px'}}/>
          <span class="card-title">{each.name}</span>
        </div>
        <div class="card-content">
           <p>Rating: {each.rating}</p>
           <p>Review Count: {each.review_count}</p>
            <p>Price: {each.price}</p>
           <p>City: {each.location.city}</p> 
           {/* <p>Address: {each.display_address}</p> */}

          <a href="#AddRestModal" className="btn btn-small modal-trigger" onClick={() => setCurrent({
            name: each.name,
            city: each.location.city,
            rating: each.rating,
            user_id: user_id,
            photoUrl: each.image_url,
            stamped: null,
            notes: ''

          })} style={{marginTop: '10px', backgroundColor: '#ee6e73'}}>Add me</a>
          {/* <a href="#test" className='btn modal-trigger'>test</a> */}
        </div>

      {/* <p>Name: {each.restaurantName}</p>
      <p>City: {each.city}</p>
      <p>Rating (1-5): {each.myRating}</p>
      <p>Stamped: {each.stamped}</p> */}
      
    </div>
  );
};

export default connect(null, {setCurrent})(Restaurant);
