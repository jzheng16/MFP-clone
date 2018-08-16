import React, { Component } from 'react';

import { connect } from 'react-redux';
import { Home } from '../components';
import { fetchingGoal } from '../store/action-creators/goal';
import { gettingDiaryId } from '../store/action-creators/diary';
import { uploadingUserImage, testing } from '../store/action-creators/auth';

const mapState = state => ({
  user: state.auth.user,
  goal: state.goal.goal
});

const mapDispatch = dispatch => ({
  fetchingGoal() {
    return dispatch(fetchingGoal());
  },
  gettingDiaryId(date) {
    dispatch(gettingDiaryId(date));
  },
  uploadingUserImage(image) {
    dispatch(uploadingUserImage(image));
  },
  testing() {
    dispatch(testing());
  }
});
class HomeContainer extends Component {
  componentDidMount() {
    if (this.props.user.id) {
      this.props.fetchingGoal();
    }
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.user.id !== nextProps.user.id) {
      this.props.fetchingGoal();
    }
  }

  uploadImage = event => {
    event.preventDefault();
    console.log('event?', event.target.files);

    // Create form object for multer to parse
    const form = new FormData();
    form.append('file', event.target.files[0]);
    this.props.uploadingUserImage(form);
  }

  render() {
    return (
      <Home {...this.props} uploadImage={this.uploadImage} />
    );
  }
}

export default connect(mapState, mapDispatch)(HomeContainer);

