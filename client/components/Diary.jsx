import React from 'react';
import { Link } from 'react-router-dom';
import shortid from 'shortid';
import styled from 'styled-components';
import { Button } from './StyledComponents';
import Delete from '../../public/delete.svg';
import left from '../../public/left-pointing-arrow.svg';
import right from '../../public/right-pointing-arrow.svg';

const Title = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  color: white;
  width: 100%;
  height: 3em;
  
  border-bottom: 2px solid #111111;
  margin-top: 2em;
  flex-grow: 1;
`;

const StyledLeftButton = styled(Button)`
  background-color: #0070BF;
  background-image: url(${left});
  background-repeat: no-repeat;
  background-size: contain;
  width: 3em;
  height: 100%;
  border: none;
  cursor: pointer;
  border-radius: none;
`;

const DiaryHeader = styled.p`
  line-height: 1.5;
  margin: 0;
  width: 50%;
  text-align: center;
  font-size: 2em;
  background-color:  #0070BF;
  height: 100%;

  @media (max-width: 868px) {
    width: 70%;
    font-size: 1.5em;
    line-height: 1.8;
  }

  @media (max-width: 500px) {
    width: 70%;
    font-size: 1.3em;
    line-height: 2.5;
  }
  
  
  
`;

const StyledRightButton = styled(Button)`
  background-color: #0070BF;
  background-image: url(${right});
  background-repeat: no-repeat;
  background-size: contain;
  width: 3em;
  height: 100%;
  border: none;
  cursor: pointer;
  border-radius: none;
`;

const DeleteButton = styled.button`
  background-image: url(${Delete});
  background-repeat: no-repeat;
  background-size: contain;
  width: 1em;
  height: 1em;
  border: none;
  cursor: pointer;
`;


const NutritionTable = styled.table`
  width: 90%;
  margin: 20px auto;
  table-layout: auto;
`;

const TableHeader = styled.th`
  border-collapse: collapse;
  background-color: #0070BF;
  color: white;
  height: 20px;
`;
const NameHeader = styled.th`
  border-collapse: collapse;
  background-color: transparent;
  width: 50%;
  text-align: left;
`;

const BreakfastHeader = styled.h1`
  margin: 0;
  /* temporary for screenshot */
`;


const NutritionData = styled.td`
  text-align: center;
  /* border-bottom: 1px dotted #000000; */
  background-color: #f6f6f6;
  /* font-size: .8em; */
`;

const RemainingMacros = styled.td`
  text-align: center;
  background-color: #f6f6f6;
  /* font-size: .8em; */
  color: ${props => (props.over ? 'red' : 'green')};
`;

const FoodName = styled.td`
  max-width: 0;
  text-align: left;
  overflow: hidden;
  text-overflow: ellipsis;
  background-color: #f6f6f6;
  /* font-size: .8em; */
`;

const SummaryTitle = styled.td`
  text-align: right;
`;

const AddFood = styled(Button)`
  font-size: .8em;
  padding: 5px 5px;
  background-color:  #41addd;
  color: white;
  border-radius: 10px;
`;

const InvisibleDiv = styled.div`
  padding-bottom: 3em;
