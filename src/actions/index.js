import React from 'react';
// import axios from 'axios';
import M from 'materialize-css/dist/js/materialize.min.js';

import { axiosWithAuth } from '../utils/axioswithauth';

export const LOGIN_START = 'LOGIN_START';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_ERROR = 'LOGIN_ERROR';

export const SET_USER = 'SET_USER';

export const SIGNUP_START = 'SIGNUP_START';
export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS';
export const SIGNUP_ERROR = 'SIGNUP_ERROR';

export const FETCH_RESTAURANT_START = 'FETCH_RESTAURANT_START';
export const FETCH_RESTAURANT_SUCCESS = 'FETCH_RESTAURANT_SUCCESS';
export const FETCH_RESTAURANT_ERROR = 'FETCH_RESTAURANT_ERROR';

export const SET_CURRENT = 'SET_CURRENT';
export const CLEAR_CURRENT = 'CLEAR_CURRENT';

export const ADD_RESTAURANT_START = 'ADD_RESTAURANT_START';
export const ADD_RESTAURANT_SUCCESS = 'ADD_RESTAURANT_SUCCESS';
export const ADD_RESTAURANT_ERROR = 'ADD_RESTAURANT_ERROR';

export const UPDATE_RESTAURANT_START = 'UPDATE_RESTAURANT_START';
export const UPDATE_RESTAURANT_SUCCESS = 'UPDATE_RESTAURANT_SUCCESS';
export const UPDATE_RESTAURANT_ERROR = 'UPDATE_RESTAURANT_ERROR';

export const DELETE_RESTAURANT_START = 'DELETE_RESTAURANT_START';
export const DELETE_RESTAURANT_SUCCESS = 'DELETE_RESTAURANT_SUCCESS';
export const DELETE_RESTAURANT_ERROR = 'DELETE_RESTAURANT_ERROR';

export const login = user => dispatch => {
  dispatch({ type: LOGIN_START });
  //return will return axioswithauth vs axios
  return axiosWithAuth()
    .post('/api/auth/login', user)
    .then(res => {
      console.log('user for signin', res);
      localStorage.setItem('user_id', res.data.user_id);
      localStorage.setItem('city', res.data.city);
      localStorage.setItem('token', res.data.token); // or whatever response is named on user object

      dispatch({ type: LOGIN_SUCCESS, payload: res.data });
      M.toast({ html: `Login successul by ${user.username}` });
      
    })
    .catch(err => {
      console.log('err', err.response.data.message);
      dispatch({ type: LOGIN_ERROR, payload: err.response.data.message });
      M.toast({ html: `Login failed.  Please try again` });
    });
};

export const setUser = user => {
  return {
    type: SET_USER,
    payload: user
  };
};

export const signup = user => dispatch => {
  dispatch({ type: SIGNUP_START });
  return axiosWithAuth()
    .post('/api/auth/register', user)

    .then(res => {
      console.log('signup', res);
      localStorage.setItem('token', res.data.token); // or whatever response is named on user object
      dispatch({ type: SIGNUP_SUCCESS, payload: res.data });
      M.toast({ html: `Signup successful by ${user.username}` });
      // localStorage.setItem('token', res.data); //whatever token obect key is on object
      // dispatch({ type: SIGNUP_SUCCESS, payload: res.data }); //whatever the token object key is
    })
    .catch(err => {
      console.log('err', err.response);
      dispatch({ type: SIGNUP_ERROR, payload: err.response.data.message }); //whatever is the error
      M.toast({ html: `Signup failed.  Please try again` });
    });
};

export const fetchRestaurant = id => dispatch => {
  dispatch({ type: FETCH_RESTAURANT_START });
  return axiosWithAuth()
    .get(`/api/auth/passport/${id}/user`)
    .then(res => {
      console.log('get', res);
      // localStorage.setItem('token', res.data);
      dispatch({ type: FETCH_RESTAURANT_SUCCESS, payload: res.data });
    })
    .catch(err => {
      console.log('err', err.response.data.message);
      dispatch({
        type: FETCH_RESTAURANT_ERROR,
        payload: err.response.data.message
      });
    });
};

export const setCurrent = restaurant => {
  return {
    type: SET_CURRENT,
    payload: restaurant
  };
};

export const clearCurrent = () => {
  return {
    type: CLEAR_CURRENT
  };
};

export const addRestaurant = restaurant => dispatch => {
  dispatch({ type: ADD_RESTAURANT_START });
  return axiosWithAuth()
    .post('/api/auth/passport', restaurant)

    .then(res => {
      console.log('add', res);
      // localStorage.setItem('token', res.data);
      dispatch({ type: ADD_RESTAURANT_SUCCESS, payload: res.data });
    })
    .catch(err => {
      console.log('err', err.response);
      dispatch({ type: ADD_RESTAURANT_ERROR, payload: 'res.data' });
    });
};

export const updateRestaurant = restaurant => dispatch => {
  dispatch({ type: UPDATE_RESTAURANT_START });
  return axiosWithAuth()
    .put(`/api/auth/passport/${restaurant.id}`, restaurant)
    .then(res => {
      console.log('put', res);
      // localStorage.setItem('token', res.data);
      dispatch({ type: UPDATE_RESTAURANT_SUCCESS, payload: res.data });
    })
    .catch(err => {
      console.log('err', err.response);
      dispatch({
        type: UPDATE_RESTAURANT_ERROR,
        payload: err.response.data.message
      });
    });
};

export const deleteRestaurant = restaurant => dispatch => {
  dispatch({ type: DELETE_RESTAURANT_START });
  return axiosWithAuth()
    .delete(`/api/auth/passport/${restaurant.id}`)
    .then(res => {
      console.log('get', res);
      // localStorage.setItem('token', res.data);
      dispatch({ type: DELETE_RESTAURANT_SUCCESS, payload: restaurant.id });
      M.toast({ html: `Restaurant in Passport deleted` });
    })
    .catch(err => {
      console.log('err', err.response);
      dispatch({
        type: DELETE_RESTAURANT_ERROR,
        payload: err.response.data.message
      });
    });
};
