import { ADD_TOAST, DELETE_TOAST } from '../actions';


export const addToast = (options = {}) => ({
  type: ADD_TOAST,
  payload: options
});

export const deleteToast = toastId => ({
  type: DELETE_TOAST,
  payload: toastId
});

