// Entry point for webpack
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
/* prettier-ignore */
import { Router, Route, BrowserRouter, Switch, IndexRedirect } from 'react-router-dom';
import store from './store';
import exampleComponent from './components/exampleComponent';
import testComponent from './components/testComponent';
import Home from './components/home';
import '../public/index.css';

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <div className="container">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/example" component={exampleComponent} />
          <Route exact path="/test" component={testComponent} />
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>,
  document.getElementById('main'),
);
