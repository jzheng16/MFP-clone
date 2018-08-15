import React, { Component } from 'react';
import { connect } from 'react-redux';
import queryString from 'query-string';
import { Verification } from '../components';
import { sendingVerificationEmail, resendingVerificationEmail, verifyingUser } from '../store/action-creators/auth';


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
    const verificationId = this.props.location.search ? queryString.parse(this.props.location.search).verificationId : '';
    if (!this.props.user.verified && !verificationId) {
      this.props.sendingVerificationEmail({ email: this.props.user.email, first_name: this.props.user.first_name });
    }
    if (verificationId) {
      console.log('here?', verificationId);
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
