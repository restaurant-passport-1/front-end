import React from 'react';

import {Route} from 'react-router-dom';
import store from './store';
import { Provider } from 'react-redux';
import './App.css';
import Home from './components/Home/Home';
import RestaurantList from './components/RestaurantList/RestaurantList';
import RestaurantDetail from './components/Restaurant/Restaurant';

function App() {
  return (

   <Provider store={store}>
    <div className='App'>
      <header className='App-header'>
        <Route exact path='/' component={Home} />
        <Route exact path='/restaurantlist' component={RestaurantList} />
        <Route exact path='/restaurantlist/:id' component={RestaurantDetail} />
      </header>
    </div>
    </Provider>
    
  );
}

export default App;
