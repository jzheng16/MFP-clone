import {
  ADD_FOOD_TO_DIARY, SELECT_MEAL_TYPE, SELECT_DIARY_DATE,
  REVISED_ADD_FOOD_TO_DIARY, ADD_TO_BREAKFAST, ADD_TO_LUNCH, ADD_TO_DINNER, ADD_TO_SNACK,
  RECEIVE_DATABASE_QUERY, RETRIEVING_FOOD_FROM_DATABASE
} from '../actions';

const initialState = {
  entries: [],
  currentMealTypeId: 0,
  currentDiaryDate: {},
  revisedEntries: [],
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
    case REVISED_ADD_FOOD_TO_DIARY:
      newState.revisedEntries = action.payload;
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

    default:
      return state;
  }
  return newState;
};
