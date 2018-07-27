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
export default props => {
  if (!props.goal) {
    return (
      <GoalWrapper>
        <StyledParagraph> It looks like this is your first time here. Can we have a little info
          about you so that we can design a custom plan just for you?
        </StyledParagraph>
        <Link to="something"> No thanks I got this </Link>
        <form onSubmit={props.updateInformation}>
          <label htmlFor="male">
            <input type="radio" id="male" name="gender" value="male" /> Male
          </label>
          <label htmlFor="female">
            <input type="radio" id="female" name="gender" value="female" /> Female
          </label>

          <label htmlFor="age"> Age:
            <input type="number" name="age" />
          </label>
          <label htmlFor="weight"> Weight:
            <input type="number" name="weight" />
            <select name="weight_unit">
              <option value="lbs" selected>lbs</option>
              <option value="kg">kg</option>
            </select>
          </label>
          <label htmlFor="height"> Height:
            <input type="number" name="height" />
            <select name="heightunit">
              <option value="in" selected>in.</option>
              <option value="cm">cm</option>
            </select>
          </label>
          <label htmlFor="activity"> Activity:
            <select name="activity">
              <option value="1.2" selected> Sedentary </option>
              <option value="1.375"> Lightly Active </option>
              <option value="1.55"> Moderately Active </option>
              <option value="1.7"> Very Active </option>
              <option value="1.9"> Extremely Active </option>
            </select>
          </label>
          <p>
            <label htmlFor="plan"> What is your goal?
              <select name="plan">
                <option value="1" selected> Gain Weight </option>
                <option value="2"> Lose Weight </option>
                <option value="3"> Build Muscle </option>
                <option value="4"> Cut </option>
              </select>
              Not sure? <Link to="goal/help"> Click here for help </Link>
            </label>
          </p>
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
