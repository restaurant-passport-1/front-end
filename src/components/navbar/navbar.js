// import React from 'react';
// import styles from '../../styles/styles.css'
// import HeaderWithLogOut from './logout';
// import { useDarkMode } from '../dark-mode-hook/useDarkMode'

// const Navbar = () => {
// 	const [ darkMode, setDarkMode ] = useDarkMode();
// 	const toggleMode = (e) => {
// 		e.preventDefault();
// 		setDarkMode(!darkMode);
// 	};
// 	return (
// 		<nav className='nav_bar'>
// 			<a className='titlenav'>Restaurant Passport</a>
// 			<a>About</a>
// 			<a>Search</a>
// 			<a>Profile</a>
// 			<HeaderWithLogOut />
// 			<div className='dark-mode__toggle'>
// 				<div onClick={toggleMode} className={darkMode ? 'toggle toggled' : 'toggle'} />
// 			</div>
// 		</nav>
// 	);
// };

// export default Navbar;

// import { Link } from "react-router-dom";
// import 'materialize-css/dist/css/materialize.min.css';

// export default function Navbar() {
//   return (
//     <nav>
//       <div className="nav-wrapper">
//         <Link to={"/"} className="brand-logo">Restaurant Passport</Link>
//         <ul id="nav-mobile" class="right hide-on-med-and-down">
//           <li><Link to={"/mypassport"}>My Passport</Link></li>
//           <li><a href="#">Settings</a></li>
//           <li><a href="#"><i class="material-icons">search</i></a></li>
//         </ul>
//       </div>
//     </nav>
//   );
// }

import React from 'react';
import { Link } from "react-router-dom";
import { useDarkMode } from '../dark-mode-hook/useDarkMode'
import 'materialize-css/dist/css/materialize.min.css';
import styles from '../../styles/styles.css'
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
          <li><a href="#"><i class="material-icons">search</i></a></li>
        </ul>
      </div>
    </nav>
  );
}