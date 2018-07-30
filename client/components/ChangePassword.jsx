import React from 'react';

export default props => (
  <div>
    <form onSubmit={props.changePassword}>
      <label htmlFor="current_password">
        <input type="password" name="current_password" required />
      </label>
      <label htmlFor="new_password">
        <input
          type="password"
          name="new_password"
          minLength="8"
          required
          placeholder="8 characters minimum"
          onChange={props.onNewPasswordChange}
        />
      </label>
      <label htmlFor="confirm_password">
        <input type="password" name="confirm_password" onChange={props.onConfirmPasswordChange} required />
      </label>
      {props.newPassword && props.confirmPassword && props.newPassword !== props.confirmPassword ?

        <b> Passwords must match </b>

        :
        null

      }
      <button type="submit" disabled={props.newPassword !== props.confirmPassword}> Change Password </button>
    </form>
  </div>
);

