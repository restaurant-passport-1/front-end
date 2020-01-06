import React from 'react';
import { Link } from "react-router-dom";
import 'materialize-css/dist/css/materialize.min.css';

export default function Navbar() {
  return (
    <nav>
      <div className="nav-wrapper">
        <Link to={"/"} className="brand-logo">Restaurant Passport</Link>
        <ul id="nav-mobile" class="right hide-on-med-and-down">
          <li><Link to={"/mypassport"}>My Passport</Link></li>
          <li><a href="#">Settings</a></li>
          <li><a href="#"><i class="material-icons">search</i></a></li>
        </ul>
      </div>
    </nav>
  );
}