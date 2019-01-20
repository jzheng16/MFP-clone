import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Message, Form } from 'semantic-ui-react';

import { Button } from './StyledComponents';

const StyledContainer = styled.div`
   background-color: #e9e9e9;
   width: 100%;
   height: 100vh;
   position: relative;
`;

const StyledLabel = styled.label`
  display: block;
  margin-bottom: 7px;
`;

const StyledEmailInput = styled.input`
  display: block;
  font-size: 1.2em !important;
  border: 1px solid #d9d9d9 !important;
  border-radius: 0 !important;
  outline: none;
  padding: 15px 15px !important;
  width: 60% !important;
  margin: 0 auto 1.4em auto !important;
  transition: .3s ease;
  &:focus {
    border: 1px solid #33b5e5;
    color: #333333;
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
  width: 60%;
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
  width: 60%;
  margin: 0 auto;

  margin-bottom: 1.3em;
  
  
`;

const ErrorMessage = styled(Message)`
  
  margin: 0 auto !important;
  display: block !important;
`;

const StyledForm = styled(Form)`
  position: absolute !important;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) !important;
  padding: 40px;
  border-top: #33b5e5 !important;
  max-width: 800px !important;
  width: 100%;
  margin: 0 auto;

 

  box-shadow: 0 0 3px rgba(0, 0, 0, .1);
  background-color: white;
 
`;

const StyledTitle = styled.h2`
  color: #0070BF;
  text-align: center;
  width: 100%;
  margin-bottom: 1.4em;
`;

const SignupSpan = styled.span`
  font-weight: bold;
  display: inline-block;
  margin-right: .4em;
`;


export default props => {
  console.log('login props', props);
  return (
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
          placeholder="Email"
        />


        <StyledPasswordInput
          id="password"
          name="password"
          type="password"
          onChange={props.onPasswordChange}
          autoComplete="current-password"
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
};
