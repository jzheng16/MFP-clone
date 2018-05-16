import React from 'react';
import { Link } from 'react-router-dom';

export default props => (
  <div>
    <h1> Your Food Diary for {props.diary.currentDiaryDate.day} </h1> <hr />
    <div className="diary">
      <div className="displayFoods">
        <div className="listBreakfast"> Breakfast
          {props.diary.entries ?
            props.diary.entries.map(entry => (
              <li key={entry.id}>
                {entry.name}
              </li>
            ))
            :
            null
          }
          <button onClick={() => props.selectedMealType(1)}> Add Food </button>
        </div>
        <h1> Lunch </h1>
        <button onClick={() => props.selectedMealType(2)}> Add Food </button>
        <h1> Dinner </h1>
        <button onClick={() => props.selectedMealType(3)}> Add Food </button>
        <h1> Snacks </h1>
        <button onClick={() => props.selectedMealType(4)}> Add Food </button>
      </div>
      <div className="displayStats">
        <h1> Calories </h1>
        <h1> Carbs </h1>
        <h1> Fats </h1>
        <h1> Protein </h1>
      </div>
    </div>
  </div>

);
