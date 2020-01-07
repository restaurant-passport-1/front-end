import React from 'react';
import { Link } from "react-router-dom";
import 'materialize-css/dist/css/materialize.min.css';
// import styles from '../../styles/styles.css'
import HeaderWithLogOut from './logout';

export default function Navbar() {

  return (
    <nav>
      <div className="nav-wrapper nav_bar">
        <Link to={"/"} className="brand-logo">Restaurant Passport</Link>
        <ul id="nav-mobile" class="right hide-on-med-and-down">
          <li><Link to={"/mypassport"}>My Passport</Link></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Profile</a></li>
          <li><HeaderWithLogOut /></li>
          <li><a href="#"><i class="material-icons">search</i></a></li>
        </ul>
      </div>
    </nav>
  );
};