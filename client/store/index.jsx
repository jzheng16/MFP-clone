import { createStore, applyMiddleware } from 'redux';
// Middleware
import { composeWithDevTools } from 'redux-devtools-extension';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';

import reducer from './reducers';

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(createLogger({ collapsed: true }), thunkMiddleware)),
);

export default store;
