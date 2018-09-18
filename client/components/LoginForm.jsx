import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Button } from './StyledComponents';


const StyledLabel = styled.label`
  display: block;
  margin-bottom: 7px;
`;

const StyledEmailInput = styled.input`
  border: 1px solid #d5dce0;
  border-radius: 3px;
  height: 1.5em;
  margin-bottom: 1em;
`;

const StyledPasswordInput = styled(StyledEmailInput)`
  margin-bottom: .5em;
`;

const StyledLoginButton = styled(Button)`
  display: block;
  border-radius: 1px;
  color: white;
  background-color: #14aaf5;
  border-color: #14aaf5;
  width: 4em;
  height: 1.5em;
  margin-left: 8em;
  &:disabled{
  color: #b7bfc6;
    fill: #b7bfc6;
    cursor: default;
    background-color: #edf1f2;
    border-color: #e0e6e8;
  }
`;

const ForgotPasswordLink = styled(Link)`
  display: block;
  text-decoration: none;
  font-size: .75em;
  margin-bottom: 1em;
  
`;

export default props => (
  <div>
    <form className="login" onSubmit={props.handleLogin}>
      <StyledLabel htmlFor="email"> Email Address </StyledLabel>
      <StyledEmailInput onChange={props.onEmailChange} id="email" type="text" name="email" />

      <StyledLabel htmlFor="password">  Password </StyledLabel>
      <StyledPasswordInput onChange={props.onPasswordChange} id="password" type="password" name="password" />
      <ForgotPasswordLink to="/forgotpassword"> Forgot your password?</ForgotPasswordLink>
      <StyledLoginButton type="submit" disabled={!props.password || !props.email}> Log-in </StyledLoginButton>
    </form>

    <b> Don&#39;t have an account?
      <Link to="/signup-step1"> Sign-up! </Link>
    </b>

  </div>
);
