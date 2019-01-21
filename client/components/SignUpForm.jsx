import React from 'react';
import styled from 'styled-components';
import { Message, Form } from 'semantic-ui-react';

import { Button } from './StyledComponents';
import lock from '../../public/lock.svg';
import envelope from '../../public/envelope.svg';
import id from '../../public/id.svg';

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

const StyledSignupInput = styled.input`
  display: block;
  border-color: ${props => (props.error ? '#e0b4b4' : '#d1d1d1')}; 
  outline: none;
  /* Needed to override semantic UI's specificity */
  &&&& {
    width: 80%;
    font-size: 1.2em;
    border: 1px solid #d9d9d9;
    border-radius: 0;
    padding: 12px 15px 12px 2.2em;
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

const StyledSignupButton = styled(Button)`
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

export default ({
  email, password, confirmPassword, firstName, lastName, onChange, error, removeError, handleSignup
}) => {
  const notMatching = password.length > 0 && confirmPassword.length > 0 && password !== confirmPassword;
  const buttonDisabled = email.length === 0 || password.length === 0 || confirmPassword.length === 0 || firstName.length === 0 || lastName.length === 0;
  return (
    <StyledContainer>
      <StyledForm className="signup" onSubmit={handleSignup}>
        {error &&
          <ErrorMessage
            error
            header="Trouble signing up"
            content={error}
            onDismiss={removeError}
          />
        }

        <StyledTitle> Sign Up </StyledTitle>

        <StyledSignupInput
          name="email"
          type="email"
          onChange={onChange}
          autoComplete="email"
          icon={envelope}
          placeholder="Email"
        />

        <StyledSignupInput
          name="password"
          type="password"
          error={notMatching}
          onChange={onChange}
          autoComplete="new-password"
          icon={lock}
          placeholder="New Password"
        />
        <StyledSignupInput
          name="confirmPassword"
          type="password"
          error={notMatching}
          onChange={onChange}
          autoComplete="new-password"
          icon={lock}
          placeholder="Confirm New Password"
        />


        <StyledSignupInput
          name="firstName"
          type="text"
          pattern="[A-Za-z]+"
          onChange={onChange}
          icon={id}
          placeholder="First Name"
        />
        <StyledSignupInput
          name="lastName"
          type="text"
          pattern="[A-Za-z]+"
          onChange={onChange}
          icon={id}
          placeholder="Last Name"
        />
        <StyledSignupButton disabled={buttonDisabled || notMatching} type="submit"> Register </StyledSignupButton>
      </StyledForm>
    </StyledContainer>
  );
};

