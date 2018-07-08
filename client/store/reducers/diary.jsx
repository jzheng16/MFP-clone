import {
  ADD_FOOD_TO_DIARY, SELECT_MEAL_TYPE, SELECT_DIARY_DATE,
  ADD_TO_BREAKFAST, ADD_TO_LUNCH, ADD_TO_DINNER, ADD_TO_SNACK,
  RECEIVE_DATABASE_QUERY, REMOVE_USER_FOOD_FROM_DIARY, REMOVE_DB_FOOD_FROM_DIARY, REMOVE_FROM_BREAKFAST, REMOVE_FROM_LUNCH, REMOVE_FROM_DINNER, REMOVE_FROM_SNACK
} from '../actions';

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
  switch (action.type) {
    case ADD_FOOD_TO_DIARY:
      newState.entries = newState.entries.concat(action.payload);
      break;
    case SELECT_MEAL_TYPE:
      newState.currentMealTypeId = action.payload;
      break;
    case SELECT_DIARY_DATE:
      newState.currentDiaryDate = action.payload;
      break;
    case ADD_TO_BREAKFAST:
      newState.breakfast = newState.breakfast.concat(action.payload);
      break;
    case ADD_TO_LUNCH:
      newState.lunch = newState.lunch.concat(action.payload);
      break;
    case ADD_TO_DINNER:
      newState.dinner = newState.dinner.concat(action.payload);
      break;
    case ADD_TO_SNACK:
      newState.snack = newState.snack.concat(action.payload);
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
