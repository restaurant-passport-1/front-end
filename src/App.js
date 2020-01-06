import React from 'react';
import './App.css';
import Navbar from './components/navbar/navbar.js';
import MyPassport from './components/addedrestaurants/addedrestaurants.js';

function App() {
  return (
    <>
      <Navbar />
      <MyPassport />
    </>
  );
}

export default App;