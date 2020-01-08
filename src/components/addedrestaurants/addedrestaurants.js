import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import 'materialize-css/dist/css/materialize.min.css';
import PassportRestaurantCard from './PassportRestaurantCard';
import Preloader from '../../utils/Preloader';
import { fetchRestaurant } from '../../actions';
import { connect } from  'react-redux';

// const dummyPassportRestaurantList = [
//   {
//     restName: "Suika",
//     img: "https://source.unsplash.com/random",
//     myRating: 4,
//     stamped: true,
//     id: 1
//   }, 

//   {
//     restName: "Tamari Bar",
//     img: "https://source.unsplash.com/random",
//     myRating: 4,
//     stamped: true,
//     id: 2
//   }, 

//   {
//     restName: "Rondo",
//     img: "https://source.unsplash.com/random",
//     myRating: 4,
//     stamped: true,
//     id: 3
//   }, 

//   {
//     restName: "Chung Chun Rice Dog",
//     img: "https://source.unsplash.com/random",
//     myRating: 4,
//     stamped: true,
//     id: 4
//   }, 

//   {
//     restName: "Beecher's Handmade Cheese",
//     img: "https://source.unsplash.com/random",
//     myRating: 4,
//     stamped: true,
//     id: 5
//   }, 

//   {
//     restName: "Skillet",
//     img: "https://source.unsplash.com/random",
//     myRating: 4,
//     stamped: true,
//     id: 6
//   }, 

//   {
//     restName: "Ezell's Famous Chicken",
//     img: "https://source.unsplash.com/random",
//     myRating: 4,
//     stamped: true,
//     id: 7
//   }, 

//   {
//     restName: "Din Tai Fung",
//     img: "https://source.unsplash.com/random",
//     myRating: 4,
//     stamped: true,
//     id: 8
//   }, 

//   {
//     restName: "85°C Bakery",
//     img: "https://source.unsplash.com/random",
//     myRating: 4,
//     stamped: true,
//     id: 9
//   }, 

//   {
//     restName: "Wataru",
//     img: "https://source.unsplash.com/random",
//     myRating: 4,
//     stamped: true,
//     id: 10
//   }
// ];

export const MyPassport = ({fetchRestaurant, id, restaurants, isFetching }) => {
  // const [passportRestaurantList, setPassportRestaurantList] = useState([]);

  // const removeFromPassport = (id) => {
  //   setPassportRestaurantList(passportRestaurantList.filter(restaurant => restaurant.id !== id));
  // };

  useEffect(() => {

    fetchRestaurant(id);

    

    // // * * * NEEDS CORRECT LINK
    // axiosWithAuth().get('https://restaurantpassport1.herokuapp.com/api/auth/passport/:id/user')
    // .then(response => {
    //   console.dir(response.data);
    // })
    // .catch(error => {
    //   console.log('Error', error);
    // })
  }, [id])

  if (isFetching || restaurants === null) {
    return <Preloader />
  }


  return (
    <div className='container'>
      <h1>My Passport</h1>
      <h2>{restaurants && restaurants[0].city} Stamped Restaurants</h2>
      <div className='passport-restaurants-grid'>
        {restaurants && restaurants.map(restaurant => {
          return (
            <Link to={"/mypassport"}>
              <PassportRestaurantCard 
                restaurant = {restaurant}
              />
            </Link>
          );
        })}
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    id: state.user.id,
    restaurants: state.restaurants,
    isFetching: state.isFetching
  }
}
export default connect( mapStateToProps, { fetchRestaurant})(MyPassport);