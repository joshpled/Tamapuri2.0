import { combineReducers } from "redux";
import petReducer from './petReducer'
import errorReducer from './errorReducer'
import itemReducer from './itemReducer'
import userReducer from "./userReducer";

export default combineReducers({
  pet: petReducer, 
  error: errorReducer,
  item: itemReducer,
  user: userReducer
});
