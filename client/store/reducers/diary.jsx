import {
  ADD_FOOD_TO_DIARY, SELECT_MEAL_TYPE, SELECT_DIARY_DATE,
  ADD_TO_BREAKFAST, ADD_TO_LUNCH, ADD_TO_DINNER, ADD_TO_SNACK,
  RECEIVE_DATABASE_QUERY, REMOVE_USER_FOOD_FROM_DIARY, REMOVE_DB_FOOD_FROM_DIARY, REMOVE_FROM_BREAKFAST, REMOVE_FROM_LUNCH, REMOVE_FROM_DINNER, REMOVE_FROM_SNACK
} from '../actions';

import _ from 'lodash';

const initialState = {
  entries: [],
  currentMealTypeId: 0,
  currentDiaryDate: {},
  breakfast: [],
  lunch: [],
  dinner: [],
  snack: [],
  databaseQuery: {}
};

export default (state = initialState, action) => {
  const newState = Object.assign({}, state);
  let existingFoodIndex = -1;
  switch (action.type) {
    case ADD_FOOD_TO_DIARY:
      existingFoodIndex = _.findIndex(newState.entries, { id: action.payload.id });
      if (existingFoodIndex > -1) {
        newState.entries[existingFoodIndex].qty = action.payload.qty;
      }
      else {
        newState.entries = newState.entries.concat(action.payload);
      }
      break;
    case SELECT_MEAL_TYPE:
      newState.currentMealTypeId = action.payload;
      break;
    case SELECT_DIARY_DATE:
      newState.currentDiaryDate = action.payload;
      break;
    case ADD_TO_BREAKFAST:
      existingFoodIndex = _.findIndex(newState.breakfast, { id: action.payload.id });
      if (existingFoodIndex > -1) {
        newState.breakfast[existingFoodIndex].servingSize += action.payload.servingSize;
      }
      else {
        newState.breakfast = newState.breakfast.concat(action.payload);
      }
      break;
    case ADD_TO_LUNCH:
      existingFoodIndex = _.findIndex(newState.lunch, { id: action.payload.id });
      if (existingFoodIndex > -1) {
        newState.lunch[existingFoodIndex].servingSize += action.payload.servingSize;
      }
      else {
        newState.lunch = newState.lunch.concat(action.payload);
      }
      break;
    case ADD_TO_DINNER:
      existingFoodIndex = _.findIndex(newState.dinner, { id: action.payload.id });
      if (existingFoodIndex > -1) {
        newState.dinner[existingFoodIndex].servingSize += action.payload.servingSize;
      }
      else {
        newState.dinner = newState.dinner.concat(action.payload);
      }
      break;
    case ADD_TO_SNACK:
      existingFoodIndex = _.findIndex(newState.snack, { id: action.payload.id });
      if (existingFoodIndex > -1) {
        newState.snack[existingFoodIndex].servingSize += action.payload.servingSize;
      }
      else {
        newState.snack = newState.snack.concat(action.payload);
      }
      break;
    case RECEIVE_DATABASE_QUERY:
      newState.databaseQuery = action.payload;
      break;
    case REMOVE_USER_FOOD_FROM_DIARY:
      newState.entries.user_food_entry = newState.entries.user_food_entry.filter(entry => entry !== action.payload);
      break;
    case REMOVE_DB_FOOD_FROM_DIARY:
      newState.entries.db_food_entry = newState.entries.db_food_entry.filter(entry => entry !== action.payload);
      break;
    case REMOVE_FROM_BREAKFAST:
      newState.breakfast = newState.breakfast.filter(entry => entry.id !== action.payload);
      break;
    case REMOVE_FROM_LUNCH:
      newState.lunch = newState.lunch.filter(entry => entry.id !== action.payload);
      break;
    case REMOVE_FROM_DINNER:
      newState.dinner = newState.dinner.filter(entry => entry.id !== action.payload);
      break;
    case REMOVE_FROM_SNACK:
      newState.snack = newState.snack.filter(entry => entry.id !== action.payload);
      break;


    default:
      return state;
  }
  return newState;
};
