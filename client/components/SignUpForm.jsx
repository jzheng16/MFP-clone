import React from 'react';

export default props => (
  <div>

    <form className="signup" onSubmit={props.handleSignup}>
      <label htmlFor="email">
        <input name="email" type="text" />
      </label>
      <label htmlFor="password">
        <input name="password" type="password" />
      </label>
      <button type="submit"> Register </button>
    </form>
  </div>
);

