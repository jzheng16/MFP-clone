import React from 'react';

export default props => {
  return (
    <div>
      <ul>
        {props.foods.allFoods && props.foods.allFoods.map(food => {
          return (
            <li key={food.id}>
              {food.name}   {food.calories}
            </li>
          );
        })
        }

      </ul>
    </div>
  );
};
