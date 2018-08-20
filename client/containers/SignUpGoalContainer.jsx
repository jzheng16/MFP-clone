import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updatingUserInformation, creatingGoal } from '../store/action-creators/auth';

import { SignUpGoal } from '../components';
import history from '../history';

const mapState = state => ({ user: state.auth.user });

const mapDispatch = dispatch => ({
  updatingUserInformation(info) {
    return dispatch(updatingUserInformation(info));
  },
  creatingGoal(goal) {
    return dispatch(creatingGoal(goal));
  }

});

class SignUpGoalContainer extends Component {
  constructor(props) {
    super(props);
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
    history.push('/verification');
  }
  render() {
    return (
      <SignUpGoal {...this.props} firstTimeGoalSubmission={this.firstTimeGoalSubmission} />
    );
  }
}

export default connect(mapState, mapDispatch)(SignUpGoalContainer);
