import {
  ADD_FOOD_TO_DIARY, ADD_DB_FOOD_TO_DIARY, SELECT_MEAL_TYPE, SELECT_DIARY_DATE,
  RECEIVE_DATABASE_QUERY, REMOVE_USER_FOOD_FROM_DIARY, REMOVE_DB_FOOD_FROM_DIARY,
} from '../actions';

const loadState = () => {
  try {
    const serializedState = localStorage.getItem('state');
    console.log('HELLO HERE I AM LOADING', serializedState);
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};

const initialState = loadState() || {
  entries: [],
  currentMealTypeId: 0,
  currentDiaryDate: {},
  databaseQuery: []
};


export default (state = initialState, action) => {
  const newState = Object.assign({}, state);
  let existingFoodIndex = -1;
  switch (action.type) {
    case ADD_FOOD_TO_DIARY:

      existingFoodIndex = newState.entries.findIndex(entry => entry.id === action.payload.id);
      if (existingFoodIndex > -1) {
        newState.entries[existingFoodIndex].qty = action.payload.qty;
      } else {
        newState.entries = newState.entries.concat(action.payload);
      }
      break;
    case ADD_DB_FOOD_TO_DIARY:

      existingFoodIndex = newState.entries.findIndex(entry => entry.id === action.payload.id && entry.databaseId === action.payload.databaseId);

      if (existingFoodIndex > -1) {
        newState.entries[existingFoodIndex].qty = action.payload.qty;
      } else {
        newState.entries = newState.entries.concat(action.payload);
      }
      break;
    case SELECT_MEAL_TYPE:
      newState.currentMealTypeId = action.payload;
      break;
    case SELECT_DIARY_DATE:
      newState.entries = [];
      newState.currentDiaryDate = action.payload;
      localStorage.setItem('state', JSON.stringify(action.payload));
      break;
    case RECEIVE_DATABASE_QUERY:
      newState.databaseQuery = action.payload;
      break;
    case REMOVE_USER_FOOD_FROM_DIARY:
      newState.entries = newState.entries.filter(entry => entry.mealType !== action.payload.mealType || entry.food_id !== action.payload.food_id);
      break;
    case REMOVE_DB_FOOD_FROM_DIARY:
      newState.entries = newState.entries.filter(entry => entry.mealType !== action.payload.mealType || entry.databaseId !== action.payload.databaseId);
      break;
    default:
      return state;
  }
  return newState;
};
