import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ListSearchResult } from '../components';
import { addingFoodToDbDiary } from '../store/action-creators/diary';

const mapState = state => ({
  diary: state.diary,
  user: state.auth.user
});

const mapDispatch = dispatch => ({
  addingFoodToDbDiary(entry) {
    return dispatch(addingFoodToDbDiary(entry));
  }
});


class ListSearchResultContainer extends Component {
  addingFoodToDbDiary = (e, ndbno) => {
    e.preventDefault();
    const entry = {
      databaseId: +ndbno,
      mealType: this.props.diary.currentMealTypeId,
      qty: +e.target.qty.value,
      user_id: this.props.user.id,
      date_id: this.props.diary.currentDiaryDate.id,
    };
    this.props.addingFoodToDbDiary(entry);
  }
  render() {
    return (
      <ListSearchResult {...this.props} addingFoodToDbDiary={this.addingFoodToDbDiary} />
    );
  }
}

export default connect(mapState, mapDispatch)(ListSearchResultContainer);
