import { Route, withRouter, Switch } from 'react-router-dom';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Home } from './components';
import FoodContainer from './containers/FoodContainer';
import LoginContainer from './containers/LoginContainer';

// TODO: Map me function and put it inside the component did mount to validate user
const mapDispatchToProps = dispatch => ({});
const mapStateToProps = state => ({});


class Routes extends Component {
  componentDidMount() { }
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={LoginContainer} />
          <Route exact path="/addFood" component={FoodContainer} />
          <Route exact path="/listFoods" component={FoodContainer} />
          <Route exact path="/home" component={Home} />
        </Switch>
      </div>
    );
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Routes));
