import React, { useEffect } from 'react';
// import { Link } from 'react-router-dom';
import 'materialize-css/dist/css/materialize.min.css';
import PassportRestaurantCard from './PassportRestaurantCard';
import Preloader from '../../utils/Preloader';
import { fetchRestaurant } from '../../actions';
import { connect } from  'react-redux';

export const MyPassport = ({fetchRestaurant, id, restaurants, isFetching, city, history }) => {
  // const [passportRestaurantList, setPassportRestaurantList] = useState([]);

  // const removeFromPassport = (id) => {
  //   setPassportRestaurantList(passportRestaurantList.filter(restaurant => restaurant.id !== id));
  // };

  useEffect(() => {


    fetchRestaurant(id)

  }, [id])

  if (isFetching || restaurants === null) {
    return <Preloader />
  }
  console.log('my city', city);

  return (
    <div className='container'>
      <h1>My Passport</h1>
      <h2>{restaurants && `${city}`} Stamped Restaurants</h2>
      <div className='passport-restaurants-grid row'>
        {restaurants ? restaurants.map(restaurant => {
          return (
            // <Link to={"/mypassport"}>
           <div className="list col s12 m4 l3">
             <PassportRestaurantCard 
                restaurant = {restaurant} user_id = {id}
              />
           </div>
              
            // </Link>
          );
        }) : <h2 class='red-text'> No Restaurant in your Passport</h2>}
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    id: state.user.id,
    city: state.user.city,
    restaurants: state.restaurants,
    isFetching: state.isFetching
  }
}
export default connect( mapStateToProps, { fetchRestaurant})(MyPassport);