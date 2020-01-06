import React, { useEffect } from 'react'
import { login } from '../actions';
import { connect } from 'react-redux';

const SignupForm = ({login}) => {

useEffect(() => {
   login();
}, []);


    return (
        <div>
            
        </div>
    )
}

export default connect(null, {login})(SignupForm)
