import axios from 'axios';
import {
  ADD_FOOD_TO_DIARY, ADD_DB_FOOD_TO_DIARY, SELECT_MEAL_TYPE, SELECT_DIARY_DATE,
  RECEIVE_DATABASE_QUERY, REMOVE_USER_FOOD_FROM_DIARY,
  REMOVE_DB_FOOD_FROM_DIARY,
} from '../actions';
import { API_KEY } from '../../../config';

/* Simple Action Creators */

export const addFoodToDiary = food => ({
  type: ADD_FOOD_TO_DIARY,
  payload: food
});
export const addDbFoodToDiary = food => ({
  type: ADD_DB_FOOD_TO_DIARY,
  payload: food
});

// Post into diary model, will be given a user id, a date (have to use to set), an array
export const selectedMealType = foodId => ({
  type: SELECT_MEAL_TYPE,
  payload: foodId
});

export const selectedDiaryDate = date => ({
  type: SELECT_DIARY_DATE,
  payload: date
});

export const removeUserFoodFromDiary = entry => ({
  type: REMOVE_USER_FOOD_FROM_DIARY,
  payload: entry
});
export const removeDbFoodFromDiary = entry => ({
  type: REMOVE_DB_FOOD_FROM_DIARY,
  payload: entry
});

export const receiveDatabaseQuery = data => ({
  type: RECEIVE_DATABASE_QUERY,
  payload: data
});

/* Redux Thunk Action-Creators */

// Take database diary ID's and make API calls to retrieve the nutrient reports for each food
export const mappingDbDiaryDataToFoodData = foodObj => dispatch => {
  const { databaseId } = foodObj;
  axios.get(`https://api.nal.usda.gov/ndb/nutrients/?format=json&api_key=${API_KEY}&nutrients=208&nutrients=205&nutrients=203&nutrients=204&ndbno=${databaseId}`)
    .then(report => {
      console.log('What is the food report returned', report);
      console.log('Food obj:', foodObj);
      const foodDetail = report.data.report.foods[0];
      const truncatedName = foodObj.name.length > 60 ? `${foodObj.name.substring(0, foodObj.name.length)}...` : foodObj.name;
      const foodInfo = {
        id: foodDetail.ndbno,
        name: `${truncatedName} ${foodDetail.measure}`,
        calories: Math.round(foodDetail.nutrients[0].gm) || 0,
        carbs: Math.round(foodDetail.nutrients[1].gm) || 0,
        protein: Math.round(foodDetail.nutrients[2].gm) || 0,
        fat: Math.round(foodDetail.nutrients[3].gm) || 0,
      };
      const entries = { ...foodObj, food: foodInfo };
      dispatch(addDbFoodToDiary(entries));
    })
    .catch(err => console.error('trouble with mapping diary to food ', err));
};


// Fetch diary and turn the arrays into a list of foods
export const fetchingDiary = date_id => dispatch => {
  axios.get(`/api/diary/${date_id}`)
    .then(diary => {
      dispatch(addFoodToDiary(diary.data));
    })
    .catch(err => console.error('trouble fetching diary', err));
};

export const fetchingDbDiary = date_id => dispatch => {
  axios.get(`/api/diary/database/${date_id}`)
    .then(entry => {
      entry.data.forEach(food => {
        dispatch(mappingDbDiaryDataToFoodData(food));
      });
    })
    .catch(error => console.error('trouble fetching db diary', error));
};

// Adding Food Action-Creators
export const addingFoodToDiary = entryArr => dispatch => {
  entryArr.forEach(entry => {
    axios.post('/api/diary', entry)
      .then(newEntry => {
        dispatch(addFoodToDiary(newEntry.data));
      })
      .catch(err => console.error('error updating diary db', err));
  });
};

export const addingFoodToDbDiary = entry => dispatch => {
  axios.post('/api/diary/databasediary', entry)
    .then(food => {
      dispatch(mappingDbDiaryDataToFoodData(food.data));
    })
    .catch(err => console.error('trouble adding food to db diary', err));
};

// Setting Diary date to know which day to retrieve info from
export const gettingDiaryId = date => dispatch => {
  axios.get(`/api/date/${date}`)
    .then(dateInfo => dispatch(selectedDiaryDate(dateInfo.data)))
    .catch(err => console.error('err retrieving date ', err));
};

// API call to query database
export const searchingDatabase = query => dispatch => {
  axios.get(`https://api.nal.usda.gov/ndb/search/?format=json&q=${query}&sort=r&max=25&offset=0&api_key=${API_KEY}`)
    .then(results => {
      // API doesn't give us clean results, have to do some string modification
      const items = results.data.list.item.map(item => {
        let match = item.name.length;
        if (item.name.indexOf('UPC') > -1) {
          match = item.name.indexOf('UPC') - 2;
        } else if (item.name.indexOf('GTIN') > -1) {
          match = item.name.indexOf('GTIN') - 2;
        }

        console.log('DID I MATCH', match);
        return {
          ...item,
          name:
            item.name
              .substring(0, match)
              .toLowerCase()
              .split(' ')
              .map(word => word.charAt(0).toUpperCase() + word.substring(1))
              .join(' ')


        };
      });
      dispatch(receiveDatabaseQuery(items));
      console.log('modified items:', items);
    })
    .catch(err => console.error('Could not search database', err));
};

// Remove Food
export const removingFoodFromDiary = entry => dispatch => {
  // Differentiate between deleting personal food from diary or database food
  if (entry.databaseId) {
    axios.post('/api/diary/databasediary/delete', entry)
      .then(() => dispatch(removeDbFoodFromDiary({ databaseId: entry.databaseId, mealType: entry.mealType })))
      .catch(err => console.error('action-creator err: deleting entry', err));
  } else {
    axios.post('/api/diary/delete', entry)
      .then(() => dispatch(removeUserFoodFromDiary({ food_id: entry.food_id, mealType: entry.mealType })))
      .catch(err => console.error('action-creator err: deleting entry', err));
  }
};
