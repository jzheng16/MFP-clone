import React from 'react';
// Will either display a form or a list of your goals depending on if edit state is true or false
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Ul, List, Button } from './StyledComponents';


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

const EditGoals = styled(Button)`

`;


export default props => {
  console.log('goal props?', props);
  return (
    <GoalWrapper >
      <Link to="/signup-step2"> Need help? Click here to get a custom plan designed just for you </Link>
      {props.isEditing ?
        <form className="goal-form" onSubmit={props.handleGoalUpdate}>
          <label htmlFor="weight">
            Weight <input id="weight" type="number" name="weight" defaultValue={props.goal.weight || 0} />
          </label>

          <label htmlFor="calories">
            Calories: <input id="calories" type="number" name="calorie" defaultValue={props.goal.calorie || 0} />
          </label>

          <label htmlFor="carbs">
            Carbs: <input id="carbs" type="number" name="carbs" defaultValue={props.goal.carbs || 0} />
          </label>

          <label htmlFor="protein">
            Protein: <input id="protein" type="number" name="protein" defaultValue={props.goal.protein || 0} />
          </label>

          <label htmlFor="fat">
            Fat: <input id="fat" type="number" name="fat" defaultValue={props.goal.fat || 0} />
          </label>

          <button type="submit"> Update </button>
        </form>
        :
        <div>
          <Ul>
            <List> Weight: {props.goal.weight || 'Not Set'} </List>
            <List> Calories: {props.goal.calorie || 'Not Set'} </List>
            <List> Carbs: {props.goal.carbs || 'Not Set'} </List>
            <List> Protein: {props.goal.protein || 'Not Set'} </List>
            <List> Fat: {props.goal.fat || 'Not Set'} </List>
          </Ul>
          <EditGoals onClick={props.toggleEditing}> Edit </EditGoals>
        </div>
      }
    </GoalWrapper >
  );
};
