import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchingGoal, updatingGoal } from '../store/action-creators/goal';
import { InitialGoal } from '../components';

const mapState = state => ({
  user: state.auth.user,
  goal: state.goal.goal
});

const mapDispatch = dispatch => ({
  fetchingGoal() {
    dispatch(fetchingGoal());
  },
  updatingGoal(goal) {
    dispatch(updatingGoal(goal));
  }
});

class InitialGoalContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      TDEE: 0,
      BMR: 0,
      calorie: 0,
      carbs: 0,
      protein: 0,
      fat: 0,

    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.goal !== this.props.goal) {
      let BMR = 0;
      const { age, height, weight, gender } = this.props.user;
      const userWeight = weight[weight.length - 1];
      if (gender === 'M') {
        BMR = Math.floor(66 + (6.23 * userWeight) + (12.7 * height) - (6.8 * age));
      } else {
        BMR = Math.floor(655 + (4.35 * userWeight) + (4.7 * height) - (4.7 * age));
      }
      const { plan, activity } = nextProps.goal;
      const TDEE = Math.floor(BMR * activity.factor);
      const calorie = Math.floor(TDEE + plan.calorieFactor);
      const protein = Math.floor(userWeight * plan.proteinFactor);
      const fat = Math.floor(userWeight * plan.fatFactor);
      const carbs = Math.floor((calorie - (protein * 4) - (fat * 9)) / 4);
      this.setState({
        TDEE,
        BMR,
        calorie,
        carbs,
        protein,
        fat
      });
    }
  }

  updatingGoal = () => {
    this.props.updatingGoal({
      calorie: this.state.calorie,
      carbs: this.state.carbs,
      protein: this.state.protein,
      fat: this.state.fat
    });
  }

  render() {
    return (
      <InitialGoal {...this.props} {...this.state} updatingGoal={this.updatingGoal} />
    );
  }
}

export default connect(mapState, mapDispatch)(InitialGoalContainer);
