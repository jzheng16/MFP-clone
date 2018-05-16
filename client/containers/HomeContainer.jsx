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
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.fetchingGoal();

    console.log('did this work?', this.props);
  }

  render() {
    return (
      <Home {...this.props} />
    );
  }
}

export default connect(mapState, mapDispatch)(HomeContainer);
