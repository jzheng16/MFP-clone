import axios from 'axios';
import { GET_MEASUREMENT, UPDATE_MEASUREMENT } from '../actions';


export const getMeasurement = measurement => ({
  type: GET_MEASUREMENT,
  payload: measurement
});

export const updateMeasurement = measurement => ({
  type: UPDATE_MEASUREMENT,
  payload: measurement
});

export const fetchingMeasurement = () => dispatch =>
  axios.get('/api/measurement')
    .then(measurement => dispatch(getMeasurement(measurement.data)))
    .catch(err => console.log('err fetching measurement', err));

export const updatingMeasurement = updateObj => dispatch =>
  axios.post('/api/measurement', updateObj)
    .then(measurement => dispatch(updateMeasurement(measurement.data)))
    .catch(err => console.log('err updating measurement', err));
