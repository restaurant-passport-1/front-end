import React from 'react';
import {Link} from 'react-router-dom';
import {useDarkMode} from '../dark-mode-hook/useDarkMode';
import 'materialize-css/dist/css/materialize.min.css';
import styles from '../../styles/styles.css';
import HeaderWithLogOut from './logout';

const Navbar = () => {
  const [darkMode, setDarkMode] = useDarkMode();
  const toggleMode = e => {
    e.preventDefault();
    setDarkMode(!darkMode);
  };
  return (
    <nav>
      <div className='nav-wrapper nav_bar'>
        <Link to={'/'} className='brand-logo'>
          Restaurant Passport
        </Link>
        <ul id='nav-mobile' class='right hide-on-med-and-down'>
          <li>
            <Link to={'/mypassport'}>My Passport</Link>
          </li>
          <li>
            <a href='#'>About</a>
          </li>
          <li>
            <a href='#'>Profile</a>
          </li>
          <li>
            <a href='#'>
              <i class='material-icons'>search</i>
            </a>
          </li>
          <HeaderWithLogOut />
          <div className='dark-mode__toggle'>
            <div onClick={toggleMode} className={darkMode ? 'toggle toggled' : 'toggle'} />
          </div>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
