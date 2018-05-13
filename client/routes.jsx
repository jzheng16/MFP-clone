import { Route, withRouter, Switch } from 'react-router-dom';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import FoodContainer from './containers/FoodContainer';
import LoginContainer from './containers/LoginContainer';
import SignUpContainer from './containers/SignUpContainer';
import HomeContainer from './containers/HomeContainer';
import GoalContainer from './containers/GoalContainer';
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
  }
  render() {
    return (
      <div className="routes">
        {this.props.user ?
          <Switch>
            <Route exact path="/" component={HomeContainer} />
            <Route exact path="/login" component={LoginContainer} />
            <Route exact path="/addFood" component={FoodContainer} />
            <Route exact path="/listFoods" component={FoodContainer} />
            <Route exact path="/home" component={HomeContainer} />
            <Route exact path="/goal" component={GoalContainer} />
          </Switch>
          :
          <Switch>
            <Route exact path="/login" component={LoginContainer} />
            <Route exact path="/signup" component={SignUpContainer} />
          </Switch>
        }
      </div>
    );
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Routes));
