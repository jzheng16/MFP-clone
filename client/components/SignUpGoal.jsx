import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';


const StyledParagraph = styled.p`
  font-size: 1em;
  text-align: center;
`;

const GoalWrapper = styled.div`

`;

const StyledFieldSet = styled.fieldset`
  border: 0;
  display: block;

`;

const StyledGenderInput = styled.input`
  display: inline-block;
  width: 0;
  height: 0;
`;

const StyledSpan = styled.span`
  background: #88DBDF;
  color: #fff;
  font-weight: 500;
  border-radius: 2em;
  display: inline-block;
  width: 5em;
  height: 2.5em;
  text-align: center;
  line-height: 2.5em;
`;

const StyledLegend = styled.legend`
  display: block;
  font-weight: 500;
  text-transform: uppercase;
  font-family: "Oswald";
`;

export default ({ user, firstTimeGoalSubmission }) => (
  <GoalWrapper>
    <StyledParagraph> Welcome to MyFitnessClone {user.first_name} </StyledParagraph>
    <StyledParagraph> We just need a little more information to get you started on your fitness joruney.
    </StyledParagraph>
    <Link to="/"> Maybe later... </Link>
    <form onSubmit={firstTimeGoalSubmission}>
      <StyledFieldSet>
        <StyledLegend> Gender </StyledLegend>
        <label htmlFor="male">
          <StyledGenderInput type="radio" id="male" name="gender" value="M" />
          <StyledSpan> Male </StyledSpan>
        </label>
        <label htmlFor="female">
          <StyledGenderInput type="radio" id="female" name="gender" value="F" />
          <StyledSpan> Female </StyledSpan>
        </label>
      </StyledFieldSet>
      <StyledFieldSet>
        <label htmlFor="age"> Age:
          <input type="text" name="age" maxLength="2" />
        </label>
      </StyledFieldSet>
      <StyledFieldSet>
        <label htmlFor="weight"> Weight:
          <input type="text" name="weight" maxLength="3" />
          <select name="weight_unit" defaultValue="1">
            <option value="1">lbs</option>
            <option value="2.2">kg</option>
          </select>
        </label>
      </StyledFieldSet>
      <StyledFieldSet>
        <label htmlFor="height"> Height:
          <input type="text" name="height" maxLength="3" />
          <select name="height_unit" defaultValue="1">
            <option value="1">in.</option>
            <option value=".393701">cm</option>
          </select>
        </label>
      </StyledFieldSet>
      <StyledFieldSet>
        <label htmlFor="activity"> Activity:
          <select name="activity" defaultValue="1">
            <option value="1"> Sedentary </option>
            <option value="2"> Lightly Active </option>
            <option value="3"> Moderately Active </option>
            <option value="4"> Very Active </option>
            <option value="5"> Extremely Active </option>
          </select>
        </label>
      </StyledFieldSet>
      <StyledFieldSet>
        <p>
          <label htmlFor="plan"> What is your goal?
            <select name="plan" defaultValue="1">
              <option value="1"> Gain Weight </option>
              <option value="2"> Lose Weight </option>
              <option value="3"> Build Muscle </option>
              <option value="4"> Cut </option>
            </select>
            Not sure? <Link to="goal/help"> Click here for help </Link>
          </label>
        </p>
      </StyledFieldSet>
      <button type="submit"> Calculate! </button>
    </form>
  </GoalWrapper>

);
