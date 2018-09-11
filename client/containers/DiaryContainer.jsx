import React, { Component } from 'react';
import { format, subDays, addDays } from 'date-fns';
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
  constructor(props) {
    super(props);
    this.state = { something: false };
  }
  // Execute only when the user first visits their diary page
  componentDidMount() {
    if (!this.props.diary.currentDiaryDate.id) {
      this.props.gettingDiaryId(format(new Date(), 'yyyy-MM-dd'));
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.diary.currentDiaryDate.id !== prevProps.diary.currentDiaryDate.id) {
      this.props.fetchingDiary(this.props.diary.currentDiaryDate.id);
      this.props.fetchingDbDiary(this.props.diary.currentDiaryDate.id);
    }
  }

  // TODO: Weird Bug where subDays and addDays is offset by +1 days
  previousDayDiary = () => {
    this.props.gettingDiaryId(format(subDays(new Date(this.props.diary.currentDiaryDate.day), 0), 'yyyy-MM-dd'));
  }
  nextDayDiary = () => {
    this.props.gettingDiaryId(format(addDays(new Date(this.props.diary.currentDiaryDate.day), 2), 'yyyy-MM-dd'));
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
    }
    this.props.removingFoodFromDiary(entry);
  };

  render() {
    return (
      <Diary
        {...this.props}
        {...this.state}
        selectedMealType={this.selectedMealType}
        removeFood={this.removeFood}
        previousDayDiary={this.previousDayDiary}
        nextDayDiary={this.nextDayDiary}
      />
    );
  }
}

export default connect(mapState, mapDispatch)(DiaryContainer);
