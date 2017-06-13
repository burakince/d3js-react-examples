import { combineReducers } from 'redux';
import CarModelReducer from './reducer-car-models';
import DateReducer from './reducer-dates';

const allReducers = combineReducers({
  models: CarModelReducer,
  dates: DateReducer
});

export default allReducers;