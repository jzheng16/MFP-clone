// Entry point for webpack
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
/* prettier-ignore */
import { Router, Route, BrowserRouter, Switch, IndexRedirect } from 'react-router-dom';
import store from './store';
// stylesheet
import '../public/index.css';

// Components
import exampleComponent from './components/exampleComponent';
import testComponent from './components/testComponent';
import addFood from './components/addFood';
import addFoodContainer from './containers/foodContainer';
import Home from './components/home';

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <div className="container">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/example" component={exampleComponent} />
          <Route exact path="/test" component={testComponent} />
          <Route exact path="/addfood" component={addFoodContainer} />
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>,
  document.getElementById('main'),
);
