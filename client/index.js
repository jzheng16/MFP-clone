// Entry point for webpack
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import throttle from 'lodash/throttle';

import store, { saveState } from './store';

// stylesheet
import '../public/index.css';
import '../node_modules/semantic-ui-css/semantic.min.css';

import history from './history';
import App from './app';


// Save the state mainly the selected date so that we don't lose it after refresh
store.subscribe(throttle(() => {
  console.log('SAVING STATE', store.getState());

  saveState(store.getState().diary);
}, 1000));

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <App />
    </Router>
  </Provider>,
  document.getElementById('main'),
);

