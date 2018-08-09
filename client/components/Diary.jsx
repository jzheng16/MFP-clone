import React from 'react';
import { Link } from 'react-router-dom';
import shortid from 'shortid';
import styled from 'styled-components';

const StyledLeftButton = styled.button`
  display: inline-block;
  background-image: url('leftarrow.png') no-repeat;
  width: 5em;
  height: 5em;
  background-position: center center;
`;
const StyledRightButton = styled.button`
  background: url('rightarrow.png') no-repeat;
  max-width: 100%;
  height: auto;
`;

const Title = styled.h1`
  display: inline-block;
`;

export default props => {
  const { entries } = props.diary;
  const breakfast = entries.filter(food => food.mealType === 1);
  const lunch = entries.filter(food => food.mealType === 2);
  const dinner = entries.filter(food => food.mealType === 3);
  const snack = entries.filter(food => food.mealType === 4);
  const totalCalories = entries.reduce((accum, entry) => accum + (entry.food.calories * entry.qty), 0);
  const totalCarbs = entries.reduce((accum, entry) => accum + (entry.food.carbs * entry.qty), 0);
  const totalProtein = entries.reduce((accum, entry) => accum + (entry.food.protein * entry.qty), 0);
  const totalFat = entries.reduce((accum, entry) => accum + (entry.food.fat * entry.qty), 0);

  return (
    <div>
      <StyledLeftButton onClick={props.previousDayDiary}> </StyledLeftButton>
      <Title> Your Food Diary for {props.diary.currentDiaryDate.day} </Title>
      <StyledRightButton onClick={props.nextDayDiary}> </StyledRightButton>
      <hr />
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
              {breakfast && breakfast
                .map(entry => (
                  <tr key={shortid.generate()}>
                    <td> {entry.food.name} </td>
                    <td> {entry.qty} </td>
                    <td> {entry.food.calories * entry.qty} </td>
                    <td> {entry.food.carbs * entry.qty} </td>
                    <td> {entry.food.protein * entry.qty} </td>
                    <td> {entry.food.fat * entry.qty} </td>
                    <td> <button onClick={(() => props.removeFood(entry.food.id, 1, entry.databaseId))}> Remove Food </button> </td>
                  </tr>
                ))
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
              {lunch && lunch
                .map(entry => (
                  <tr key={shortid.generate()}>
                    <td> {entry.food.name} </td>
                    <td> {entry.qty} </td>
                    <td> {entry.food.calories * entry.qty} </td>
                    <td> {entry.food.carbs * entry.qty} </td>
                    <td> {entry.food.protein * entry.qty} </td>
                    <td> {entry.food.fat * entry.qty} </td>
                    <td> <button onClick={(() => props.removeFood(entry.food.id, 2, entry.databaseId))}> Remove Food </button> </td>
                  </tr>
                ))
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
              {dinner && dinner
                .map(entry => (
                  <tr key={shortid.generate()}>
                    <td> {entry.food.name} </td>
                    <td> {entry.qty} </td>
                    <td> {entry.food.calories * entry.qty} </td>
                    <td> {entry.food.carbs * entry.qty} </td>
                    <td> {entry.food.protein * entry.qty} </td>
                    <td> {entry.food.fat * entry.qty} </td>
                    <td> <button onClick={(() => props.removeFood(entry.food.id, 3, entry.databaseId))}> Remove Food </button> </td>
                  </tr>
                ))
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
              {snack && snack
                .map(entry => (
                  <tr key={shortid.generate()}>
                    <td> {entry.food.name} </td>
                    <td> {entry.qty} </td>
                    <td> {entry.food.calories * entry.qty} </td>
                    <td> {entry.food.carbs * entry.qty} </td>
                    <td> {entry.food.protein * entry.qty} </td>
                    <td> {entry.food.fat * entry.qty} </td>
                    <td> <button onClick={(() => props.removeFood(entry.food.id, 4, entry.databaseId))}> Remove Food </button> </td>
                  </tr>
                ))
              }
            </tbody>

          </table>
          <button onClick={() => props.selectedMealType(4)}> Add Food </button>
        </div>
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

      </div>
    </div>
  );
};
