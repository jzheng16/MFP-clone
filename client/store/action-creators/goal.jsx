import axios from 'axios';
import { GET_GOAL, UPDATE_GOAL } from '../actions';

export const getGoal = goal => ({
  type: GET_GOAL,
  payload: goal
});

export const updateGoal = updatedGoal => ({
  type: UPDATE_GOAL,
  payload: updatedGoal
});

export const fetchingGoal = () => dispatch => {
  axios.get('/api/goal/goal')
    .then(goals => dispatch(getGoal(goals.data)))
    .catch(err => console.error('problem getting goals', err));
};

export const updatingGoal = () => dispatch => {
  axios.post('/api/goal/goal')
    .then(updatedGoal => dispatch(updateGoal(updatedGoal.data)))
    .catch(err => console.error('problem updating goals ', err));
};
