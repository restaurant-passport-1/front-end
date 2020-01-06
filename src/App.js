import React from 'react';
import {Route} from 'react-router-dom';

import './App.css';
import Home from './components/Home/Home';
import RestaurantList from './components/RestaurantList/RestaurantList';
import RestaurantDetail from './components/RestaurantDetail/RestaurantDetail';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <Route exact path='/' component={Home} />
        <Route exact path='/restaurantlist' component={RestaurantList} />
        <Route exact path='/restaurantlist/:id' component={RestaurantDetail} />
      </header>
    </div>
  );
}

export default App;
