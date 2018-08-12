import styled from 'styled-components';

export const Button = styled.button`
  border: 1px solid #41addd;  /* width style color */
  box-sizing: border-box; 
  font-size: 16px;
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  outline: none;  /* Outlines border */
  cursor: pointer;
  /* Does not allow user to select the text */
  user-select: none;
`;

export const Input = styled.input`
  border: 1px solid initial;
  /* 
  Defining width and height means defining the content area and 
  not the box itself so padding and border is not taking into account. 
  This ensures any element will be the defined width and height. 
  */
  box-sizing: border-box;  
  /* font-size: 16px;
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; */
`;

export const A = styled.a`
  color: #41addd;

  &:hover {
    color: #6cc0e5;
  }
`;

export const Ul = styled.ul`
  list-style: none;
  margin: 0;
  width: 100%;
  max-height: 30em;
  overflow-y: auto; /* values: scroll, hidden, auto, visible (default) */
  padding: 0 1em;
`;

export const List = styled.li`
  width: 100%;
  height: 3em;
  display: flex;
  align-items: center;
  position: relative;
  border-top: 1px solid #eee;
  &:first-child {
    border-top: none;
  }
`;

export const ListItem = styled.div`
  display: flex;
  justify-content: space-between /* align flex items horizontally. values: center flex-start, end, space-between */
  align-items: center; /* align items vertically */
`;