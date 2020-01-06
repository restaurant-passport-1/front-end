import React from 'react';
import 'materialize-css/dist/css/materialize.min.css';

export default function Navbar() {
  return (
    <nav>
      <div className="nav-wrapper">
        <a href="#" className="brand-logo">Restaurant Passport</a>
        <ul id="nav-mobile" class="right hide-on-med-and-down">
          <li><a href="#">My Passport</a></li>
          <li><a href="#">Settings</a></li>
          <li><a href="#">Search</a></li>
        </ul>
      </div>
    </nav>
  );
}