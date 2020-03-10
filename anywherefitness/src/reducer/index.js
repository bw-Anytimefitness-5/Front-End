import { combineReducers } from "redux";
import classReducer from "./classReducer";
import singleClassReducer from "./singleClassReducer";

export default combineReducers({
  classes: classReducer,
  singleClass: singleClassReducer
});
