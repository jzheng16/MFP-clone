import { GET_USER, REMOVE_USER } from '../actions';


const initialState = {
  user: {}
};

export default (state = initialState, action) => {
  const newState = Object.assign({}, state);
  switch (action.type) {
    case GET_USER:
      newState.user = action.payload;
      break;
    case REMOVE_USER:
      break;
    default:
      return state;
  }
  return newState;
};

