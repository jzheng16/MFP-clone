import React from 'react';
// Will either display a form or a list of your goals depending on if edit state is true or false

export default props => (
  <div>
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
  </div>
);
