import React from 'react';
import styled from 'styled-components';

const NameInput = styled.input`
  display: inline-block;
  margin-bottom: 1em;
  margin: 1em;
`;

const SubmitChange = styled.button`
  display: inline-block;
  margin-left: 1em;
  border-width: 1px;
  border-radius: 4px;
  background-color: #14aaf5;
  border-color: #14aaf5;
  box-sizing: border-box;
  height: 2em;
  width: 10em;
  font-size: 13px;
  color: #fff;
  fill: #fff;
  cursor: pointer;
  font-family: Arial;
  &:disabled {
    color: #b7bfc6;
    fill: #b7bfc6;
    cursor: default;
    background-color: #edf1f2;
    border-color: #e0e6e8;
  }
`;


export default props => (
  <form onSubmit={props.changingName}>
    <label htmlFor="change_name"> First Name:
      <NameInput name="first_name" type="text" required />
    </label>
    <label htmlFor="change_name"> Last Name:
      <NameInput name="last_name" type="text" required />
    </label>
    <SubmitChange type="submit"> Change </SubmitChange>
  </form>
);
