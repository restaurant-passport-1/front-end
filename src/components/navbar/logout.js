import React from 'react';
import { Link } from 'react-router-dom';

const HeaderWithLogOut = ({ setLoggedIn }) => {
  return (
    <Link
      className="log-out"
      to="/login"
      onClick={() => {
        localStorage.removeItem('token');

        localStorage.removeItem('user_id');
        localStorage.removeItem('city');

        setLoggedIn(false);
      }}
    >
      Sign Out
    </Link>
  );
};

export default HeaderWithLogOut;
