import { GET_USER, REMOVE_USER, UPDATE_USER, SET_AUTH_ERROR, REMOVE_AUTH_ERROR } from '../actions';


const initialState = { user: {}, error: '' };

export default (state = initialState, action) => {
  const newState = Object.assign({}, state);
  switch (action.type) {
    case GET_USER:
      newState.user = action.payload;
      break;
    case REMOVE_USER:
      newState.user = {};
      break;
    case UPDATE_USER:
      newState.user = action.payload;
      break;

    case SET_AUTH_ERROR:
      newState.error = action.payload;
      break;
    case REMOVE_AUTH_ERROR:
      newState.error = '';
      break;

    default:
      return state;
  }
  return newState;
};

