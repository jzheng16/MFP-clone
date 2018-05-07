import { combineReducers } from 'redux';
import FoodReducer from './foods';

const rootReducer = combineReducers({
  foods: FoodReducer
});

module.exports = rootReducer;
