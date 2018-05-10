import React from 'react';
import { NavLink } from 'react-router-dom';

export default props => (
  <div>
    <form className="login" onSubmit={props.handleLogin}>
      <label htmlFor="email">
        <input id="email" type="text" name="email" />
        Email:
      </label>
      <label htmlFor="password">
        <input id="password" type="password" name="password" />
        Password:
      </label>
      <button type="submit"> Submit </button>
    </form>

    <b> Don&#39;t have an account? Sign-up!
      <NavLink to="/signup"> Sign-up </NavLink>
    </b>


    <button type="submit" onClick={props.handleLogout}> Logout </button>

  </div>
);
