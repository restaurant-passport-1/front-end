import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import store from './store';
import { Provider } from 'react-redux';
import './App.css';
import Dashboard from './components/dashboard/dashboard';
import NavBar from './components/navbar/navbar';
import MyPassport from './components/addedrestaurants/addedrestaurants'
import Footer from './components/footer/footer';
import Home from './components/Home/Home';
import RestaurantList from './components/RestaurantList/RestaurantList';
import RestaurantDetail from './components/Restaurant/Restaurant';
import RestaurantView from './components/RestaurantView'

function App() {
  return (
   <Provider store={store}>
    <div className='App'>
      <Router>
        <NavBar />
          <Route exact path='/' component={Home} />
          <Route exact path='/restaurantlist' component={RestaurantList} />
          <Route exact path='/restaurantlist/:id' component={RestaurantDetail} />
          <Route path='/mypassport' component={MyPassport} />
          <Route path='/restaurants' component={RestaurantView} />
			    <Route path='/dashboard' component={Dashboard} />
			    <Route path='/dashboard' component={Footer} />
      </Router>
    </div>
    </Provider>
  );
}


export default App;