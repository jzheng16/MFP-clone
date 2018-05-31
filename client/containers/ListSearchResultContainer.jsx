import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ListSearchResult } from '../components';
import { addingFoodToDiary } from '../store/action-creators/diary';

const mapState = state => ({
  diary: state.diary,
  user: state.auth.user
});

const mapDispatch = dispatch => ({
  addingFoodToDiary(entry) {
    return dispatch(addingFoodToDiary(entry));
  }
});


class ListSearchResultContainer extends Component {
  constructor(props) {
    super(props);
    this.addingFoodToDiary = this.addingFoodToDiary.bind(this);
  }
  addingFoodToDiary(e, ndbno) {
    e.preventDefault();
    const entry = {
      user_id: this.props.user.id,
      date_id: this.props.diary.currentDiaryDate.id,
      db_food_entry: [ndbno, this.props.diary.currentMealTypeId, e.target.serving_size.value]
    };
    this.props.addingFoodToDiary(entry);
  }
  render() {
    return (
      <ListSearchResult {...this.props} addingFoodToDiary={this.addingFoodToDiary} />
    );
  }
}

export default connect(mapState, mapDispatch)(ListSearchResultContainer);
