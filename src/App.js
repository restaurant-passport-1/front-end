import React, { useEffect } from 'react';

import 'materialize-css/dist/css/materialize.min.css';
import { BrowserRouter as Router, Route} from 'react-router-dom';

import store from './store';
import {Provider} from 'react-redux';
import './App.css';
import Dashboard from './components/dashboard/dashboard';

import Signup from './components/Signup/Signup';

import Navbar from './components/navbar/navbar';
import Footer from './components/footer/footer';
import Home from './components/Home/Home';
import RestaurantList from './components/RestaurantList/RestaurantList';
import RestaurantDetail from './components/RestaurantDetail/RestaurantDetail';
import UpdateRestaurant from './components/UpdateRestaurant/UpdateRestaurant';
<<<<<<< HEAD
import Login2 from './components/Login/Login2';
import MyPassport from './components/addedrestaurants/addedrestaurants';
=======
import Login from './components/Login/Login';
>>>>>>> 2d3f70f92c6cf7529d54413488b69f8fc8d7110d

function App() {

  
  return (

    <Provider store={store}>
      <div className='App'>
        <Router>
          <Navbar />
          <Route exact path='/' component={Home} />
          {/* <Route exact path='/signup' component={Signup} /> */}
          <Route exact path='/signup' component={Signup} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/update' component={UpdateRestaurant} />

          <Route exact path='/restaurantlist' component={RestaurantList} />
          <Route exact path='/restaurantlist/:id' component={RestaurantDetail} />
          <Route path='/mypassport' component={MyPassport} />
          <Route path='/dashboard' component={Dashboard} />
          <Route path='/dashboard' component={Footer} />
        </Router>
      </div>

    </Provider>
  );
}

export default App;
