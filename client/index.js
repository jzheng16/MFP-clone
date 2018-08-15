// Entry point for webpack
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import store from './store';

// stylesheet
import '../public/index.css';

import history from './history';
import App from './app';

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <App />
    </Router>
  </Provider>,
  document.getElementById('main'),
);

