import React from 'react';

export default props => (
  <div>
    <ul>
      {props.foods.allFoods && props.foods.allFoods.map(food => (
        <li key={food.id}>
          {food.name}   {food.calories}
          <form onSubmit={e => props.addingFoodToDiary(e, food.id)}>
            <label htmlFor="serving_size"> Select Serving Size
              <input type="number" defaultValue="1" name="serving_size" />
            </label>
            <button type="submit"> Add Food to Diary </button>
          </form>
        </li>
      ))
      }

    </ul>
  </div>
);
