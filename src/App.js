import React, { useEffect }  from 'react';

import 'materialize-css/dist/css/materialize.min.css';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import M from 'materialize-css/dist/js/materialize.min.js';
import store from './store';
import {Provider} from 'react-redux';
import './App.css';
import Dashboard from './components/dashboard/dashboard';
import AddRestModal from './components/Restaurant/AddRestModal';
import EditRestModal from './components/Restaurant/EditRestModal';
// import Test from './components/Restaurant/test';
import Signup from './components/Signup/Signup';

import Navbar from './components/navbar/navbar';
import Footer from './components/footer/footer';
import Home from './components/Home/Home';
import RestaurantList from './components/RestaurantList/RestaurantList';
import RestaurantDetail from './components/RestaurantDetail/RestaurantDetail';
import UpdateRestaurant from './components/UpdateRestaurant/UpdateRestaurant';
import Login from './components/Login/Login';
import MyPassport from './components/addedrestaurants/addedrestaurants';
import PrivateRoute from './utils/privateroute';

function App() {

  // init Materialize JS
  useEffect(() => {
    M.AutoInit();
  })


  return (

    <Provider store={store}>
      <div className='App'>
        <Router>
          <Navbar />
          
          
          <Switch>
              
              {/* <Route exact path='/signup' component={Signup} /> */}
              
              <PrivateRoute exact path='/update' component={UpdateRestaurant} />

              <PrivateRoute exact path='/restaurantlist' component={RestaurantList} />
              <PrivateRoute exact path='/restaurantlist/:id' component={RestaurantDetail} />
              <PrivateRoute path='/mypassport' component={MyPassport} />
              <PrivateRoute path='/dashboard' component={Dashboard} />
              <PrivateRoute path='/dashboard' component={Footer} />
              <PrivateRoute exact path='/' component={Home} />
              <Route exact path='/signup' component={Signup} />
              <Route exact path='/login' component={Login} />
              <Route component={Login} />

             
          </Switch>
        </Router>
         <div className="container">
                 <AddRestModal />
                 {/* <Test /> */}
                 <EditRestModal />

        </div>
      </div>

    </Provider>
  );
}

export default App;
