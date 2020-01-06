import React from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";
import './App.css';
import Navbar from './components/navbar/navbar.js';
import MyPassport from './components/addedrestaurants/addedrestaurants.js';

function App() {
  return (
    <Router>
      <Navbar />
        <Route exact path="/mypassport">
          <MyPassport />
        </Route>
    </Router>
  );
}

export default App;