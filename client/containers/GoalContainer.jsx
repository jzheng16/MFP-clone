import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Goal } from '../components';
import { fetchingGoal, updatingGoal } from '../store/action-creators/goal';

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
  }
});

class GoalContainer extends Component {
  constructor(props) {
    super(props);
    this.state = { isEditing: false };
    this.toggleEditing = this.toggleEditing.bind(this);
    this.handleGoalUpdate = this.handleGoalUpdate.bind(this);
  }

  componentDidMount() {
    this.props.fetchingGoal();
  }

  toggleEditing() {
    console.log('is editing? ', this.state.isEditing);
    this.setState({ isEditing: !this.state.isEditing });
  }
  handleGoalUpdate(e) {
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
      <Goal {...this.props} {...this.state} toggleEditing={this.toggleEditing} handleGoalUpdate={this.handleGoalUpdate} />
    );
  }
}

export default connect(mapState, mapDispatch)(GoalContainer);
