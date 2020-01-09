import React from 'react';
import { Link } from 'react-router-dom';

const HeaderWithLogOut = ({ setLoggedIn }) => {
	return (
		<Link className='log-out' to='/login' onClick={() => {
			localStorage.removeItem('token');

			setLoggedIn(false);
		}}>
			Sign Out
		</Link>
	);
};

export default HeaderWithLogOut;