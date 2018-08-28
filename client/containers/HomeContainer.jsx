import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Home } from '../components';
import { fetchingGoal } from '../store/action-creators/goal';
import { gettingDiaryId } from '../store/action-creators/diary';
import { uploadingUserImage, testing } from '../store/action-creators/auth';

export class HomeContainer extends Component {
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

const mapState = state => ({
  user: state.auth.user,
  goal: state.goal.goal
});

export const mapDispatch = dispatch => ({
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


HomeContainer.propTypes = {
  user: PropTypes.shape({
    age: PropTypes.number,
    avatarUrl: PropTypes.string,
    email: PropTypes.string,
    first_name: PropTypes.string,
    last_name: PropTypes.string,
    gender: PropTypes.string,
    height: PropTypes.number,
    id: PropTypes.number,
    verified: PropTypes.bool,
    weight: PropTypes.arrayOf(PropTypes.number)
  }),
  goal: PropTypes.shape({
    id: PropTypes.number,
    calorie: PropTypes.number,
    weight: PropTypes.number,
    carbs: PropTypes.number,
    protein: PropTypes.number,
    fat: PropTypes.number,
    user_id: PropTypes.number,
    plan_id: PropTypes.number,
    activity_id: PropTypes.number
  }),
  fetchingGoal: PropTypes.func.isRequired,
  gettingDiaryId: PropTypes.func.isRequired,
  uploadingUserImage: PropTypes.func.isRequired,
};

HomeContainer.defaultProps = { user: {}, goal: {} };

export default connect(mapState, mapDispatch)(HomeContainer);

