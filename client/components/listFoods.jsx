import React from 'react';

export default props => (
  <div>
    <ul>
      {props.foods.allFoods && props.foods.allFoods.map(food => (
        <li key={food.id}>
          {food.name}   {food.calories}
          <button onClick={() => props.addingFoodToDiary(food.id)}> Add Food to Diary </button>
        </li>
      ))
      }

    </ul>
  </div>
);
