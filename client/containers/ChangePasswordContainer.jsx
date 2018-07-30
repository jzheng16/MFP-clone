import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ChangePassword } from '../components';
import { changingPassword } from '../store/action-creators/auth';

const mapState = state => ({ user: state.auth.user });
const mapDispatch = dispatch => ({
  changingPassword(passwords) {
    return dispatch(changingPassword(passwords));
  }
});

class ChangePasswordContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newPassword: '',
      confirmPassword: ''
    };
  }

  onNewPasswordChange = e => {
    console.log('e.target', e.target.value);
    console.log('Changing', e.target.value);
    this.setState({ newPassword: e.target.value });
    console.log('new password', this.state.newPassword);
  }
  onConfirmPasswordChange = e => {
    console.log('Changing', e.target.value);
    this.setState({ confirmPassword: e.target.value });
    console.log('confirm password', this.state.confirmPassword);
  }
  changePassword = e => {
    e.preventDefault();
    const passwords = {
      currentPassword: e.target.current_password.value,
      newPassword: e.target.new_password.value
    };
    console.log('event:', e.target.current_password.value);
    console.log('event:', e.target.new_password.value);
    console.log('event:', e.target.confirm_password.value);

    this.props.changingPassword(passwords)
      .then(data => {
        console.log('data?', data);
      });
  };
  render() {
    return (
      <ChangePassword
        {...this.props}
        {...this.state}
        changePassword={this.changePassword}
        onConfirmPasswordChange={this.onConfirmPasswordChange}
        onNewPasswordChange={this.onNewPasswordChange}
      />
    );
  }
}

export default connect(mapState, mapDispatch)(ChangePasswordContainer);
