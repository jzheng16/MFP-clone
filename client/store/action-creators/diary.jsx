import axios from 'axios';
import {
  ADD_FOOD_TO_DIARY, SELECT_MEAL_TYPE, SELECT_DIARY_DATE,
  ADD_TO_BREAKFAST, ADD_TO_LUNCH, ADD_TO_DINNER, ADD_TO_SNACK, RECEIVE_DATABASE_QUERY,
  RETRIEVING_FOOD_FROM_DATABASE
} from '../actions';
import API_KEY from '../../../config';
import { addFood } from './foodAction';

export const addFoodToDiary = food => ({
  type: ADD_FOOD_TO_DIARY,
  payload: food
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

export const mappingUserDiaryDataToFoodData = (foodId, mealTypeId) => dispatch => {
  axios.get(`/api/food/getfood/${foodId}`)
    .then(food => {
      if (mealTypeId === 1) {
        dispatch(addToBreakfast(food.data));
      } else if (mealTypeId === 2) {
        dispatch(addToLunch(food.data));
      } else if (mealTypeId === 3) {
        dispatch(addToDinner(food.data));
      } else {
        dispatch(addToSnack(food.data));
      }
    })
    .catch(err => console.error('trouble with mapping diary to food ', err));
};

export const mappingDbDiaryDataToFoodData = (foodId, mealTypeId) => dispatch => {
  axios.get(`https://api.nal.usda.gov/ndb/nutrients/?format=json&api_key=${API_KEY}&nutrients=208&nutrients=205&nutrients=203&nutrients=204&ndbno=${foodId}`)
    .then(report => {
      const foodInfo = {
        name: report.data.report.foods[0].name,
        calories: report.data.report.foods[0].nutrients[0].gm,
        carbs: report.data.report.foods[0].nutrients[1].gm,
        protein: report.data.report.foods[0].nutrients[2].gm,
        fat: report.data.report.foods[0].nutrients[3].gm
      };
      if (mealTypeId === 1) {
        dispatch(addToBreakfast(foodInfo));
      } else if (mealTypeId === 2) {
        dispatch(addToLunch(foodInfo));
      } else if (mealTypeId === 3) {
        dispatch(addToDinner(foodInfo));
      } else {
        dispatch(addToSnack(foodInfo));
      }
    })
    .catch(err => console.error('trouble with mapping diary to food ', err));
};

// Fetch diary and turn the arrays into a list of foods
export const fetchingDiary = (user_id, date_id) => dispatch => {
  axios.get(`/api/diary/${date_id}`)
    // This is where I add the logic to retrieve food data from database and sort depending on breakfast lunch and dinner?
    .then(diary => {
      if (diary.data.user_food_entry) {
        diary.data.user_food_entry.forEach(entry => {
          dispatch(mappingUserDiaryDataToFoodData(entry[0], entry[1]));
        });
      }
      if (diary.data.db_food_entry) {
        diary.data.db_food_entry.forEach(entry => {
          dispatch(mappingDbDiaryDataToFoodData(entry[0], entry[1]));
        });
      }
      dispatch(addFoodToDiary(diary.data));
    })
    .catch(err => console.error('trouble fetching diary', err));
};


export const updatingDiary = entry => dispatch => {
  axios.post('/api/diary', entry)
    .then(newEntry => {
      dispatch(addFoodToDiary(newEntry.data));
    })
    .catch(err => console.error('error updating diary db', err));
};

// Have to also dispatch an action to post to insert into diary database with food id, serving size, and type
export const addingFoodToDiary = entry => dispatch => {
  // Update database
  dispatch(updatingDiary(entry));
  // Add food to list of foods in diary
  if (entry.user_food_entry) {
    dispatch(mappingUserDiaryDataToFoodData(entry.user_food_entry[0], entry.user_food_entry[1]));
  } else if (entry.db_food_entry) {
    dispatch(mappingDbDiaryDataToFoodData(entry.db_food_entry[0], entry.db_food_entry[1]));
  }
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

export const receiveDatabaseQuery = data => ({
  type: RECEIVE_DATABASE_QUERY,
  payload: data
});
export const searchingDatabase = query => dispatch => {
  axios.get(`https://api.nal.usda.gov/ndb/search/?format=json&q=${query}&sort=n&max=25&offset=0&api_key=${API_KEY}`)
    .then(results => {
      console.log('results from query', results.data);
      dispatch(receiveDatabaseQuery(results.data));
    })
    .catch(err => console.error('Could not search database', err));
};
// API ACTIONS

