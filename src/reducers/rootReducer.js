
import { combineReducers } from 'redux';
import apiReducer from './reducer';

const rootReducer = combineReducers({
  apiData: apiReducer,
 
});

export default rootReducer;
