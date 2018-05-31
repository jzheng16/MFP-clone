import React from 'react';
import { Link } from 'react-router-dom';
import shortid from 'shortid';

// TODO: Fetch diary and display its shit on here

export default props => {
  const { breakfast, lunch, dinner } = props.diary;
  const total = [...breakfast, ...lunch, ...dinner];
  const totalCalories = total.reduce((accum, entry) => accum + (entry.calories * entry.servingSize), 0);
  const totalCarbs = total.reduce((accum, entry) => accum + (entry.carbs * entry.servingSize), 0);
  const totalProtein = total.reduce((accum, entry) => accum + (entry.protein * entry.servingSize), 0);
  const totalFat = total.reduce((accum, entry) => accum + (entry.fat * entry.servingSize), 0);


  return (

    <div>
      <h1> Your Food Diary for {props.diary.currentDiaryDate.day} </h1> <hr />
      <div className="diary">
        <div className="displayFoods">
          <h1> Breakfast </h1>
          <table className="listBreakfast">
            <thead>
              <tr>
                <th> Name </th>
                <th> Qty </th>
                <th> Calories </th>
                <th> Carbs </th>
                <th> Protein </th>
                <th> Fat </th>
              </tr>
            </thead>
            <tbody>
              {props.diary && props.diary.breakfast ?
                props.diary.breakfast
                  .map((entry, index) => (
                    <tr key={shortid.generate()}>
                      <td> {entry.name} </td>
                      <td> {entry.servingSize} </td>
                      <td> {entry.calories * entry.servingSize} </td>
                      <td> {entry.carbs * entry.servingSize} </td>
                      <td> {entry.protein * entry.servingSize} </td>
                      <td> {entry.fat * entry.servingSize} </td>
                      <td> <button onClick={(() => props.removeFood(entry.id, 1))}> Remove Food </button> </td>
                    </tr>

                  ))

                :
                null
              }
            </tbody>
          </table>
          <button onClick={() => props.selectedMealType(1)}> Add Food </button>
          <h1> Lunch </h1>
          <table className="listLunch">
            <thead>
              <tr>
                <th> Name </th>
                <th> Qty </th>
                <th> Calories </th>
                <th> Carbs </th>
                <th> Protein </th>
                <th> Fat </th>
              </tr>
            </thead>
            <tbody>
              {props.diary && props.diary.lunch ?
                props.diary.lunch
                  .map((entry, index) => (
                    <tr key={shortid.generate()}>
                      <td> {entry.name} </td>
                      <td> {entry.servingSize} </td>
                      <td> {entry.calories * entry.servingSize} </td>
                      <td> {entry.carbs * entry.servingSize} </td>
                      <td> {entry.protein * entry.servingSize} </td>
                      <td> {entry.fat * entry.servingSize} </td>
                      <td> <button onClick={(() => props.removeFood(entry.id, 2))}> Remove Food </button> </td>
                    </tr>

                  ))
                :
                null
              }
            </tbody>

          </table>
          <button onClick={() => props.selectedMealType(2)}> Add Food </button>
          <h1> Dinner </h1>
          <table className="listDinner">
            <thead>
              <tr>
                <th> Name </th>
                <th> Qty </th>
                <th> Calories </th>
                <th> Carbs </th>
                <th> Protein </th>
                <th> Fat </th>
              </tr>
            </thead>
            <tbody>
              {props.diary && props.diary.dinner ?
                props.diary.dinner
                  .map((entry, index) => (
                    <tr key={shortid.generate()}>
                      <td> {entry.name} </td>
                      <td> {entry.servingSize} </td>
                      <td> {entry.calories * entry.servingSize} </td>
                      <td> {entry.carbs * entry.servingSize} </td>
                      <td> {entry.protein * entry.servingSize} </td>
                      <td> {entry.fat * entry.servingSize} </td>
                      <td> <button onClick={(() => props.removeFood(entry.id, 3))}> Remove Food </button> </td>
                    </tr>

                  ))
                :
                null
              }
            </tbody>

          </table>
          <button onClick={() => props.selectedMealType(3)}> Add Food </button>
          <h1> Snacks </h1>
          <table className="listBreakfast">
            <thead>
              <tr>
                <th> Name </th>
                <th> Qty </th>
                <th> Calories </th>
                <th> Carbs </th>
                <th> Protein </th>
                <th> Fat </th>
              </tr>
            </thead>
            <tbody>
              {props.diary && props.diary.snack ?
                props.diary.snack
                  .map((entry, index) => (
                    <tr key={shortid.generate()}>
                      <td> {entry.name} </td>
                      <td> {entry.servingSize} </td>
                      <td> {entry.calories * entry.servingSize} </td>
                      <td> {entry.carbs * entry.servingSize} </td>
                      <td> {entry.protein * entry.servingSize} </td>
                      <td> {entry.fat * entry.servingSize} </td>
                      <td> <button onClick={(() => props.removeFood(entry.id, 4))}> Remove Food </button> </td>
                    </tr>

                  ))
                :
                null
              }
            </tbody>

          </table>
          <button onClick={() => props.selectedMealType(4)}> Add Food </button>
        </div>
        {total ?
          <table className="totalCalculations">
            <thead>
              <tr>
                <th> Calories </th>
                <th> Carbs </th>
                <th> Protein </th>
                <th> Fat </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td> {totalCalories} </td>
                <td> {totalCarbs} </td>
                <td> {totalProtein} </td>
                <td> {totalFat} </td>
              </tr>
            </tbody>
          </table>
          :
          null
        }
      </div>
    </div>

  );
};
