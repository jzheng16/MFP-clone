import React, { Component } from 'react';
import moment from 'moment';
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
    if (this.props.diary.currentDiaryDate.id) {
      this.props.fetchingDiary(this.props.user.id, this.props.diary.currentDiaryDate.id);
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.diary.currentDiaryDate.id !== prevProps.diary.currentDiaryDate.id) {
      this.props.fetchingDiary(this.props.user.id, this.props.diary.currentDiaryDate.id);
    }
  }

  // TODO: Test to see if I need this? Can't I just pass down props and dispatch selectedMealType from store
  selectedMealType = typeId => {
    this.props.selectedMealType(typeId);
    history.push('/addFood');
  }

  selectedDiaryDate = typeId => {
    this.props.selectedMealType(typeId);
  }

  removeFood = (foodId, typeId) => {
    const entry = {
      id: foodId,
      typeId,
      date_id: this.props.diary.currentDiaryDate.id
    };
    this.props.removingFoodFromDiary(entry);
  }

  render() {
    return (
      <Diary {...this.props} selectedMealType={this.selectedMealType} removeFood={this.removeFood} />
    );
  }
}

export default connect(mapState, mapDispatch)(DiaryContainer);
