import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
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
      <Router>
      <Navbar />
    
        <Route exact path='/' component={Home} />
        <Route exact path='/restaurantlist' component={RestaurantList} />
        <Route exact path='/restaurantlist/:id' component={RestaurantDetail} />
        <Route exact path='/mypassport' component={MyPassport}>
      </Router>
    </div>
    </Provider>
  );
}

export default App;