import { ADD_TOAST, DELETE_TOAST } from '../actions';

const initialState = { toasts: [] };

export default (state = initialState, action) => {
  const newState = Object.assign({}, state);
  switch (action.type) {
    case ADD_TOAST:
      newState.toasts = [...newState.toasts, action.payload];
      break;
    case DELETE_TOAST:
      newState.toasts = newState.toasts.filter(toasts => toasts.id !== action.payload);
      break;
    default:
      return state;
  }
  return newState;
};

