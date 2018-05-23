import React from 'react';
import { Link } from 'react-router-dom';
import shortid from 'shortid';

// TODO: Fetch diary and display its shit on here

export default props => {
  console.log('diary props?', props);
  const { revisedEntries } = props.diary;
  console.log('entries', revisedEntries);


  return (
    <div>
      <h1> Your Food Diary for {props.diary.currentDiaryDate.day} </h1> <hr />
      <div className="diary">
        <div className="displayFoods">

          <div className="listBreakfast"> <h1> Breakfast </h1>
            {props.diary && props.diary.breakfast ?
              props.diary.breakfast
                .map(entry => (
                  <li key={shortid.generate()}>
                    {entry.name}
                  </li>
                ))
              :
              null
            }
            <button onClick={() => props.selectedMealType(1)}> Add Food </button>
          </div>

          <div className="listLunch"> <h1> Lunch </h1>
            {props.diary && props.diary.lunch ?
              props.diary.lunch
                .map(entry => (
                  <li key={shortid.generate()}>
                    {entry.name}
                  </li>
                ))
              :
              null
            }
            <button onClick={() => props.selectedMealType(2)}> Add Food </button>
          </div>

          <div className="listDinner"> <h1> Dinner </h1>
            {props.diary && props.diary.dinner ?
              props.diary.dinner
                .map(entry => (
                  <li key={shortid.generate()}>
                    {entry.name}
                  </li>
                ))
              :
              null
            }
            <button onClick={() => props.selectedMealType(3)}> Add Food </button>
          </div>

          <div className="listSnacks"> <h1> Snacks </h1>
            {props.diary && props.diary.snack ?
              props.diary.snack
                .map(entry => (
                  <li key={shortid.generate()}>
                    {entry.name}
                  </li>
                ))
              :
              null
            }
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
    </div>

  );
};
