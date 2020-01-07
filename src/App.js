import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import store from './store';
import {Provider} from 'react-redux';
import './App.css';
import Dashboard from './components/dashboard/dashboard';
import {MyPassport} from './components/addedrestaurants/addedrestaurants';
import Signup from './components/Signup/Singup';
import Navbar from './components/navbar/navbar';
import Footer from './components/footer/footer';
import Home from './components/Home/Home';
import RestaurantList from './components/RestaurantList/RestaurantList';
import RestaurantDetail from './components/RestaurantDetail/RestaurantDetail';
import UpdateRestaurant from './components/UpdateRestaurant/UpdateRestaurant';
import Login from './components/Login/Login';

function App() {
  return (
    <Provider store={store}>
      <div className='App'>
        <Router>
          <Navbar />
          <Route exact path='/' component={Home} />
          <Route exact path='/signup' component={Signup} />
          <Route exact path='/login' component={Login} />

          <Route exact path='/restaurantlist' component={RestaurantList} />
          <Route exact path='/restaurantlist/:id' component={RestaurantDetail} />
          <Route exact path='/mypassport' component={MyPassport} />
          <Route path='/dashboard' component={Dashboard} />
          <Route path='/dashboard' component={Footer} />
        </Router>
      </div>
    </Provider>
  );
}

export default App;
