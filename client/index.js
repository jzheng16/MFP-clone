// Entry point for webpack
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import createBrowserHistory from 'history/createBrowserHistory';
/* prettier-ignore */
import { Router } from 'react-router-dom';
import store from './store';
// stylesheet
import '../public/index.css';
import App from './app';

ReactDOM.render(
  <Provider store={store}>
    <Router history={createBrowserHistory()}>
      <App />
    </Router>
  </Provider>,
  document.getElementById('main'),
);
