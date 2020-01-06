import React from 'react';
// import axios from 'axios';

import {axiosWithAuth} from '../utils/axioswithauth'
import jwtDecode from 'jwt-decode';

import {axiosWithAuth} from '../utils/axioswithauth';



export const LOGIN_START = 'LOGIN_START';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_ERROR = 'LOGIN_ERROR';

export const SIGNUP_START = 'SIGNUP_START';
export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS';
export const SIGNUP_ERROR = 'SIGNUP_ERROR';

export const FETCH_RESTAURANT_START = 'FETCH_RESTAURANT_START';
export const FETCH_RESTAURANT_SUCCESS = 'FETCH_RESTAURANT_SUCCESS';
export const FETCH_RESTAURANT_ERROR = 'FETCH_RESTAURANT_ERROR';
export const ADD_RESTAURANT_START = 'ADD_RESTAURANT_START';
export const ADD_RESTAURANT_SUCCESS = 'ADD_RESTAURANT_SUCCESS';
export const ADD_RESTAURANT_ERROR = 'ADD_RESTAURANT_ERROR';
export const UPDATE_RESTAURANT_START = 'UPDATE_RESTAURANT_START';
export const UPDATE_RESTAURANT_SUCCESS = 'UPDATE_RESTAURANT_SUCCESS';
export const UPDATE_RESTAURANT_ERROR = 'UPDATE_RESTAURANT_ERROR';


export const login = user => dispatch => {
  dispatch({ type: LOGIN_START });
  //return will return axioswithauth vs axios
  return axiosWithAuth()

    .post('/api/auth/login', state)

    .post('https://restaurantpassport1.herokuapp.com/api/auth/login', {
      username: 'youngw417', password: '123456'
    })

    .then(res => {
      console.log(res);
    
     
      localStorage.setItem('token', res.data.token); // or whatever response is named on user object
      dispatch({ type: LOGIN_SUCCESS, payload: user.username});
    })
    .catch(err => {
      console.log('err', err.response.data.message)
      dispatch({type: LOGIN_ERROR, payload: err.response.data.message})
    });
};


export const signup = user => dispatch => {
  dispatch({ type: SIGNUP_START });
  return axiosWithAuth()

    .post('/api/auth/register', state)

    .post('https://restaurantpassport1.herokuapp.com/api/auth/register', {
      username: 'youngw417', password: '123456', name:'young', city: 'irvine', email: 'youngw417@gmail.com'
    })

    .then(res => {
      console.log(res);
      localStorage.setItem('token', res.data.token); // or whatever response is named on user object
      dispatch({ type: SIGNUP_SUCCESS, payload: user.username});
      // localStorage.setItem('token', res.data); //whatever token obect key is on object
      // dispatch({ type: SIGNUP_SUCCESS, payload: res.data }); //whatever the token object key is
    })
    .catch(err => {
      console.log('err', err.response);
      dispatch({ type: SIGNUP_ERROR, payload: err.response.data.message }); //whatever is the error
    });
};


export const fetchRestaurant = state => dispatch => {
  dispatch({type: FETCH_RESTAURANT_START});
  return axiosWithAuth()
  .get('/api/restaurants', state)
  .then(res => {
    console.log('get', res)
    localStorage.setItem('token', res.data);
    dispatch({type: FETCH_RESTAURANT_SUCCESS, payload: res.data});
  })
  .catch(err => {
    console.log('err', err.response);
    dispatch({type: FETCH_RESTAURANT_ERROR, payload: 'res.response'});
  })
}


export const ADD_RESTAURANT_START = 'ADD_RESTAURANT_START';
export const ADD_RESTAURANT_SUCCESS = 'ADD_RESTAURANT_SUCCESS';
export const ADD_RESTAURANT_ERROR = 'ADD_RESTAURANT_ERROR';


export const addRestaurant = state => dispatch => {
  dispatch({type: ADD_RESTAURANT_START});
  return axiosWithAuth()
  .post('/api/restaurant', state)
  .then(res => {
    console.log('get', res)
    localStorage.setItem('token', res.data);
    dispatch({type: ADD_RESTAURANT_SUCCESS, payload: res.data});
  })
  .catch(err => {
    console.log('err', err.response);
    dispatch({type: ADD_RESTAURANT_ERROR, payload: 'res.data'});
  })
}


export const UPDATE_RESTAURANT_START = 'UPDATE_RESTAURANT_START';
export const UPDATE_RESTAURANT_SUCCESS = 'UPDATE_RESTAURANT_SUCCESS';
export const UPDATE_RESTAURANT_ERROR = 'UPDATE_RESTAURANT_ERROR';


export const updateRestaurant = state => dispatch => {
  dispatch({type: UPDATE_RESTAURANT_START});
  return axiosWithAuth()
  .put('/api/restaurant/:id', state)
  .then(res => {
    console.log('get', res)
    localStorage.setItem('token', res.data);
    dispatch({type: UPDATE_RESTAURANT_SUCCESS, payload: res.data});
  })
  .catch(err => {
    console.log('err', err.response);
    dispatch({type: UPDATE_RESTAURANT_ERROR, payload: 'res.data'});
  })
}