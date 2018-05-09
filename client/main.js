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
import listFoods from './components/listFoods';
import addFood from './components/addFood';
import addFoodContainer from './containers/foodContainer';
import Home from './components/home';

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <div className="container">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/getfood" component={addFoodContainer} />
          <Route exact path="/addfood" component={addFoodContainer} />
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>,
  document.getElementById('main'),
);
