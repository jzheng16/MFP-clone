import React from 'react';

export default props => (

  <form className="signup" onSubmit={props.handleSignup}>
    <label htmlFor="email"> Email:
      <input id="email" name="email" type="text" />
    </label>
    <label htmlFor="password"> Password:
      <input id="password" name="password" type="password" />
    </label>
    <button id="signupButton" type="submit"> Register </button>
  </form>

);

