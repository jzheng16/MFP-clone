import React from 'react';

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

  </div>
);
