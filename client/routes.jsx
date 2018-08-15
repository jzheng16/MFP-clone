import { Route, withRouter, Switch } from 'react-router-dom';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

// Container Components
import {
  FoodContainer, LoginContainer, SignUpContainer, HomeContainer, GoalContainer, DiaryContainer,
  ListSearchResultContainer, InitialGoalContainer, ProfileSettingsContainer, VerificationContainer
} from './containers';

import { NotFound } from './components';
import { fetchingUser } from './store/action-creators/auth';

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
            <Route exact path="/verification" component={VerificationContainer} />
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
      </BodyWrapper>
    );
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Routes));
