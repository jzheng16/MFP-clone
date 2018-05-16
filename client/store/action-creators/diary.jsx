import axios from 'axios';
import { ADD_FOOD_TO_DIARY, SELECT_MEAL_TYPE, SELECT_DIARY_DATE, REVISED_ADD_FOOD_TO_DIARY } from '../actions';

export const addFoodToDiary = food => ({
  type: ADD_FOOD_TO_DIARY,
  payload: food
});

export const revisedAddFoodToDiary = diary => ({
  type: REVISED_ADD_FOOD_TO_DIARY,
  payload: diary
});

export const fetchingDiary = (user_id, date_id) => dispatch => {
  console.log('user id?', user_id, date_id);
  console.log('user id?', { user_id, date_id });

  axios.get(`/api/diary/${date_id}`)
    .then(revisedEntries => dispatch(revisedAddFoodToDiary(revisedEntries.data)))
    .catch(err => console.error('trouble fetching diary', err));
};

export const updatingDiary = entry => dispatch => {
  axios.post('/api/diary', entry)
    .then(newEntry => {
      console.log('what is entry in action reducer?', newEntry.data);
      dispatch(revisedAddFoodToDiary(newEntry.data));
    })
    .catch(err => console.error('error updating diary db', err));
};

// Have to also dispatch an action to post to insert into diary database with food id, serving size, and type
export const addingUserFoodToDiary = entry => dispatch => {
  axios.get(`/api/food/getfood/${entry.user_food_entry[0]}`)
    .then(food => dispatch(addFoodToDiary(food.data)))
    // is this possible?
    .then(dispatch(updatingDiary(entry)))
    .catch(err => console.error('error dispatching userfood to diary', err));
};

// Fetch diary and turn the arrays into a list of foods

// Post into diary model, will be given a user id, a date (have to use to set), an array
export const selectedMealType = foodId => ({
  type: SELECT_MEAL_TYPE,
  payload: foodId
});

export const selectedDiaryDate = date => ({
  type: SELECT_DIARY_DATE,
  payload: date
});


export const gettingDiaryId = date => dispatch => {
  axios.get(`/api/date/${date}`)
    .then(dateInfo => dispatch(selectedDiaryDate(dateInfo.data)))
    .catch(err => console.error('err retrieving date ', err));
};

