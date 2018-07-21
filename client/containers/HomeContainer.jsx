import React, { Component } from 'react';

import { connect } from 'react-redux';
import { Home } from '../components';
import { fetchingGoal } from '../store/action-creators/goal';
import { gettingDiaryId } from '../store/action-creators/diary';

const mapState = state => ({
  user: state.auth.user,
  goal: state.goal.goal
});

const mapDispatch = dispatch => ({
  fetchingGoal() {
    return dispatch(fetchingGoal());
  },
  gettingDiaryId(date) {
    dispatch(gettingDiaryId(date));
  },
});
class HomeContainer extends Component {
  componentDidMount() {
    if (this.props.user.id) {
      this.props.fetchingGoal();
    }
  }

  render() {
    return (
      <Home {...this.props} />
    );
  }
}

export default connect(mapState, mapDispatch)(HomeContainer);
