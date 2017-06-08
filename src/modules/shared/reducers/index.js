import { combineReducers } from 'redux';
import cars from './cars';

const dashboardApp = combineReducers({
  cars
});

export default dashboardApp;