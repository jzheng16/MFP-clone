import axios from 'axios';
import { GET_GOAL, UPDATE_GOAL, ERROR_GOAL } from '../actions';

export const getGoal = goal => ({
  type: GET_GOAL,
  payload: goal
});

export const updateGoal = updatedGoal => ({
  type: UPDATE_GOAL,
  payload: updatedGoal
});

export const errorGoal = error => ({
  type: ERROR_GOAL,
  payload: error
});

export const fetchingGoal = () => dispatch => {
  axios.get('/api/goal/goal')
    .then(goals => {
      if (goals.data) {
        dispatch(getGoal(goals.data));
      } else {
        dispatch(errorGoal('no goal found'));
      }
    })
    .catch(err => console.error('problem getting goals', err));
};

export const updatingGoal = goal => dispatch => {
  axios.post('/api/goal/updateGoal', goal)
    .then(updatedGoal => {
      console.log('updated Goal', updatedGoal.data);
      dispatch(updateGoal(updatedGoal.data));
    })
    .catch(err => console.error('problem updating goals ', err));
};

export const creatingGoal = goal => dispatch => {
  axios.post('/api/goal/updateGoal', goal)
    .then(newGoal => {
      console.log('Goal ', newGoal.data);
      dispatch(updateGoal(newGoal.data));
    })
    .catch(err => console.error('problem updating goals ', err));
};
