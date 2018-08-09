import React from 'react';
import styled from 'styled-components';

const StyledUl = styled.ul`
  position: fixed; 
  bottom: 3em;
  right: 3em;
  width: 15em;
`;
const StyledAlert = styled.li`
  /* align-items: flex-start;
  display: flex;  */
  /* padding: 16px;
  margin: 0 0 12px; */
  list-style: none;
  border-radius: 5px;
  height: 3em;
  width: 13em;
  
  animation-duration: 3s;
  animation-name: slideout;
  @keyframes slideout {
    100% { opacity: 0}
  }
`;

const StyledAlertText = styled.p`
  /* flex: 1 1 auto;
  */
  display: inline-block;
  color: white;
  text-overflow: ellipsis;
  /* margin: 2em 0px 0px 4em;  */
  margin-left: 2em;
  text-align: center;
`;

const StyledDismissButton = styled.button`
  color: white;
  background: transparent;
  border: 0;
  cursor: pointer;
  display: inline-block;
  font-size: .75em;
  margin-left: 2em;
  
`;

export default props => (
  <StyledUl>
    {props.toasts && props.toasts.map(toast => (
      <StyledAlert key={toast.id} style={{ backgroundColor: toast.backgroundColor }}>
        <StyledAlertText> {toast.text} </StyledAlertText>
        <StyledDismissButton onClick={() => props.onDismissClick(toast.id)}> X </StyledDismissButton>
      </StyledAlert>
    ))
    }
  </StyledUl>
);

