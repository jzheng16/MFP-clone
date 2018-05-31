import { ADD_FOOD, GET_FOOD } from '../actions';

const initialState = {
  allFoods: [],
  food: {}
};

// When posting something, you don't care about it as long as it is inside the database and then updated correctly amongst the list of foods
export default (state = initialState, action) => {
  const newState = Object.assign({}, state);
  switch (action.type) {
    case ADD_FOOD:
      newState.allFoods = newState.allFoods.concat(action.food);
      break;
    case GET_FOOD:
      newState.allFoods = action.allFoods;
      break;
    default:
      return state;
  }
  return newState;
};
