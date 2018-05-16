import React from 'react';
import { Link } from 'react-router-dom';

export default props => (
  <div>
    <h1> Your Food Diary for DAY </h1> <hr />
    <div className="diary">
      <div className="displayFoods">
        <div className="listBreakfast"> Breakfast
          {props.diary ?
            props.diary.map(entry => (
              <li key={entry.id}>
                {entry.name}
              </li>
            ))
            :
            null
          }
          <Link to="/addFood"> Add Food </Link>
        </div>
        <h1> Lunch </h1>
        <Link to="/addFood"> Add Food </Link>
        <h1> Dinner </h1>
        <Link to="/addFood"> Add Food </Link>
        <h1> Snacks </h1>
        <Link to="/addFood"> Add Food </Link>
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
