import React, { Component } from 'react';
import moment from 'moment';
import { connect } from 'react-redux';
import { Diary } from '../components';
import { selectedMealType, selectedDiaryDate, gettingDiaryId } from '../store/action-creators/diary';
import history from '../history';

const mapState = state => ({
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
  }
});

class DiaryContainer extends Component {
  constructor(props) {
    super(props);

    this.selectedMealType = this.selectedMealType.bind(this);
  }

  componentDidMount() {
    // this.props.fetchDiary();
    this.props.gettingDiaryId(moment().format('YYYY-MM-DD'));
  }

  // TODO: Test to see if I need this? Can't I just pass down props and dispatch selectedMealType from store
  selectedMealType(typeId) {
    this.props.selectedMealType(typeId);
    history.push('/addFood');
  }

  selectedDiaryDate(typeId) {
    this.props.selectedMealType(typeId);
  }

  render() {
    return (
      <Diary {...this.props} selectedMealType={this.selectedMealType} />
    );
  }
}

export default connect(mapState, mapDispatch)(DiaryContainer);
