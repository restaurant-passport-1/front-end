import React, { useState } from 'react';
import { Link } from "react-router-dom";
import 'materialize-css/dist/css/materialize.min.css';
// import styles from '../../styles/styles.css'
import HeaderWithLogOut from './logout';
import SignUpLink from './SignUpLink';
import SignInLink from './SignInLink';

export default function Navbar({ loggedIn, setLoggedIn }) {

  return (
    <nav>
      <div className="nav-wrapper nav_bar">
        <Link to={"/"} className="brand-logo">Restaurant Passport</Link>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li><Link to={"/mypassport"}>My Passport</Link></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Profile</a></li>
          
          {loggedIn ? (<li><HeaderWithLogOut setLoggedIn={setLoggedIn} /></li>) : (
            <>
              <li><SignUpLink /></li>
              <li><SignInLink /></li>
            </>
          )}
          <li><a href="#"><i className="material-icons">search</i></a></li>
        </ul>
      </div>
    </nav>
  );
};