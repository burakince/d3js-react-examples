import { combineReducers } from 'redux';
import CarModelReducer from './reducer-car-models';
import DateReducer from './reducer-dates';
import ActiveDateReducer from './reducer-active-date';

const allReducers = combineReducers({
  models: CarModelReducer,
  dates: DateReducer,
  activeDate: ActiveDateReducer
});

export default allReducers;