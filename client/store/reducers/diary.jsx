import { ADD_FOOD_TO_DIARY } from '../actions';

const initialState = {
  diary: []
};

export default (state = initialState, action) => {
  const newState = Object.assign({}, state);
  switch (action.type) {
    case ADD_FOOD_TO_DIARY:
      newState.diary = newState.diary.concat(action.payload);
      break;
    default:
      return state;
  }
  return newState;
};
