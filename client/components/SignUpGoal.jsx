import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Ul, List, Button } from './StyledComponents';

const StyledLabel = styled.label`
  margin-right: .5em;
  font-weight: bold;
  
`;

const StyledQuestionList = styled(List)`
  border: none;
`;

const GoalWrapper = styled.div`
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledInput = styled.input`
 
  border-radius: 3px;
  border: 1px solid transparent;
  border-top: none;
  border-bottom: 1px solid #DDD;
  box-shadow: inset 0 1px 2px rgba(0,0,0,.39), 0 -1px 1px #FFF, 0 1px 0 #FFF;
`;

export default ({ user, firstTimeGoalSubmission }) => (
  <GoalWrapper>
    <form onSubmit={firstTimeGoalSubmission}>
      <Ul>
        <List>
          <StyledLabel htmlFor="gender"> Gender </StyledLabel>
          <StyledInput type="radio" id="male" name="gender" value="M" />
          <StyledLabel htmlFor="male"> Male </StyledLabel>
          <StyledInput type="radio" id="female" name="gender" value="F" />
          <StyledLabel htmlFor="female"> Female </StyledLabel>
        </List>


        <List>
          <StyledLabel htmlFor="age"> Age: </StyledLabel>
          <StyledInput type="text" name="age" maxLength="2" />

        </List>
        <List>
          <StyledLabel htmlFor="weight"> Weight: </StyledLabel>
          <StyledInput type="text" name="weight" maxLength="3" />
          <select name="weight_unit" defaultValue="1">
            <option value="1">lbs</option>
            <option value="2.2">kg</option>
          </select>

        </List>
        <List>
          <StyledLabel htmlFor="height"> Height: </StyledLabel>
          <StyledInput type="text" name="height" maxLength="3" />
          <select name="height_unit" defaultValue="1">
            <option value="1">in.</option>
            <option value=".393701">cm</option>
          </select>

        </List>

        <List>
          <StyledLabel htmlFor="activity"> Activity </StyledLabel>
          <select name="activity" defaultValue="1">
            <option value="1"> Sedentary </option>
            <option value="2"> Lightly Active </option>
            <option value="3"> Moderately Active </option>
            <option value="4"> Very Active </option>
            <option value="5"> Extremely Active </option>
          </select>
        </List>

        <List>
          <StyledLabel htmlFor="plan"> What is your goal?  </StyledLabel>
          <select name="plan" defaultValue="1">
            <option value="1"> Gain Weight </option>
            <option value="2"> Lose Weight </option>
            <option value="3"> Build Muscle </option>
            <option value="4"> Cut </option>
          </select>
        </List>
        Not sure? <Link to="goal/help"> Click here for help </Link>


        <List> <Button type="submit"> Calculate! </Button> </List>
      </Ul>
    </form>
  </GoalWrapper>

);
