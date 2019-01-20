import React, { Component } from 'react';
import { connect } from 'react-redux';
import LoginForm from '../components/LoginForm';
import { loggingIn, removeError } from '../store/action-creators/auth';

const mapDispatchToProps = dispatch => ({
  loggingIn(email, password) {
    return dispatch(loggingIn(email, password));
  },
  removeError() {
    return dispatch(removeError());
  }
});

const mapStateToProps = state => ({ user: state.auth.user, error: state.auth.error });

class LoginContainer extends Component {
  constructor(props) {
    super(props);
    this.handleLogin = this.handleLogin.bind(this);
    this.state = { email: '', password: '', isError: false };
  }
  componentDidMount() {
  }

  onPasswordChange = e => {
    this.setState({ password: e.target.value });
  }

  onEmailChange = e => {
    this.setState({ email: e.target.value });
  }

  handleLogin = e => {
    e.preventDefault();
    this.props.loggingIn(e.target.email.value, e.target.password.value);
  }


  render() {
    return (
      <LoginForm {...this.props} {...this.state} onPasswordChange={this.onPasswordChange} onEmailChange={this.onEmailChange} handleLogin={this.handleLogin} />
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);
