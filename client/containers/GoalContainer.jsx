import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Goal } from '../components';
import { fetchingGoal, updatingGoal, creatingGoal } from '../store/action-creators/goal';
import { updatingUserInformation } from '../store/action-creators/auth';

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
  updatingUserInformation(info) {
    return dispatch(updatingUserInformation(info));
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
    console.log('is editing? ', this.state.isEditing);
    this.setState({ isEditing: !this.state.isEditing });
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

  firstTimeGoalSubmission = e => {
    e.preventDefault();
    const selectedWeightUnitIndex = e.target.weight_unit.selectedIndex;
    const weight = Math.floor((e.target.weight.value * e.target.weight_unit[selectedWeightUnitIndex].value));
    const selectedHeightUnitIndex = e.target.height_unit.selectedIndex;
    const height = Math.floor((e.target.height.value * e.target.height_unit[selectedHeightUnitIndex].value));
    // NOTE: Id is just the index + 1
    const selectedActivityId = e.target.activity.selectedIndex + 1;
    console.log('selectedActivityId: ', selectedActivityId);
    const selectedPlanId = e.target.plan.selectedIndex + 1;
    console.log('selectedPlanId: ', selectedPlanId);
    this.props.updatingUserInformation({
      gender: e.target.gender.value,
      age: +e.target.age.value,
      weight,
      height
    });
    this.props.creatingGoal({
      activity_id: selectedActivityId,
      plan_id: selectedPlanId,
    });

    // Redirect user to their plan
    history.push('goal/plan');
  }


  render() {
    return (
      <Goal
        {...this.props}
        {...this.state}
        toggleEditing={this.toggleEditing}
        handleGoalUpdate={this.handleGoalUpdate}
        firstTimeGoalSubmission={this.firstTimeGoalSubmission}
      />
    );
  }
}

export default connect(mapState, mapDispatch)(GoalContainer);
