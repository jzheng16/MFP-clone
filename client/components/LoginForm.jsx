import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Message, Form } from 'semantic-ui-react';

import { Button } from './StyledComponents';
import user from '../../public/user.svg';
import lock from '../../public/lock.svg';

const StyledContainer = styled.div`
   background-color: #e9e9e9;
   width: 100%;
   height: 100vh;
   position: relative;
`;

const StyledForm = styled(Form)`
  &&&& {
    position: absolute;
    transform: translate(-50%, -50%);
    border-top: #33b5e5;
    max-width: 800px;
  }
  top: 40%;
  left: 50%;
  padding: 40px;
  width: 100%;
  margin: 0 auto;
  box-shadow: 0 0 3px rgba(0, 0, 0, .1);
  background-color: white;
 
`;

const ErrorMessage = styled(Message)`
  &&&& {
    margin: 0 auto;
    display: block;
  }
`;

const StyledTitle = styled.h2`
  color: #0070BF;
  text-align: center;
  width: 100%;
  margin-bottom: 1.4em;
  font-size: 2.3em;
`;

const StyledEmailInput = styled.input`
  display: block;
  outline: none;
  &&&& {
    width: 70%
    font-size: 1.2em;
    border: 1px solid #d9d9d9;
    border-radius: 0;
    padding: 15px 15px 15px 2.2em;
    margin: 0 auto 1.4em auto;
    background-image: ${props => (props.icon ? `url(${props.icon})` : '')};
    background-repeat: no-repeat;
    background-size: 1em 1em;
    background-position: .7em .9em;
    background-color: ${props => (props.error ? '#fff6f6' : '#ffffff')};
    color: ${props => (props.error ? '#9f3a38' : '#525865')};
    
    &:hover{
     box-shadow: inset 1px 2px 8px rgba(0, 0, 0, 0.02);
    };

    &:focus{
    border: 1px solid #33b5e5;
    color: #333333;
    box-shadow: inset 1px 2px 4px rgba(0, 0, 0, 0.01), 0px 0px 8px rgba(0, 0, 0, 0.2);
    } 
  }
`;

const StyledPasswordInput = styled(StyledEmailInput)`
  margin-bottom: 1em !important;
`;

const StyledLoginButton = styled(Button)`
  display: block;
  border-radius: 1px;
  color: white;
  background-color: #14aaf5;
  border-color: #14aaf5;
  width: 70%;
  padding: 10px;
  
  margin: 0 auto 1em auto;
  &:disabled{
  color: #b7bfc6;
    fill: #b7bfc6;
    cursor: default;
    background-color: #edf1f2;
    border-color: #e0e6e8;
  }
`;

const StyledLink = styled(Link)`
  display: block;
  text-decoration: none;
  font-size: .8em;
  width: 70%;
  margin: 0 auto;
  margin-bottom: 1.3em;
`;

const SignupSpan = styled.span`
  font-weight: bold;
  display: inline-block;
  margin-right: .4em;
`;

export default props => (
  <StyledContainer>
    <StyledForm className="login" onSubmit={props.handleLogin}>
      {props.error &&
        <ErrorMessage
          error
          header="Login Failed"
          content={props.error}
          onDismiss={props.removeError}
        />
      }
      <StyledTitle> Login to your account</StyledTitle>
      <StyledEmailInput
        id="email"
        name="email"
        type="text"
        onChange={props.onEmailChange}
        autoComplete="email"
        icon={user}
        placeholder="Email"
      />

      <StyledPasswordInput
        id="password"
        name="password"
        type="password"
        onChange={props.onPasswordChange}
        autoComplete="current-password"
        icon={lock}
        placeholder="Password"
      />

      <StyledLink to="/forgotpassword"> Forgot your password?</StyledLink>
      <StyledLoginButton type="submit" disabled={!props.password || !props.email}> Login </StyledLoginButton>
      <StyledLink to="/signup-step1">
        <SignupSpan> Don&#39;t have an account? </SignupSpan> Sign-up!
      </StyledLink>
    </StyledForm>
  </StyledContainer>

);
