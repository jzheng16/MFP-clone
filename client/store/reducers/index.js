import { combineReducers } from 'redux';
import FoodReducer from './foods';
import authReducer from './auth';
import goalReducer from './goal';

const rootReducer = combineReducers({
  foods: FoodReducer,
  auth: authReducer,
  goal: goalReducer
});

module.exports = rootReducer;
