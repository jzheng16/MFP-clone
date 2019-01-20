import { createStore, applyMiddleware } from 'redux';
// Middleware
import { composeWithDevTools } from 'redux-devtools-extension';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';

import reducer from './reducers';

// Try to load redux store from local storage

export const saveState = state => {
  console.log('HELLO HERE I AM SAVING', state);

  try {
    localStorage.setItem('state', JSON.stringify(state));
  } catch (err) {
    console.log('Error serializing state', err);
  }
};


const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(thunkMiddleware, createLogger({ collapsed: true }))),

);


export default store;
