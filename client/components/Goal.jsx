import React from 'react';
// Will either display a form or a list of your goals depending on if edit state is true or false
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

export default props => {
  if (!props.goal.weight) {
    return (
      <GoalWrapper>
        <StyledParagraph> It looks like this is your first time here. Can we have a little info
          about you so that we can design a custom plan just for you?
        </StyledParagraph>
        <Link to="something"> No thanks I got this </Link>
        <form onSubmit={props.firstTimeGoalSubmission}>
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
  }
  return (
    <GoalWrapper >
      {props.isEditing ?
        <form className="goal-form" onSubmit={props.handleGoalUpdate}>
          <label htmlFor="weight">
            Weight <input id="weight" type="number" name="weight" defaultValue={props.goal.weight} />
          </label>

          <label htmlFor="calories">
            Calories: <input id="calories" type="number" name="calorie" defaultValue={props.goal.calorie} />
          </label>

          <label htmlFor="carbs">
            Carbs: <input id="carbs" type="number" name="carbs" defaultValue={props.goal.carbs} />
          </label>

          <label htmlFor="protein">
            Protein: <input id="protein" type="number" name="protein" defaultValue={props.goal.protein} />
          </label>

          <label htmlFor="fat">
            Fat: <input id="fat" type="number" name="fat" defaultValue={props.goal.fat} />
          </label>

          <button type="submit"> Update </button>
        </form>
        :
        <div>
          <ul className="goal-list">
            <li> Weight: {props.goal.weight} </li>
            <li> Calories: {props.goal.calorie} </li>
            <li> Carbs: {props.goal.carbs} </li>
            <li> Protein: {props.goal.protein} </li>
            <li> Fat: {props.goal.fat} </li>
          </ul>
          <button id="update-goal" onClick={props.toggleEditing}> Edit </button>
        </div>
      }
    </GoalWrapper >
  );
};
