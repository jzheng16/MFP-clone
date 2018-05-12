import React, { Component } from 'react';
import { connect } from 'react-redux';
import LoginForm from '../components/LoginForm';
import { loggingIn, loggingOut } from '../store/action-creators/auth';

const mapDispatchToProps = dispatch => ({
  loggingIn(email, password) {
    return dispatch(loggingIn(email, password));
  },
  loggingOut() {
    return dispatch(loggingOut());
  }
});

const mapStateToProps = state => ({
  user: state.auth.user
});

class LoginContainer extends Component {
  constructor(props) {
    super(props);
    this.handleLogin = this.handleLogin.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
  }
  componentDidMount() {
  }

  handleLogin(e) {
    e.preventDefault();
    this.props.loggingIn(e.target.email.value, e.target.password.value);
  }

  handleLogout() {
    this.props.loggingOut();
  }
  render() {
    return (
      <LoginForm {...this.props} handleLogin={this.handleLogin} handleLogout={this.handleLogout} />
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);
