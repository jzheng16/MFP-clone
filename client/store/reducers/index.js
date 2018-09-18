import { combineReducers } from 'redux';

import FoodReducer from './foods';
import authReducer from './auth';
import goalReducer from './goal';
import diaryReducer from './diary';
import toastReducer from './toasts';
import measurementReducer from './measurement';

const rootReducer = combineReducers({
  foods: FoodReducer,
  auth: authReducer,
  goal: goalReducer,
  diary: diaryReducer,
  toast: toastReducer,
  measurement: measurementReducer
});

export default rootReducer;
