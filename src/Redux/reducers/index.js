// reducers/index.js
import { combineReducers } from 'redux';
import Reducers from './Reducers';

const rootReducer = combineReducers({
  todo: Reducers
});

export default rootReducer;
