import React, { Component } from 'react';
import moment from 'moment';
import _ from 'lodash/fp';

import { connect } from 'react-redux';
import { Diary } from '../components';
import { selectedMealType, selectedDiaryDate, gettingDiaryId, fetchingDiary, removingFoodFromDiary, fetchingDbDiary } from '../store/action-creators/diary';
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
  fetchingDiary(date_id) {
    dispatch(fetchingDiary(date_id));
  },
  fetchingDbDiary(date_id) {
    dispatch(fetchingDbDiary(date_id));
  },
  removingFoodFromDiary(entry) {
    dispatch(removingFoodFromDiary(entry));
  }
});

class DiaryContainer extends Component {
  componentDidMount() {
    console.log('what is this?', this.props.diary.currentDiaryDate.id);
    if (!this.props.diary.currentDiaryDate.id) {
      this.props.gettingDiaryId(moment().format('YYYY-MM-DD'));
      // this.props.fetchingDiary(this.props.diary.currentDiaryDate.id);
      // this.props.fetchingDbDiary(this.props.diary.currentDiaryDate.id);
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.diary.currentDiaryDate.id !== prevProps.diary.currentDiaryDate.id) {
      this.props.fetchingDiary(this.props.diary.currentDiaryDate.id);
      this.props.fetchingDbDiary(this.props.diary.currentDiaryDate.id);
    }
  }

  previousDayDiary = () => {
    console.log('what is this', this.props.diary.currentDiaryDate.day);
    this.props.gettingDiaryId(moment(this.props.diary.currentDiaryDate.day).add(-1, 'days').format('YYYY-MM-DD'));
  }
  nextDayDiary = () => {
    this.props.gettingDiaryId(moment(this.props.diary.currentDiaryDate.day).add(1, 'days').format('YYYY-MM-DD'));
  }

  // TODO: Test to see if I need this? Can't I just pass down props and dispatch selectedMealType from store
  selectedMealType = typeId => {
    this.props.selectedMealType(typeId);
    history.push('/addFood');
  }

  selectedDiaryDate = typeId => {
    this.props.selectedMealType(typeId);
  }

  removeFood = (food_id, mealType, databaseId) => {
    // Conditional to test whether user is removing personal food or food retrieved from database
    const entry = {
      databaseId,
      mealType,
      date_id: this.props.diary.currentDiaryDate.id
    };
    if (databaseId) {
      entry.databaseId = databaseId;
    } else {
      entry.food_id = food_id;
    };
    this.props.removingFoodFromDiary(entry);
  };

  render() {
    return (
      <Diary {...this.props} selectedMealType={this.selectedMealType} removeFood={this.removeFood} previousDayDiary={this.previousDayDiary} nextDayDiary={this.nextDayDiary} />
    );
  }
}

export default connect(mapState, mapDispatch)(DiaryContainer);
