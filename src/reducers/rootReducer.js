import { combineReducers } from "redux";
import petReducer from './petReducer'
import errorReducer from './errorReducer'
import itemReducer from './itemReducer'

export default combineReducers({
  pet: petReducer, 
  error: errorReducer,
  item: itemReducer
});
