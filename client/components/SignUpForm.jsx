import React from 'react';
import styled from 'styled-components';
import { Button } from './StyledComponents';

const StyledLabel = styled.label`
  display: block;
  margin-bottom: 7px;
`;

const StyledSignupInput = styled.input`
  border: 1px solid #d5dce0;
  height: 1.5em;
  margin-bottom: 1em;
  background: #fff;
  color: #525865;
  border-radius: 4px;
  border: 1px solid #d1d1d1;
  box-shadow: inset 1px 2px 8px rgba(0, 0, 0, 0.07);
  font-family: inherit;
  line-height: 1.45;
  outline: none;
  transition: .18s ease-out;
  &:hover{
     box-shadow: inset 1px 2px 8px rgba(0, 0, 0, 0.02);
  };
  &:focus{
    color: #4b515d;
    border: 1px solid #B8B6B6;
    box-shadow: inset 1px 2px 4px rgba(0, 0, 0, 0.01), 0px 0px 8px rgba(0, 0, 0, 0.2);
  }

`;


export default props => {
  console.log('signup props', props);
  return (

    <form className="signup" onSubmit={props.handleSignup}>
      <StyledLabel htmlFor="email"> Email </StyledLabel>
      <StyledSignupInput id="email" name="email" type="email" autoComplete="email" required />
      <StyledLabel htmlFor="password"> Password </StyledLabel>
      <StyledSignupInput id="password" name="password" type="password" required />
      <StyledLabel htmlFor="email"> First name </StyledLabel>
      <StyledSignupInput name="first_name" type="text" required />
      <StyledLabel htmlFor="password"> Last name </StyledLabel>
      <StyledSignupInput name="last_name" type="text" required />
      <Button id="signupButton" type="submit"> Register </Button>
    </form>

  );
};

