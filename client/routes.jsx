import { Route, withRouter, Switch } from 'react-router-dom';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Home } from './components';
import FoodContainer from './containers/FoodContainer';
import LoginContainer from './containers/LoginContainer';
import SignUpContainer from './containers/SignUpContainer';
import { fetchingUser } from './store/action-creators/auth';

// TODO: Map me function and put it inside the component did mount to validate user
const mapDispatchToProps = dispatch => ({
  fetchingUser() {
    return dispatch(fetchingUser());
  }
});
const mapStateToProps = state => ({
  user: state.auth.user
});


class Routes extends Component {
  componentDidMount() {
    this.props.fetchingUser();
    console.log('Routes props?', this.props);
  }
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={LoginContainer} />
          <Route exact path="/signup" component={SignUpContainer} />
          <Route exact path="/addFood" component={FoodContainer} />
          <Route exact path="/listFoods" component={FoodContainer} />
          <Route exact path="/home" component={Home} />
        </Switch>
      </div>
    );
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Routes));
