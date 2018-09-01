import { GET_MEASUREMENT, UPDATE_MEASUREMENT } from '../actions';

const initialState = { measurement: {} };


export default (state = initialState, action) => {
  const newState = Object.assign({}, state);
  switch (action.type) {
    case GET_MEASUREMENT:
      newState.measurement = action.payload;
      break;
    case UPDATE_MEASUREMENT:
      newState.measurement = action.payload;
      break;
    default:
      return state;
  }
  return newState;
};

