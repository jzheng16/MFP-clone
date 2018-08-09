import React from 'react';
import styled from 'styled-components';

const StyledSignupInput = styled.input`
  display: block;
`;

export default props => {
  console.log('signup props', props);
  return (

    <form className="signup" onSubmit={props.handleSignup}>
      <label htmlFor="email"> Email:
        <StyledSignupInput id="email" name="email" type="email" required />
        {props.user && <p> {props.user.data} </p>}
      </label>
      <label htmlFor="password"> Password:
        <StyledSignupInput id="password" name="password" type="password" required />
      </label>
      <label htmlFor="email"> First name:
        <StyledSignupInput name="first_name" type="text" required />
      </label>
      <label htmlFor="password"> Last name:
        <StyledSignupInput name="last_name" type="text" required />
      </label>
      <button id="signupButton" type="submit"> Register </button>
    </form>

  );
};