`;

const getTotal = (entryArr, property) => entryArr.reduce((total, entry) => total + (entry.food[property] * entry.qty), 0);

/*
TODO:
Find way to decrease render calculations
Implement Remaining and Goals
*/

export default ({
  diary, removeFood, previousDayDiary, nextDayDiary, selectedMealType, goal
}) => {
  console.log('goal? ', goal);

  const { entries } = diary;
  const breakfast = entries.filter(food => food.mealType === 1);
  const breakfastTotalCalories = getTotal(breakfast, 'calories');
  const breakfastTotalCarbs = getTotal(breakfast, 'carbs');
  const breakfastTotalProtein = getTotal(breakfast, 'protein');
  const breakfastTotalFat = getTotal(breakfast, 'fat');
  const lunch = entries.filter(food => food.mealType === 2);
  const lunchTotalCalories = getTotal(lunch, 'calories');
  const lunchTotalCarbs = getTotal(lunch, 'carbs');
  const lunchTotalProtein = getTotal(lunch, 'protein');
  const lunchTotalFat = getTotal(lunch, 'fat');
  const dinner = entries.filter(food => food.mealType === 3);
  const dinnerTotalCalories = getTotal(dinner, 'calories');
  const dinnerTotalCarbs = getTotal(dinner, 'carbs');
  const dinnerTotalProtein = getTotal(dinner, 'protein');
  const dinnerTotalFat = getTotal(dinner, 'fat');
  const snack = entries.filter(food => food.mealType === 4);
  const snackTotalCalories = getTotal(snack, 'calories');
  const snackTotalCarbs = getTotal(snack, 'carbs');
  const snackTotalProtein = getTotal(snack, 'protein');
  const snackTotalFat = getTotal(snack, 'fat');
  const totalCalories = getTotal(entries, 'calories');
  const totalCarbs = getTotal(entries, 'carbs');
  const totalProtein = getTotal(entries, 'protein');
  const totalFat = getTotal(entries, 'fat');


  return (
    <div>

      <Title>
        <StyledLeftButton onClick={previousDayDiary}></StyledLeftButton>
        <DiaryHeader> Your Food Diary for {diary.currentDiaryDate.day} </DiaryHeader>
        <StyledRightButton onClick={nextDayDiary}></StyledRightButton>
      </Title>


      <NutritionTable className="listBreakfast">
        <thead>
          <tr>
            <NameHeader> <BreakfastHeader> Breakfast  </BreakfastHeader>   </NameHeader>
            <TableHeader> Qty </TableHeader>
            <TableHeader> Calories </TableHeader>
            <TableHeader> Carbs </TableHeader>
            <TableHeader> Protein </TableHeader>
            <TableHeader> Fat </TableHeader>
          </tr>
        </thead>
        <tbody>
          {breakfast && breakfast
            .map(entry => (
              <tr key={shortid.generate()}>
                <FoodName> {entry.food.name} </FoodName>
                <NutritionData> {entry.qty} </NutritionData>
                <NutritionData> {entry.food.calories * entry.qty} </NutritionData>
                <NutritionData> {entry.food.carbs * entry.qty} </NutritionData>
                <NutritionData> {entry.food.protein * entry.qty} </NutritionData>
                <NutritionData> {entry.food.fat * entry.qty} </NutritionData>
                <NutritionData>
                  <DeleteButton onClick={(() => removeFood(entry.food.id, 1, entry.databaseId))}>
                  </DeleteButton>
                </NutritionData>
              </tr>
            ))
          }
          <tr>
            <td><AddFood onClick={() => selectedMealType(1)}> Add Food </AddFood></td>
            <td>   </td>
            <NutritionData> {breakfastTotalCalories} </NutritionData>
            <NutritionData> {breakfastTotalCarbs} </NutritionData>
            <NutritionData> {breakfastTotalProtein} </NutritionData>
            <NutritionData> {breakfastTotalFat} </NutritionData>
          </tr>
          <tr><td><h1> Lunch </h1></td></tr>
          {lunch && lunch
            .map(entry => (
              <tr key={shortid.generate()}>
                <FoodName> {entry.food.name} </FoodName>
                <NutritionData> {entry.qty} </NutritionData>
                <NutritionData> {entry.food.calories * entry.qty} </NutritionData>
                <NutritionData> {entry.food.carbs * entry.qty} </NutritionData>
                <NutritionData> {entry.food.protein * entry.qty} </NutritionData>
                <NutritionData> {entry.food.fat * entry.qty} </NutritionData>
                <NutritionData>
                  <DeleteButton onClick={(() => removeFood(entry.food.id, 2, entry.databaseId))}>
                  </DeleteButton>
                </NutritionData>
              </tr>
            ))
          }
          <tr>
            <td><AddFood onClick={() => selectedMealType(2)}> Add Food </AddFood></td>
            <td>   </td>
            <NutritionData> {lunchTotalCalories} </NutritionData>
            <NutritionData> {lunchTotalCarbs} </NutritionData>
            <NutritionData> {lunchTotalProtein} </NutritionData>
            <NutritionData> {lunchTotalFat} </NutritionData>
          </tr>
          <tr><td><h1> Dinner </h1></td></tr>
          {dinner && dinner
            .map(entry => (
              <tr key={shortid.generate()}>
                <FoodName> {entry.food.name} </FoodName>
                <NutritionData> {entry.qty} </NutritionData>
                <NutritionData> {entry.food.calories * entry.qty} </NutritionData>
                <NutritionData> {entry.food.carbs * entry.qty} </NutritionData>
                <NutritionData> {entry.food.protein * entry.qty} </NutritionData>
                <NutritionData> {entry.food.fat * entry.qty} </NutritionData>
                <NutritionData>
                  <DeleteButton onClick={(() => removeFood(entry.food.id, 3, entry.databaseId))}>
                  </DeleteButton>
                </NutritionData>
              </tr>
            ))
          }
          <tr>
            <td><AddFood onClick={() => selectedMealType(3)}> Add Food </AddFood></td>
            <td>   </td>
            <NutritionData> {dinnerTotalCalories} </NutritionData>
            <NutritionData> {dinnerTotalCarbs} </NutritionData>
            <NutritionData> {dinnerTotalProtein} </NutritionData>
            <NutritionData> {dinnerTotalFat} </NutritionData>
          </tr>
          <tr><td><h1> Snacks </h1></td></tr>
          {snack && snack
            .map(entry => (
              <tr key={shortid.generate()}>
                <FoodName> {entry.food.name} </FoodName>
                <NutritionData> {entry.qty} </NutritionData>
                <NutritionData> {entry.food.calories * entry.qty} </NutritionData>
                <NutritionData> {entry.food.carbs * entry.qty} </NutritionData>
                <NutritionData> {entry.food.protein * entry.qty} </NutritionData>
                <NutritionData> {entry.food.fat * entry.qty} </NutritionData>
                <NutritionData>
                  <DeleteButton onClick={(() => removeFood(entry.food.id, 4, entry.databaseId))}>
                  </DeleteButton>
                </NutritionData>
              </tr>
            ))
          }
          <tr>
            <td><AddFood onClick={() => selectedMealType(4)}> Add Food </AddFood></td>
            <td>   </td>
            <NutritionData> {snackTotalCalories} </NutritionData>
            <NutritionData> {snackTotalCarbs} </NutritionData>
            <NutritionData> {snackTotalProtein} </NutritionData>
            <NutritionData> {snackTotalFat} </NutritionData>
          </tr>

          <tr><td><InvisibleDiv></InvisibleDiv></td></tr>


          <tr>
            <SummaryTitle>Total</SummaryTitle>
            <td></td>
            <NutritionData> {totalCalories} </NutritionData>
            <NutritionData> {totalCarbs} </NutritionData>
            <NutritionData> {totalProtein} </NutritionData>
            <NutritionData> {totalFat} </NutritionData>
          </tr>
          <tr>
            <SummaryTitle>Goal</SummaryTitle>
            <td></td>
            <NutritionData> {goal.calorie} </NutritionData>
            <NutritionData> {goal.carbs} </NutritionData>
            <NutritionData> {goal.protein} </NutritionData>
            <NutritionData> {goal.fat} </NutritionData>
          </tr>
          <tr>
            <SummaryTitle>Remaining</SummaryTitle>
            <td></td>
            <RemainingMacros over={goal.calorie - totalCalories < 0}> {goal.calorie - totalCalories} </RemainingMacros>
            <RemainingMacros over={goal.carbs - totalCarbs < 0}> {goal.carbs - totalCarbs} </RemainingMacros>
            <RemainingMacros over={goal.protein - totalProtein < 0}> {goal.protein - totalProtein} </RemainingMacros>
            <RemainingMacros over={goal.fat - totalFat < 0}> {goal.fat - totalFat} </RemainingMacros>
          </tr>


          <tr>
            <NameHeader></NameHeader>
            <th> </th>
            <TableHeader> Calories </TableHeader>
            <TableHeader> Carbs </TableHeader>
            <TableHeader> Protein </TableHeader>
            <TableHeader> Fat </TableHeader>
          </tr>


        </tbody>
      </NutritionTable>
    </div>
  );
};
