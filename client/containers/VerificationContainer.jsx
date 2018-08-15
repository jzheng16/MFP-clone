import React, { Component } from 'react';
import { connect } from 'react-redux';
import queryString from 'query-string';
<<<<<<< HEAD
import { Verification } from '../components';
import { sendingVerificationEmail, resendingVerificationEmail, verifyingUser } from '../store/action-creators/auth';


=======

import { Verification } from '../components';
import { sendingVerificationEmail, resendingVerificationEmail, verifyingUser } from '../store/action-creators/auth';

>>>>>>> origin
const mapStateToProps = state => ({ user: state.auth.user });


const mapDispatch = dispatch => ({
  sendingVerificationEmail(user) {
    dispatch(sendingVerificationEmail(user));
  },
  resendingVerificationEmail(user) {
    dispatch(resendingVerificationEmail(user));
  },
  verifyingUser(verificationId) {
    dispatch(verifyingUser(verificationId));
  }
});

class VerificationContainer extends Component {
  componentDidMount() {
<<<<<<< HEAD
    const verificationId = this.props.location.search ? queryString.parse(this.props.location.search).verificationId : '';
=======
    console.log(this.props.location.search);
    const verificationId = this.props.location.search ? queryString.parse(this.props.location.search).verificationId : '';
    console.log('what is verification id', verificationId);

>>>>>>> origin
    if (!this.props.user.verified && !verificationId) {
      this.props.sendingVerificationEmail({ email: this.props.user.email, first_name: this.props.user.first_name });
    }
    if (verificationId) {
<<<<<<< HEAD
=======
      console.log('here?', verificationId);
>>>>>>> origin
      this.props.verifyingUser(verificationId);
    }
  }

  render() {
    return (
      <Verification {...this.props} />
    );
  }
}

export default connect(mapStateToProps, mapDispatch)(VerificationContainer);
