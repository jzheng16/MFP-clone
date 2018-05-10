import { combineReducers } from 'redux';
import FoodReducer from './foods';
import authReducer from './auth';

const rootReducer = combineReducers({
  foods: FoodReducer,
  auth: authReducer
});

module.exports = rootReducer;
