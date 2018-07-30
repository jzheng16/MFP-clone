import { Route, withRouter, Switch } from 'react-router-dom';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import FoodContainer from './containers/FoodContainer';
import LoginContainer from './containers/LoginContainer';
import SignUpContainer from './containers/SignUpContainer';
import HomeContainer from './containers/HomeContainer';
import GoalContainer from './containers/GoalContainer';
import DiaryContainer from './containers/DiaryContainer';
import { fetchingUser } from './store/action-creators/auth';
import ListSearchResultContainer from './containers/ListSearchResultContainer';
import InitialGoalContainer from './containers/InitialGoalContainer';
import ChangePasswordContainer from './containers/ChangePasswordContainer';

const mapDispatchToProps = dispatch => ({
  fetchingUser() {
    return dispatch(fetchingUser());
  }
});
const mapStateToProps = state => ({user: state.auth.user});


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
            <Route exact path="/me" component={ChangePasswordContainer} />
            <Route exact path="/addFood" component={FoodContainer} />
            <Route exact path="/diary" component={DiaryContainer} />
            <Route exact path="/home" component={HomeContainer} />
            <Route exact path="/goal" component={GoalContainer} />
            <Route exact path="/goal/plan" component={InitialGoalContainer} />
            <Route exact path="/food/search" component={ListSearchResultContainer} />
          </Switch>
          :
          <Switch>
            <Route exact path="/" component={HomeContainer} />
            <Route exact path="/login" component={LoginContainer} />
            <Route exact path="/signup" component={SignUpContainer} />
          </Switch>
        }
      </div>
    );
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Routes));
