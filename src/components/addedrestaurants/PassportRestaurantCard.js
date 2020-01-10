import React, { useEffect } from "react";
import "materialize-css/dist/css/materialize.min.css";
import { deleteRestaurant, setCurrent } from "../../actions";
import { connect } from "react-redux";

function PassportRestaurantCard(props) {
  const {
    restaurant: {
      restaurantName,
      id,
      city,
      review_count,
      price,
      photoUrl,
      myRating,
      notes,
      stamped
      
    },
    deleteRestaurant,
    user_id,
    setCurrent
  } = props;
  // { restName, restaurant, removeFromPassport}
  

  console.log('props111', props);

  const onDelete = () => {
    deleteRestaurant(props.restaurant);
    
  };
  return (
    <div className="card passport-card">
      <div className="card-image wave-effect waves-light waves-block">
        <img
          src={photoUrl}
          alt="restaurant"
          class="responsive-img"
          style={{ height: "200px" }}
        />
        <span class="card-title">{restaurantName}</span>
      </div>
      <div className="card-content">
        <p>
          <span className="green-text">Rating: </span>
          {myRating}
        </p>
        <p>
          <span className="green-text">Review Count: </span> {review_count}
        </p>
        <p>
          <span className="green-text">Price: </span> {price}
        </p>
        <p>
          <span className="green-text">City: </span> {city}
        </p>

        <p>
          <span className="green-text">Stamped:</span> {stamped ? <i className='material-icons'>tag_faces</i> : 'No'}
        </p>
        <p>
          <span className="green-text">Notes:</span> {notes}
        </p>
        <div style={{marginTop: '20px'}}>
          <a
          href="#EditRestModal"
          onClick={() =>
            setCurrent({
              name: restaurantName,
              res_id: id,
              city: city,
              rating: myRating,
              user_id: user_id,
              photoUrl: photoUrl,
              stamped: stamped,
              notes: notes
            })
          }
          style={{ backgroundColor: "#ee6e73" }}
          className="btn-small modal-trigger"
        >
          Edit
        </a>
        <a href="#!" onClick={onDelete} className="secondary-content">
          <i className="material-icons grey-text">delete</i>
        </a>
        </div>
        
      </div>

      {/* <div className="card-action">
        <div onClick={() => removeFromPassport(restaurant.id)}>Remove from passport</div>
      </div> */}
    </div>
  );
}

export default connect(null, { deleteRestaurant, setCurrent })(
  PassportRestaurantCard
);
