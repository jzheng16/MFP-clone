import axios from 'axios';
import { ADD_FOOD_TO_DIARY, SELECT_MEAL_TYPE, SELECT_DIARY_DATE, REVISED_ADD_FOOD_TO_DIARY, ADD_TO_BREAKFAST, ADD_TO_LUNCH, ADD_TO_DINNER, ADD_TO_SNACK } from '../actions';

export const addFoodToDiary = food => ({
  type: ADD_FOOD_TO_DIARY,
  payload: food
});

export const revisedAddFoodToDiary = diary => ({
  type: REVISED_ADD_FOOD_TO_DIARY,
  payload: diary
});

export const addToBreakfast = food => ({
  type: ADD_TO_BREAKFAST,
  payload: food
});
export const addToLunch = food => ({
  type: ADD_TO_LUNCH,
  payload: food
});
export const addToDinner = food => ({
  type: ADD_TO_DINNER,
  payload: food
});
export const addToSnack = food => ({
  type: ADD_TO_SNACK,
  payload: food
});

export const mappingDiaryDataToFoodData = (foodId, mealTypeId) => dispatch => {
  switch (mealTypeId) {
    case 1:
      axios.get(`/api/food/getfood/${foodId}`)
        .then(food => dispatch(addToBreakfast(food.data)))
        .catch(err => console.error('trouble with mapping diary to food ', err));
      break;
    case 2:
      axios.get(`/api/food/getfood/${foodId}`)
        .then(food => dispatch(addToLunch(food.data)))
        .catch(err => console.error('trouble with mapping diary to food ', err));
      break;
    case 3:
      axios.get(`/api/food/getfood/${foodId}`)
        .then(food => dispatch(addToDinner(food.data)))
        .catch(err => console.error('trouble with mapping diary to food ', err));
      break;
    case 4:
      axios.get(`/api/food/getfood/${foodId}`)
        .then(food => dispatch(addToSnack(food.data)))
        .catch(err => console.error('trouble with mapping diary to food ', err));
      break;
    default:
      break;
  }
};

// Fetch diary and turn the arrays into a list of foods
export const fetchingDiary = (user_id, date_id) => dispatch => {
  axios.get(`/api/diary/${date_id}`)
    // This is where I add the logic to retrieve food data from database and sort depending on breakfast lunch and dinner?
    .then(diary => {
      if (diary.data.user_food_entry) {
        diary.data.user_food_entry.forEach(entry => {
          dispatch(mappingDiaryDataToFoodData(entry[0], entry[1]));
        });
        // ESLINT ERROR
        // for (entry of revisedEntries.data.user_food_entry) {
        //   dispatch(mappingDiaryDataToFoodData(entry[0], entry[1]));
        // }
      }
      dispatch(revisedAddFoodToDiary(diary.data))
        .catch(err => console.error('trouble fetching diary', err));
    });
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

