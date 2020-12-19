import { combineReducers } from "redux";
import petReducer from './petReducer'
import errorReducer from './errorReducer'

export default combineReducers({
  pet: petReducer, 
  error: errorReducer
});
