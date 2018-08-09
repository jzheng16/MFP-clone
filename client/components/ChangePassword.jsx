import React from 'react';

import styled from 'styled-components';

const PasswordLabel = styled.label`

`;

const PasswordInput = styled.input`
  display: block;
  margin-bottom: 1em;
`;

const SubmitPassword = styled.button`
  display: block;
  border-width: 1px;
  border-radius: 4px;
  background-color: #14aaf5;
  border-color: #14aaf5;
  box-sizing: border-box;
  height: 2em;
  width: 10em;
  font-size: 13px;
  color: #fff;
  fill: #fff;
  cursor: pointer;
  font-family: Arial;
  &:disabled {
    color: #b7bfc6;
    fill: #b7bfc6;
    cursor: default;
    background-color: #edf1f2;
    border-color: #e0e6e8;
  }
`;

export default props => (
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
        <PasswordInput type="password" name="confirm_password" onChange={props.onConfirmPasswordChange} required />
      </label>
      {props.newPassword && props.confirmPassword && props.newPassword !== props.confirmPassword ?
        <b> Passwords must match </b>
        :
        null
      }
      <SubmitPassword type="submit" disabled={props.newPassword !== props.confirmPassword}> Change Password </SubmitPassword>
    </form>
  </div>
);

