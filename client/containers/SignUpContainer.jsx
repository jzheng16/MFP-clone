import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signingUp, removeError } from '../store/action-creators/auth';
import { SignUpForm } from '../components';

const mapState = state => ({ user: state.auth.user, error: state.auth.error });

const mapDispatch = dispatch => ({
  signingUp(user) {
    return dispatch(signingUp(user));
  },
  removeError() {
    return dispatch(removeError());
  }
});

class SignUpContainer extends Component {
  constructor(props) {
    super(props);
    this.handleSignup = this.handleSignup.bind(this);
    this.state = {
      email: '',
      password: '',
      confirmPassword: '',
      firstName: '',
      lastName: '',

    };
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSignup(e) {
    e.preventDefault();
    const {
      email, password, firstName, lastName
    } = this.state;

    this.props.signingUp({
      email,
      password,
      first_name: firstName,
      last_name: lastName
    });
  }
  render() {
    return (
      <SignUpForm {...this.state} {...this.props} onChange={this.onChange} handleSignup={this.handleSignup} />
    );
  }
}

export default connect(mapState, mapDispatch)(SignUpContainer);
