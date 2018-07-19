import React, { Component } from 'react';
import moment from 'moment';
import _ from 'lodash/fp';

import { connect } from 'react-redux';
import { Diary } from '../components';
import { selectedMealType, selectedDiaryDate, gettingDiaryId, fetchingDiary, removingFoodFromDiary } from '../store/action-creators/diary';
import history from '../history';


const mapState = state => ({
  user: state.auth.user,
  diary: state.diary
});

const mapDispatch = dispatch => ({
  selectedMealType(typeID) {
    dispatch(selectedMealType(typeID));
  },
  selectedDiaryDate(date) {
    dispatch(selectedDiaryDate(date));
  },
  gettingDiaryId(date) {
    dispatch(gettingDiaryId(date));
  },
  fetchingDiary(user_id, date_id) {
    dispatch(fetchingDiary(user_id, date_id));
  },
  removingFoodFromDiary(entry) {
    dispatch(removingFoodFromDiary(entry));
  }
});

class DiaryContainer extends Component {
  componentDidMount() {
    this.props.gettingDiaryId(moment().format('YYYY-MM-DD'));
  }

  componentDidUpdate(prevProps) {
    if (this.props.diary.currentDiaryDate.id !== prevProps.diary.currentDiaryDate.id) {
      this.props.fetchingDiary(this.props.user.id, this.props.diary.currentDiaryDate.id);
    }
  }

  previousDayDiary = () => {
    this.props.gettingDiaryId(moment().add(-1, 'days').format('YYYY-MM-DD'));
  }

  // TODO: Test to see if I need this? Can't I just pass down props and dispatch selectedMealType from store
  selectedMealType = typeId => {
    this.props.selectedMealType(typeId);
    history.push('/addFood');
  }

  selectedDiaryDate = typeId => {
    this.props.selectedMealType(typeId);
  }

  removeFood = (foodId, mealType) => {
    const entry = {
      food_id: foodId,
      mealType,
      date_id: this.props.diary.currentDiaryDate.id
    };
    console.log('entry working?', entry);
    this.props.removingFoodFromDiary(entry);
  }

  render() {
    return (
      <Diary {...this.props} selectedMealType={this.selectedMealType} removeFood={this.removeFood} previousDayDiary={this.previousDayDiary} />
    );
  }
}

export default connect(mapState, mapDispatch)(DiaryContainer);
