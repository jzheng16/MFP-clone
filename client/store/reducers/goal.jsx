import { GET_GOAL, UPDATE_GOAL } from '../actions';

const initialState = {
  goal: {
    weight: 0,
    calorie: 0,
    carbs: 0,
    fat: 0,
    protein: 0
  }
};

export default (state = initialState, action) => {
  const newState = Object.assign({}, state);
  switch (action.type) {
    case GET_GOAL:
      newState.goal = action.payload;
      break;
    // Do I even need update goal? It is the same as get goal.. i feel
    case UPDATE_GOAL:
      newState.goal = action.payload;
      break;
    default:
      return state;
  }
  return newState;
};
