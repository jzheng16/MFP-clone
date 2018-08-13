import { Route, withRouter, Switch } from 'react-router-dom';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import FoodContainer from './containers/FoodContainer';
import LoginContainer from './containers/LoginContainer';
import SignUpContainer from './containers/SignUpContainer';
import HomeContainer from './containers/HomeContainer';
import GoalContainer from './containers/GoalContainer';
import DiaryContainer from './containers/DiaryContainer';
import { fetchingUser } from './store/action-creators/auth';
import ListSearchResultContainer from './containers/ListSearchResultContainer';
import InitialGoalContainer from './containers/InitialGoalContainer';
import ProfileSettingsContainer from './containers/ProfileSettingsContainer';


const BodyWrapper = styled.div`
  min-height: calc(100vh - 70px);
`;

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
      <BodyWrapper>
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
          </Switch>
          :
          <Switch>
            <Route exact path="/" component={HomeContainer} />
            <Route exact path="/login" component={LoginContainer} />
            <Route exact path="/signup" component={SignUpContainer} />
          </Switch>
        }
      </BodyWrapper>
    );
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Routes));
