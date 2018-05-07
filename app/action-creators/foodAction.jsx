import axios from 'axios';
import { ADD_FOOD, GET_FOOD } from '../actions';

export const addFood = food => ({
  type: ADD_FOOD,
  food
});

export const getFood = food => ({
  type: GET_FOOD,
  food
});

export const createFood = food => dispatch => {
  axios.post('/api/food/addfood', food)
    .then(createdFood => dispatch(addFood(createdFood.data)))
    .catch(err => console.error('error adding food', err));
};

export const fetchFood = () => dispatch => {
  axios.get('/api/food/getfood')
    .then(foods => dispatch(foods.data))
    .catch(err => console.error('error getting foods', err));
};

