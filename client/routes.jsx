import { Route, withRouter, Switch } from 'react-router-dom';
import React, { Component } from 'react';
import { connect } from 'react-redux';
<<<<<<< Updated upstream
import FoodContainer from './containers/FoodContainer';
import LoginContainer from './containers/LoginContainer';
import SignUpContainer from './containers/SignUpContainer';
import HomeContainer from './containers/HomeContainer';
import GoalContainer from './containers/GoalContainer';
import DiaryContainer from './containers/DiaryContainer';
=======
import styled from 'styled-components';

// Container Components
import {
  FoodContainer, LoginContainer, SignUpContainer, HomeContainer, GoalContainer, DiaryContainer,
  ListSearchResultContainer, InitialGoalContainer, ProfileSettingsContainer, VerificationContainer
} from './containers';

import { NotFound } from './components';
// Action-creators
>>>>>>> Stashed changes
import { fetchingUser } from './store/action-creators/auth';
import ListSearchResultContainer from './containers/ListSearchResultContainer';
import InitialGoalContainer from './containers/InitialGoalContainer';
import ProfileSettingsContainer from './containers/ProfileSettingsContainer';

const mapDispatchToProps = dispatch => ({
  fetchingUser() {
    return dispatch(fetchingUser());
  }
});
const mapStateToProps = state => ({ user: state.auth.user });


class Routes extends Component {
  componentDidMount() {
    this.props.fetchingUser();
  }
  render() {
    return (
      <div className="routes">
        {this.props.user.id ?
          <Switch>
            <Route exact path="/" component={HomeContainer} />
            <Route exact path="/login" component={LoginContainer} />
            <Route exact path="/me" component={ProfileSettingsContainer} />
            <Route exact path="/addFood" component={FoodContainer} />
            <Route exact path="/diary" component={DiaryContainer} />
            <Route exact path="/goal" component={GoalContainer} />
            <Route exact path="/goal/plan" component={InitialGoalContainer} />
            <Route exact path="/food/search" component={ListSearchResultContainer} />
            <Route component={NotFound} />
          </Switch>
          :
          <Switch>
            <Route exact path="/" component={HomeContainer} />
            <Route exact path="/login" component={LoginContainer} />
            <Route exact path="/signup" component={SignUpContainer} />
            <Route component={NotFound} />
          </Switch>
        }
      </div>
    );
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Routes));
