import axios from 'axios';
import {
  ADD_FOOD_TO_DIARY, ADD_DB_FOOD_TO_DIARY, SELECT_MEAL_TYPE, SELECT_DIARY_DATE,
  ADD_TO_BREAKFAST, ADD_TO_LUNCH, ADD_TO_DINNER, ADD_TO_SNACK, RECEIVE_DATABASE_QUERY, REMOVE_USER_FOOD_FROM_DIARY,
  REMOVE_DB_FOOD_FROM_DIARY, REMOVE_FROM_ENTRY
} from '../actions';
import API_KEY from '../../../config';

export const addFoodToDiary = food => ({
  type: ADD_FOOD_TO_DIARY,
  payload: food
});
export const addDbFoodToDiary = food => ({
  type: ADD_DB_FOOD_TO_DIARY,
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


export const mappingUserDiaryDataToFoodData = (foodId, mealTypeId, servingSize) => dispatch => {
  axios.get(`/api/food/getfood/${foodId}`)
    .then(food => {
      if (mealTypeId === 1) {
        dispatch(addToBreakfast(Object.assign({}, food.data, { servingSize })));
      } else if (mealTypeId === 2) {
        dispatch(addToLunch(Object.assign({}, food.data, { servingSize })));
      } else if (mealTypeId === 3) {
        dispatch(addToDinner(Object.assign({}, food.data, { servingSize })));
      } else {
        dispatch(addToSnack(Object.assign({}, food.data, { servingSize })));
      }
    })
    .catch(err => console.error('trouble with mapping diary to food ', err));
};

export const mappingDbDiaryDataToFoodData = (foodObj) => dispatch => {
  const { databaseId } = foodObj;

  axios.get(`https://api.nal.usda.gov/ndb/nutrients/?format=json&api_key=${API_KEY}&nutrients=208&nutrients=205&nutrients=203&nutrients=204&ndbno=${databaseId}`)
    .then(report => {
      console.log('What is the food report returned', report);
      const foodInfo = {
        id: report.data.report.foods[0].ndbno,
        name: report.data.report.foods[0].name,
        calories: report.data.report.foods[0].nutrients[0].gm,
        carbs: report.data.report.foods[0].nutrients[1].gm,
        protein: report.data.report.foods[0].nutrients[2].gm,
        fat: report.data.report.foods[0].nutrients[3].gm,
      };
      foodObj.food = foodInfo;
      dispatch(addDbFoodToDiary(foodObj));
    })
    .catch(err => console.error('trouble with mapping diary to food ', err));
};

// Fetch diary and turn the arrays into a list of foods
export const fetchingDiary = (user_id, date_id) => dispatch => {
  axios.get(`/api/diary/${date_id}`)
    // Returns nested object with date_id, user_id, and all foods within that diary, need only food
    .then(diary => {
      console.log('What is this?', diary.data);
      dispatch(addFoodToDiary(diary.data));
    })
    .catch(err => console.error('trouble fetching diary', err));
};


export const addingFoodToDiary = entryArr => dispatch => {
  console.log('what is entry,', entryArr);
  entryArr.forEach(entry => {
    axios.post('/api/diary', entry)
      .then(newEntry => {
        console.log('what am i getting', newEntry.data);
        dispatch(addFoodToDiary(newEntry.data));
      })
      .catch(err => console.error('error updating diary db', err));
  });
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
  console.log('what is date?', date);
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

export const removeUserFoodFromDiary = entry => ({
  type: REMOVE_USER_FOOD_FROM_DIARY,
  payload: entry
});
export const removeDbFoodFromDiary = entry => ({
  type: REMOVE_DB_FOOD_FROM_DIARY,
  payload: entry
});



export const removingFoodFromDiary = entry => dispatch => {
  console.log('Removing food entry object', entry);
  // Differentiate between deleting personal food from diary or database food 
  if (entry.databaseId) {
    axios.post('/api/diary/databasediary/delete', entry)
      .then(() => dispatch(removeDbFoodFromDiary({ databaseId: entry.databaseId, mealType: entry.mealType })))
      .catch(err => console.error('action-creator err: deleting entry', err));
  }
  else {
    axios.post('/api/diary/delete', entry)
      .then(() => dispatch(removeUserFoodFromDiary({ food_id: entry.food_id, mealType: entry.mealType })))
      .catch(err => console.error('action-creator err: deleting entry', err));
  }

};


// API ACTIONS

export const testing = entry => dispatch => {
  axios.get(`/api/diary/${entry.date_id}`)
    .then(entry => {
      console.log('what am i getting?', entry.data);
      dispatch(addFoodToDiary(entry.data));
    })
    .catch(err => console.error('fuck ', err));
};

export const fetchingDbDiary = date_id => dispatch => {
  axios.get(`/api/diary/database/${date_id}`)
    .then(entry => {
      console.log('what am i receiving from fetching db diary: Array or Obj?', entry.data);
      entry.data.forEach(food => {
        dispatch(mappingDbDiaryDataToFoodData(food));
      })
    })
    .catch(error => console.error('trouble fetching db diary', error));
}

export const addingFoodToDbDiary = entry => dispatch => {
  axios.post('/api/diary/databasediary', entry)
    .then(food => {
      console.log('what am i getting when i post to my db diary: ', food.data);
      dispatch(mappingDbDiaryDataToFoodData(food.data));
    })
    .catch(err => console.error('trouble adding food to db diary', err));
}
