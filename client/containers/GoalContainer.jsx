import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Goal } from '../components';
import { fetchingGoal, updatingGoal, creatingGoal } from '../store/action-creators/goal';
import history from '../history';

const mapState = state => ({
  goal: state.goal.goal,
  user: state.auth.user
});

const mapDispatch = dispatch => ({
  fetchingGoal() {
    return dispatch(fetchingGoal());
  },
  updatingGoal(goal) {
    return dispatch(updatingGoal(goal));
  },
  creatingGoal(goal) {
    return dispatch(creatingGoal(goal));
  }

});

class GoalContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditing: false,
      weightUnit: 'lbs'
    };
    this.toggleEditing = this.toggleEditing.bind(this);
    this.handleGoalUpdate = this.handleGoalUpdate.bind(this);
  }

  componentDidMount() {
    this.props.fetchingGoal();
  }

  toggleEditing = () => {
    // setState is asynchronous so if next state depends on previous state, always use prevState
    // React can also batch setState calls
    this.setState(prevState => ({ isEditing: !prevState.isEditing }));
  }

  handleGoalUpdate = e => {
    e.preventDefault();
    const goal = {
      weight: e.target.weight.value,
      calorie: e.target.calorie.value,
      carbs: e.target.carbs.value,
      protein: e.target.protein.value,
      fat: e.target.fat.value
    };
    this.props.updatingGoal(goal);
    this.setState({ isEditing: !this.state.isEditing });
  }

  render() {
    return (
      <Goal
        {...this.props}
        {...this.state}
        toggleEditing={this.toggleEditing}
        handleGoalUpdate={this.handleGoalUpdate}
      />
    );
  }
}

export default connect(mapState, mapDispatch)(GoalContainer);
