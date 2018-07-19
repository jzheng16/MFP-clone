import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Home } from '../components';
import { fetchingGoal } from '../store/action-creators/goal';
import { testing } from '../store/action-creators/diary';

const mapState = state => ({
  user: state.auth.user,
  goal: state.goal.goal
});

const mapDispatch = dispatch => ({
  fetchingGoal() {
    return dispatch(fetchingGoal());
  },
  testing(entry) {
    return dispatch(testing(entry));
  }
});
class HomeContainer extends Component {
  constructor(props) {
    super(props);
    this.testing = this.testing.bind(this);
  }
  componentDidMount() {
    this.props.fetchingGoal();
  }

  testing() {
    const entry = {
      date_id: 199
    }
    this.props.testing(entry);
  }
  render() {
    return (
      <Home {...this.props} testing={this.testing} />
    );
  }
}

export default connect(mapState, mapDispatch)(HomeContainer);
