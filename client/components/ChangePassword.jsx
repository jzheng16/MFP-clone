import React from 'react';
import styled from 'styled-components';
import { Button, Input } from './StyledComponents';

const PasswordLabel = styled.label`
`;

const PasswordInput = styled(Input)`
  display: block;
  margin-bottom: 1em;
  border-color: initial;
`;

const ConfirmPassword = styled(Input)`
  display: block;
  border-color: initial;
`;
const SubmitPassword = styled(Button)`
  display: block;
  height: 2em;
  width: 10em;
  font-size: 13px;
  color: white;
  fill: white;
  border-radius: 4px;
  border-color: #14aaf5;
  background-color: #14aaf5;
  &:disabled {
    color: #b7bfc6;
    fill: #b7bfc6;
    cursor: default;
    background-color: #edf1f2;
    border-color: #e0e6e8;
  }
`;
const PasswordMatch = styled.span`
  font-size: 12px;
  padding-left: 5px;
  color: #308800;
`;
const PasswordMismatch = styled.span`
  color: #bb0628;
  font-size: 12px;
  padding-left: 5px;
`;

const ShowDialog = styled(Button)`
  border-style: none;
  background-color: transparent;
  font-size: 13px;
  color: #14aaf5;
  &:hover {
    text-decoration: underline;
  }
`;
export default props => (
  props.showPasswordDialog ?
    <div>
      <form onSubmit={props.changePassword}>
        <label htmlFor="current_password"> Enter current password
          <PasswordInput type="password" name="current_password" required />
        </label>
        <label htmlFor="new_password"> Enter new password
          <PasswordInput
            type="password"
            name="new_password"
            minLength="8"
            required
            placeholder="8 characters minimum"
            onChange={props.onNewPasswordChange}
          />
        </label>
        <label htmlFor="confirm_password"> Confirm new password
          <ConfirmPassword type="password" name="confirm_password" onChange={props.onConfirmPasswordChange} required />
        </label>
        {props.newPassword && props.confirmPassword && props.newPassword !== props.confirmPassword ?
          <PasswordMismatch> Passwords must match </PasswordMismatch>
          :
          null
        }
        {props.newPassword && props.confirmPassword && props.newPassword === props.confirmPassword ?
          <PasswordMatch> Your passwords match! </PasswordMatch>
          :
          null
        }
        <SubmitPassword type="submit" disabled={props.newPassword !== props.confirmPassword}> Change Password </SubmitPassword>
      </form>
    </div>
    :
    <ShowDialog onClick={props.onAnchorClick}> Change your password... </ShowDialog>
);
