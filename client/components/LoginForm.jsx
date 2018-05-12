import React from 'react';
import { NavLink } from 'react-router-dom';

export default props => (
  <div>
    <form className="login" onSubmit={props.handleLogin}>
      <label htmlFor="email"> Email:
        <input id="email" type="text" name="email" />

      </label>
      <label htmlFor="password">  Password:
        <input id="password" type="password" name="password" />

      </label>
      <button type="submit"> Submit </button>
    </form>

    <b> Don&#39;t have an account?
      <NavLink to="/signup"> Sign-up! </NavLink>
    </b>

  </div>
);
