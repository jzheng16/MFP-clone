import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signingUp } from '../store/action-creators/auth';
import { SignUpForm } from '../components';

const mapState = state => ({

});

const mapDispatch = dispatch => ({
  signingUp(user) {
    return dispatch(signingUp(user));
  }
});

class SignUpContainer extends Component {
  constructor(props) {
    super(props);
    this.handleSignup = this.handleSignup.bind(this);
  }

  handleSignup(e) {
    e.preventDefault();
    this.props.signingUp({ email: e.target.email.value, password: e.target.password.value });
    this.props.history.push('/home');
  }
  render() {
    return (
      <SignUpForm {...this.props} handleSignup={this.handleSignup} />
    );
  }
}

export default connect(mapState, mapDispatch)(SignUpContainer);