import { ADD_FOOD_TO_DIARY, SELECT_MEAL_TYPE, SELECT_DIARY_DATE, REVISED_ADD_FOOD_TO_DIARY } from '../actions';

const initialState = {
  entries: [],
  currentMealTypeId: 0,
  currentDiaryDate: {},
  revisedEntries: []
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

    default:
      return state;
  }
  return newState;
};
