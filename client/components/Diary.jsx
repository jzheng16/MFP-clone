import React from 'react';
import { Link } from 'react-router-dom';
import shortid from 'shortid';
import styled from 'styled-components';
import { Button } from './StyledComponents';
import Delete from '../../public/delete.svg';


const DiaryHeader = styled.div`
  width: 90%;
  height: auto;
  border-bottom: 2px solid #111111;
  display: flex;
  justify-content: center;
  margin-top: 2em;
  
`;

const StyledLeftButton = styled(Button)`
  background-color: #0070BF;
  margin-right: 0;
`;
const StyledRightButton = styled(Button)`
  background-color: #0070BF;
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

const Title = styled.span`
  display: inline-block;
  color: white;
  height:36px;
  background-color:  #0070BF;
`;

const ButtonImage = styled.img`
  height: 27px;
  width: 27px;
  fill: black;
`;

const NutritionTable = styled.table`
  width: 80%;
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

const BreakfastHeader = styled.h2`
  margin: 0;
`;

const NutritionData = styled.td`
  text-align: center;
  /* border-bottom: 1px dotted #000000; */
  background-color: #f6f6f6;
`;

const FoodName = styled.td`
  max-width: 0;
  text-align: left;
   overflow: hidden;
  text-overflow: ellipsis;
  background-color: #f6f6f6;
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
Fix Header
Find way to decrease render calculations
Implement Remaining and Goals
*/

export default ({
  diary, removeFood, previousDayDiary, nextDayDiary, selectedMealType
}) => {
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
      <DiaryHeader>
        <Title>
          <StyledLeftButton onClick={previousDayDiary}> <ButtonImage src="/left-pointing-arrow.svg" /> </StyledLeftButton>
          Your Food Diary for {diary.currentDiaryDate.day}
          <StyledRightButton onClick={nextDayDiary}> <ButtonImage src="/right-pointing-arrow.svg" /> </StyledRightButton>
        </Title>
      </DiaryHeader>

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
          <tr><td><h2> Lunch </h2></td></tr>
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
          <tr><td><h2> Dinner </h2></td></tr>
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
          <tr><td><h2> Snacks </h2></td></tr>
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
            <NutritionData> {totalCalories} </NutritionData>
            <NutritionData> {totalCarbs} </NutritionData>
            <NutritionData> {totalProtein} </NutritionData>
            <NutritionData> {totalFat} </NutritionData>
          </tr>
          <tr>
            <SummaryTitle>Remaining</SummaryTitle>
            <td></td>
            <NutritionData> {totalCalories} </NutritionData>
            <NutritionData> {totalCarbs} </NutritionData>
            <NutritionData> {totalProtein} </NutritionData>
            <NutritionData> {totalFat} </NutritionData>
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
