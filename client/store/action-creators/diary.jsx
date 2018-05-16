import axios from 'axios';
import { ADD_FOOD_TO_DIARY } from '../actions';

export const addFoodToDiary = food => ({
  type: ADD_FOOD_TO_DIARY,
  payload: food
});

// Have to also dispatch an action to post to insert into diary database with food id, serving size, and type
export const addingUserFoodToDiary = foodId => dispatch => {
  axios.get(`/api/food/getfood/${foodId}`)
    .then(food => dispatch(addFoodToDiary(food.data)))
    .catch(err => console.error('error dispatching userfood to diary', err));
};

