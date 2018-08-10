import React, { Component } from 'react';
import { connect } from 'react-redux';
import shortid from 'shortid';
import { ChangePassword, ChangeUserInfo, ChangeEmail } from '../components';
import { changingPassword, updatingUserInformation } from '../store/action-creators/auth';
import { addToast, deleteToast } from '../store/action-creators/toasts';

const mapDispatch = dispatch => ({
  updatingUserInformation(userObj) {
    dispatch(updatingUserInformation(userObj));
  },
  changingPassword(passwords) {
    return dispatch(changingPassword(passwords));
  },
  addToast(options) {
    return dispatch(addToast(options));
  },
  deleteToast(toastId) {
    return dispatch(deleteToast(toastId));
  }
});

class ProfileSettingsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newPassword: '',
      confirmPassword: ''
    };
  }

  onNewPasswordChange = e => {
    console.log('Changing', e.target.value);
    this.setState({ newPassword: e.target.value });
  }
  onConfirmPasswordChange = e => {
    this.setState({ confirmPassword: e.target.value });
  }

  changingName = e => {
    e.preventDefault();
    console.log('event: ', e.target.first_name.value);
    console.log('event: ', e.target.last_name.value);
    this.props.updatingUserInformation({ first_name: e.target.first_name.value, last_name: e.target.last_name.value });
  }

  changingEmail = e => {
    e.preventDefault();
    this.props.updatingUserInformation({ email: e.target.email.value });
  }

  changePassword = e => {
    e.preventDefault();
    const passwords = {
      currentPassword: e.target.current_password.value,
      newPassword: e.target.new_password.value
    };
    const notifId = shortid.generate();
    this.props.changingPassword(passwords)
      .then(response => {
        if (response.data === 'Entered incorrect password') {
          this.props.addToast({ text: 'Wrong password!', id: notifId, backgroundColor: '#ff0000' });
          setTimeout(() => {
            this.props.deleteToast(notifId);
          }, 3000);
        } else {
          this.props.addToast({ text: 'Password updated!', id: notifId, backgroundColor: '#6796e6' });
          setTimeout(() => {
            this.props.deleteToast(notifId);
          }, 3000);
        }
      });
  };

  render() {
    return (
      <div>
        <ChangePassword
          {...this.props}
          {...this.state}
          changePassword={this.changePassword}
          onConfirmPasswordChange={this.onConfirmPasswordChange}
          onNewPasswordChange={this.onNewPasswordChange}
        />
        <ChangeUserInfo {...this.props} changingName={this.changingName} />
        <ChangeEmail {...this.props} changingEmail={this.changingEmail} />
      </div>
    );
  }
}

export default connect(null, mapDispatch)(ProfileSettingsContainer);
