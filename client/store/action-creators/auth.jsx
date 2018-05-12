import axios from 'axios';

import { GET_USER, REMOVE_USER } from '../actions';
import store from '..';
import history from '../../history';

export const getUser = user => ({ type: GET_USER, payload: user });
export const removeUser = () => ({ type: REMOVE_USER });

// Fetches user info on login
export const fetchingUser = () => dispatch => {
  axios.get('/api/auth/me')
    .then(user => dispatch(getUser(user.data)))
    .catch(err => console.error('Trouble fetching user ', err));
};

export const loggingIn = (email, password) => dispatch => {
  axios.post('/api/auth/login', { email, password })
    .then(user => {
      console.log('Is this the user? ', user.data);
      dispatch(getUser(user.data));
      history.push('/home');
    })
    .catch(err => console.error('Had trouble logging in', err));
};

export const signingUp = user => dispatch => {
  axios.post('/api/auth/signup', user)
    .then(newUser => dispatch(getUser(newUser.data)))
    .catch(err => console.error('Oops had trouble signing up: ', err));
};

// TODO: Figure out Do i need a .get or .post? Or is any one ok?
export const loggingOut = () => dispatch => {
  axios.get('/api/auth/logout')
    .then(() => {
      dispatch(removeUser());
      history.push('/home');
    })
    .catch(err => console.error('trouble logging out ', err));
};
