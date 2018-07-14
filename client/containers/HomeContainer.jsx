import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Home } from '../components';
import { fetchingGoal } from '../store/action-creators/goal';

const mapState = state => ({
  user: state.auth.user,
  goal: state.goal.goal
});

const mapDispatch = dispatch => ({
  fetchingGoal() {
    return dispatch(fetchingGoal());
  }
});
class HomeContainer extends Component {
  componentDidMount() {
    this.props.fetchingGoal();
  }

  render() {
    return (
      <Home {...this.props} />
    );
  }
}

export default connect(mapState, mapDispatch)(HomeContainer);
