import React, { Component } from 'react';

import { connect } from 'react-redux';
import { Home } from '../components';
import { fetchingGoal } from '../store/action-creators/goal';
import { gettingDiaryId } from '../store/action-creators/diary';
import { uploadingUserImage } from '../store/action-creators/auth';

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
  }
});
class HomeContainer extends Component {
  componentDidUpdate(prevProps) {
    if (prevProps.user.id !== this.props.user.id) {
      this.props.fetchingGoal();
    }
  }

  uploadImage = event => {
    event.preventDefault();
    // Create form object for multer to parse
    const form = new FormData();
    form.append('file', event.target.image.files[0]);
    this.props.uploadingUserImage(form);
  }

  render() {
    return (
      <Home {...this.props} uploadImage={this.uploadImage} />
    );
  }
}

export default connect(mapState, mapDispatch)(HomeContainer);

