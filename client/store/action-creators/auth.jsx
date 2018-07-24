import axios from 'axios';
import { GET_USER, REMOVE_USER, UPDATE_USER } from '../actions';
import history from '../../history';

export const getUser = user => ({ type: GET_USER, payload: user });
export const removeUser = () => ({ type: REMOVE_USER });

export const updateUser = user => ({
  type: UPDATE_USER,
  payload: user
});

// Fetches user info on login

export const uploadingUserImage = image => dispatch => {
  axios.post('/api/auth/uploadimage', image)
    .then(result => {
      console.log(result.data);
      dispatch(updateUser(result.data));
    })
    .catch(err => console.error('trouble uploading image', err));
};

export const fetchingUser = () => dispatch => {
  axios.get('/api/auth/me')
    .then(user => dispatch(getUser(user.data)))
    .catch(err => console.error('Trouble fetching user ', err));
};

export const loggingIn = (email, password) => dispatch => {
  axios.post('/api/auth/login', { email, password })
    .then(user => {
      dispatch(getUser(user.data));
      history.push('/');
    })
    .catch(err => console.error('Had trouble logging in', err));
};

export const signingUp = user => dispatch => {
  axios.post('/api/auth/signup', user)
    .then(newUser => dispatch(getUser(newUser.data)))
    .catch(err => console.error('Oops had trouble signing up: ', err));
};

export const loggingOut = () => dispatch => {
  axios.get('/api/auth/logout')
    .then(() => {
      dispatch(removeUser());
      history.push('/login');
    })
    .catch(err => console.error('trouble logging out ', err));
};
