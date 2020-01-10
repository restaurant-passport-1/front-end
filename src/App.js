import React, { useState, useEffect, Component } from 'react';

import 'materialize-css/dist/css/materialize.min.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import M from 'materialize-css/dist/js/materialize.min.js';

import './App.css';
import Dashboard from './components/dashboard/dashboard';
import AddRestModal from './components/Restaurant/AddRestModal';
import EditRestModal from './components/Restaurant/EditRestModal';
// import Test from './components/Restaurant/test';
import Signup from './components/Signup/Signup';
import { setUser } from './actions';
import Navbar from './components/navbar/navbar';
import Footer from './components/footer/footer';
import Home from './components/Home/Home';
import RestaurantList from './components/RestaurantList/RestaurantList';
import RestaurantDetail from './components/RestaurantDetail/RestaurantDetail';
import UpdateRestaurant from './components/UpdateRestaurant/UpdateRestaurant';
import Login from './components/Login/Login';
import MyPassport from './components/addedrestaurants/addedrestaurants';
import PrivateRoute from './utils/privateroute';
import { connect } from 'react-redux';

class App extends Component {
  state = {
    loggedIn: false
  };
  // const [loggedIn, setLoggedIn] = useState(false);

  setLoggedIn = log => {
    this.setState({
      loggedIn: log
    });
  };
  // init Materialize JS

  componentDidMount() {
    M.AutoInit();
  }

  componentWillMount() {
    const user_id = parseInt(localStorage.getItem('user_id'));
    const user_city = localStorage.getItem('city');
    console.log('userid is', typeof user_id);
    this.props.setUser({
      id: user_id,
      city: user_city
    });
    if (user_id) this.setLoggedIn(true);
  }
  render() {
    return (
      <div className="App">
        <Router>
          <Navbar
            loggedIn={this.state.loggedIn}
            setLoggedIn={this.setLoggedIn}
          />
          <Switch>
            {/* <Route exact path='/signup' component={Signup} /> */}

            <PrivateRoute exact path="/update" component={UpdateRestaurant} />

            <PrivateRoute
              exact
              path="/restaurantlist"
              component={RestaurantList}
            />
            <PrivateRoute
              exact
              path="/restaurantlist/:id"
              component={RestaurantDetail}
            />

            <PrivateRoute path="/dashboard" component={Dashboard} />
            <PrivateRoute path="/dashboard" component={Footer} />
            <PrivateRoute exact path="/" component={Home} />
            <PrivateRoute exact path="/mypassport" component={MyPassport} />
            <Route exact path="/signup" component={Signup} />
            <Route
              exact
              path="/login"
              render={props => (
                <Login
                  {...props}
                  loggedIn={this.state.loggedIn}
                  setLoggedIn={this.setLoggedIn}
                />
              )}
            />
            <Route component={Login} />
          </Switch>
        </Router>
        <div className="container">
          <AddRestModal />
          {/* <Test /> */}
          <EditRestModal />
        </div>
      </div>
    );
  }
}

export default connect(null, { setUser })(App);
